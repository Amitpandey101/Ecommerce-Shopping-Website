import React from 'react'
import {Dialog,Box, TextField, Typography} from "@mui/material"

const LoginDialogueBox = ({open,setOpen}) => {
    const handleClose=()=>{
        setOpen(false)
    }
  return (
    <Dialog open={open} onClose={handleClose} >
        <Box>
    <Box>

    </Box  >

    <Box style={{display:"flex",flexDirection:"column"}}>
    <TextField variant='standard' label="Enter Email/Mobile Number"/>
<TextField variant='standard' label="Enter Password"/>
<Typography>By continuing ,you agree to flipkart's terms of use and Privacy Policy </Typography>

</Box>
</Box>

    </Dialog>
  )
}

export default LoginDialogueBox
