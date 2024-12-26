import { AgentStatus } from "../../../domain/AgentTypes";

export interface CreateAgentCommand {
    name:string;
    type:string;
    status:AgentStatus
    accuracy:number
}

export interface UpdateAgentCommand extends CreateAgentCommand {
    id:string;
}

