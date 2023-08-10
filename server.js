const express = require('express');
const app = express();
const port = process.env.PORT || 9999;
const path = require('path');

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const fs = require('fs/promises')

const { appendPDF } = require("./mergepdf");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post('/merge', upload.array('pdfs'), async (req, res) => {
    let arr = Object.values(req.body);//Make array of the values of object like pdf1pagesFrom : "2" then 2 willbe taken
    arr = arr.map((e) => { return parseInt(e) - 1 })//Convert to no. and -1 as we want to get index.
    let resultArr = [];
    let tempArr = [];
    for (let i = 0; i < arr.length; i += 2) {//It will after 2 times gap
        tempArr = [arr[i], arr[i + 1]]; //0 and 1 then 2 and 3. It will make array of value pairs
        resultArr.push(tempArr)//it will be like [[1,4],[1,9]];
    }
    for (let i = 0; i < resultArr.length; i++) {
        let start = resultArr[i][0];//Take the first value like [1,4] => 1
        let end = resultArr[i][1];//Take the end value like [1,4] => 4
        let newArr = [start];//[1]

        if (start !== end) {//if start != end value
            for (let j = start + 1; j <= end; j++) {//j=2,j++
                newArr.push(j);// [1,2,3,4]
            }
        }

        resultArr[i] = newArr;//[[1,2,3,4],[1,9]];
    }

    let noOfFiles = req.files.length;

    if (noOfFiles == 2) {
        await appendPDF(resultArr, path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    }
    else if (noOfFiles == 3) {
        await appendPDF(resultArr, path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path))
    }
    else if (noOfFiles == 4) {
        await appendPDF(resultArr, path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path))
    }
    else if (noOfFiles == 5) {
        await appendPDF(resultArr, path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path))
    }
    else if (noOfFiles == 6) {
        await appendPDF(resultArr, path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path))
    }
    else if (noOfFiles == 7) {
        await appendPDF(resultArr, path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path))
    }
    else if (noOfFiles == 8) {
        await appendPDF(resultArr, path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path), path.join(__dirname, req.files[7].path))
    }
    else if (noOfFiles == 9) {
        await appendPDF(resultArr, path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path), path.join(__dirname, req.files[7].path), path.join(__dirname, req.files[8].path))
    }
    else if (noOfFiles == 10) {
        await appendPDF(resultArr, path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path), path.join(__dirname, req.files[7].path), path.join(__dirname, req.files[8].path), path.join(__dirname, req.files[9].path))
    }

    if (port == 9999) {
        res.redirect("http://localhost:9999/static/mergedpdf.pdf")
    }
    else{
        res.redirect("https://pdftransformer.onrender.com/static/mergedpdf.pdf")
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
