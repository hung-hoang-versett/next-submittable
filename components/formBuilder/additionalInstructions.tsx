import React from "react";
import {
  Editor,
  EditorState,
  convertFromRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
interface Props {
  textBlock: any;
}
const AdditionalInstructions: React.FC<Props> = (props) => {
  const storedState = props.textBlock;
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

  return (
    <Editor editorState={editorState} readOnly={true} onChange={() => {}} />
  );
};
export default AdditionalInstructions;
