import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { IClient } from "../../providers/ClientContext/@types";
import { IContact } from "../../providers/ContactsContext/@types";

export function clientsPDF(client: IClient, contacts: IContact[]) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = {
        text: "Contatos de " + client.fullName,
        fontSize: 15,
        bold: true,
        margin: [15, 20, 0, 45]
    };

    const data = contacts.map((contact) => {
        return [
            { text: contact.fullName, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: contact.email, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: contact.telephone, fontSize: 9, margin: [0, 2, 0, 2] },
        ];
    });

    const details = {
        table: {
            headerRows: 1,
            widths: ["*", "*", "*"],
            body: [
                [{ text: "Nome", fontSize: 10 }, { text: "E-mail", fontSize: 10 }, { text: "Telefone", fontSize: 10 }],
                ...data
            ]
        },
        layout: "headerLineOnly"
    };

    const footer = (currentPage: number, pageCount: number): any => {
        return {
            text: currentPage.toString() + " / " + pageCount.toString(),
            alignment: "right",
            fontSize: 9,
            margin: [0, 10, 20, 0]
        };
    };
    
    const docDefinitions = {
        pageSize: "A4",
        pageMargins: [15, 50, 15, 40],
        header: reportTitle,
        content: details,
        footer: footer
    };
    
    pdfMake.createPdf(docDefinitions).download();
}
