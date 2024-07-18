import * as z from "zod";
import db from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();

    const { images } = body;

    const existingFeaturedImages = await db.featuredImages.findMany();

    let featuredImages;
    if (existingFeaturedImages.length === 0) {
      featuredImages = await db.featuredImages.create({
        data: {
          images,
        },
      });
    } else {
      featuredImages = await db.featuredImages.updateMany({
        data: {
          images,
        },
      });
    }
    return NextResponse.json(
      { images: featuredImages, message: "Featured image section created." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("ERRRRR>>>>>", error);

      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        }
      );
    } else {
      console.log("ERROR>>>", error);

      return NextResponse.json(
        { error: "An unexpected error occurred!" },
        {
          status: 500,
        }
      );
    }
  }
}
