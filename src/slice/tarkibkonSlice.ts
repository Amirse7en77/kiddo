import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface KonjkavState {
  selectedStudy: string;
  learnTopic: string;
  favoriteTopic: string;
  studySelectionButton: boolean;
}

const initialState: KonjkavState = {
  selectedStudy: "",
  learnTopic: "",
  favoriteTopic:'',
  studySelectionButton: false,
};

const tarkibkonSlice = createSlice({
  name: "konjkav",
  initialState,
  reducers: {
    setSelectedStudy: (state, action: PayloadAction<string>) => {
      state.selectedStudy = action.payload;
      if (action.payload) {
        state.studySelectionButton = true;
      } else {
        state.studySelectionButton = false;
      }
    },
    setLearnTopic: (state, action: PayloadAction<string>) => {
      state.learnTopic = action.payload;
    },
     setFavoriteTopic: (state, action: PayloadAction<string>) => {
      state.favoriteTopic = action.payload;
    },
    resetSelection: (state) => {
      state.selectedStudy = "";
      state.learnTopic = "";
      state.favoriteTopic='';
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
  setLearnTopic,
  setFavoriteTopic,
  resetSelection,
  activeButtonReducer,
  disableButtonReducer,
} = tarkibkonSlice.actions;

export default tarkibkonSlice.reducer;
