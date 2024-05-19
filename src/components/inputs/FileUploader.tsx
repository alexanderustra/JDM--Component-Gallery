import { Button } from '../buttons/Button'
import React, { useRef,useState } from 'react';
import styles from './Inputs.module.css'

interface inputFileProps {
    onNewFile: (files: FileList) => void;
}

export function FileUploader ({ onNewFile}:inputFileProps) {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            onNewFile(files);
            setSelectedFiles(files)
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
        const files = event.dataTransfer.files;
        setSelectedFiles(files)
        onNewFile(files);
    };
    return (
        <div className={styles.fileUploaderContainer} >
            <p className={styles.label} >label</p>
            <div className={styles.input}>
                <p >{selectedFiles ? selectedFiles[selectedFiles.length - 1].name : 'Add Files'}</p>
                <Button text='Select Files' className={styles.filesBtn} />
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
    )
}