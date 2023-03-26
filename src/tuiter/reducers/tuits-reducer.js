import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
      createTuit(state, action) {
        state.unshift({
          ...action.payload,
          ...templateTuit,
          _id: (new Date()).getTime(),
          image: '../images/nasa_logo.jpeg',
        })
      },
      deleteTuit(state, action) {
        const index = state
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.splice(index, 1);
      },
      updateTuitLikes(state, action) {
        const tuit = state.find(tuit => tuit._id === action.payload);
        if (tuit.liked === true) {
          tuit.liked = false;
          tuit.likes--;
        } else {
          tuit.liked = true;
          tuit.likes++;
        }
      },
    }
   });

export const {createTuit, deleteTuit, updateTuitLikes} = tuitsSlice.actions;
export default tuitsSlice.reducer;
