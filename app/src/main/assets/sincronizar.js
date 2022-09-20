/* 
Google Drive API:
Demonstration to:
1. upload 
2. delete 
3. create public URL of a file.
required npm package: googleapis
*/
async function sincronizar(){
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const CLIENT_ID = '86333617804-q8sm4mgkk6v19m8nglfr01lo173e0d2o.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04n2RDCYn_E6fCgYIARAAGAQSNwF-L9IrwztjzQvzvtSqIXQTHyqolK6ITEa_aDu6_ioYEqji24kHvprtzFNOaYmLzD3yToQkHTA';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});
/* 
caminho do arquivo que precisa ser carregado
Nota: Supõe-se que o arquivo example.jpg esteja no diretório raiz,
embora isso possa ser qualquer filePath
*/
const filePath = path.join(__dirname, 'dados/perguntas.csv');//text/csv

async function uploadFile() {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: 'perguntas.csv', //Este pode ser o nome de sua escolha //text/csv
        mimeType: 'text/csv',//text/csv
      },
      media: {
        mimeType: 'text/csv', //text/csv
        body: fs.createReadStream(filePath),
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

const filePath2 = path.join(__dirname, 'dados/tabela.csv');//text/csv
async function uploadFile2() {
  try {
    const response2 = await drive.files.create({
      requestBody: {
        name: 'tabela.csv', //Este pode ser o nome de sua escolha //text/csv
        mimeType: 'text/csv',//text/csv
      },
      media: {
        mimeType: 'text/csv', //text/csv
        body: fs.createReadStream(filePath2),
      },
    });

    console.log(response2.data);
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteFile() {
  try {
    const response = await drive.files.delete({
      fileId: 'YOUR FILE ID',
    });
    console.log(response.data, response.status);
  } catch (error) {
    console.log(error.message);
  }
}

// deleteFile();

async function generatePublicUrl() {
  try {
    const fileId = 'YOUR FILE ID';
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    /* 
    webViewLink: View the file in browser
    webContentLink: Direct download link 
    */
    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    });
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
}


    uploadFile();
    uploadFile2();
}

