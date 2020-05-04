import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findTestByAttr } from "../testUtils/testUtils";

let wrapper;
it("renders without crashing", () => {});

it("has the correct content", () => {
  const wrapper = shallow(<Header />);
  const component = wrapper.find("[data-test='nav-container']");
});
