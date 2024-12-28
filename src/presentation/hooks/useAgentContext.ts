import { useContext } from "react"
import { AgentContext } from "../../infrastucture/store/context/AgentContext"

export const useAgentContext = () =>{
    const context = useContext(AgentContext)
    if(!context){
        throw new Error('useAgentContext must be used within AgentProvider')
    }

    return context
}