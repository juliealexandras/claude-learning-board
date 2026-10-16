# Claude Learning Board

A kanban board for designers learning to work with Claude. It starts with 23 courses, experiments, and habits across five tracks:

- **Claude Academy:** free official courses and Anthropic's prompting guides
- **Claude Design:** prototypes, explorations, and design system use
- **Code + Figma:** Claude Code with the Figma plugin, in both directions
- **Habits:** everyday practices that improve results
- **Misc:** extra references and suggestions you add, such as an article, video, tool, or template

It runs in any browser with no install and no build step. Progress saves in your browser.

Created by Julie Spigner, [Julie Alexandra Studio](https://juliealexandrastudio.com).

---

## 1. Get the repo

### Option A: Terminal

```bash
git clone https://github.com/YOUR-USERNAME/claude-learning-board.git
cd claude-learning-board
```

### Option B: GitHub Desktop

1. Open the repo page on GitHub.
2. Select **Code**, then **Open with GitHub Desktop**.
3. Choose where to save it and select **Clone**.

### Option C: No Git

1. Open the repo page on GitHub.
2. Select **Code**, then **Download ZIP**.
3. Unzip the folder.

## 2. Open the board

Double-click `index.html`. It opens in your browser and is ready to use.

To share it as a link instead, turn on GitHub Pages: in the repo, go to **Settings > Pages**, set the source to the `main` branch, and save. Each person who opens the link gets their own progress.

## 3. Bring it into your Claude space

Pick the setup that matches how you use Claude.

### Claude desktop app (recommended)

1. Open a new chat in the Claude desktop app.
2. Select **+** beside the message box, then **Add folder**, and choose the `claude-learning-board` folder.
3. Send this prompt:

   > Read the CLAUDE.md in this folder. Then publish index.html and cards.js as an artifact that saves my progress in claude.ai.

Claude turns it into a board that lives in your claude.ai artifacts, syncs across your devices, and that Claude can read later to suggest what to do next.

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

> Add a card to the Claude Design track for testing a prototype with five users.

Claude Code reads `CLAUDE.md` automatically and edits `cards.js` for you.

## 4. Make it yours

- **Change the plan:** edit `cards.js`, then open the board's Read me and select **Reset board** to load your changes. Reset clears your progress and notes.
- **Add a card from the board:** select **+ Add card** in any column. New cards default to the Misc track and include an optional "Why it's useful" field, so suggesting a link takes a few seconds.
- **Suggest a reference for everyone:** add a card to `cards.js` with `track: "misc"` and open a pull request.
- **Take notes:** open **Notes** on any card. Notes save with your progress.
- **Set a card aside:** select **DNF** (did not finish) when a card wasn't useful or its tool is archived or unavailable, and pick a reason. DNF cards move to their own column, don't count toward progress, and can be restored anytime.

## What's in the repo

| File | Purpose |
| --- | --- |
| `index.html` | The board: layout, styles, and logic |
| `cards.js` | The starting list of cards |
| `CLAUDE.md` | Instructions Claude reads when working in this folder |

## Good to know

- In the browser version, progress lives in that browser only. Clearing site data or switching browsers starts fresh.
- The board supports light and dark mode and works on phones.
- Some links point to Anthropic and Figma products that may need a paid plan, such as Claude Design and Figma Dev Mode MCP.
