import React from "react";
import Text from "./text";
import TableButton from "./table_button";
import { getRelativeTime } from "../utils/getRelativeTime";
import Switch from "../components/switch"
import { TextCropper } from "../utils/textCropper";
import { User } from "../types";
import { useSelector } from "react-redux";
import { getUser } from "../model/data";

export interface Props {
  row: object;
  columns: string[];
  edit?: boolean;
  delete?: boolean;
  view?: true;
  redirect_path?: string,
  setActive?: (active: boolean)=>void
  showBody?: (data: any)=>void
  rows?: any[]
  setter?: any
}

const row = (props: Props) => {

  const user:User = useSelector(getUser)

  return (
    
      <tr>
        {props?.columns?.map((column, index) => (
          <td style={{ padding: 15 }}>
            <Text>{TextCropper(!column?.includes("date") ? props?.row[column] : getRelativeTime(props?.row[column]), 60)}</Text>
          </td>
        ))}

        <td style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end"
        }}>
          {/* view  */}
        {props?.view &&  (
          <span style={{ padding: 15 }}>
            <TableButton setter={props?.setter} showBody={props?.showBody} redirect_path={props?.redirect_path} mode="view" row={props?.row}/>
          </span>
        )}

        {
          props?.setActive && <td><Switch  row={props?.row} rows={props?.rows}/></td>
        }

        {/* edit  */}
        {props?.edit && user?.role !="employee" && (
          <span style={{ padding: 15 }}>
            <TableButton setter={props?.setter}  mode="edit" row={props?.row} />
          </span>
        )}

        {/* delete  */}
        {props?.delete && user?.role != "employee" && (
          <span style={{ padding: 15 }}>
            <TableButton setter={props?.setter} mode="delete" row={props?.row} />
          </span>
        )}
        </td>



      </tr>
    
  );
};

export default row;
