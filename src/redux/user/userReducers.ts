import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

type StateProps = {
  loading: boolean;
  users: {id: Number,name: String}[];
  error: string;
};

type ActionProps = {
  type: string;
  payload: string | {id: Number,name: String}[];
};

const initialState: StateProps = {
  loading: false,
  users: [{id:0, name:'' }],
  error: "",
};

const userReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [{id:0, name:'' }],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
