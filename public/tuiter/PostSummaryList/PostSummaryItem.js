const PostSummaryItem = (postSummaryItem) => {
    return(`
        <li class="list-group-item">
            <div class="row align-items-center">
            <div class="col"> 
                    <div class="text-muted">Web Development</div>
                    <div> <b> ReacdsdsdstJS </b> <i class="fa-solid fa-circle-check"></i> </div> 
                    <p class="text-wrap">
                        <b> React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs </b>
                    </p>
            </div>
            <div class="col-3"> 
                    <img src="../../images/react_logo.png"
                    class="card-img-top" alt="React">                                  
            </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;

// ${postSummaryItem.topic}
// ${postSummaryItem.userName}
// ${postSummaryItem.title}
// ${postSummaryItem.time}
// ${postSummaryItem.image}
// ${postSummaryItem.tweets}