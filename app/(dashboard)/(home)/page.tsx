import { LocalSearch } from "@/components/search/local-search";
import { Container } from "@/components/shared/container";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
    </Container>
  );
}
