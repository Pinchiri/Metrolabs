import { google } from 'googleapis';

export default async function handler(req, res) {
    try {
        const jwtClient = new google.auth.JWT(
            process.env.SERVICE_ACCOUNT_EMAIL,
            null,
            process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
            ['https://www.googleapis.com/auth/drive.readonly']
        );

        const drive = google.drive({ version: 'v3', auth: jwtClient });

        jwtClient.authorize(async (err) => {
            if (err) {
                console.error('Authorization error:', err);
                return res.status(400).send('Error al autorizar la cuenta de servicio');
            }

            try {
                const response = await drive.files.list({
                    pageSize: 100,
                    q: "'18c0MrpNyvi7NSMjAmplLukJnafqPkssA' in parents and trashed=false",
                    fields: 'files(id, name, mimeType, webViewLink, webContentLink)'
                });
                
                console.log('Files retrieved:', response.data.files);
                
                if (!response.data.files || response.data.files.length === 0) {
                    return res.status(404).send('No se encontraron archivos');
                }

                res.json(response.data.files);
            } catch (error) {
                console.error('Drive API error:', error);
                res.status(500).send('Error al obtener los archivos');
            }
        });
    } catch (generalError) {
        console.error('General error:', generalError);
        res.status(500).send('Error interno del servidor');
    }
}
