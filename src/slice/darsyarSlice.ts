import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarsyarState {
  studySelectionButton: boolean;
  selectedStudy: string | null;
  selectedLessons: string[];
  hasSelectedLessons: boolean;
}

const initialState: DarsyarState = {
  studySelectionButton: false,
  selectedStudy: null,
  selectedLessons: [],
  hasSelectedLessons: false
};

const darsyarSlice = createSlice({
  name: 'darsyar',
  initialState,
  reducers: {
    activeButtonReducer: (state) => {
      state.studySelectionButton = true;
    },
    disableButtonReducer: (state) => {
      state.studySelectionButton = false;
    },
    setSelectedStudy: (state, action: PayloadAction<string>) => {
      state.selectedStudy = action.payload;
    },
    setSelectedLesson: (state, action: PayloadAction<string[]>) => {
      state.selectedLessons = action.payload;
      state.hasSelectedLessons = action.payload.length > 0;
    },
    clearSelections: (state) => {
      state.selectedStudy = null;
      state.selectedLessons = [];
      state.studySelectionButton = false;
      state.hasSelectedLessons = false;
    }
  }
});

export const {
  activeButtonReducer,
  disableButtonReducer,
  setSelectedStudy,
  setSelectedLesson,
  clearSelections
} = darsyarSlice.actions;

export default darsyarSlice.reducer;