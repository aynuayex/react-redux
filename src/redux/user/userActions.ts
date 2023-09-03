import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";
import axios from "axios";

type UserProps = {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: {
    street: String;
    suite: String;
    city: String;
    zipcode: String;
    geo: {
      lat: String;
      lng: String;
    };
  };
  phone: String;
  website: String;
  company: {
    name: String;
    catchPhrase: String;
    bs: String;
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users: { id: Number; name: String }[]) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error: string) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const fetchUsers = () => {
  return (dispatch: Function) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        dispatch(
          fetchUsersSuccess(
            response.data.map((user: UserProps) => ({
              id: user.id,
              name: user.name,
            }))
          )
        )
      )
      .catch((err) => dispatch(fetchUsersFailure(err.message)));
  };
};

export default fetchUsers;
