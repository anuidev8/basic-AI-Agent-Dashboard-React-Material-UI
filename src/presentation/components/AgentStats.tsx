import {  Grid2, } from "@mui/material"
import { FC, useMemo } from "react"
import { AgentStatsProps } from "./Agent/types"
import { StatCard } from "./Agent/AgentStats/StatCard"
import {Assessment, SmartToy, Speed} from '@mui/icons-material';

import { AgentStatus } from "../../domain/AgentTypes";
export const AgentStats:FC<AgentStatsProps> = ({agents}) =>{


    const stats = useMemo(()=>{
        if(!agents.length) return null;
        const activeAgents = agents.filter(agent => agent.status === AgentStatus.Active)
        const avgAccuracy = agents.reduce((sum,agent)=>sum + agent.accuracy,0) / agents.length
        return{
            total:agents.length ?? 0,
            active:activeAgents.length ?? 0,
            accuracy:avgAccuracy.toFixed(1) ?? 0,
            performance:85
        }
    },[agents])
    return(
    <>
    <Grid2 container spacing={3} mb={4}>
        <Grid2 size={{xs:12, sm:6,md:3}} >
            <StatCard
                    title="Total Agents"
                    value={stats?.total ?? 0 }
                    icon={<SmartToy />}
                    trend={{ value: 12, isPositive: true }}
            />

            
        </Grid2>
        <Grid2 size={{xs:12, sm:6,md:3}} >
            <StatCard
                    title="Active  Agents"
                    value={stats?.active ?? 0}
                    icon={<SmartToy />}
                    trend={{ value: 8, isPositive: true }}
            />

            
        </Grid2>
        <Grid2 size={{xs:12, sm:6,md:3}} >
            <StatCard
             title="Average Accuracy"
             value={stats?.accuracy ?? 0}
             icon={<Assessment />}
             trend={{ value: 5, isPositive: true }}
            />

            
        </Grid2>
          <Grid2 size={{xs:12, sm:6,md:3}}>
       <StatCard
         title="Performance"
         value={stats?.performance ?? 0}
         icon={<Speed />}
         trend={{ value: 3, isPositive: false }}
       />
     </Grid2>
    </Grid2>
    </>
    )
} 