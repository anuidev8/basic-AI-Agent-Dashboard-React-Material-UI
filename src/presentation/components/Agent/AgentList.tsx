import { Chip, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";
import { AgentListProps } from "./types";
import { AgentStatus } from "../../../domain/AgentTypes";
import { Edit } from "@mui/icons-material";
import { useAgentContext } from "../../hooks/useAgentContext";
import { useAppSelector } from "../../../infrastucture/store/hooks";

export const AgentList:FC<AgentListProps> = ({agents}) =>{
    const {  setSelectedAgent } = useAgentContext()
    const filters = useAppSelector(state => state.agents.filters)
    
    
   return (
    <Paper sx={{ p:2 }}>
    <Table>
        <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Active</TableCell>
            <TableCell>Accuracy</TableCell>
            <TableCell align="right" >Actions</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
            {
                agents.map((agent)=>(
                    <TableRow key={agent.id}>
                            <TableCell>{agent.id}</TableCell>
                            <TableCell>{agent.name}</TableCell>
                            <TableCell>{agent.type}</TableCell>
                            <TableCell>
                                <Chip
                                    label={agent.status}
                                    color={agent.status === AgentStatus.Active ? 'success' : 'default'}

                                />
                            </TableCell>
                            <TableCell>{agent.accuracy}</TableCell>
                            <TableCell>{agent.lastActive}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={()=>setSelectedAgent(agent)}>
                                    <Edit />
                                </IconButton>
                            </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
</Paper>
   )
}