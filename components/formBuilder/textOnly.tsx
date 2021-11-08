import React from "react";
import { Editor, EditorState, convertFromRaw } from "draft-js";
interface Props {
  name: string;
  defaultValue?: string;
  data: any;
}
const TextOnly: React.FC<Props> = (props) => {
  const storedState = props.data.textBlock;
  const contentState = convertFromRaw(storedState);
  const editorState = EditorState.createWithContent(contentState);

  return (
    <div className="text-only">
      <Editor editorState={editorState} readOnly={true} onChange={() => {}} />
    </div>
  );
};
export default TextOnly;
