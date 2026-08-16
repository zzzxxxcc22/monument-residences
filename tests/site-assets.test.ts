import { statSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("site image assets", () => {
  it("uses the latest high-detail living room source from the desktop replacement", () => {
    const livingRoomAsset = statSync("public/images/interior-main.png");

    expect(livingRoomAsset.size).toBe(2402331);
  });
});
