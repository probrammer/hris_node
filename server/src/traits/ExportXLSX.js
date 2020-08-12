const Excel = require('exceljs')

module.exports = {
    async exportXLSX (data = null) {
        if (!data) {
            return 'No data supplied!'
        }
        const wb = new Excel.Workbook()
        const headCountReportSheet = wb.addWorksheet('Heacount Report')
        headCountReportSheet.addRow([1, 'Robin', 'Regodon', new Date()])

        try {
            await wb.xlsx.writeFile('trial ' + new Date().getMonth() + new Date().getDate() + new Date().getFullYear() + ' .xlsx').then(() => {
                console.log('File exported!')
            })
        } catch (err) {
            console.log(err)
        }
    }
}