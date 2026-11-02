// Commit message rules of AYÇİÇEK Labs: Conventional Commits without AI attribution.
// https://www.conventionalcommits.org

const AI_ATTRIBUTION = [
  /^co-authored-by:.*\b(claude|anthropic)\b/im,
  /noreply@anthropic\.com/i,
  /^claude-session:/im,
  /claude\.ai\/code\/session/i,
  /generated with \[?claude/i,
];

const noAiAttribution = ({ raw = '' }) => {
  const found = AI_ATTRIBUTION.some((pattern) => pattern.test(raw));
  return [
    !found,
    'commit messages must not contain AI attribution (Co-Authored-By, session links, "Generated with")',
  ];
};

export default {
  extends: ['@commitlint/config-conventional'],
  plugins: [{ rules: { 'no-ai-attribution': noAiAttribution } }],
  rules: {
    'header-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100],
    'no-ai-attribution': [2, 'always'],
  },
};
