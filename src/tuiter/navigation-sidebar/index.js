import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
      active = 'explore'
    }
  ) => {
    return (
      <div className="list-group mb-1">
        <a className={"list-group-item"}>
          <span
            className="d-none d-xl-inline"> Tuiter
          </span>
        </a>
        <Link 
          to="/tuiter/home" 
          className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
          <span
            className="d-none d-xl-inline"> Home
          </span>
        </Link>
        <Link 
          to="/tuiter/explore" 
          className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
            <span
              className="d-none d-xl-inline"> Explore
            </span>
        </Link>
        <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}> 
          <span
            className="d-none d-xl-inline"> Notifications
          </span>
        </a>
        <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
          <span
            className="d-none d-xl-inline"> Messages
          </span>
        </a>
        <a className={`list-group-item ${active === 'bookmarks' ? 'active'
            : ''}`}>
          <span
            className="d-none d-xl-inline"> Bookmarks
          </span>
        </a>
        <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
          <span
            className="d-none d-xl-inline"> List
          </span></a>
        <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
          <span
            className="d-none d-xl-inline"> Profile
          </span>
        </a>
        <a className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
          <span
            className="d-none d-xl-inline"> More
          </span>
        </a>
      </div>
    );
};
export default NavigationSidebar;