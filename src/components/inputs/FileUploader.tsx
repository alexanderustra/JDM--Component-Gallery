import { Button } from '../buttons/Button'
import React, { useRef,useState } from 'react';
import styles from './Inputs.module.css'

interface inputFileProps {
    onNewFile: (files: File[]) => void;
}

export function FileUploader ({ onNewFile}:inputFileProps) {
    const [openList,setOpenList] = useState(false)
    const [filesList, setFilesList] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newFilesArray = Array.from(files);
            const updatedFilesList = [...filesList, ...newFilesArray];
            setFilesList(updatedFilesList);
            onNewFile(updatedFilesList);
        }
    };
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.currentTarget.classList.add(styles.dragOver);
    };
    
    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.currentTarget.classList.remove(styles.dragOver);
    };
    
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.currentTarget.classList.remove(styles.dragOver);
        const files = event.dataTransfer.files
        const newFilesArray = Array.from(files)
        const updatedFilesList = [...filesList, ...newFilesArray];
        setFilesList(updatedFilesList);
        onNewFile(updatedFilesList);
    };
    const handleRemoveFile = (fileName: string) => {
        const updatedFilesList = filesList.filter(file => file.name !== fileName);
        setFilesList(updatedFilesList);
        onNewFile(updatedFilesList);
    };
    return (
        <div className={styles.container}>
            <div className={styles.fileUploaderContainer} >
            <p className={styles.label} >label</p>
            <div className={styles.input}>
                <p >Add Files</p>
                <Button className={styles.filesBtn}>Select Files</Button>
                <input
                    type="file"
                    ref={fileInputRef}
                    className={styles.hiddenFileInput}
                    onChange={handleFileChange}
                />
            </div>
            <div 
            className={styles.dragnDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            > Drag And Drop</div>
        </div>
        <Button className={styles.openListBtn} onClick={()=> setOpenList(!openList)}>{filesList.length}</Button>
        { openList && 
           <div className={styles.fileListContainer}>
            {filesList.map((file) => (
                <div key={file.name} className={styles.fileList}>
                    <p>{file.name}</p>
                    <Button onClick={() => handleRemoveFile(file.name)} className={styles.removeBtn}>Delete</Button>
                </div>
            ))}
           </div>
            }
        </div>
    )
}