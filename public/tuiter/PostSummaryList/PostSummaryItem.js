const PostSummaryItem = (postSummaryItem) => {
    return(`
        <li class="list-group-item">
            <div class="row align-items-center">
            <div class="col"> 
                    <div class="text-muted">${postSummaryItem.topic}</div>
                    <div> <b> ${postSummaryItem.userName} </b> <i class="fa-solid fa-circle-check"></i> - ${postSummaryItem.time} </div> 
                    <p class="text-wrap">
                        <b> ${postSummaryItem.title} </b>
                    </p>
            </div>
            <div class="col-3"> 
                    <img src=${postSummaryItem.image}
                    class="card-img-top rounded">                                  
            </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;
