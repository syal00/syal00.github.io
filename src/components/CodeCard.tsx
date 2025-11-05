'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeCard() {
  const codeString = `
const coder = {
  name: 'Rakesh Syal',
  skills: { /* your full list of skills */ },
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      Object.values(this.skills).flat().length >= 10
    );
  }
};
  `;

  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  );
}






