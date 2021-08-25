export const SET_STORE = "@action/store:set_store";

export const setStore = (payload: any) => {
    return {
        type: SET_STORE,
        payload
    }
}