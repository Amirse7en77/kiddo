import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Study {
  id: string;
  name: string;
}

interface KonjkavState {
  selectedStudy: Study | null;
  selectedTopic: string;
  studySelectionButton: boolean;
}

const initialState: KonjkavState = {
  selectedStudy: null,
  selectedTopic: "",
  studySelectionButton: false,
};

const konjkavSlice = createSlice({
  name: "konjkav",
  initialState,
  reducers: {
    setSelectedStudy: (state, action: PayloadAction<Study | null>) => {
      state.selectedStudy = action.payload;
      if (action.payload) {
        state.studySelectionButton = true;
      } else {
        state.studySelectionButton = false;
      }
    },
    setSelectedTopic: (state, action: PayloadAction<string>) => {
      state.selectedTopic = action.payload;
    },
    resetSelection: (state) => {
      state.selectedStudy = null;
      state.selectedTopic = "";
      state.studySelectionButton = false;
    },
    activeButtonReducer: (state) => {
      state.studySelectionButton = true;
    },
    disableButtonReducer: (state) => {
      state.studySelectionButton = false;
    },
  },
});

export const {
  setSelectedStudy,
  setSelectedTopic,
  resetSelection,
  activeButtonReducer,
  disableButtonReducer,
} = konjkavSlice.actions;

export default konjkavSlice.reducer;