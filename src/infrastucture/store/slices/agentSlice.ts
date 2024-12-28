import { Agent, AgentStatus } from "../../../domain/AgentTypes";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface AgentState {
    filters: {
      status: AgentStatus | null;
      type: string | null;
      searchQuery: string;
    };
    sorting: {
      field: keyof Agent;
      direction: 'asc' | 'desc';
    };
    pagination: {
      page: number;
      perPage: number;
    };
  }

  const initialState: AgentState = {
    filters: {
      status: null,
      type: null,
      searchQuery: ''
    },
    sorting: {
      field: 'name',
      direction: 'asc'
    },
    pagination: {
      page: 1,
      perPage: 10
    }
  };

  export const agentSlice = createSlice({
    name:'agents',
    initialState,
    reducers:{
        setFilters: (state,action:PayloadAction<Partial<AgentState['filters']>>) =>{
            state.filters = {...state.filters,...action.payload}
        }
    }
  })

  export const {setFilters} = agentSlice.actions


  