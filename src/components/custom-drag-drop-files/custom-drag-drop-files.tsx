import React, { FC, Fragment, useRef, useState } from 'react';
import styles from './custom-drag-drop-files.module.css';
import Table from 'react-bootstrap/esm/Table';


interface CustomDragDropFilesProps {}

const CustomDragDropFiles: FC<CustomDragDropFilesProps> = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const onButtonClick = () => {
    console.log('inputRef: ', inputRef);
    // inputRef!.current!.click();
  }

  const handleDrag = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('event for drag: ', event.type)

    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true)
      console.log('dragActive: ', dragActive)
    } else if (event.type === 'dragleave') {
      setDragActive(false)
      console.log('dragActive: ', dragActive)
    }
  }
  
  const handleDrop = (event: any) => {
    const storeFilesArray: any[] = []
    const dtFiles = event.dataTransfer.files;
    event.preventDefault();
    event.stopPropagation();

    setDragActive(false);

    for(let i = 0; i < dtFiles.length; i++) {
      storeFilesArray.push(dtFiles[i])
    }

    console.log('storeFilesArray: ', storeFilesArray)

    if(event.dataTransfer.files && event.dataTransfer.files[0]) {
      // at least one file has dropped so proceed to doing something
      console.log('data transfer in handleDrop: ', event.dataTransfer.files)
      setFiles([...storeFilesArray])
    }
  }
  
  const handleChange = (event: any) => {
    const storeFilesArray: any[] = [] ;
    const dtFiles = event.target.files;
    event.preventDefault();

    for(let i = 0; i < dtFiles.length; i++) {
      storeFilesArray.push(dtFiles[i])
    }

    console.log('storeFilesArray: ', storeFilesArray)

    if(event.target.files && event.target.files[0]) {
      // at least one file has dropped so proceed to doing something
      console.log('data transfer in handleChange: ', event.target.files)
      setFiles([...storeFilesArray]);
    }
  }

  return (
    <div className={styles.CustomDragDropFiles} data-testid="CustomDragDropFiles">
      <h1>CustomDragDropFiles Component</h1>
      <form id={styles["form-file-uploader"]} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
          <input ref={inputRef} type="file" id="fileUploader" multiple={true} className={styles.inputFileUploader} onChange={handleChange}/>
          <label 
            id={styles["label-file-upload"]} 
            htmlFor="fileUploader" 
            className={dragActive ? "drag-active" : "" }
          >
            <div>
              <p>Drag and Drop Your File Here</p>
              <button id={styles["upload-button"]} onClick={onButtonClick}>Upload a file</button>
            </div>
            { dragActive && <div id={styles["drag-file-element"]} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
          </label>
      </form>
      
      <Table striped bordered hover variant="dark" size='sm' style={{marginTop:'70px'}}>
        <thead>
          <tr>
            <th>Num</th>
            <th>File Name</th>
            <th>File Size</th>
          </tr>
        </thead>
        <tbody>
          {
            files!.map((file: File, index: number) => {
              const num = index + 1;
              return (
                <Fragment>
                  <tr key={num}>
                    <td>{num}</td>
                    <td>{file.name}</td>
                    <td>{file.size}</td>
                  </tr>
                </Fragment>
              )
            })
          }
        </tbody>
      </Table>
    </div>

  )
};

export default CustomDragDropFiles;
