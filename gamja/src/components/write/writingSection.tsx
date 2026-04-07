import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

const WritingSection = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ margin: "20px", color: "black" }}>
      <EditorWrapper>
        <CKEditor
          editor={ClassicEditor as any}
          data=" "
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });

            setText(data);
            console.log(text);
          }}
        />
      </EditorWrapper>
    </div>
  );
};

export default WritingSection;

const EditorWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  max-width: 1200px;

  .ck-editor__editable_inline {
    min-height: 500px;
    padding: 0 30px !important;
    color: black;
  }

  .ck-content {
    line-height: 1.6;

    h1 {
      display: block !important;
      font-size: 2.2rem !important;
      font-weight: 800 !important;
      margin: 1rem 0 !important;
    }
    h2 {
      display: block !important;
      font-size: 1.8rem !important;
      font-weight: 700 !important;
      margin: 0.8rem 0 !important;
    }
    h3 {
      display: block !important;
      font-size: 1.5rem !important;
      font-weight: 700 !important;
    }
    strong {
      font-weight: bold !important;
    }

    em,
    i {
      font-style: italic !important;
      display: inline !important;
    }

    ol {
      display: block !important;
      list-style-type: decimal !important;
      padding-left: 2.5rem !important;
      margin: 1rem 0 !important;
      list-style-position: outside !important;
    }
    ul {
      display: block !important;
      list-style-type: disc !important;
      padding-left: 2.5rem !important;
      margin: 1rem 0 !important;
      list-style-position: outside !important;
    }
    li {
      display: list-item !important;
    }
  }

  .ck-toolbar {
    color: black;
  }
`;
