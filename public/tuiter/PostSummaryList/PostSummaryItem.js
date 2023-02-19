const PostSummaryItem = (postSummaryItem) => {
    return(`
    <li class="list-group-item">
        <div class="row align-items-center">
            <div class="col"> 
                <div class="text-muted">${postSummaryItem.title}</div>
                <div> <b> ${postSummaryItem.username} </b> </div>
                <div class="text-muted">${postSummaryItem.tweets} Tweets</div>
            </div>
            <div class="col-3"> 
                <img src=${postSummaryItem.image}
                class="card-img-top" alt=${postSummaryItem.topic}>
            </div>
        </div>
    </li>`
    );
}
export default PostSummaryItem;
