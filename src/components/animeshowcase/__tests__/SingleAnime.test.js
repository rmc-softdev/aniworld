import SingleAnime from "../SingleAnime";
import React from "react";
import { findTestByAttr } from "../../../testUtils/testUtils";
import { shallow } from "enzyme";

const setup = () => {
  return shallow(<SingleAnime />);
};
let wrapper;

it("renders without causing any issue", () => {
  const wrapper = shallow(<SingleAnime />);
  const component = wrapper.find("[data-test='nav-container']");
  console.log(wrapper.debug());
});
