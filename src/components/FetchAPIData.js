import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../action/index";
import { Link } from "react-router-dom";

function FetchAPIData({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <p key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </p>
          ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FetchAPIData);
