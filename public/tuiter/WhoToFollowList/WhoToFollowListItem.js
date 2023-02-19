const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img class="float-start rounded-circle" src=${who.avatarIcon} width="42px">
            </div>
            <div class="col-6">
                <b>${who.userName}</b> <i class="fa-solid fa-circle-check"></i>
                <div class="text-secondary">@${who.handle}</div>
            </div>
            <div class="col-4 left-0">
                <button type="button" class="btn btn-primary rounded-pill float-end">Follow</button>
            </div>
        </div>
    </li>`
    );
}
export default WhoToFollowListItem;
