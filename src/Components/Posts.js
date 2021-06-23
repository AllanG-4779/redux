import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../Redux/cake/actions";


function Posts(props) {
  console.log(props.posts);
  useEffect(() => {
   return  props.action;
  },[]);
  return <div></div>;
}

const mapStateToProps = (state) => {
  return {
    posts: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
