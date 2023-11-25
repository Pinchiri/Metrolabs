import { googleSheets, spreadsheetId } from "./googleConfig";

//NOTE - Function to Update the data of a Google Sheet
export async function updateSheetData(range, values) {
  try {
    const response = await googleSheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: "USER_ENTERED",
      resource: { values },
    });

    return response;
  } catch (error) {
    console.error("The API returned an error: " + error);
    throw error;
  }
}

//NOTE - Function to retrieve the data from a Google Sheet
export async function getSheetData(range, fields, rowStart = 0) {
  try {
    const response = await googleSheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      throw new Error("No data found.");
    }

    return rows.map((row) => {
      let obj = {};
      fields.forEach((field, index) => {
        obj[field] = row[index + rowStart];
      });
      return obj;
    });
  } catch (error) {
    console.error("The API returned an error: " + error);
    throw error;
  }
}
