// Checks cards.js for mistakes that would break the board or people's saved progress.
// Run from the repo root: node scripts/validate-cards.mjs
// No dependencies. Exits with code 1 when it finds a problem.

import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const TRACKS = ["academy", "design", "figma", "habits", "misc"];
const STATUSES = ["todo", "doing", "done", "dnf"];
const REASONS = ["Not useful", "Archived", "Unavailable"];
const FIELDS = ["id", "title", "track", "status", "order", "detail", "url", "urlLabel", "lastChecked", "note", "dnfReason"];

const source = readFileSync(new URL("../cards.js", import.meta.url), "utf8");
const sandbox = { window: {} };
try {
  runInNewContext(source, sandbox, { filename: "cards.js" });
} catch (err) {
  console.error(`cards.js has a syntax error: ${err.message}`);
  process.exit(1);
}

const cards = sandbox.window.LEARNING_CARDS;
const errors = [];
const warnings = [];

if (!Array.isArray(cards) || cards.length === 0) {
  console.error("cards.js must set window.LEARNING_CARDS to a non-empty array.");
  process.exit(1);
}

const seen = new Map();
const today = new Date().toISOString().slice(0, 10);

cards.forEach((card, i) => {
  const at = `Card ${i + 1}${card && card.id ? ` (${card.id})` : ""}`;
  if (!card || typeof card !== "object") return errors.push(`${at}: must be an object.`);

  for (const key of Object.keys(card)) {
    if (!FIELDS.includes(key)) warnings.push(`${at}: unknown field "${key}" is ignored by the board.`);
  }

  if (typeof card.id !== "string" || !/^[A-Za-z0-9_-]+$/.test(card.id)) errors.push(`${at}: id must be letters, digits, dashes, or underscores.`);
  else if (seen.has(card.id)) errors.push(`${at}: id "${card.id}" is also used by card ${seen.get(card.id)}.`);
  else seen.set(card.id, i + 1);

  if (typeof card.title !== "string" || !card.title.trim()) errors.push(`${at}: title is required.`);
  if (!TRACKS.includes(card.track)) errors.push(`${at}: track must be one of ${TRACKS.join(", ")}.`);
  if (!STATUSES.includes(card.status)) errors.push(`${at}: status must be one of ${STATUSES.join(", ")}.`);
  else if (card.status !== "todo") warnings.push(`${at}: status is "${card.status}". Cards in cards.js usually start as "todo".`);
  if (typeof card.order !== "number" || !Number.isFinite(card.order)) errors.push(`${at}: order must be a number.`);

  if (card.url !== undefined) {
    let ok = false;
    try { ok = new URL(card.url).protocol === "https:"; } catch {}
    if (!ok) errors.push(`${at}: url must be a full https:// link.`);
    if (!card.lastChecked) warnings.push(`${at}: add lastChecked with the date you confirmed the link works.`);
  }
  if (card.urlLabel !== undefined && card.url === undefined) warnings.push(`${at}: urlLabel has no url.`);

  if (card.lastChecked !== undefined) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(card.lastChecked) || Number.isNaN(Date.parse(card.lastChecked))) errors.push(`${at}: lastChecked must be a date as YYYY-MM-DD.`);
    else if (card.lastChecked > today) errors.push(`${at}: lastChecked is in the future.`);
  }
  if (card.dnfReason !== undefined && card.dnfReason !== "" && !REASONS.includes(card.dnfReason)) errors.push(`${at}: dnfReason must be one of ${REASONS.join(", ")}.`);

  for (const key of ["title", "detail", "urlLabel"]) {
    if (typeof card[key] === "string" && card[key].includes("—")) warnings.push(`${at}: ${key} contains an em dash. The style guide avoids them.`);
  }
});

for (const w of warnings) console.warn(`warning: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`error: ${e}`);
  console.error(`\n${errors.length} problem${errors.length === 1 ? "" : "s"} found in cards.js.`);
  process.exit(1);
}
console.log(`cards.js is valid: ${cards.length} cards, ${warnings.length} warning${warnings.length === 1 ? "" : "s"}.`);
