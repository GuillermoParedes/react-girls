import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  CustomInput,
  Label
} from "reactstrap";
class Modale extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      title: "",
      knowledge: 10
    };
    this.state = this.initialState;
  }
  handleChange = event => {
    const { target } = event;
    const value = target.value;
    const { name } = target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { show, cancel, save } = this.props;
    return (
      <Modal isOpen={show}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleCustomRange">Title</Label>

              <Input
                type="text"
                name="title"
                id="title"
                value={this.state.data}
                placeholder="Title"
                onChange={e => this.handleChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleCustomRange">
                Knowledge{" "}
                <span className="text-success">{this.state.knowledge}</span>
              </Label>
              <CustomInput
                type="range"
                id="knowledge"
                name="knowledge"
                value={this.state.knowledge}
                onChange={e => this.handleChange(e)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            outline
            onClick={e => {
              e.preventDefault();
              this.setState({
                title: "",
                knowledge: 10
              });
              save(this.state);
            }}
          >
            Save
          </Button>
          <Button color="secondary" outline onClick={cancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default Modale;
