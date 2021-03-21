import React from 'react';

const CrDropzone = (props) => {
  const {getRootProps,getInputProps, files, isDirectory } = props;

  
  return ( 
    <>
      <div {...getRootProps({className: 'dropzone'})}>
        {props.isDirectory && 
      <input {...getInputProps()} directory="" webkitdirectory="" type="file" />
        }
        {!props.isDirectory && 
      <input {...getInputProps()}/>
        }
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
    <aside>
      <h4>Files</h4>
      <ul>{files}</ul>
    </aside>
  </>
   );
}
 
export default CrDropzone;