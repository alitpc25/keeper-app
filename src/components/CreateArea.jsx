import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import Collapse from '@mui/material/Collapse';

function CreateArea(props) {

  const [isChecked, setIsChecked] = React.useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function focusInput() {
    setIsChecked(!isChecked)
  }

  function titleChange(e) {
    const titleVal = e.target.value;
    setTitle(titleVal);
  }

  function contentChange(e) {
    const contentVal = e.target.value;
    setContent(contentVal);
  }

  return (
    <div>
      <form className="create-note" onFocus={focusInput}
        onBlur={focusInput}>
        <input
          onChange={titleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <Collapse in={isChecked}>
          <textarea
            onChange={contentChange}
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={content}
          />
          <Zoom in={true}>
            <Fab
              onClick={(e) => {
                var id = uuidv4();
                e.preventDefault(); // Prevents page to refresh after form submission.
                props.addItem(id, title, content);
                setTitle("");
                setContent("");
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        </Collapse>
      </form>
    </div>
  );
}

export default CreateArea;
