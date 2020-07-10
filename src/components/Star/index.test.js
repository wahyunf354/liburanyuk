import React from "react";
import { render } from "@testing-library/react";
import Star from "./";

test("Should have props [value, width, height, spacing]", () => {
  const height = 40,
    width = 40,
    spacing = 4;
  const { container } = render(
    <Star width={width} height={height} spacing={spacing} value={3.4} />
  );
  const starYallow = "div.stars div.star:not(.placeholder)";
  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector(starYallow)).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
  expect(container.querySelector(starYallow)).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
  expect(container.querySelector(starYallow)).toHaveAttribute(
    "style",
    expect.stringContaining(`width: ${width}px`)
  );
  expect(container.querySelector(starYallow)).toHaveAttribute(
    "style",
    expect.stringContaining(`margin-right: ${spacing}px`)
  );
});
