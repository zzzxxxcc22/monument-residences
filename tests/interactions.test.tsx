import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { FloorSelector } from "@/components/FloorSelector";
import { Header } from "@/components/Header";
import { Interiors } from "@/components/Interiors";
import { LeadSection } from "@/components/LeadSection";

describe("interactive MONUMENT components", () => {
  it("opens the mobile navigation and closes it with Escape", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const trigger = screen.getByRole("button", { name: "Открыть меню" });
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("dialog", { name: "Мобильная навигация" })).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("updates availability when a floor is selected", async () => {
    const user = userEvent.setup();
    render(<FloorSelector />);

    await user.click(screen.getByRole("tab", { name: "12 этаж" }));
    expect(screen.getByText("4 свободные резиденции")).toBeInTheDocument();
  });

  it("switches the interior gallery image", async () => {
    const user = userEvent.setup();
    render(<Interiors />);

    await user.click(screen.getByRole("tab", { name: "Мастер-спальня" }));
    expect(screen.getByRole("img", { name: "Мастер-спальня в тёплых природных оттенках" })).toBeInTheDocument();
  });

  it("submits a valid viewing request locally", async () => {
    const user = userEvent.setup();
    render(<LeadSection />);

    await user.type(screen.getByRole("textbox", { name: "Ваше имя" }), "Иван");
    await user.type(screen.getByRole("textbox", { name: "Телефон" }), "+7 999 123-45-67");
    await user.click(screen.getByRole("checkbox", { name: /Соглашаюсь/ }));
    await user.click(screen.getByRole("button", { name: "Записаться на просмотр" }));

    expect(screen.getByText("Спасибо! Мы свяжемся с вами.")).toBeInTheDocument();
  });
});
