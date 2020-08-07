const Excel = require('exceljs')

module.exports = {
    exportXLSX (data = null) {
        if (!data) {
            return 'No data supplied!'
        }
        const wb = new Excel.Workbook()
        const headCountReportSheet = wb.addWorksheet('Heacount Report')
        headCountReportSheet.addRow([1, 'Robin', 'Regodon', new Date()])
    }
}