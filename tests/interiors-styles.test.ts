import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("interior gallery styles", () => {
  it("keeps tab controls visually separated from the residence CTA", () => {
    const css = readFileSync("components/Interiors.module.css", "utf8");

    expect(css).toMatch(/\.tabs\s*\{[\s\S]*?margin-bottom:\s*clamp\(18px,\s*2\.8vw,\s*34px\)/);
  });
});
