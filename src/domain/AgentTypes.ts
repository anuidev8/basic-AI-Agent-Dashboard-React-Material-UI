export interface Agent {
    id:string;
    name:string;
    type:string;
    status:AgentStatus;
    accuracy:number;
    lastActive:string;
    performance:number;
}
export enum AgentStatus {
    Active = 'Active',
    Inactive= 'Inactive'
}