import { ChangeEvent, FC } from "react";
import { AgentFilterProps } from "./types";
import { FormControl, Grid2, InputAdornment, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../../infrastucture/store/hooks";
import { setFilters } from "../../../../infrastucture/store/slices/agentSlice";

export const AgentFilters: FC<AgentFilterProps> = () =>{
    const dispatch = useAppDispatch()
    const filters = useAppSelector(state => state.agents.filters)

    const handleSearchChange = (event:ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilters({searchQuery:event.target.value }))
    }
   return(
    <Paper elevation={0} sx={{p:2,mb:3,backgroundColor:'background.default'}}>
            <Grid2 container spacing={2} alignItems={'center'}>
                <Grid2  size={{xs:12,md:4}}>
                        <TextField 
                            fullWidth
                              size="small"
                              label="Search Agent"  
                              variant="outlined"
                              value={filters.searchQuery}
                              onChange={handleSearchChange}
                              slotProps={{
                                input:{
                                    startAdornment:<InputAdornment position="start">
                                        <Search fontSize="small" />
                                    </InputAdornment>
                                }
                              }}
                        

                        />
                </Grid2>

                <Grid2  size={{xs:12,md:4}}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Status</InputLabel>
                                <Select value={filters.status || ''} label="Status" >
                                    <MenuItem value=""> all status</MenuItem>
                                    <MenuItem value=""> Active</MenuItem>
                                    <MenuItem value=""> Inactive</MenuItem>
                                </Select>
                                </FormControl>        
                </Grid2>
            </Grid2>
    </Paper>
   )
}