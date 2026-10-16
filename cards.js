// Starting cards for the board. Edit this list to change the plan,
// then select "Reset board" in the page's Read me to load your changes.
//
// Fields:
//   id        unique text id
//   title     what to learn or try
//   track     academy | design | figma | habits | misc
//   status    todo | doing | done
//   order     position within a column (lower comes first)
//   detail    optional one-line description; wrap commands in `backticks`
//   url       optional link; urlLabel is the link text
window.LEARNING_CARDS = [
  // Claude Academy
  { id: "a01", title: "Claude 101", track: "academy", status: "todo", order: 1,
    detail: "Core features and everyday collaboration habits.",
    url: "https://academy.claude.com", urlLabel: "Claude Academy" },
  { id: "a02", title: "AI Fluency: Framework & Foundations", track: "academy", status: "todo", order: 2,
    detail: "How to delegate, describe, and evaluate work with AI.",
    url: "https://academy.claude.com", urlLabel: "Claude Academy" },
  { id: "a03", title: "Claude Code 101", track: "academy", status: "todo", order: 3,
    detail: "Your design engineering on-ramp.",
    url: "https://academy.claude.com", urlLabel: "Claude Academy" },
  { id: "a04", title: "Claude Code in Action", track: "academy", status: "todo", order: 4,
    detail: "Hands-on coding workflows with Claude Code.",
    url: "https://academy.claude.com", urlLabel: "Claude Academy" },
  { id: "a05", title: "Introduction to Agent Skills", track: "academy", status: "todo", order: 5,
    detail: "Package repeatable studio workflows as skills.",
    url: "https://academy.claude.com", urlLabel: "Claude Academy" },
  { id: "a06", title: "Prompt engineering interactive tutorial", track: "academy", status: "todo", order: 6,
    detail: "Hands-on notebooks, including real world prompting.",
    url: "https://github.com/anthropics/courses", urlLabel: "anthropics/courses on GitHub" },
  { id: "a07", title: "Read the prompt engineering guide", track: "academy", status: "todo", order: 7,
    detail: "Anthropic's written reference for clear, structured prompts.",
    url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview", urlLabel: "Claude docs" },

  // Claude Design
  { id: "d01", title: "Turn a static mockup into an interactive prototype", track: "design", status: "todo", order: 8,
    detail: "Pick a real screen and make it shareable for feedback.",
    url: "https://claude.ai/design", urlLabel: "Claude Design" },
  { id: "d02", title: "Explore five directions for one project", track: "design", status: "todo", order: 9,
    detail: "Use Claude Design to widen exploration before narrowing.",
    url: "https://claude.ai/design", urlLabel: "Claude Design" },
  { id: "d03", title: "Load a design system into Claude Design", track: "design", status: "todo", order: 10,
    detail: "So colors, type, and components apply automatically." },
  { id: "d04", title: "Ask for an accessibility and hierarchy review", track: "design", status: "todo", order: 11,
    detail: "Contrast, hierarchy, and usability on one real design." },
  { id: "d05", title: "Hand a prototype off to Claude Code", track: "design", status: "todo", order: 12,
    detail: "Close the loop from concept to build." },

  // Code + Figma
  { id: "f01", title: "Install Claude Code", track: "figma", status: "todo", order: 13,
    detail: "Desktop app or terminal install." },
  { id: "f02", title: "Install the Figma plugin in Claude Code", track: "figma", status: "todo", order: 14,
    detail: "Run `claude plugin install figma@claude-plugins-official`. Dev Mode MCP needs a paid Figma plan." },
  { id: "f03", title: "Add the Frontend Design skill", track: "figma", status: "todo", order: 15,
    detail: "Pushes Claude to commit to an aesthetic direction before coding." },
  { id: "f04", title: "Send a coded page to Figma", track: "figma", status: "todo", order: 16,
    detail: "Code to Canvas: type \"Send this to Figma\" in Claude Code." },
  { id: "f05", title: "Build a component from a Figma frame link", track: "figma", status: "todo", order: 17,
    detail: "Try it with a component from your own design system or wireframe kit." },
  { id: "f06", title: "Read Figma's skills for MCP guide", track: "figma", status: "todo", order: 18,
    url: "https://help.figma.com/hc/en-us/articles/39166810751895-Figma-skills-for-MCP", urlLabel: "Figma Help Center" },

  // Habits
  { id: "h01", title: "Set up a Project per client", track: "habits", status: "todo", order: 19,
    detail: "Brief, brand guidelines, personas, and research in one place." },
  { id: "h02", title: "Turn one recurring task into a Skill", track: "habits", status: "todo", order: 20,
    detail: "Proposals, design reviews, or portfolio case studies." },
  { id: "h03", title: "Practice critique before generation", track: "habits", status: "todo", order: 21,
    detail: "Ask for an audit of a real flow before asking for new designs." },
  { id: "h04", title: "Ask for three directions with tradeoffs", track: "habits", status: "todo", order: 22,
    detail: "Make Claude name what each option sacrifices." },
  { id: "h05", title: "Watch Anthropic's Claude Design walkthrough", track: "habits", status: "todo", order: 23,
    detail: "Search Anthropic's official YouTube channel." },
];
