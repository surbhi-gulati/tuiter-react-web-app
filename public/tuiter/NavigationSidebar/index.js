const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action"> 
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="d-inline-flex list-group-item list-group-item-action align-items-center"> 
          <i class="fa-sharp fa-solid fa-house-chimney"></i>
          <div class="ms-1 d-none d-xl-block"> Home </div>
        </a>
        <a href="#" class="d-inline-flex list-group-item list-group-item-action align-items-center"> 
          <i class="fa-solid fa-hashtag"></i> 
          <div class="ms-1 d-none d-xl-block"> Explore </div>
        </a>
        <a href="#" class="d-inline-flex list-group-item list-group-item-action align-items-center"> 
          <i class="fa-solid fa-bell"></i>
          <div class="ms-1 d-none d-xl-block"> Notifications </div>
        </a>
        <a href="#" class="d-inline-flex list-group-item list-group-item-action align-items-center"> 
          <i class="fa-solid fa-envelope"></i>
          <div class="ms-1 d-none d-xl-block"> Messages </div>
        </a>
        <a href="#" class="d-inline-flex list-group-item list-group-item-action align-items-center"> 
          <i class="fa-solid fa-bookmark"></i>
          <div class="ms-1 d-none d-xl-block"> Bookmarks </div>
        </a>
        <a href="#" class="d-inline-flex list-group-item list-group-item-action align-items-center"> 
          <i class="fa-solid fa-list"></i>
          <div class="ms-1 d-none d-xl-block"> Lists </div>
        </a>
        <a href="#" class="d-inline-flex list-group-item list-group-item-action align-items-center"> 
          <i class="fa-solid fa-user"></i> 
          <div class="ms-1 d-none d-xl-block"> Profile </div>
        </a>
        <a href="#" class="d-inline-flex list-group-item list-group-item-action align-items-center"> 
          <i class="fa-solid fa-plus"></i>
          <div class="ms-1 d-none d-xl-block"> More </div>
        </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tuit.html"
          class="btn btn-primary btn-block rounded-pill">
          Tuit</a>
      </div>
    `);
   }
   export default NavigationSidebar;