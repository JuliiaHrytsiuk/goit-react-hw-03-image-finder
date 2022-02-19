import React, { Component } from "react";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";
import { ToastContainer, toast } from "react-toastify";
import ImageGallery from "./components/ImageGallery";
import fetchApi from "./components/servises/api";
import Loader from "./components/Loader";
import Button from "./components/Button";

class App extends Component {
  state = {
    showModal: false,
    searchImages: "",
    images: [],
    status: "idle",
    page: 1,
    imageModal: null,
    tags: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const query = this.state.searchImages;
    if (prevState.searchImages !== query) {
      this.setState({ images: [] });
      this.fetchImages();
    }
    if (this.state.page >= 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchImages = () => {
    this.setState({ status: "pending" });
    const query = this.state.searchImages;
    const page = this.state.page;

    fetchApi(query, page)
      .then((data) => {
        return data.hits;
      })
      .then((images) => {
        if (images.length === 0) {
          toast.error("😮 Ничего не найдено...");
          this.setState({ status: "rejected" });
          return;
        }

        return this.setState((prevState) => {
          return {
            images: [...prevState.images, ...images],
            page: page + 1,
            status: "resolved",
            scroll: true,
          };
        });
      })
      .catch((error) => this.setState({ error, status: "rejected" }));
  };

  toggleModal = (largeImageURL, tags) => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    this.setState({ imageModal: largeImageURL, tags: tags });
  };

  handleSearchSubmit = (searchImages) => {
    this.setState({ searchImages });
  };

  render() {
    const { showModal, images, status, imageModal, tags } = this.state;

    return (
      <div>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={imageModal} alt={tags} />
          </Modal>
        )}
        <Searchbar onSubmit={this.handleSearchSubmit} />

        {status === "idle" && <ToastContainer />}
        {status === "pending" && <Loader />}
        {status === "rejected" && <ToastContainer />}
        {status === "resolved" && (
          <ImageGallery images={images} onClick={this.toggleModal} />
        )}
        {status === "resolved" && images.length >= 11 && (
          <Button onClick={this.fetchImages} />
        )}
      </div>
    );
  }
}

export default App;
