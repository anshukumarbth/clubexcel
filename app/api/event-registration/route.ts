import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Airtable from "airtable";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const {
      MONGODB_DB,
      AIRTABLE_TOKEN,
      AIRTABLE_BASE_ID,
      EMAIL_USER,
      EMAIL_PASS,
      AIRTABLE_TABLE_NAME1,
      AIRTABLE_TABLE_NAME2,
    } = process.env;

    if (
      !MONGODB_DB ||
      !AIRTABLE_TOKEN ||
      !AIRTABLE_BASE_ID ||
      !EMAIL_USER ||
      !EMAIL_PASS ||
      !AIRTABLE_TABLE_NAME1 ||
      !AIRTABLE_TABLE_NAME2
    ) {
      throw new Error("Missing required environment variables");
    }

    const client = await clientPromise;
    const body = await req.json();
    const db = client.db(MONGODB_DB);
    const contacts = db.collection("registrations");
    const base = new Airtable({ apiKey: AIRTABLE_TOKEN }).base(
      AIRTABLE_BASE_ID
    );

    const result = await contacts.insertOne({
      ...body,
      timestamp: new Date(),
      createdAt: Date.now(),
    });
    const groupLink =
      `${body.event}` == "Code crusade 4.0"
        ? "https://chat.whatsapp.com/CaQATAdvxY92GHdOUzyCAo?mode=wwt"
        : "https://chat.whatsapp.com/IjriArmhgAGIQXtD6EX6Io?mode=wwt"; // for whatshapp group link for spacifice events
    //email for send thank for registration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: `"CLUB EXCEL" <${process.env.EMAIL_USER}>`,
      to: body.pemail,
      subject: `Thanks for Registration ${body.event}`,

      // Plain text version (for fallback)
      text: `Hi ${body.name},`,
      // HTML version
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <p>Hi <strong>${body.name}</strong>,</p>
    <p>Thank you for registering in <strong>${body.event}</strong>.</p>

    <p>
      Join our WhatsApp Group for updates:<br/>
      <a href="${groupLink}" style="color: #1a73e8;">${groupLink}</a>
    </p>

    <p>Regards,<br/><strong>CLUB EXCEL Team</strong></p>

    <div style="margin-top: 25px; >
      <a href="https://clubexcel.vercel.app" target="_blank" style="text-decoration: none;">
        <img 
          src="https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/clubexcellogo.webp" 
          alt="Club Excel Logo" 
          width="120" 
          style="border:none; margin-top: 10px;"
        />
      </a>
    </div>
  </div>
  `,
    });
    await transporter.sendMail({
      from: `"CLUB EXCEL" <${process.env.EMAIL_USER}>`,
      to: body.email,
      subject: `Thanks for Registration ${body.event}`,

      // Plain text version (for fallback)
      text: `Hi ${body.name},`,
      // HTML version
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <p>Hi <strong>${body.name}</strong>,</p>
    <p>Thank you for registering in <strong>${body.event}</strong>.</p>

    <p>
      Join our WhatsApp Group for updates:<br/>
      <a href="${groupLink}" style="color: #1a73e8;">${groupLink}</a>
    </p>

    <p>Regards,<br/><strong>CLUB EXCEL Team</strong></p>

    <div style="margin-top: 25px;">
      <a href="https://clubexcel.vercel.app" target="_blank" style="text-decoration: none;">
        <img 
          src="https://raw.githubusercontent.com/anshukumarbth/clubExcelImage/main/clubexcellogo.webp" 
          alt="Club Excel Logo" 
          width="120" 
          style="border:none; margin-top: 10px;"
        />
      </a>
    </div>
  </div>
  `,
    });

    //airtable send data
    const airTableName =
      body.event === "Code crusade 4.0"
        ? AIRTABLE_TABLE_NAME1
        : AIRTABLE_TABLE_NAME2;
    if (airTableName == "Code crusade 4.0") {
      const record = await base(airTableName).create([
        {
          fields: {
            Name: body.name,
            "NIST Email": body.email,
            "Personal Email": body.pemail,
            "Roll Number": body.rollNumber,
            "Registration Number": body.registrationNumber,
            Branch: body.branch,
            "Event Name": body.event,
            Accommodation: body.accommodation,
            HackerRank: body.hackerRank || "",
            phoneNo: body.phoneNo,
          },
        },
      ]);
    } else {
      const record = await base(airTableName).create([
        {
          fields: {
            Name: body.name,
            "NIST Email": body.email,
            "Personal Email": body.pemail,
            "Roll Number": body.rollNumber,
            "Registration Number": body.registrationNumber,
            Branch: body.branch,
            "Event Name": body.event,
            Accommodation: body.accommodation,
            phoneNo: body.phoneNo,
          },
        },
      ]);
    }

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error saving contact data to MongoDB:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
