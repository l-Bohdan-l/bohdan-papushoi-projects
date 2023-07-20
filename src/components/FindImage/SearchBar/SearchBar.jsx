import {
  GoBackBtn,
  SearchBarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from "./SearchBar.styled";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };
  return (
    <SearchBarStyled>
      <GoBackBtn to="/">Go back</GoBackBtn>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <BsSearch />
        </SearchFormButton>

        <SearchFormInput
          name="searchQuery"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchBarStyled>
  );
};
