import {TabPanel, Tabs} from "devextreme-react";
import {Item} from "devextreme-react/tab-panel";
import {ViewHtmlTable} from "../viewHtmlTable";
import {items} from "../../data/data";
import {ViewDatagridTable} from "../viewDatagridTable";
import React from "react";
import {DownloadButton} from "../downloadButton";

export function Navigation () {
  return (
    <TabPanel>
      <Item title='viewHtmlTable'>
        <ViewHtmlTable items={items}/>
      </Item>
      <Item title='viewDatagridTable'>
        <ViewDatagridTable items={items}/>
      </Item>
      <Item title='Скачать XLSX'>
        <DownloadButton/>
      </Item>
    </TabPanel>
  )
}