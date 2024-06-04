import * as actionType from './Actions'

const initialState = {
    roles: [],
    currentRoles:[]
   
}

const RoleReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_ROLES:
            return { ...state, roles: action.payload }
      
        case actionType.ADD_ROLE: {
            const roles = [...state.roles];
            roles.push(action.payload);
            return { ...state, roles: action.payload }
        }
        case actionType.SET_CURRENT_ROLES:
            return { ...state, currentRoles: action.payload }

        default: {
            return { ...state }
        }
    }
}
export default RoleReducer; 