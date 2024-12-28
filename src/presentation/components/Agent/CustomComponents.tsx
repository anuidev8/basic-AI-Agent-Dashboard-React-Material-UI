import { Button, styled } from "@mui/material";


export const IconButtonCustom = styled(Button)(({theme}) =>({
    '&:hover':{
      transform:'scale(.8)'  
    }
}))