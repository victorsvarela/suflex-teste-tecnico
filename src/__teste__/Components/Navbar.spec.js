import { fireEvent, render, screen } from "@testing-library/react";

import Navbar from "../../Components/Navbar";

import Providers from "../../Providers";

describe("Componente Navbar", () => {
  test("quando renderiza a navbar", () => {
    render(<Navbar />);

    expect(screen.getByText("meus favoritos")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Por qual personagem está procurando?")
    ).toBeInTheDocument();

    expect(screen.getByAltText("icon rick and morty")).toBeInTheDocument();

    expect(screen.getByText("Todos")).toBeInTheDocument();

    expect(screen.getByText("Humano")).toBeInTheDocument();

    expect(screen.getByText("Alien")).toBeInTheDocument();
  });
});
