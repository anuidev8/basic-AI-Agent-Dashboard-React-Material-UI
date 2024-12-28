import { Agent, AgentStatus } from "../../domain/AgentTypes";

export const mockAgents: Agent[] = [
    {
      id: '1',
      name: 'Assistant Alpha',
      type: 'Customer Support',
      status: AgentStatus.Active,
      accuracy: 95,
      lastActive: '2024-12-23',
      performance: 88
    },
    {
      id: '2',
      name: 'Data Beta',
      type: 'Data Analysis',
      status: AgentStatus.Active,
      accuracy: 92,
      lastActive: '2024-12-24',
      performance: 85
    }
  ];