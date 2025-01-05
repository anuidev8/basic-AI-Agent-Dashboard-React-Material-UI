import { Box, CircularProgress, Grid2, Paper, Typography } from "@mui/material"
import { MainLayout } from "../../presentation/layouts/MainLayout"
import { AgentStats } from "../../presentation/components/AgentStats"
import { AgentList } from "../../presentation/components/Agent/AgentList"
import { useGetAgentsQuery } from "../../infrastucture/store/api/agentApi"
import { AgentFilters } from "../../presentation/components/Agent/AgentFilters"
import { useAppSelector } from "../../infrastucture/store/hooks"
import { useMemo } from "react"


 const AgentsLisPage = () =>{
  const { data:agents, isLoading,error} = useGetAgentsQuery()

  const filters = useAppSelector(state => state.agents.filters)

  const filteredAgents = useMemo(()=>{
    return agents?.filter((agent)=>{
      const searchMatch = filters.searchQuery ? agent.name.toLocaleLowerCase().includes(filters.searchQuery.toLocaleLowerCase()) : true

      return searchMatch 
    })
  },[agents, filters])

  if(filteredAgents?.length === 0) {
    return(
      <Paper>
        <Typography color="text.secondary">
          No Agents matching your search
        </Typography>
      </Paper>
    )
  }
return (
  < MainLayout>

    <AgentStats  agents={agents ?? []}/>
      {/* Filters and Actions */}
      <Box mb={4}>
          <AgentFilters />
        </Box>
   <Box>
    {
      isLoading ? (
        <CircularProgress />
      ):(
        <AgentList agents={filteredAgents ?? []}/>
      )
    }
   </Box>
  </MainLayout>   
)
}

export default AgentsLisPage
