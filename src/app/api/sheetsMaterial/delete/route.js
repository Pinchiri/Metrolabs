import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials, spreadsheetId } from "../../googleConfig";
import { deleteSheetRow } from "../../sheetsFunctions";

const sheetId = 2066205311;

// Función para manejar la solicitud DELETE
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
