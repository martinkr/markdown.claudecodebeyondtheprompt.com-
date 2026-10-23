// Content for the Markdown reference page. Sources are line arrays so
// backticks never need escaping.
const md = (...lines: string[]) => lines.join('\n');

export const sections = [
  { id: 'headings', title: 'Headings' },
  { id: 'inline-code', title: 'Inline code' },
  { id: 'code-blocks', title: 'Code blocks' },
  { id: 'lists', title: 'Lists' },
  { id: 'quotes', title: 'Quotes' },
  { id: 'tables', title: 'Tables' },
  { id: 'cheat-sheet', title: 'Cheat sheet' },
];

export const samples = {
  headings: md('# Heading 1', '## Heading 2', '### Heading 3', '#### Heading 4', '##### Heading 5', '###### Heading 6'),
  inlineCode: md('Run `npm install` before you start.', '', 'Show a backtick: `` `code` ``'),
  fenced: md('```js', 'function greet(name) {', '  return `Hello, ${name}!`;', '}', '```'),
  fencedShell: md('```bash', 'git checkout -b feature/docs', 'npm run build', '```'),
  unordered: md('- Apples', '- Oranges', '  - Blood orange', '  - Navel', '- Pears'),
  ordered: md('1. Clone the repo', '2. Install dependencies', '3. Start the dev server'),
  tasks: md('- [x] Write the draft', '- [ ] Review it', '- [ ] Publish'),
  quote: md('> Simplicity is prerequisite for reliability.', '>', '> — Edsger W. Dijkstra'),
  nestedQuote: md('> First level', '>', '>> Nested reply'),
  table: md(
    '| Command | Purpose      | Runs |',
    '| :------ | :----------: | ---: |',
    '| `dev`   | Local server |    1 |',
    '| `build` | Production   |    2 |',
  ),
};

export const cheatSheet = [
  { element: 'Heading', syntax: '## Title', href: '#headings' },
  { element: 'Inline code', syntax: '`code`', href: '#inline-code' },
  { element: 'Code block', syntax: '```lang … ```', href: '#code-blocks' },
  { element: 'Bullet list', syntax: '- item', href: '#lists' },
  { element: 'Numbered list', syntax: '1. item', href: '#lists' },
  { element: 'Task list', syntax: '- [ ] todo', href: '#lists' },
  { element: 'Quote', syntax: '> text', href: '#quotes' },
  { element: 'Table', syntax: '| a | b |', href: '#tables' },
];
