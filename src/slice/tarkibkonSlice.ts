import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Study {
    id: string;
    name: string;
}

interface TarkibkonState {
  selectedStudy: Study | null;
  learnTopic: string;
  favoriteTopic: string;
  studySelectionButton: boolean;
}

const initialState: TarkibkonState = {
  selectedStudy: null,
  learnTopic: "",
  favoriteTopic: '',
  studySelectionButton: false,
};

const tarkibkonSlice = createSlice({
  name: "tarkibkon",
  initialState,
  reducers: {
    setSelectedStudy: (state, action: PayloadAction<Study | null>) => {
      state.selectedStudy = action.payload;
      state.studySelectionButton = !!action.payload;
    },
    setLearnTopic: (state, action: PayloadAction<string>) => {
      state.learnTopic = action.payload;
    },
     setFavoriteTopic: (state, action: PayloadAction<string>) => {
      state.favoriteTopic = action.payload;
    },
    resetSelection: (state) => {
      state.selectedStudy = null;
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