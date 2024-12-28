import { Container,  Typography } from "@mui/material"
import { FC, ReactNode } from "react"

export interface  MainLayoutProps {
    children:ReactNode
}
export  const MainLayout:FC<MainLayoutProps> = ({
    children
}) =>{
    return(
        <Container maxWidth="lg"   sx={{mt:4,mb:4,height:'100%'}}>

                          <Typography  variant="h1" component={"h2"}>AI Agents Dashboard</Typography>  
                            {children}
               
        </Container>
    )
}