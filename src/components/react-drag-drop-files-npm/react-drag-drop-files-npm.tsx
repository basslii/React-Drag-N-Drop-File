import React, { FC, useState } from 'react';
import styles from './react-drag-drop-files-npm.module.css';
import { FileUploader } from "react-drag-drop-files";

interface ReactDragDropFilesNpmProps {}

const ReactDragDropFilesNpm: FC<ReactDragDropFilesNpmProps> = () => {
  const [files, setFiles] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const fileFormat = ["PDF", "JPEG"]

  const onChangeFiles = (file: React.SetStateAction<null>): void => {
    setFiles(file);
    console.log('files: ', files)
  }

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked)
    event.target.checked ? setIsDisabled(false) : setIsDisabled(true);
  }

  const onDraggingItem = (dragging: any) => {
    console.log("dragging: ", dragging)
  }

  return (
    <>
     <h1>ReactDragDropFilesNpm Component</h1>
      <div className={styles.checkboxContainer}>
        <label htmlFor="checkbox">disable file uploader</label>
        <input type="checkbox" id='checkbox' onChange={onCheckboxChange}/>
      </div>
      <div className={styles.ReactDragDropFilesNpm} data-testid="ReactDragDropFilesNpm" style={{marginBottom: "200px"}}>
        <FileUploader
          name="leaveFilesUploader"
          multiple={true}
          types={fileFormat}
          handleChange={onChangeFiles}
          disabled={isDisabled}
          onDraggingStateChange={onDraggingItem}
          dropMessageStyle = {{backgroundColor: '#ffff', opacity: 1, color: 'black'}}
        />
      </div>
    </>
  )
};

export default ReactDragDropFilesNpm;
