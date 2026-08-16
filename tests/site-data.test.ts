import { describe, expect, it } from "vitest";

import { siteData } from "@/data/site";

describe("siteData", () => {
  it("provides complete local content for the residences experience", () => {
    expect(siteData.brand).toBe("MONUMENT");
    expect(siteData.residences).toHaveLength(4);
    expect(siteData.floors).toHaveLength(17);

    for (const residence of siteData.residences) {
      expect(residence.title).toBeTruthy();
      expect(residence.area).toBeGreaterThan(0);
      expect(residence.price).toBeGreaterThan(0);
      expect(residence.image).toMatch(/^\/images\//);
    }
  });
});
