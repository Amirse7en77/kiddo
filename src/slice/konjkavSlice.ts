import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface KonjkavState {
  selectedStudy: string;
  selectedTopic: string;
}

const initialState: KonjkavState = {
  selectedStudy: "",
  selectedTopic: "",
};

const konjkavSlice = createSlice({
  name: "konjkav",
  initialState,
  reducers: {
    setSelectedStudy: (state, action: PayloadAction<string>) => {
      state.selectedStudy = action.payload;
    },
    setSelectedTopic: (state, action: PayloadAction<string>) => {
      state.selectedTopic = action.payload;
    },
    resetSelection: (state) => {
      state.selectedStudy = "";
      state.selectedTopic = "";
    },
  },
});

export const { setSelectedStudy, setSelectedTopic, resetSelection } =
  konjkavSlice.actions;

export default konjkavSlice.reducer;
