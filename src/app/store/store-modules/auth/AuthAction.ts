export const LOGIN = "@action/sing-in";

export const Login = (payload: any) => {
    return {
        type: LOGIN,
        payload
    }
}