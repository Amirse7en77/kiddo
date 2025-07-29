import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DangerEvent {
  id: string;
  student_name: string;
  subject_name: string;
  level: 'DANGER' | 'CONCERN' | 'INFO';
  explanation: string;
  emoji: string;
  created_at: string;
  session_id?: string;
}

interface DangerStudentsState {
  dangerEvents: DangerEvent[];
  lastUpdated: string | null;
  isLoading: boolean;
}

const initialState: DangerStudentsState = {
  dangerEvents: [],
  lastUpdated: null,
  isLoading: false,
};

const dangerStudentsSlice = createSlice({
  name: 'dangerStudents',
  initialState,
  reducers: {
    setDangerEvents: (state, action: PayloadAction<DangerEvent[]>) => {
      state.dangerEvents = action.payload;
      state.lastUpdated = new Date().toISOString();
      state.isLoading = false;
    },
    addDangerEvent: (state, action: PayloadAction<DangerEvent>) => {
      const existingIndex = state.dangerEvents.findIndex(
        event => event.id === action.payload.id
      );
      
      if (existingIndex !== -1) {
        // Update existing event
        state.dangerEvents[existingIndex] = action.payload;
      } else {
        // Add new event
        state.dangerEvents.push(action.payload);
      }
      state.lastUpdated = new Date().toISOString();
    },
    removeDangerEvent: (state, action: PayloadAction<string>) => {
      state.dangerEvents = state.dangerEvents.filter(
        event => event.id !== action.payload
      );
      state.lastUpdated = new Date().toISOString();
    },
    clearDangerEvents: (state) => {
      state.dangerEvents = [];
      state.lastUpdated = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setDangerEvents,
  addDangerEvent,
  removeDangerEvent,
  clearDangerEvents,
  setLoading,
} = dangerStudentsSlice.actions;

export default dangerStudentsSlice.reducer;

// Selectors
export const selectDangerEvents = (state: { dangerStudents: DangerStudentsState }) => 
  state.dangerStudents.dangerEvents;

export const selectDangerEventsCount = (state: { dangerStudents: DangerStudentsState }) => 
  state.dangerStudents.dangerEvents.length;

export const selectLastUpdated = (state: { dangerStudents: DangerStudentsState }) => 
  state.dangerStudents.lastUpdated;

export const selectIsLoading = (state: { dangerStudents: DangerStudentsState }) => 
  state.dangerStudents.isLoading;