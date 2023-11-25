import { NextResponse } from "next/server";
import { appendSheetData } from "../../sheetsFunctions";

const range = `Horario de Clases!B:G`;

export async function POST(request) {
  try {
    const body = await request.json();
    const values = [
      [
        body.className,
        body.professor,
        body.trimester,
        body.day,
        body.start,
        body.end,
      ],
    ];
    const result = await appendSheetData(range, values);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error: " + error.message);
    return NextResponse.json(
      { error: "Error processing request: " + error.message },
      { status: 400 }
    );
  }
}
