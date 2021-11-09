import React from "react";
import { ReactFormGenerator } from "react-form-builder2";

interface Props {
  data: any;
  onSubmit: (values: any) => void;
}
const FormGenerator: React.FC<Props> = ({ data, onSubmit }) => {
  return (
    <ReactFormGenerator
      data={data}
      form_action="/path/to/form/submit"
      form_method="POST"
      skip_validations={true}
      // @ts-ignore
      onSubmit={onSubmit}
    />
  );
};
export default FormGenerator;
