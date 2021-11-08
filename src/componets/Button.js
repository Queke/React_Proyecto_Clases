import { Component } from "react";

const styles = {
  button: {
    backgroundColor: "#2A3F6F",
    color: "#fff",
    padding: "15px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}

export default Button;
