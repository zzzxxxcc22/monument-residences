import { describe, expect, it } from "vitest";

import nextConfig from "@/next.config";

describe("Next image configuration", () => {
  it("allows high quality rendering for featured interior imagery", () => {
    expect(nextConfig.images?.qualities).toContain(95);
  });
});
