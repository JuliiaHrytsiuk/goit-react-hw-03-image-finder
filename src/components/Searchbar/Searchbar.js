import { Component } from "react";
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from "./Searchbar.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Searchbar extends Component {
  state = {
    searchImages: "",
  };

  handleInputChange = (event) => {
    this.setState({ searchImages: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchImages.trim() === "") {
      return toast("Что искать?");
    }
    this.props.onSubmit(this.state.searchImages);
    this.setState({ searchImages: "" });
  };

  render() {
    return (
      <header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchImages}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </header>
    );
  }
}

export default Searchbar;
