import { NextResponse } from "next/server";
import { appendSheetData } from "../../sheetsFunctions";

const range = "Horario de Clases!B:G";

export async function POST(request) {
  try {
    const body = await request.json();

    const values = [
      [
        body.formData.className,
        body.formData.professor,
        body.formData.trimester,
        body.formData.day,
        body.formData.start,
        body.formData.end,
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
