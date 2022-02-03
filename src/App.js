import React, { Component } from "react";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {
    showModal: false,
    searchImages: "",
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleSearchSubmit = (searchImages) => {
    this.setState({ searchImages });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>I love you, Juliia</h1>
            <p>You are so fascinated</p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ToastContainer />
        <ImageGallery searchImages={this.state.searchImages} />
      </div>
    );
  }
}

export default App;
