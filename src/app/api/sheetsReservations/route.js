import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import { getSheetData } from "../sheetsFunctions";

const range = "Copia Uso de equipo o espacio!A2:P";

const endpointAttributes = [
  "date",
  "email",
  "reason",
  "studentFullName",
  "DNI",
  "studentCarnet",
  "partnerName",
  "partnerDNI",
  "partnerCarnet",
  "labName",
  "useDate",
  "tutorName",
  "professorName",
  "professorDepartment",
  "pdfURL",
  "status",
];

export async function GET(request) {
  try {
    const data = await getSheetData(range, endpointAttributes);

    const path = request.nextUrl.searchParams.get("path");
    if (path) {
      revalidatePath(path);
      return NextResponse.json(data, {
        revalidated: true,
        now: Date.now(),
        status: 200,
      });
    }

    return NextResponse.json(data, {
      revalidated: false,
      now: Date.now(),
      message: "Missing path to revalidate",
      status: 200,
    });
  } catch (error) {
    console.error(error); // Log the error to the console
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
