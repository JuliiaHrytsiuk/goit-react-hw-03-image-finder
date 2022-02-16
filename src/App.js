import React, { Component } from "react";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";
import { ToastContainer, toast } from "react-toastify";
import ImageGallery from "./components/ImageGallery";
import fetchApi from "./components/servises/api";

class App extends Component {
  state = {
    showModal: false,
    searchImages: "",
    images: [],
    status: "idle",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const query = this.state.searchImages;
    if (prevProps.searchImages !== query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const query = this.state.searchImages;
    const page = this.state.page;
    // this.setState({ status: "pending" });

    fetchApi(query, page)
      .then((data) => {
        return data.hits;
      })
      .then((images) => {
        if (images.length === 0) {
          toast.error("Упс! 😮 Ничего не найдено...");
          return;
        }
        return this.setState((prevState) => {
          return {
            images: [...images],
            status: "resolved",
          };
        });
      })
      .catch((error) => this.setState({ error, status: "rejected" }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleSearchSubmit = (searchImages) => {
    this.setState({ searchImages });
  };

  render() {
    const { showModal, images, error, status } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Juliia</h1>
            <p>You are so fascinated</p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ToastContainer />
        {status === "idle" && <div>Введите, что Вы ищите!</div>}
        {status === "pending" && <div>Загружаем...</div>}
        {status === "rejected" && <div>Что-то пошло не так.</div>}
        {status === "resolved" && <ImageGallery images={images} />}
      </div>
    );
  }
}

export default App;
