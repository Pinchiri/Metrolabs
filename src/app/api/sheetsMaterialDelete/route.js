import { google } from "googleapis";
import { NextResponse } from "next/server";
import { credentials } from "../googleConfig";

// Configuración de autenticación
const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Función para eliminar una fila
async function deleteRow(rowIndex) {
  try {
    const requests = [
      {
        deleteDimension: {
          range: {
            sheetId: 2066205311,
            dimension: "ROWS",
            startIndex: rowIndex - 1,
            endIndex: rowIndex,
          },
        },
      },
    ];

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: "1_-0ao8kLOr21E8BmrkSjEBMM3sKJvMp92yK8DYZWkO0",
      resource: { requests },
    });
  } catch (error) {
    console.error("Error al eliminar la fila: " + error);
    throw error;
  }
}

// Función para manejar la solicitud DELETE
export async function POST(request) {
  try {
    const body = await request.json();
    const { rowIndex } = body;

    await deleteRow(rowIndex);

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
