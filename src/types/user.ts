
export interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  role: "STUDENT" | "STAFF";
}

export interface AuthState {
  user: User | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}