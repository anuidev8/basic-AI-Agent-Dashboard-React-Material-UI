import { Box, CircularProgress, Grid2 } from "@mui/material"
import { MainLayout } from "../../presentation/layouts/MainLayout"
import { AgentStats } from "../../presentation/components/AgentStats"
import { AgentList } from "../../presentation/components/Agent/AgentList"
import { useGetAgentsQuery } from "../../infrastucture/store/api/agentApi"
import { AgentFilters } from "../../presentation/components/Agent/AgentFilters"


 const AgentsLisPage = () =>{
  const { data:agents, isLoading,error} = useGetAgentsQuery()




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
        <AgentList agents={agents ?? []}/>
      )
    }
   </Box>
  </MainLayout>   
)
}

export default AgentsLisPage
