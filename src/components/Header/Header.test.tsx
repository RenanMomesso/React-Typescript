import { render, screen } from "@testing-library/react";

import Header from ".";

test("renders learn react link", () => {
  const { debug, container } = render(<Header> Home </Header>);
  const linkElement = screen.getByLabelText(/Header/);

  expect(linkElement).toMatchSnapshot();
  expect(linkElement).toBeInTheDocument();

  expect(linkElement).toHaveStyle({
    fontSize: "30px",
    width: "100%",
    height: "60px",
  });
  debug(container)
});
