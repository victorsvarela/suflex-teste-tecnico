import { render, screen } from "@testing-library/react";
import LoadingResponseApi from "../../Components/LoadingResposeApi";

describe("Componente Navbar", () => {
  test("quando renderizar o Loading", () => {
    render(<LoadingResponseApi />);

    expect(screen.getByText("Aguarde...")).toBeInTheDocument();
  });
});
