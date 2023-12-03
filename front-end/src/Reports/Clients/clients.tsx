import pdfMkake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

export function clientsPDF(clients, contacts) {
    pdfMkake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: "Contatos de " + clients.fullName,
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ];

    const data = contacts.map((contact) => {
        return [
            {text: contact.fullName, style: "tableHeader", fontSize: 9, margin: [0, 2, 0, 2]},
            {text: contact.email, style: "tableHeader", fontSize: 9, margin: [0, 2, 0, 2]},
            {text: contact.telephone, style: "tableHeader", fontSize: 9, margin: [0, 2, 0, 2]},
        ]
    });

    const details = [
        {
            table: {
                headerRows: 1,
                withs: ["*", "*", "*"],
                body: [
                    [
                        {text: "Nome", style: "tableHeader", fontSize: 10},
                        {text: "E-mail", style: "tableHeader", fontSize: 10},
                        {text: "Telefone", style: "tableHeader", fontSize: 10},
                    ],
                    ...data
                ]
            },
            layout: "headerLineOnly"
        }
    ];

    function footer(currentPage, pageCount) {
        return {
            text: currentPage + " / " + pageCount,
            alignment: "right",
            fontSize: 9,
            margin: [0, 10, 20, 0]
            };
    }

    const docDefinitions = {
        pageSize: "A4",
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer: footer
    }

    pdfMake.createPdf(docDefinitions).download();

}