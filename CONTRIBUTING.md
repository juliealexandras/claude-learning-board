# Contributing

Thanks for helping keep this board useful. The most valuable contributions are new resources and reports of broken or outdated ones.

## Suggest or report without code

- **Suggest a resource:** open an issue with the **Suggest a resource** form.
- **Report a problem with a card:** open an issue with the **Report a resource** form.

## Add or edit cards with a pull request

1. Fork the repo and create a branch.
2. Edit `cards.js`. Each card looks like this:

   ```js
   { id: "m01", title: "Test a prototype with five users", track: "misc", status: "todo", order: 24,
     detail: "Why it's useful, in one line.",
     url: "https://example.com", urlLabel: "Example", lastChecked: "2026-10-16" },
   ```

3. Run the validator:

   ```bash
   node scripts/validate-cards.mjs
   ```

4. Open a pull request and fill in the checklist.

### Card rules

- **id:** unique and permanent. Never change or reuse an existing id, because people's saved progress is keyed to it. Use the track's letter plus a number: `a` Academy, `d` Design, `f` Code + Figma, `h` Habits, `m` Misc.
- **track:** `academy`, `design`, `figma`, `habits`, or `misc`.
- **status:** always `todo` in `cards.js`. Progress belongs to each person's browser, not the repo.
- **order:** a number. Cards appear lowest first within each column.
- **url:** `https://` only. Add `urlLabel` for the link text.
- **lastChecked:** the date you confirmed the link works, as `YYYY-MM-DD`.
- **Copy:** direct and plain, one line for `detail`. No em dashes.

### Retiring a card

Delete it from `cards.js`. People who already have it keep it on their board along with their notes, and new users won't see it.

## Changes to the board itself

`index.html` has no build step or dependencies, and it must keep opening by double-click. Please keep it that way. Describe the change and test it in a browser in both light and dark mode.

## License

By contributing, you agree that code changes are licensed under MIT and card content under CC BY 4.0, as described in `LICENSE`.
