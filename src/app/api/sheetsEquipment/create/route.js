import { NextResponse } from "next/server";
import { appendSheetData } from "../../sheetsFunctions";

const range = `Equipos!B:K`;

export async function POST(request) {
  try {
    const body = await request.json();

    const values = [
      [
        body.formData.equipment,
        body.formData.brand,
        body.formData.model,
        body.formData.quantity,
        body.formData.ubication,
        body.formData.userManual,
        body.formData.frecuency,
        body.formData.date,
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
