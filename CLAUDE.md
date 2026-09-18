# Praxi Marketing Site

## Design-to-code workflow

Any Figma-to-code translation work in this repo should load and follow the
`figma-translation-framework` skill before generating component code from a
Figma file. That skill defines:

- the token → semantic-value → structural-convention → best-practice
  resolution order for spacing/typography/color
- the required pre-flight validation step (flag unmapped Figma layers by
  name before generating code)
- the section_[name] → content-wrapper → grid structural convention that
  /components/sections should follow
- the strict-mapping rules for /components/ui (true reusable components)
  versus the looser naming latitude for /components/modules

Load it explicitly at the start of any session doing Figma implementation
work in this repo, even if not directly prompted to.
