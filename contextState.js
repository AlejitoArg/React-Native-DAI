import React, { useContext } from "react"

export const initialState = {
    gmail: "",
    password: "",
    token: "",
    menu: []
}

export const ActionTypes = {
    SetGmail: "SET_GMAIL",
    SetPassword: "SET_PASSWORD",
    SetToken: "SET_TOKEN",
    SetMenu: "SET_MENU",
    DeleteMenu: "DELETE_MENU"
}

export const reducer = (state = {}, action) => {
    switch (action.type){
        case ActionTypes.SetGmail:
            return {
                ...state,
                gmail: action.value,
            };
        case ActionTypes.SetPassword:
            return {
                ...state,
                password: action.value,
            };
        case ActionTypes.SetToken:
            return {
                ...state,
                token: action.value,
            }
        case ActionTypes.SetMenu:
            return {
                ...state,
                menu: [...state.menu, action.value]
            };
        case ActionTypes.DeleteMenu:
                let newMenu = state.menu.filter(plato => plato?.id!=action.value?.id)
                return {
                    ...state,
                    menu: newMenu
                };
        default:
            return state;
    }
}

export const initialContext = {
    contextState:initialState,
    setContextState: () => {},
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState}) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{contextState, setContextState}}>{children}</Cont.Provider>
}

export const useContextState = () => useContext(Cont)