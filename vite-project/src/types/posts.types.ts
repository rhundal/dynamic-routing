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
