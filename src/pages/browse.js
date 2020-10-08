import React from "react";

import { UseContent } from "../hooks";
import { selectionFilter } from "../utils";

import BrowContainer from "../containers/browse";

export default function Browse() {
  const { series } = UseContent("series");
  const { films } = UseContent("films");
  const slides = selectionFilter({ series, films });

  return <BrowContainer slides={slides} />;
}
