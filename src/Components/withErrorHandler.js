import React, { Component } from "react";
import Modal from "./Modal"

const withErrorHandler = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <>
          <Modal show>Something wrong</Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
