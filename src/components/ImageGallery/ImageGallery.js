import { Component } from "react";
import { fetchImages } from "../../services/api.js";

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    error: null,
    // showLoadMoreBtn: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.images !== this.props.images) {
      this.setState({
        images: [],
        page: 1,
      });
    }
    fetchImages(this.props.images, this.state.page)
      .then((data) => {
        if (data.hits.length === 0) {
          const notify = "Wrong request - nothing found. Please, try again.";
          toast.error(notify);
          // this.setState({ showLoadMoreBtn: false });
          return;
        }

        console.log(data.hits);
        this.setState({
          images:
            this.state.page === 1
              ? data.hits
              : [...prevState.images, ...data.hits],
          // showLoadMoreBtn: true,
        });
        if (data.hits.length < 12) {
          // this.setState({ showLoadMoreBtn: false });
        }
        return;
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return <div>{this.props.images}</div>;
  }
}

export default ImageGallery;
