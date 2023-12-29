import { prisma } from "@/lib/prisma";
import { LocalSearch } from "@/components/search/local-search";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { HomeCard } from "@/components/cards/home-card";

export default async function Home() {
  const questions =
    (await prisma.question.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        tags: true,
      },
    })) || [];

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Heading title="All Questions" />
        <Button
          asChild
          className="bg-orange-500 hover:bg-orange-600 text-zinc-50"
        >
          <Link href={"ask-question"}>Ask a Question</Link>
        </Button>
      </div>
      <LocalSearch
        placeholder="Search for a specific question..."
        icon={<SearchIcon />}
        containerClasses="mt-5"
      />

      <ul className="mt-10 space-y-4">
        {questions.map((question) => (
          <HomeCard key={question.id} data={question} />
        ))}
      </ul>
    </Container>
  );
}
