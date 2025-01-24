import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json(); // Parse incoming JSON from the request

    // URL of your Google Apps Script endpoint
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbxGQ6hyn_wheAQky0voU_5cwFTOrcGOa0YIURtuaXnPWfQe4Zv2c2oY2D1oW3RMcJ3Q/exec";

    // Send the email data to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json(); // Get the JSON response

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Thanks for signing up!",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Oops! Something went wrong." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "GET request to newsletter route" });
}
