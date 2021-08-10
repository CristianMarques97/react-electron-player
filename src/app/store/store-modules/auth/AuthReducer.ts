import { ActionProps } from "../rootReducer";
import { LOGIN } from "./AuthAction";

const initialState = {
  token: "",
  singned: true,
  user: ""
};

export default function AuthReducer(state = initialState, { type, payload }: ActionProps
) {
  switch (type) {
    case LOGIN:
        break;
      
    default:
      return state;
  }
}
