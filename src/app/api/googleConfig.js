export const credentials = {
  type: "service_account",
  project_id: process.env.NEXT_PUBLIC_DRIVE_PROJECT_ID,
  private_key_id: process.env.NEXT_PUBLIC_DRIVE_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_PUBLIC_DRIVE_PRIVATE_KEY,
  client_email: process.env.NEXT_PUBLIC_DRIVE_CLIENT_EMAIL,
  client_id: process.env.NEXT_PUBLIC_DRIVE_CLIENT_ID,
  auth_uri: process.env.NEXT_PUBLIC_DRIVE_AUTH_URI,
  token_uri: process.env.NEXT_PUBLIC_DRIVE_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.NEXT_PUBLIC_DRIVE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.NEXT_PUBLIC_DRIVE_CLIENT_CERT_URL,
  universe_domain: "googleapis.com",
};

export const spreadsheetId = "1_-0ao8kLOr21E8BmrkSjEBMM3sKJvMp92yK8DYZWkO0";
