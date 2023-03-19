import React from "react";

const TuitStats = ({ tuit }) => {
    return (
        <div className="row mt-2">
        <div className="col">
            <i className="me-2 fa fa-comment-o"></i>
            {tuit.replies}
        </div>
        <div className="col">
            <i className="me-2 fa fa-retweet"></i>
            {tuit.retuits}
        </div>
        <div className="col">
            <span>
                {tuit.likes}
                {tuit.liked && <i className="ms-2 fa fa-heart" style={{ color: "red" }}></i>}
                {!tuit.liked && <i className="ms-2 fa fa-heart"></i>}
            </span>
        </div>
        <div className="col">
            <i class="fal fa-share-alt" />
        </div>
        </div>
    );
};

export default TuitStats;
