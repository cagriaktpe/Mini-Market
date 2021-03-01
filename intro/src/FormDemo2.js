import React, { Component } from "react";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  // Functions
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    alertify.success(this.state.email + " added to db!", 1.5);
    event.preventDefault();
  };

  // Render
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>İzmir</option>
              <option>İstanbul</option>
              <option>Ankara</option>
              <option>Bartın</option>
              <option>Mersin</option>
            </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
