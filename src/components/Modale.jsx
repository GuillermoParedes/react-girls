import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input
} from "reactstrap";
class Modale extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      title: "",
      description: ""
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
              <Input
                type="text"
                name="title"
                id="title"
                value={this.state.data}
                placeholder="Title"
                onChange={e => this.handleChange(e)}
              />
              <Input
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                placeholder="Description"
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
