import { google } from "googleapis";
import { NextResponse } from "next/server";

const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: "laboratoro-quimica-unimet",
    private_key_id: "341761f75a46a00fe1b0efba264016e8dd691c2e",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDCC8SJWbcF2FHr\nP3Brf6KVYnxNi1RaAEjOyeEjY5xJqZvqU7hECTrIYhNALG1hgvS6gMoHWMXqUMBu\nVdssEj58QdFXoSgS8h9im3LREVuUdnfpwQCjw+m4wZVludgGJo6GWgJl3ab1vZWY\n9fJYVAHhrrBdLDRTXUfr4T5lJGFuu918VjfrlWoVUnuFpwM60juN8sLGBIlzQ4hA\nKh0NACn/LFN5mrTpkv0v/KWYLKS3526HEr8IpADemkdnbeRlTwbiL3Hll/VspcSP\nDrjBdhGetxZPC8AB1vAOVY4qShHrFJR3IGKdKlrOvCBtQOF44kAzhX+I/BADOzXP\nznadAAYRAgMBAAECggEAK9lP6L/CuYnn/RKBW3FksoAmWbmN7qaYzU3WV9JnG0g+\nCOYxQgKZ63UqJ3rCnuHiXpDC1oUreCcWTPiOxfc7coXHAhfTP/DBwd0hxXe4K6TX\ntRVdiSQ42Py5v1qPI9irpVWKrC050NcuCnotcONO54o7pVpbWqk+GuHz4RQnBkf9\nUASTGRB4mhb8v5kOzovFzEeQ4CUZ5YqyquyjV0blLDMU078F6WotTUc/WHB1uUXT\nWi/gitdNvoF1T5PRg746UfspEOm8W5EhkOlhv5ubVKjM2IG49YAyoVid9WzD/Kak\n/nQnifUb9qnZCjVrhV6LpEuu1mSIBKrA0Gjn8ciMrwKBgQD4oJ8ckdqLbW0vb/wX\n5qw9S18QQJCFIvcAdTthTfdHXojX4ZWY4dwJj/gmRjfPqSXQd/WFVuzBr9YMwZDJ\nrPJKtR0rXTT/0csxfw9bsn6KCgvasS0j/KuK4jUEFTqyS7llEUWS4cwKZ7+QhACz\ntdy3mtmNDmbWWwfDcHUbomXwawKBgQDHzM7QF7Z3sIUcZjCsQhmpha8wORDcy4E0\n3mIE5O49TPXZ4DFDrVdCmQzlc9LK/AIyTicpNUIAba0YPTX2Zppb+YhtByHl6ZWB\nUUVniLmK193hoMf3EkdEViMO0oEZ2SIPdbz5wLLaheFZo9+Lf/ega2S8AARyOQLs\nuuJiuEiScwKBgQDSoyoKB1uzEkMVlHdsPGaiC0//seN+mA/RWIC1QFuGIIYo95pJ\nCtjjVRC0RHsWOMSrqGXe0LUGpxTee8NRyW8Acg7DZVT4guH2DiKR2lgwVLCUV9TZ\nj0A6CslFq0KuOU9ZW9eoyBmYmysFoYACwMm817kGMzRW2IpsPsNIZT6d/wKBgQC6\nfI1kaV2kZZw4n6E6hw/QzLhxuDHnBAN7Rz4R92Puz5CBZeJVmsthm90PpYXQdFvQ\nfGXM7qrGH5h6kVd2vtnAky4lJY0cPWOQKj0vn8werdGpsRozoFnojMV4Jj7d028Z\nIvnZ22SU1nU559zVJgIJN3P0jceYnWH/d4eqQPtrxQKBgDKVjKo025Riz12zCi08\nQt6RIoUGm8ZvIldhmS3wQnWET/c1lRMYdRlVRiUXBDDIM88orkbMmn1RMLqvrwJv\n89VztEQylYubOxee2BoXsVOI8fOX1XwyVfIbFgIcNaWHu+pIrMrNX2g+h6E2VBBF\n7yGv8Qg58pxufLDbu/1966+v\n-----END PRIVATE KEY-----\n",
    client_email:
      "service-laboratorio-unimet@laboratoro-quimica-unimet.iam.gserviceaccount.com",
    client_id: "116811674597550422612",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/service-laboratorio-unimet%40laboratoro-quimica-unimet.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

async function updateSheetData(rowIndex, rowData) {

  try {

    console.log(rowData)
    

    const range = `Reactivos!A${rowIndex}:K${2+rowIndex}`;
    const valueInputOption = "RAW";
    const rowBlank = "";

    const values = [
      [
        rowBlank,
        rowData.reactive,
        rowData.formule,
        rowData.cas,
        rowData.brand,
        rowData.concentration,
        rowData.quantity,
        rowData.units,
        rowData.risk,
        rowData.ubication,
        rowData.observations,
      ],
    ];

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: "1_-0ao8kLOr21E8BmrkSjEBMM3sKJvMp92yK8DYZWkO0",
      range: range,
      valueInputOption: valueInputOption,
      resource: { values },
    });

    return response.data;
  } catch (error) {
    console.error("The API returned an error: " + error);
    throw error;
  }
}


export async function PUT (request) {
  try {
    const body = await request.json();

    const { rowIndex, rowData } = body;

    console.log(rowData);
    console.log(rowIndex);

    const result = await updateSheetData(rowIndex, rowData);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error parsing JSON input: " + error.message }, { status: 400 });
  }
}