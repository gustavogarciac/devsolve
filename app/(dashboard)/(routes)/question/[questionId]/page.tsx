import React, { useEffect, useState } from "react";

import { prisma } from "@/lib/prisma";
import { Question } from "@prisma/client";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { NoResultFound } from "@/components/shared/no-result-found";
import { Metric } from "@/components/shared/metric";
import {
  ClockIcon,
  EyeIcon,
  MessageCircleIcon,
  ThumbsUpIcon,
  WatchIcon,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ParseHTML } from "@/components/shared/parse-html";
import { TagLabel } from "@/components/shared/tag-label";

const QuestionDetailsPage = async ({
  params,
}: {
  params: { questionId: string };
}) => {
  const question = await prisma.question.findUnique({
    where: { id: params.questionId },
    include: {
      tags: true,
    },
  });

  if (!question)
    return (
      <NoResultFound
        title="There's no question to show"
        description="Break the silence first! 🚀 Ask a Question and start the discussion. Your query could be the next big thing others learn from. Get involved! "
        containerClasses="mt-20"
        cta={{ title: "Ask a Question", url: "/ask-question" }}
      />
    );

  return (
    <Container>
      <div className="flex justify-between items-center gap-x-2">
        <span>Author info</span>
        <span>Voting</span>
      </div>

      <Heading title={question.title} />

      <div className="flex flex-row gap-6 flex-wrap mt-4">
        <Metric
          icon={<ClockIcon className="h-4 w-5 text-foreground" />}
          value={`${formatDistanceToNow(question.createdAt)} ago.`}
        />
        <Metric
          icon={<ThumbsUpIcon className="h-4 w-5 text-foreground" />}
          value={`likes.`}
        />
        <Metric
          icon={<MessageCircleIcon className="h-4 w-5 text-foreground" />}
          value={`answers.`}
        />
        <Metric
          icon={<EyeIcon className="h-4 w-5 text-foreground" />}
          value={`views.`}
        />
      </div>

      <ParseHTML data={question.description} otherClasses="mt-10" />

      <ul className="mt-10 flex flex-row flex-wrap items-center gap-x-4">
        {question.tags.map((tag) => (
          <TagLabel key={tag.id} label={tag.name} size="large" />
        ))}
      </ul>
    </Container>
  );
};

export default QuestionDetailsPage;
