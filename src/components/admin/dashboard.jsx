import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Users from "./users";
import Posts from "../posts";
const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar/>
      <Route path="/admi/users" component={Users}/>
      <Route path="/admi/posts" component={Posts}/>
    </div>
  );
};

export default Dashboard;
