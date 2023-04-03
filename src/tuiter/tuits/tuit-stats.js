import React from "react";
import { useDispatch } from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (
        <div className="row mt-2">
            <div className="col">
                <i className="pr-6 bi bi-chat"></i>
                {' '} {tuit.replies}
            </div>
            <div className="col">
                <i className="ms-1 bi bi-arrow-repeat"></i>
                {' '} {tuit.retuits}
            </div>
            <div className="col">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                    }))} 
                    className="ms-1 bi bi-heart-fill"/>
                <span> {tuit.likes}</span>
            </div>
            <div className="col">
                <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1
                }))}
                className="ms-1 bi bi-heart"/>
                <span> {tuit.dislikes}</span>
            </div>
            <div className="col">
                <i class="bi bi-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;
