import { googleSheets, spreadsheetId } from "./googleConfig";

//NOTE - Function to Append a Row to a Google Sheet
export async function appendSheetData(range, values) {
  try {
    const response = await googleSheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: "USER_ENTERED",
      resource: { values: values },
    });

    return response;
  } catch (error) {
    console.error("The API returned an error: " + error);
    throw error;
  }
}

//NOTE - Function to Update the data of a Google Sheet
export async function updateSheetData(
  rowIndex,
  values,
  sheetName,
  valueInputOption = "RAW",
  startColumn = "A",
  endColumn = "K"
) {
  try {
    const range = `${sheetName}!${startColumn}${rowIndex}:${endColumn}${rowIndex}`;

    const response = await googleSheets.spreadsheets.values.update({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: valueInputOption,
      resource: { values: values },
    });

    return response.data;
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

//NOTE - Function to delete a row from a Google Sheet
export async function deleteSheetRow(rowIndex, sheetId) {
  try {
    const request = [
      {
        deleteDimension: {
          range: {
            sheetId: sheetId,
            dimension: "ROWS",
            startIndex: rowIndex - 1,
            endIndex: rowIndex,
          },
        },
      },
    ];

    await googleSheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: { requests: request },
    });
  } catch (error) {
    console.error("Error al eliminar la fila: " + error);
    throw error;
  }
}
