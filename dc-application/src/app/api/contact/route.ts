import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  let requestData;
  try {
    // Parse the JSON request body only once
    requestData = await req.json();
  } catch (error) {
    // If there’s an issue with JSON parsing, return a 400 error
    console.error("Error parsing request body:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON. Please check the request.",
      },
      { status: 400 }
    );
  }

  try {
    // Destructure data from the parsed requestData
    const { fname, lname, email, phone, message } = requestData;

    // Google Apps Script Web App URL
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbxLwTIBlLmfzfcqzcnb7_bqx9k4S5YukLK-UvaN9fYo1yPfeDeTGXYevTAVX7KTap8-_g/exec";

    // Forward the form data to the Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phone,
        message,
      }),
    });

    const data = await response.json();

    // Check the response from Google Apps Script
    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully!",
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
      {
        success: false,
        message: "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
};

// GET handler
export async function GET() {
  return NextResponse.json({ message: "GET request to plan visit route" });
}
