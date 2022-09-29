import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchBoxes } from "actions";
import "./home.scss";
//1- render loadig
//2-check local sortage ;
// if has data ... check for update  else login page
//if has data without inter net connection .. load latest data with offline message
//form contain auto log in
//

const Home = ({ fetchBoxes, users, boxes }) => {
  useEffect(() => {
    fetchBoxes();
  }, []);

  return (
    <div className="pageContainer homePage">
      {boxes?.map((x) => {
        return <div key={x._id}>{x.totalDeposits}</div>;
      })}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { users: state.users, boxes: state.boxes[0] };
};

export default connect(mapStateToProps, { fetchBoxes })(Home);
