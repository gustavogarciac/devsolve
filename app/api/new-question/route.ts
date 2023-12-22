import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const newQuestionSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  author: z.string(),
});

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { description, tags, title, author } = newQuestionSchema.parse(body);

    const question = await prisma.question.create({
      data: {
        title,
        description,
        tags: {
          create: tags.map((tag) => ({
            name: tag,
          })),
        },
        author,
      },
    });

    return NextResponse.json(question);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong..." });
  }
}
