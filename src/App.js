import "./App.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">mywebsite</span>.com
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <Button className="btn-block btn-lg btn-dark w-100">Log in</Button>
        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <FacebookLoginButton className="mt-3 mb-3" />
        <div className="text-center">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </Form>
    );
  }
}

export default App;
