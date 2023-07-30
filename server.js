const express = require('express');
const app = express();
const port = process.env.PORT || 9999;
const path = require('path');

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const fs = require('fs/promises')

const { appendPDF } = require("./mergepdf");

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post('/merge', upload.array('pdfs'), async (req, res) => {
    let noOfFiles = req.files.length;
    if (noOfFiles == 2) {
        await appendPDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    }
    else if (noOfFiles == 3) {
        await appendPDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path))
    }
    else if (noOfFiles == 4) {
        await appendPDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path))
    }
    else if (noOfFiles == 5) {
        await appendPDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path))
    }
    else if (noOfFiles == 6) {
        await appendPDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path))
    }
    else if (noOfFiles == 7) {
        await appendPDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path))
    }
    else if (noOfFiles == 8) {
        await appendPDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path), path.join(__dirname, req.files[7].path))
    }
    else if (noOfFiles == 9) {
        await appendPDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path), path.join(__dirname, req.files[7].path), path.join(__dirname, req.files[8].path))
    }
    else if (noOfFiles == 10) {
        await appendPDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path), path.join(__dirname, req.files[7].path), path.join(__dirname, req.files[8].path), path.join(__dirname, req.files[9].path))
    }
    if (port == 9999) {
        res.redirect("http://localhost:9999/static/mergedpdf.pdf")
    }
    else{
        res.redirect("https://pdftransformer.onrender.com//static/mergedpdf.pdf")
    }
    deleteAllFilesInDir('./uploads').then(() => {
        console.log('Removed all files from the specified directory');
    });
})

async function deleteAllFilesInDir(dirPath) {
    try {
        const files = await fs.readdir(dirPath);

        const deleteFilePromises = files.map(file =>
            fs.unlink(path.join(dirPath, file)),
        );

        await Promise.all(deleteFilePromises);
    } catch (err) {
        console.log(err);
    }
}

app.listen(port, () => {
    console.log(`Website running at localhost:${port}`)
})
