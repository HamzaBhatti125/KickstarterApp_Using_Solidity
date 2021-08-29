import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

class ContributeFrom extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input label="ether" labelPosition="right" />
        </Form.Field>
        <Button primary>Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeFrom;
