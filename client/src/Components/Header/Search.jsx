import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background-color: #fff;
  width: 38%;
  margin-left: 10px;
  border-radius: 2px;
  display:flex
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size:unset
`;
const SearchIconWrapper=styled(SearchIcon)`
display:flex;
color:blue;
padding:5px
`

const Search = () => {
  return (
    <>
      <SearchContainer>
        <InputSearchBase placeholder="search for products,brands and more" />
        <Box>
<SearchIconWrapper/>
</Box>
      </SearchContainer>
    
    </>
  );
};

export default Search;
