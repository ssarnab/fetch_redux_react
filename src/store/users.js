import { createSlice } from "@reduxjs/toolkit";
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data:[],
    loading:true,
  },
  reducers: {
    userAdded: (users, action) => {
      users.data = action.payload.users;
      users.loading = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;
