import React from "react";
import {
  Editor,
  EditorState,
  convertFromRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import { Typography } from "antd";
const { Paragraph } = Typography;
interface Props {
  name: string;
  defaultValue?: string;
  data: any;
}
const TextOnly: React.FC<Props> = (props) => {
  const storedState = props.data.textBlock;
  if (storedState === null) return null;
  let contentState;
  if (typeof storedState === "string") {
    const blocksFromHTML = convertFromHTML(storedState);
    contentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
  } else {
    contentState = convertFromRaw(storedState);
  }
  const editorState = EditorState.createWithContent(contentState as any);
  const errors = props.data.errors;
  return (
    <div className="text-only">
      <Editor editorState={editorState} readOnly={true} onChange={() => {}} />
      {errors && (
        <Paragraph type="danger" ellipsis>
          {errors}
        </Paragraph>
      )}
    </div>
  );
};
export default TextOnly;
