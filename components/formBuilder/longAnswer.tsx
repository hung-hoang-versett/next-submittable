import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Typography } from "antd";
const { Paragraph } = Typography;

interface Props {
  data: any;
  errors?: any;
}
const LongAnswer: React.FC<Props> = (props) => {
  const errors = props.data.errors;
  return (
    <div className="long-answer">
      <TextareaAutosize
        minRows={3}
        maxRows={6}
        className="form-control"
        {...props}
      />
      {errors && (
        <Paragraph type="danger" ellipsis>
          {errors}
        </Paragraph>
      )}
    </div>
  );
};
export default LongAnswer;
