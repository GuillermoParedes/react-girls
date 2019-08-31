import React, { Component } from "react";
import Experience from "../components/Experience";
import Modal from "../components/Modale";

export default class ContainerExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      modal: false
    };
  }
  handleClick = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleSave = data => {
    console.log("handleSave", data);
    console.log("handleSave", this.state);
    const [dataExperience] = this.state.experiences;
    // const newExperience = {
    //   title: data.title,
    //   experiences: [data.description]
    // };
    // this.setState({
    //   modal: !this.state.modal,
    //   experiences: [...this.state.experiences, newExperience]
    // });
  };
  render() {
    const { data } = this.state;
    console.log("data render", data);
    return (
      <>
        {data.experiences.map((ele, i) => (
          <Experience
            key={i}
            {...ele}
            handleClick={e => {
              e.preventDefault();
              this.handleClick();
            }}
          />
        ))}
        <Modal
          show={this.state.modal}
          save={this.handleSave}
          cancel={this.handleClick}
        />
      </>
    );
  }
}
