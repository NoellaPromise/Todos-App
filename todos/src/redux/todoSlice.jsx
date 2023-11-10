import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: state.length + 1,
        todo: action.payload,
        hasEnded: false,
      });
    },
    endTask: (state, action) => {
      const todo = state[action.payload];
      if (todo) {
        todo.hasEnded = !todo.hasEnded;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, endTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
