import { Question, Tags } from "@prisma/client";

export interface QuestionWithTags extends Question {
  tags: Tags[];
}
