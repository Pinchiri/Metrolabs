import { NextResponse } from "next/server";
import { updateSheetData } from "../../sheetsFunctions";

const sheetName = "Compras requeridas";

const startColumn = "A";

const endColumn = "G";

const valueInputOption = "RAW";

export async function PUT(request) {
  try {
    const body = await request.json();

    const { rowIndex, rowData } = body;

    const values = [
      [
        rowData.material,
        rowData.capacity,
        rowData.brand,
        rowData.quantity,
        rowData.price,
        rowData.status,
        rowData.observations,
      ],
    ];

    const result = await updateSheetData(
      rowIndex,
      values,
      sheetName,
      valueInputOption,
      startColumn,
      endColumn
    );
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error parsing JSON input: " + error.message },
      { status: 400 }
    );
  }
}
