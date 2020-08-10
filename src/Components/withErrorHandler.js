import React, { Component } from "react";

const withErrorHandler = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Modal></Modal>
          <WrappedComponent {...props}/>
      )
    }
  }
}
