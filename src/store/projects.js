import { createSlice } from "@reduxjs/toolkit";
let projectId = 0;
const initialState = [];
export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++projectId,
        name: action.payload.name,
      });
    },
    projectRemoved: (projects, action) => {
    },
    projectCompleted: (projects, action) => {},
  },
});
// Action creators are generated for each case reducer function
export const { projectAdded, projectRemoved, projectCompleted } =
  projectSlice.actions;

export default projectSlice.reducer;
