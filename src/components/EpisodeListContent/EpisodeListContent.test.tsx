import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import EpisodeListContent from ".";

const EpisodeListContentMock = [
  {
    serieName: "Monster Attack 2",
    season: 1,
    serieDate: "10/10/2016",
    serieNumber: 2,
  },
];

describe("Render EpisodeListContent", () => {
  it("should render EpisodeListContent correctly", () => {
    const {container} = render(
      <BrowserRouter>
        <EpisodeListContent episodes={EpisodeListContentMock} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot()
    expect(
      screen.getByRole("button", { name: /season 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /season 2/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /season 3/i })
    ).toBeInTheDocument();
  });
});
