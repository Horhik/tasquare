import React from "react";
import { statistic } from "../../svg/navBarIcons";
class MainSearch extends React.Component {
  render() {
    return <button className={"nav-bar__item main-search"}>{statistic}</button>;
  }
}
export default MainSearch;
