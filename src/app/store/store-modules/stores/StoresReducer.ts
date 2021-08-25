import Store from "../../../model/Store";
import { ActionProps } from "../rootReducer";
import { SET_STORE } from "./StoresAction";
/**
 * Reducer de configuração das lojas
 */
const initialState: Store = {
  id: null,
  company: null,
  cnpj: "",
  name: "",
  social_name: "",
  hash: "",
  active: false,
  update_schedule: false,
};


export default function StoresReducer(state = initialState, { type, payload }: ActionProps
) {
  switch (type) {
    case SET_STORE:
      return payload
    default:
      return state;
  }
}