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

  it("uses a dedicated kitchen item in the interior gallery", () => {
    const galleryLabels = siteData.gallery.map((item) => item.label);
    const kitchenItem = siteData.gallery.find((item) => item.label === "Кухня");

    expect(galleryLabels).toContain("Кухня");
    expect(galleryLabels).not.toContain("Столовая");
    expect(kitchenItem?.image).toBe("/images/kitchen.webp");
    expect(kitchenItem?.alt).toMatch(/кухн/i);
  });

  it("uses a high-detail source for the living room gallery image", () => {
    const livingRoomItem = siteData.gallery.find((item) => item.label === "Гостиная");

    expect(livingRoomItem?.image).toBe("/images/interior-main.png");
  });
});
