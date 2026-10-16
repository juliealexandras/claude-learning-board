# Claude Learning Board

A static kanban board for tracking how a designer learns to work with Claude. No build step and no dependencies beyond Google Fonts.

## Files

- `index.html`: the whole app (markup, CSS tokens for light and dark themes, and vanilla JS).
- `cards.js`: the starting cards, assigned to `window.LEARNING_CARDS`.

## Card fields

`id`, `title`, `track` (`academy` | `design` | `figma` | `habits`), `status` (`todo` | `doing` | `done`), `order`, and optional `detail`, `url`, `urlLabel`, `note`. Wrap commands in `detail` with backticks to render them as code.

## Working in this repo

- To change the plan, edit `cards.js`. Keep ids unique and keep `order` increasing in the order cards should appear.
- Progress in the browser version saves to `localStorage` under the key `claude-learning-board-v1`. Users load new cards with the Reset board button in the Read me.
- Keep copy direct and plain. Avoid em dashes.

## Publishing as a claude.ai artifact

When the user asks to bring this board into claude.ai, publish it as an artifact that keeps progress with the artifact's database instead of `localStorage`:

1. Store cards in a `cards` collection, one document per card, using the fields above.
2. Seed the collection from `cards.js` after the first publish rather than embedding cards in the page.
3. Keep the existing design, the Read me panel, the track filters, notes, and add and remove actions.
