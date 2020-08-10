import React, { Component } from "react";
import Modal from "./Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.requestInterceptors = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.responseInterceptors = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      console.log("Will Unmount", this.requestInterceptors, this.responseInterceptors)
      axios.interceptors.request.eject(this.requestInterceptors)
      axios.interceptors.request.eject(this.responseInterceptors)
    }

    errorConfirmed = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <Modal show={this.state.error} closeModal={this.errorConfirmed}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
