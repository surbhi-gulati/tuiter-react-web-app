import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js";

const PostSummaryList = () => {
   return(`
        <ul>
        ${
            exploreItems.map(exploreItem => {
               return(PostSummaryItem(exploreItem));
            }).join('')
         }
        </ul>
   `);
}
export default PostSummaryList;