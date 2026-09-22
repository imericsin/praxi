// Semantic token values from the Figma `layout` variable collection.
// See .claude/skills/figma-translation-framework/SKILL.md for the
// resolution order these values are read against.

export const tokens = {
  marginX: "var(--margin-x, 20px)", // layout/margin/x
  sectionMaxWidth: "var(--section-max-w, 1200px)", // layout/section/max-width
  // content/max-width, section/gap, block/gap, margin/y not yet observed
  // in the file — populate as they show up in future pulls.
};
