# Claude Learning Board

A kanban board for designers learning to work with Claude. It starts with 23 courses, experiments, and habits across five tracks, and it opens in any browser with no install and no build step.

**[Try the live board](https://juliealexandras.github.io/claude-learning-board/)**

<!-- Screenshot: add docs/board-light.png and docs/board-dark.png, then uncomment.
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/board-dark.png">
  <img alt="The Claude Learning Board with cards in To do, Doing, Done, and Did not finish rows" src="docs/board-light.png">
</picture>
-->

## Tracks

- **Claude Academy:** free official courses and Anthropic's prompting guides
- **Claude Design:** prototypes, explorations, and design system use
- **Code + Figma:** Claude Code with the Figma plugin, in both directions
- **Habits:** everyday practices that improve results
- **Misc:** extra references and suggestions you add, such as an article, video, tool, or template

Cards move through **To do**, **Doing**, and **Done**. Cards that weren't useful, or whose tools are archived or unavailable, go to **Did not finish** and don't count toward progress.

## 1. Get your own copy

### Option A: Use this template (recommended)

1. Select **Use this template** at the top of this page, then **Create a new repository**.
2. Name it and select **Create repository**.

You get your own repo with a clean history that you can edit, publish, and update freely.

### Option B: Clone

```bash
git clone https://github.com/juliealexandras/claude-learning-board.git
cd claude-learning-board
```

Cloning makes it easy to pull new cards later with `git pull`. With GitHub Desktop, select **Code**, then **Open with GitHub Desktop**.

### Option C: Download

Select **Code**, then **Download ZIP**, and unzip the folder.

## 2. Open the board

Double-click `index.html`. It opens in your browser and is ready to use.

To get a link you can open anywhere, turn on GitHub Pages in your copy: go to **Settings > Pages**, set the source to the `main` branch and `/ (root)` folder, and save. Each person who opens the link gets their own progress.

## 3. Bring it into your Claude space

### Claude desktop app (recommended)

1. Open a new chat in the Claude desktop app.
2. Select **+** beside the message box, then **Add folder**, and choose the `claude-learning-board` folder.
3. Send this prompt:

   > Read the CLAUDE.md in this folder. Then publish index.html and cards.js as an artifact that saves my progress in claude.ai.

Claude turns it into a board in your claude.ai artifacts that syncs across your devices and that Claude can read later to suggest what to do next.

### claude.ai on the web

1. Open a new chat at [claude.ai](https://claude.ai).
2. Attach `index.html`, `cards.js`, and `CLAUDE.md`.
3. Send the same prompt as above.

### Claude Code

```bash
cd claude-learning-board
claude
```

Then ask Claude to update the plan, for example:

> Add a card to the Misc track for testing a prototype with five users.

Claude Code reads `CLAUDE.md` automatically, edits `cards.js`, and runs the validator.

## 4. Your progress

- **Saving:** progress and notes save in your browser automatically.
- **Backing up or switching browsers:** open the board's Read me and select **Export progress** to save a file. Select **Import progress** in another browser to load it.
- **Getting new cards:** when `cards.js` changes, for example after `git pull`, new cards appear on your board automatically. Your progress and notes stay, and cards you removed stay removed.
- **Starting over:** **Reset board** clears all progress and notes and reloads the plan.

## 5. Make it yours

- **Change the plan:** edit `cards.js`, then run `node scripts/validate-cards.mjs` to check it. Reload the board to see new cards.
- **Add a card from the board:** select **+** at the top of any board. New cards default to Misc and include an optional "Why it's useful" field.
- **Take notes:** select the Notes icon on any card. Notes save as you type.
- **Move a card:** drag it, or use the **Move** menu on the card. The menu also sets a card aside as **Did not finish** with a reason, and removes cards.

## Contributing

Suggest a resource or report a broken one with the issue forms, or open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).

A weekly GitHub Action checks every link and opens an issue when one breaks. Another validates `cards.js` on every pull request.

## What's in the repo

| File | Purpose |
| --- | --- |
| `index.html` | The board: layout, styles, and logic |
| `cards.js` | The starting list of cards |
| `CLAUDE.md` | Instructions Claude reads when working in this folder |
| `CONTRIBUTING.md` | How to suggest, report, and add cards |
| `scripts/validate-cards.mjs` | Checks `cards.js` for mistakes, with no dependencies |
| `.github/` | Issue forms, pull request template, and the two Actions |
| `docs/MAINTAINER-SETUP.md` | One-time GitHub settings for the repo owner |

## Good to know

- The board is a dark, rounded kanban: each card has a track chip, a two-line description, and its link as highlighted text with an external link icon.
- Boards show as rows by default, with cards side by side, which reads well on phones. Switch to **Columns** with the toggle above the board; the board remembers your choice.
- In column view, each board shows six cards, then scrolls inside itself with a counter like "1–6 of 17".
- Type is Futura PT when you have it installed or in an Adobe Fonts kit, with Jost as the free fallback. Notes use Verdana for easy reading. Fonts load from Google Fonts and fall back to system fonts offline.
- The board works on phones.
- Some cards point to products that may need a paid plan, such as Claude Design and Figma Dev Mode MCP.
- Each card shows when its link was last checked.

## License

Code is MIT licensed. The card list in `cards.js` is licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). See [LICENSE](LICENSE).

Created by Julie Spigner, [Julie Alexandra Studio](https://juliealexandrastudio.com).
