import React from "react";
import { Provider } from "react-redux";
import {useParams} from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer
  from "./reducers/who-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import tuitsReducer from "./reducers/tuits-reducer";
import { Outlet } from "react-router";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
  const { path } = useParams();
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active={ path || 'home' }/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
              style={{"position": "relative"}}>
              {(path === 'home' || path === undefined) && <HomeComponent/>}
              {path === 'explore' && <ExploreComponent/>}        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList/>
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;