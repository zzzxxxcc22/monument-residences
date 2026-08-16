import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("MONUMENT page structure", () => {
  it("renders a complete semantic real-estate journey", () => {
    const { container } = render(<Home />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("navigation", { name: "Основная навигация" })).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();

    for (const id of ["about", "residences", "infrastructure", "construction", "contacts"]) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    }

    expect(container.querySelectorAll("article[data-residence]")).toHaveLength(4);
    expect(screen.getByRole("link", { name: "Смотреть резиденции" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Записаться на просмотр" })).toBeInTheDocument();
  });
});
