import React from "react";
import { ReactFormGenerator } from "react-form-builder2";

interface Props {
  data: any;
}
const FormGenerator: React.FC<Props> = ({ data }) => {
  return (
    <ReactFormGenerator
      data={data}
      form_action="/path/to/form/submit"
      form_method="POST"
    />
  );
};
export default FormGenerator;
