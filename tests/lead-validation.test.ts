import { describe, expect, it } from "vitest";

import { validateLead } from "@/lib/lead-validation";

describe("validateLead", () => {
  it("returns field-level errors for empty or unsafe input", () => {
    expect(validateLead({ name: "  ", phone: "123", consent: false })).toEqual({
      name: "Введите имя",
      phone: "Введите корректный телефон",
      consent: "Подтвердите согласие",
    });
  });

  it("accepts a named lead with ten phone digits and consent", () => {
    expect(validateLead({ name: "Иван", phone: "+7 999 123-45-67", consent: true })).toEqual({});
  });
});
