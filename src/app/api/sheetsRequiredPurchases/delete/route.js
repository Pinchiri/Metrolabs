import { NextResponse } from "next/server";
import { deleteSheetRow } from "../../sheetsFunctions";

const sheetId = 332024710;

export async function POST(request) {
  try {
    const body = await request.json();
    const { rowIndex } = body;

    await deleteSheetRow(rowIndex, sheetId);

    return NextResponse.json(
      { message: "Fila eliminada con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud: " + error.message },
      { status: 400 }
    );
  }
}
