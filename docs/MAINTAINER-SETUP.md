# Maintainer setup

One-time GitHub settings for the repo owner. Do these after the first push.

## 1. Replace the placeholder username

Replace `YOUR-USERNAME` in `README.md` with your GitHub username, in both the live board link and the clone command.

## 2. Make it a template

**Settings > General**, then check **Template repository**. A **Use this template** button appears on the repo page.

## 3. Publish the live board

**Settings > Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, and select **Save**. The board goes live at `https://YOUR-USERNAME.github.io/claude-learning-board/` within a few minutes.

## 4. Fill in the About panel

On the repo page, select the gear next to **About**:

- **Description:** A kanban board for designers learning to work with Claude. No install, no build step.
- **Website:** check **Use your GitHub Pages website**.
- **Topics:** `claude`, `anthropic`, `figma`, `ux-design`, `design-engineering`, `kanban`, `learning-plan`, `ai-tools`

## 5. Add a social preview

**Settings > General > Social preview**, then upload a 1280 × 640 image of the board. This is what people see when the link is shared.

## 6. Add screenshots to the README

1. Take one screenshot in light mode and one in dark mode.
2. Save them as `docs/board-light.png` and `docs/board-dark.png`.
3. Uncomment the screenshot block near the top of `README.md`.

## 7. Create the issue labels

**Issues > Labels > New label**. Create `suggestion` and `resource-report`. The issue forms apply these labels, but only if they exist.

## 8. Allow the link checker to open issues

**Settings > Actions > General > Workflow permissions**: confirm Actions are allowed. The link checker asks for issue permissions in its own file, so the default read setting works. To run it once now, go to **Actions > Check links > Run workflow**.

## 9. Tag the first release

**Releases > Draft a new release**. Create the tag `v1.0.0`, use "Claude Learning Board v1.0.0" as the title, paste the `CHANGELOG.md` entry, and publish.
