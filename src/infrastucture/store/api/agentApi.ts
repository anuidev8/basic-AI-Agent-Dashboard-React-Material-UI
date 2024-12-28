import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Agent } from '../../../domain/AgentTypes';
import { mockAgents } from '../../mock/agentMock';

// Define your API service
const agentApi = createApi({
  reducerPath: 'agentApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Agent'],
  endpoints: (builder) => ({
    getAgents: builder.query<Agent[], void>({
      queryFn: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: mockAgents });
          }, 500);
        });
      },
    }),
  }),
});

// Export the auto-generated hooks for the endpoints
export const { useGetAgentsQuery } = agentApi;
export default agentApi;
