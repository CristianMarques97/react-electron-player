export const SET_STORE = "@action/store:set_store";
export const LOG_OUT = "@action/store:log_out";

export const setStore = (payload: any) => {
    return {
        type: SET_STORE,
        payload
    }
}

export const logout = () => {
    return {
        type: LOG_OUT,
    }
}