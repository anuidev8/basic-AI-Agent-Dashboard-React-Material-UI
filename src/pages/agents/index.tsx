import { Grid2 } from "@mui/material"
import { MainLayout } from "../../presentation/layouts/MainLayout"
import { AgentStats } from "../../presentation/components/AgentStats"
import { AgentList } from "../../presentation/components/Agent/AgentList"


 const AgentsLisPage = () =>{
return (
  < MainLayout>
    <AgentStats  agents={[]}/>
    <Grid2  size={{xs:12, md:4}}>
        <AgentList agents={[]}/>
       </Grid2>
  </MainLayout>   
)
}

export default AgentsLisPage
