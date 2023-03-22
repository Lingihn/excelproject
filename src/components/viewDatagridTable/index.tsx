import {DataGrid} from "devextreme-react";
import {TViewDatagridTableProps} from "./types";
import 'devextreme/dist/css/dx.light.css';

export function ViewDatagridTable (props: TViewDatagridTableProps) {
  return (
    <div>
      <p>DataGrid Table</p>
      <DataGrid
        dataSource={props.items}
        keyExpr='id'
        columnAutoWidth={true}
      >
      </DataGrid>
    </div>
  )
}