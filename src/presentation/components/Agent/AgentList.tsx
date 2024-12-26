import { Paper, Table, TableCell, TableRow } from "@mui/material";
import { FC } from "react";
import { AgentListProps } from "./types";

export const AgentList:FC<AgentListProps> = ({agents}) =>(
    <Paper sx={{ p:2 }}>
            <Table>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Last Active</TableCell>
                    <TableCell>Accuracy</TableCell>
                </TableRow>
            </Table>
    </Paper>
)