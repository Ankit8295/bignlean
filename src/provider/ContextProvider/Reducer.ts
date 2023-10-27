import { Actions, InitialState } from "@/utils/Types";

export const reducer = (state:InitialState,actions:Actions)=>{
    switch (actions.type) {
        case 'Test':
            return state
    
        default:
            return state;
    }
}