import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Study {
  id: string;
  name: string;
}

interface Lesson {
  id: string;
  title: string;
}

interface DarsyarState {
  studySelectionButton: boolean;
  selectedStudy: Study | null;
  studyName: string | null;
  selectedLessons: Lesson[];
  hasSelectedLessons: boolean;
}

const initialState: DarsyarState = {
  studySelectionButton: false,
  selectedStudy: null,
  studyName: null,
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
    setSelectedStudy: (state, action: PayloadAction<Study>) => {
      state.selectedStudy = action.payload;
      state.studyName = action.payload.name;
    },
    setSelectedLesson: (state, action: PayloadAction<Lesson[]>) => {
      state.selectedLessons = action.payload;
      state.hasSelectedLessons = action.payload.length > 0;
    },
    clearSelections: (state) => {
      state.selectedStudy = null;
      state.studyName = null;
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