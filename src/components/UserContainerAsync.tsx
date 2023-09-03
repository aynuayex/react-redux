import { useEffect } from "react";
import { connect } from "react-redux";
import fetchUsers from "../redux/user/userActions";

type StateProps = {
  user: {
    loading: boolean;
    users: { id: Number; name: String }[];
    error: string;
  };
};

type UserContainerProps = {
  userData: {
    loading: boolean;
    users: { id: Number; name: String }[];
    error: string;
  };
  fetchUsers: () => StateProps;
};

const UserContainer: React.FC<UserContainerProps> = ({
  userData,
  fetchUsers,
}) => {
  useEffect(() => {
    fetchUsers();
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      <h1>Users List</h1>
      {userData.loading ? (
        <h1>Loading...</h1>
      ) : userData.error ? (
        <h1>{userData.error}</h1>
      ) : (
        userData.users &&
        userData.users.map((user) => <p key={`${user.id}`}>{user.name}</p>)
      )}
    </>
  );
};

const mapStateToProps = (state: StateProps) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
