import React from "react";
import { Provider } from "react-redux";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer
  from "./reducers/who-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import tuitsReducer from "./reducers/tuits-reducer";
import { Outlet } from "react-router";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
              style={{"position": "relative"}}>
          <Outlet/>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList/>
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;