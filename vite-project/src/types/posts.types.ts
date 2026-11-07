export type LevelOfUnderstanding =
  | "Dont Get IT"
  | "Get It"
  | "Currently Practicing";
export interface PostType {
  id: number;
  title: string;
  slug: string;
  content: string;
  levelOfUnderstanding: LevelOfUnderstanding;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

/*
isAuthenticated: A boolean indicating the user’s login status.
login(): A function to simulate logging in (sets isAuthenticated to true).
logout(): A function to simulate logging out (sets isAuthenticated to false).

*/
