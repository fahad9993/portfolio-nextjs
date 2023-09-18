// ./api/message.ts

// import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // Ensure the database connection
    await connectDB();

    // Fetch messages from the MongoDB server
    const messages = await Contact.find({}).exec();

    // Send the messages as JSON response
    return new NextResponse(JSON.stringify(messages), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle any errors that may occur
    console.error("Error fetching messages:", error);
    return new NextResponse(
      JSON.stringify({ error: "An error occurred while fetching messages" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
