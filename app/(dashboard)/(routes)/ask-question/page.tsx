import { Heading } from "@/components/shared/heading";
import React from "react";
import { NewQuestionForm } from "./_components/new-question-form";
import { Container } from "@/components/shared/container";

const AskQuestionPage = () => {
  return (
    <Container>
      <Heading title="Ask a Question" />

      <NewQuestionForm otherClasses="mt-10" />
    </Container>
  );
};

export default AskQuestionPage;
