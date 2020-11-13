import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow} from "enzyme";
import { BurgerBuilder } from "../Components/BurgerBuilder"
import BuildControls from "../Components/BuildControls"

configure({ adapter: new Adapter() });

describe('<BurgerBuilder />', () => {
  let wrapper 
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onFetchIngredients={() => {}}/>);
  });
  it('should render <BuildControls /> when receiving ingredients', () => {
    wrapper.setProps({ings: {salad: 0}})
    expect(wrapper.find(BuildControls)).toHaveLength(1)
  });
});