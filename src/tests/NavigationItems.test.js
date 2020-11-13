import React from "react";
import { configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "../Components/NavigationItems";

configure({ adapter: new Adapter() });

describe("<Navigation Items />", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it("should have Sign In <NavLink /> if not authenticated", () => {
    expect(wrapper.find(".NavigationItem").text()).toContain("Sign In")
  });
  it("should have Sign Out <NavLink /> if authenticated", () => {
    wrapper.setProps({isAuth: true})
    expect(wrapper.find(".NavigationItem").text()).toContain("Sign Out")
  });
});
