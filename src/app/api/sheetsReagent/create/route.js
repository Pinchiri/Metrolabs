import { NextResponse } from "next/server";
import { appendSheetData } from "../../sheetsFunctions";

const range = `Reactivos!B:K`;

export async function POST(request) {
  try {
    const body = await request.json();

    const values = [
      [
        body.formData.reactive,
        body.formData.formule,
        body.formData.cas,
        body.formData.brand,
        body.formData.concentration,
        body.formData.quantity,
        body.formData.risk,
        body.formData.ubication,
        body.formData.observations,
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
