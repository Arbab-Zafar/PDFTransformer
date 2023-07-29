// const PDFDocument = require('pdf-lib');

// async function embedPdfPages() {
//     const flagUrl = 'https://pdf-lib.js.org/assets/american_flag.pdf';
//     const constitutionUrl = 'https://pdf-lib.js.org/assets/us_constitution.pdf';

//     const flagPdfBytes = await fetch(flagUrl).then((res) => res.arrayBuffer());
//     const constitutionPdfBytes = await fetch(constitutionUrl).then((res) =>
//         res.arrayBuffer(),
//     );

//     const pdfDoc = await PDFDocument.create();

//     const [americanFlag] = await pdfDoc.embedPdf(flagPdfBytes);

//     const usConstitutionPdf = await PDFDocument.load(constitutionPdfBytes);
//     const preamble = await pdfDoc.embedPage(usConstitutionPdf.getPages()[1], {
//         left: 55,
//         bottom: 485,
//         right: 300,
//         top: 575,
//     });

//     const americanFlagDims = americanFlag.scale(0.3);
//     const preambleDims = preamble.scale(2.25);

//     const page = pdfDoc.addPage();

//     page.drawPage(americanFlag, {
//         ...americanFlagDims,
//         x: page.getWidth() / 2 - americanFlagDims.width / 2,
//         y: page.getHeight() - americanFlagDims.height - 150,
//     });
//     page.drawPage(preamble, {
//         ...preambleDims,
//         x: page.getWidth() / 2 - preambleDims.width / 2,
//         y: page.getHeight() / 2 - preambleDims.height / 2 - 50,
//     });

//     const pdfBytes = await pdfDoc.save();
// }

// embedPdfPages()

const { PDFDocument } = require("pdf-lib");
const { writeFileSync, readFileSync, copyFileSync } = require("fs");
async function appendPDF(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
    console.log("p3333333333333333", typeof (p3))
    const pdf1 = await PDFDocument.load(readFileSync(p1));
    const pdf2 = await PDFDocument.load(readFileSync(p2));
    const pdfDoc = await PDFDocument.create();


    let pagesArray = await pdf1.copyPages(pdf2, pdf2.getPageIndices());
    for (const page of pagesArray) {
        pdf1.addPage(page);
    }
    if (p3 != undefined) {
        const pdf3 = await PDFDocument.load(readFileSync(p3))
        pagesArray = await pdf1.copyPages(pdf3, pdf3.getPageIndices());
        for (const page of pagesArray) {
            pdf1.addPage(page);
        }
    }
    if (p4 != undefined) {
        const pdf4 = await PDFDocument.load(readFileSync(p4))
        pagesArray = await pdf1.copyPages(pdf4, pdf4.getPageIndices());
        for (const page of pagesArray) {
            pdf1.addPage(page);
        }
    }
    if (p5 != undefined) {
        const pdf5 = await PDFDocument.load(readFileSync(p5))
        pagesArray = await pdf1.copyPages(pdf5, pdf5.getPageIndices());
        for (const page of pagesArray) {
            pdf1.addPage(page);
        }
    }
    if (p6 != undefined) {
        const pdf6 = await PDFDocument.load(readFileSync(p6))
        pagesArray = await pdf1.copyPages(pdf6, pdf6.getPageIndices());
        for (const page of pagesArray) {
            pdf1.addPage(page);
        }
    }
    if (p7 != undefined) {
        const pdf7 = await PDFDocument.load(readFileSync(p7))
        pagesArray = await pdf1.copyPages(pdf7, pdf7.getPageIndices());
        for (const page of pagesArray) {
            pdf1.addPage(page);
        }
    }
    if (p8 != undefined) {
        const pdf8 = await PDFDocument.load(readFileSync(p8))
        pagesArray = await pdf1.copyPages(pdf8, pdf8.getPageIndices());
        for (const page of pagesArray) {
            pdf1.addPage(page);
        }
    }
    if (p9 != undefined) {
        const pdf9 = await PDFDocument.load(readFileSync(p9))
        pagesArray = await pdf1.copyPages(pdf9, pdf9.getPageIndices());
        for (const page of pagesArray) {
            pdf1.addPage(page);
        }
    }
    if (p10 != undefined) {
        const pdf10 = await PDFDocument.load(readFileSync(p10))
        pagesArray = await pdf1.copyPages(pdf10, pdf10.getPageIndices());
        for (const page of pagesArray) {
            pdf1.addPage(page);
        }
    }


    writeFileSync("public/mergedpdf.pdf", await pdf1.save());
}

// appendPDF().catch((err) => console.log(err));

module.exports = { appendPDF }