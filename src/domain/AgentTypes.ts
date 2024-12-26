export interface Agent {
    id:string;
    name:string;
    type:string;
    status:AgentStatus
}
export enum AgentStatus {
    Active = 'Active',
    Inactive= 'Inactive'
}