import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Episode from ".";

describe("Episode each list", () => {
  it("should render episode correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Episode
          serieDate="08/08/2016"
          serieName="Monster attack"
          serieNumber={5}
          season={1}
        />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByRole("link", { name: "5" })).toBeInTheDocument();
    expect(screen.getByText("Monster attack")).toBeInTheDocument();
    expect(screen.getByText("08/08/2016")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
