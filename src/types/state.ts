export interface RootState {
  darsyar: {
    studySelectionButton: boolean;
    selectedStudy: string | null;
    selectedLesson: string | null;
  };
  konjkav: {
    studySelectionButton: boolean;
    selectedStudy: string | null;
    selectedTopics: string[];
    hasSelectedTopics: boolean;
  };
}

export interface Lesson {
  id: string;
  title: string;
}

export interface Study {
  id: string;
  title: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  emoji: string;
}
