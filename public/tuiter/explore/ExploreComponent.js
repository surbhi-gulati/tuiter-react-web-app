// import PostSummaryList from "../PostSummaryList/index.js";
/* ${PostSummaryList()} */

const ExploreComponent = () => {
    return(`
        <div class="row align-items-center mb-2">
            <div class="col d-inline-flex align-items-center">
                <i class="fa-solid fa-magnifying-glass" ></i> 
                <input type="text" id="search-text" class="rounded-pill form-control" placeholder="Search Twitter"/>
            </div>
            <a href="explore-settings.html" class="col-2 float-end"> 
                <i class="fa-solid fa-gear fa-2x" style="color: #0d6efd"></i>                               
            </a>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
            </li>
        </ul>
        <div class="position-relative">
            <img src="../../images/starship.jpeg" width="100%">
            <h2 class="position-absolute text-white bottom-0 left-0 ps-2 px-2">
                <b>SpaceX's Starship</b>
            </h2>
        </div>
    `);
}
export default ExploreComponent;

