import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fName, lName, email, token } = await req.json(); // Parse incoming JSON from the request

    if (!token) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA token missing" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA verification failed" },
        { status: 403 }
      );
    }

    // URL of your Google Apps Script endpoint
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbxSMCdKecdB39nUKm_sNbWLZ4gSBv8RCfMrXyIad0qMdhTFUC6wMVpj3dtfc6V_eqhS/exec";

    // Send the email data to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fName, lName, email }),
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
