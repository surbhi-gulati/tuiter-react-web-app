import React from "react";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }      
    return (
    <li className="list-group-item">
        <div className="row">
            <div className="col-auto">
            <img width={50}
                className="float-end rounded-circle"
                src={`../images/${tuit.image}` }
                alt="tuit"/>
            </div>
            <div className="col-10">
                <div>
                    <b>{tuit.userName}</b>
                    {' '}
                    <i class="bi bi-patch-check-fill"  style={{ color: "#1DA1F2" }}></i>
                    <span className="ps-1" style={{ color: "gray" }}>
                        {tuit.handle}
                    </span>
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
                <p>{tuit.tuit}</p>
                <TuitStats tuit={tuit} />
            </div>
        </div>
    </li>
  );
};

export default TuitItem;
