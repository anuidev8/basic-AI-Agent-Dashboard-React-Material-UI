import { Agent } from "../../../domain/AgentTypes";

export interface AgentListProps {
    agents: Agent[]
   /*  onEdit:(agent:Agent) => void;
    onDelete:()=> void */

}

export interface AgentFormProps {
    onSubmit:() => void;
    initialData?:Agent
}

export interface AgentStatsProps {
agents:Agent[]
}