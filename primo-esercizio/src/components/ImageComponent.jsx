
import { Component } from "react";
class Img extends Component {
    render() {
      return <img alt={this.props.mode}
      src={this.props.icon}></img>;
    }
  }
 export default Img