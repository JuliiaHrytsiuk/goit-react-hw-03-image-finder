import { Component } from "react";
import {
  SearchContainer,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel,
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
      <SearchContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
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
      </SearchContainer>
    );
  }
}

export default Searchbar;
