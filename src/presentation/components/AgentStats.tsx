import { Box, Grid2, Paper, Typography } from "@mui/material"
import { FC } from "react"
import { AgentStatsProps } from "./Agent/types"

export const AgentStats:FC<AgentStatsProps> = ({agents}) =>{
    return(
    <>
    <Grid2  size={{xs:12, md:4}}>
        <Paper sx={{p:2,display:'flex',flexDirection:'column'}}>
            <Box display={"flex"} justifyContent="space-between">
                <Typography variant="h6">Total Agents</Typography>
                </Box>
                <Typography>{agents.length}</Typography>
        </Paper>
    </Grid2>
    </>
    )
} 