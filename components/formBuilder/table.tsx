import React from "react";
import AdditionalInstructions from "./additionalInstructions";
interface Props {
  data: any;
  name: string;
  defaultValue?: any;
}
const Table: React.FC<Props> = (props) => {
  return (
    <div className="table">
      <AdditionalInstructions textBlock={props.data.additionalInstructions} />
    </div>
  );
};
export default Table;
