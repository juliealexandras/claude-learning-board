# Claude Learning Board

A static kanban board for tracking how a designer learns to work with Claude. No build step and no dependencies beyond Google Fonts. Keep it that way: the board must open by double-clicking `index.html`.

## Files

- `index.html`: the whole app (markup, dark-only CSS tokens, and vanilla JS).
- `cards.js`: the starting cards, assigned to `window.LEARNING_CARDS`. It's a `.js` file rather than JSON because browsers block fetching JSON from `file://`, and a script tag works everywhere.
- `scripts/validate-cards.mjs`: checks `cards.js`. Run `node scripts/validate-cards.mjs` after every change to it.
- `CONTRIBUTING.md`: the card rules for contributors.

## Design

- Dark only, by design: an indigo frame around a grainy charcoal sheet. Colors are tokens on `:root`.
- Track colors: Academy orchid `#B46AD8`, Code + Figma periwinkle `#5D6BD6`, Design coral `#E5795A`, Habits holo mint `#7FD9BF`, Misc holo pink `#F09ACB`.
- Type: `--body` is Futura PT with Jost as the free fallback (Futura PT is an Adobe font and can't ship in this repo), `--display` is Anton for board titles and disk numbers, `--mono` is Space Mono for captions.
- Cards are floppy disks (`.disk`): shutter with number and track, paper label with text, holographic link strip, dark action band. In progress shows a lit shutter window, Done gets a stamp, Did not finish gets a ripped label. Keep text on the solid paper label for contrast.
- Each board shows six disks (`MAX_VISIBLE`), then scrolls inside itself with a range counter.

## Card fields

`id`, `title`, `track` (`academy` | `design` | `figma` | `habits` | `misc`), `status` (`todo` | `doing` | `done` | `dnf`), `order`, and optional `detail`, `url`, `urlLabel`, `lastChecked` (`YYYY-MM-DD`), `note`, `dnfReason` (`Not useful` | `Archived` | `Unavailable`). Wrap commands in `detail` with backticks to render them as code.

DNF means did not finish: the card wasn't useful or its tool is archived or unavailable. DNF cards don't count toward progress.

## Working in this repo

- To change the plan, edit `cards.js`, then run the validator.
- Never change or reuse an existing card id. Saved progress is keyed to ids.
- New cards in `cards.js` always use `status: "todo"`. Set `lastChecked` to today for any link you add or confirm.
- Ids use the track letter plus a number: `a` Academy, `d` Design, `f` Code + Figma, `h` Habits, `m` Misc.
- Keep copy direct and plain. Avoid em dashes.

## How progress is stored

The browser version saves to `localStorage` under `claude-learning-board-v2` as `{version, cards, removed}`. On load, `merge()` combines the save with `cards.js`: plan cards take text and links from `cards.js` and progress from the save, new plan cards are added unless their id is in `removed`, and cards the person added (`custom: true`) are kept. Export and import use the same shape. The older `claude-learning-board-v1` key (a plain array) migrates automatically.

## Publishing as a claude.ai artifact

When the user asks to bring this board into claude.ai, publish it as an artifact that keeps progress with the artifact's database instead of `localStorage`:

1. Store cards in a `cards` collection, one document per card, using the fields above.
2. Seed the collection from `cards.js` after the first publish rather than embedding cards in the page.
3. Keep the existing design, the Read me panel, the track filters, notes, DNF, and add and remove actions. Export and import aren't needed there, since progress syncs across devices.
