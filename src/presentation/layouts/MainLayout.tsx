import { Container, Grid2, Typography } from "@mui/material"
import { FC, ReactNode } from "react"

export interface  MainLayoutProps {
    children:ReactNode
}
export  const MainLayout:FC<MainLayoutProps> = ({
    children
}) =>{
    return(
        <Container maxWidth="lg"  sx={{mt:4,mb:4}}>
               
                          <Typography  variant="h1" component={"h2"}>AI Agents Dashboard</Typography>  
                            {children}
               
        </Container>
    )
}