import { createSlice } from "@reduxjs/toolkit";
import {findTuitsThunk} from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
}

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
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
      (state) => {
          state.loading = true
          state.tuits = []
    },
    [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
          state.loading = false
          state.tuits = payload
    },
    [findTuitsThunk.rejected]:
      (state, action) => {
          state.loading = false
          state.error = action.error
    }
  },
  reducers: { 
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      const index = state.findIndex(tuit =>tuit._id === action.payload);
      state.splice(index, 1);
    },
    likeTuit(state, action) {
      const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id);
      state[tuitIndex].liked = !state[tuitIndex].liked;
      state[tuitIndex].likes += 1;
    },
    unLikeTuit(state, action) {
      const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id);
      state[tuitIndex].liked = !state[tuitIndex].liked;
      state[tuitIndex].likes -= 1;
    }
  }
});

export const {createTuit, deleteTuit, updateTuitLikes} = tuitsSlice.actions;
export default tuitsSlice.reducer;
