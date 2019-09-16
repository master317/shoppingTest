import React from "react";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.state({ email: "", password: "" });
  };
  handleChange=(event)=>{
    const {value,name}=event.target;
    this.setState({[name]:value});
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            required
          />
          <label>Email</label>
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            required
          />
          <input type='submit' value='submit form'/>
        </form>
      </div>
    );
  }
}
export default SignIn;
