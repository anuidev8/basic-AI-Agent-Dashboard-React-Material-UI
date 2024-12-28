import React, { createContext, FC, useMemo, useState } from "react";
import { Agent } from "../../../domain/AgentTypes";

interface AgentContextState {
    selectedAgent:Agent | null;
    setSelectedAgent:(agent:Agent | null) => void;
    viewMode:'grid' | 'list';
    setViewMode:(mode:'grid' | 'list') =>void

}
export const  AgentContext = createContext<AgentContextState | undefined>(undefined)

export const AgentProvider:FC<{children:React.ReactNode}> = ({children}) =>{
    const [ selectedAgent,setSelectedAgent ] = useState<Agent | null>(null)
    const [ viewMode,setViewMode ] = useState<'grid' | 'list'>( 'list' )

    const value = useMemo(()=>({
        selectedAgent,
        setSelectedAgent,
        viewMode,
        setViewMode,

    }),[selectedAgent,viewMode])
    console.log( selectedAgent);
    
    return (
        <AgentContext.Provider value={value}>
            {children}
        </AgentContext.Provider>
    )
}