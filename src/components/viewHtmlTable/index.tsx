import {TViewHtmlTableProps} from "./types";

export function ViewHtmlTable (props: TViewHtmlTableProps ) {
  const tableheader = Object.keys(props.items[0]);
  const {items} = props
  return (
    <div>
      <p>HTML Table</p>
      <table border={1}>
        <tr>
          {tableheader.map((item) => <td>{item}</td> )}
        </tr>
        {items.map((item) => <tr> {Object.values(item).map((value) => <td>{value}</td>) }</tr>)}
      </table>
    </div>
  )
}