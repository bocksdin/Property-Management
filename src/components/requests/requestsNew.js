import React, { Component } from "react";
import NewNewsletterForm from "../newsletter/newsletterNewForm";

class NewRequest extends Component {
  onSubmit = (fields, button) => {
    // console.log(button);
    // if(button == "submit") {
    //     //save new newsletter on the backend
    //     console.log('trying to submit to backend')
    // }
    this.props.history.push("/dashboard");
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="new-request">
        <NewNewsletterForm
          onCancel={() => this.onCancel()}
          onSubmit={event => this.onSubmit(event)}
          formTitle="New Service Request"
          fieldOnePlaceholder="Service Request Title"
          fieldOneTitle="Service Request Title"
          fieldTwoPlaceholder="Description Here"
          fieldTwoTitle="Description"
        />
      </div>
    );
  }
}

export default NewRequest;
