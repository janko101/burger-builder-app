import React from "react";
import { configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "../Components/NavigationItems";

configure({ adapter: new Adapter() });

describe("<Navigation Items />", () => {
  it("should have Sign In <NavLink /> if not authenticated", () => {
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find("#signin").text()).toEqual("Sign In")
  });
});
