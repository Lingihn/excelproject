import {Button} from "devextreme-react";
import ExcelJS from 'exceljs'
import {items} from "../../data/data";
import * as buffer from "buffer";
import { saveAs } from 'file-saver'

// export const excelExport = (columns: IReportOptions[], items: IReportContractRegistry[]) => {
//   try {
//     const ExcelJSWorkbook = new ExcelJS.Workbook()
//     const worksheet = ExcelJSWorkbook.addWorksheet('Отчет')
//
//     const headerRow = worksheet.addRow({})
//
//     const firstColumn = worksheet.getColumn(1)
//     firstColumn.font = { bold: true }
//     firstColumn.fill = {
//       type: 'pattern',
//       pattern: 'solid',
//       fgColor: { argb: 'f5f5f5' }
//     }
//
//     const firstRow = worksheet.getRow(1)
//     firstRow.font = { bold: true }
//     firstRow.fill = {
//       type: 'pattern',
//       pattern: 'solid',
//       fgColor: { argb: 'e9e9e9' }
//     }
//
//     worksheet.autoFilter = {
//       from: {
//         row: 1,
//         column: 1
//       },
//       to: {
//         row: 1,
//         column: columns.length
//       }
//     }
//
//     worksheet.views = [{ state: 'frozen', ySplit: 1, xSplit: 1 }] // Закрепление первой строки
//
//     columns.forEach((column, i) => {
//       const cell = headerRow.getCell(i + 1)
//       const columnXls = worksheet.getColumn(i + 1)
//       cell.value = column.caption
//       columnXls.alignment = { wrapText: true }
//       columnXls.width = column.width !== undefined ? column.width / 7 : 50 / 7
//
//       if (column.dataType === 'date') columnXls.numFmt = 'dd.mm.yyyy'
//     })
//
//     items.forEach((item) => {
//       const dataRow = worksheet.addRow({})
//       columns.forEach((column, i) => {
//         const cell = dataRow.getCell(i + 1)
//         let value: string | number = ''
//         //@ts-ignore
//         if (typeof column.displayExpr === 'string') value = item[column.displayExpr]
//         if (typeof column.displayExpr === 'function') value = column.displayExpr(item)
//         if (column.dataType === 'date') {
//           cell.value = value ? moment(value).format('DD.MM.YYYY') : ''
//         } else {
//           cell.value = value
//         }
//       })
//     })
//
//     const model = ExcelJSWorkbook.definedNames.model
//     Object.defineProperty(ExcelJSWorkbook.definedNames, 'model', {
//       set: function (x) {
//         this._model = x
//       },
//       get: function () {
//         return this._model
//       }
//     })
//     ExcelJSWorkbook.definedNames.model = [...model, { name: '_xlnm._FilterDatabase', ranges: ['Отчет!$A$1:$B$3'] }]
//
//     ExcelJSWorkbook.xlsx.writeBuffer().then(function (buffer: any) {
//       saveAs(
//         new Blob([buffer], { type: 'application/octet-stream' }),
//         `Отчет - реестр договоров ${moment().format('DD.MM.YYYY HH-mm')}.xlsx`
//       )
//     })
//   } catch (error) {
//     handleError(error, 'Ошибка при формировании отчета', { needNotifier: true })
//   }
// }

const ExcelJsWorkBook = new ExcelJS.Workbook()
const worksheet = ExcelJsWorkBook.addWorksheet('Отчет')
const headerRow = worksheet.addRow({})
const firstColumn = worksheet.getColumn(1)
firstColumn.font = {bold : true}
firstColumn.fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'f5f5f5'}
}
const firstRow = worksheet.getRow(1)
firstRow.font = {bold : true}
firstRow.fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'e9e9e9'}
}
worksheet.views = [{
  state: 'frozen', ySplit: 1, xSplit: 1
}]
const keys = Object.keys(items[0])
keys.forEach((key, i) => {
  const cell = headerRow.getCell(i + 1)
  const columnXls = worksheet.getColumn(i + 1)
  cell.value = key
})
items.forEach((item, i) => {
  worksheet.addRow(item)
})

export function DownloadButton () {
  return (
    <Button text='Скачать XLSX'
    onClick={() => {
      ExcelJsWorkBook.xlsx.writeBuffer().then((buffer : any) => {
        saveAs(new Blob([buffer],{type: 'application/octet-stream'}), 'отчет.xlsx')
      })
    }}
    />
  )
}