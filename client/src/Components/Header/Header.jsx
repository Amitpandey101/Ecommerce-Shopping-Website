import React from "react";
import Search from "./Search";
import { AppBar, Toolbar, Box, styled, Typography,InputBase } from "@mui/material";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;
`;
const StyledBox = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;
const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper=styled(Box)`

margin: 0 2% 0 2%;

`

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <>
      <StyledHeader>
        <Toolbar style={{minHeight:"55px"}}>
          <StyledBox>
            <img src={logoURL} alt="logo" style={{ width: "75px" }} />

            <Box style={{ display: "flex" }}>
              <Subheading>
                Explore
                <Box component="span" style={{ color: "#FFE500" }}>
                  
                  Plus
                </Box>
              </Subheading>
              <PlusImage src={subURL} alt="sub-logo" />
            </Box>
          </StyledBox>
          <Search/>
        <CustomButtonWrapper>
          <CustomButtons/>
          </CustomButtonWrapper>
      
        </Toolbar>
        
      </StyledHeader>
    </>
  );
};

export default Header;
