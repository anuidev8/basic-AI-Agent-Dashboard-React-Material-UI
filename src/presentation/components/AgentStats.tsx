import {  Grid2, } from "@mui/material"
import { FC } from "react"
import { AgentStatsProps } from "./Agent/types"
import { StatCard } from "./Agent/AgentStats/StatCard"
import {Assessment, SmartToy, Speed} from '@mui/icons-material';
export const AgentStats:FC<AgentStatsProps> = ({agents}) =>{
    return(
    <>
    <Grid2 container spacing={3} mb={4}>
        <Grid2 size={{xs:12, sm:6,md:3}} >
            <StatCard
                    title="Total Agents"
                    value={12}
                    icon={<SmartToy />}
                    trend={{ value: 12, isPositive: true }}
            />

            
        </Grid2>
        <Grid2 size={{xs:12, sm:6,md:3}} >
            <StatCard
                    title="Active  Agents"
                    value={10}
                    icon={<SmartToy />}
                    trend={{ value: 8, isPositive: true }}
            />

            
        </Grid2>
        <Grid2 size={{xs:12, sm:6,md:3}} >
            <StatCard
             title="Average Accuracy"
             value={'10%'}
             icon={<Assessment />}
             trend={{ value: 5, isPositive: true }}
            />

            
        </Grid2>
          <Grid2 size={{xs:12, sm:6,md:3}}>
       <StatCard
         title="Performance"
         value={'10%'}
         icon={<Speed />}
         trend={{ value: 3, isPositive: false }}
       />
     </Grid2>
    </Grid2>
    </>
    )
} 