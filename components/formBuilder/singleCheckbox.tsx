import React from "react";
interface Props {
  name: string;
  defaultValue?: string;
  data: any;
  read_only?: boolean;
}
const SingleCheckbox: React.FC<Props> = (props) => {
  const hasRequiredLabel =
    props.data.hasOwnProperty("required") &&
    props.data.required === true &&
    !props.read_only;
  return (
    <div className="custom-control custom-checkbox custom-single-checkbox">
      <input
        type="checkbox"
        name={props.data.name}
        className="custom-control-input"
        id={`fid_${props.data.id}`}
      />
      <label className="custom-control-label" htmlFor={`fid_${props.data.id}`}>
        <span dangerouslySetInnerHTML={{ __html: props.data.label }} />
        {hasRequiredLabel && (
          <span className="label-required badge badge-danger">Required</span>
        )}
      </label>
    </div>
  );
};
export default SingleCheckbox;
