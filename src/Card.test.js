import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(
    <Card
      caption="test caption"
      src="http://img.png"
      currNum={1}
      totalNum={1}
    />
  );
});

it("should match snapshot", function () {
  const { asFragment } = render(
    <Card
      caption="test caption"
      src="http://img.png"
      currNum={1}
      totalNum={1}
    />
  );
  expect(asFragment).toMatchSnapshot();
});
