import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: string | null;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  role: 'STUDENT' | 'STAFF' | null;
  token: string | null;
}

const initialState: UserState = {
  id: null,
  username: null,
  first_name: null,
  last_name: null,
  role: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...action.payload };
    },
    clearUser: () => initialState,
  },
  
});


export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
