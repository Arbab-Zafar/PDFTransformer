const { PDFDocument } = require("pdf-lib");
const { writeFileSync, readFileSync, copyFileSync } = require("fs");
async function appendPDF(arr, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
    console.log("p3333333333333333", typeof (p3))
    const pdf1 = await PDFDocument.load(readFileSync(p1));
    const pdf2 = await PDFDocument.load(readFileSync(p2));
    const pdfDoc = await PDFDocument.create();

    let pagesArray = await pdfDoc.copyPages(pdf1, arr[0]);
    let pagesArray2 = await pdfDoc.copyPages(pdf2, arr[1])
    let resultArr = [...pagesArray, ...pagesArray2]

    for (const page of resultArr) {
        pdfDoc.addPage(page);
    }

    if (p3 != undefined) {
        const pdf3 = await PDFDocument.load(readFileSync(p3))
        pagesArray = await pdfDoc.copyPages(pdf3, arr[2]);
        for (const page of pagesArray) {
            pdfDoc.addPage(page);
        }
    }
    if (p4 != undefined) {
        const pdf4 = await PDFDocument.load(readFileSync(p4))
        pagesArray = await pdfDoc.copyPages(pdf4, arr[3]);
        for (const page of pagesArray) {
            pdfDoc.addPage(page);
        }
    }
    if (p5 != undefined) {
        const pdf5 = await PDFDocument.load(readFileSync(p5))
        pagesArray = await pdfDoc.copyPages(pdf5, arr[4]);
        for (const page of pagesArray) {
            pdfDoc.addPage(page);
        }
    }
    if (p6 != undefined) {
        const pdf6 = await PDFDocument.load(readFileSync(p6))
        pagesArray = await pdfDoc.copyPages(pdf6, arr[5]);
        for (const page of pagesArray) {
            pdfDoc.addPage(page);
        }
    }
    if (p7 != undefined) {
        const pdf7 = await PDFDocument.load(readFileSync(p7))
        pagesArray = await pdfDoc.copyPages(pdf7, arr[6]);
        for (const page of pagesArray) {
            pdfDoc.addPage(page);
        }
    }
    if (p8 != undefined) {
        const pdf8 = await PDFDocument.load(readFileSync(p8))
        pagesArray = await pdfDoc.copyPages(pdf8, arr[7]);
        for (const page of pagesArray) {
            pdfDoc.addPage(page);
        }
    }
    if (p9 != undefined) {
        const pdf9 = await PDFDocument.load(readFileSync(p9))
        pagesArray = await pdfDoc.copyPages(pdf9, arr[8]);
        for (const page of pagesArray) {
            pdfDoc.addPage(page);
        }
    }
    if (p10 != undefined) {
        const pdfDoc0 = await PDFDocument.load(readFileSync(p10))
        pagesArray = await pdfDoc.copyPages(pdfDoc0, arr[9]);
        for (const page of pagesArray) {
            pdfDoc.addPage(page);
        }
    }

    writeFileSync("public/mergedpdf.pdf", await pdfDoc.save());
}

module.exports = { appendPDF }
