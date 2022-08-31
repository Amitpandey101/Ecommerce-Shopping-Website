import React from "react";
import { Box ,styled} from "@mui/material";
import { navData } from "../../Constants/data";

const Component=styled(Box)`

display:flex;
margin: 55px 130px 0 130px;
justify-content:space-between;
`

const Navbar = () => {
  console.log(navData);
  return (
    <Component>
      {navData.map((data, index) => {
        return (
          <>
            <Box key={index}>
              <img src={data.url} alt="nav" style={{width:"64px"}} />
              <p>{data.text}</p>
            </Box>
          </>
        );
      })}
    </Component>
  );
};

export default Navbar;
