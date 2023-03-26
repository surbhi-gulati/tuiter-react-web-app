import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitLikes } from "../reducers/tuits-reducer";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const updateLikesTuitHandler = (id) => {
        dispatch(updateTuitLikes(id));
    }
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
                <span onClick={() => updateLikesTuitHandler(tuit._id)}>
                    {tuit.liked && <i className=" ms-1 bi bi-heart-fill" style={{ color: "red" }}></i>}
                    {!tuit.liked && <i className=" ms-1 bi bi-heart"></i>}
                    {' '} {tuit.likes}
                </span>
            </div>
            <div className="col">
                <i class="bi bi-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;
