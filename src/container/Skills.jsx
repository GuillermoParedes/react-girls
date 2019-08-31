import React, { Component } from "react";

import Modal from "../components/Modale";
import { Button, Progress } from "reactstrap";
export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal: false
    };
  }
  handleClick = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleSave = data => {
    this.setState({
      modal: !this.state.modal,
      data: [...this.state.data, data]
    });
  };
  render() {
    return (
      <>
        <h5 className="text-success text-left text-uppercase">
          Skills
          <Button
            color="success"
            outline
            className="ml-2"
            onClick={e => {
              e.preventDefault();
              this.handleClick();
            }}
          >
            Add
          </Button>
        </h5>
        {this.state.data.map((e, i) => {
          return (
            <section key={i} className="m-2">
              <span className="">{e.title}</span>
              <Progress
                bar
                animated
                color="success"
                value={e.knowledge}
                max={100}
              >
                {e.knowledge + "%"}
              </Progress>
            </section>
          );
        })}

        <Modal
          show={this.state.modal}
          save={this.handleSave}
          cancel={this.handleClick}
        />
      </>
    );
  }
}
