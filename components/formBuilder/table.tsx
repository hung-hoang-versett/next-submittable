import React from "react";
import AdditionalInstructions from "./additionalInstructions";
import { Typography } from "antd";
const { Paragraph } = Typography;
interface Props {
  data: any;
  name: string;
  defaultValue?: any;
}
const Table: React.FC<Props> = (props) => {
  const errors = props.data.errors;
  return (
    <div className="table">
      <AdditionalInstructions textBlock={props.data.additionalInstructions} />
      {errors && (
        <Paragraph type="danger" ellipsis>
          {errors}
        </Paragraph>
      )}
    </div>
  );
};
export default Table;
