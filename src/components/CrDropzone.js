import React from 'react';

const CrDropzone = (props) => {
  const {getRootProps,getInputProps, files } = props;
  return ( 
    <>
      <div {...getRootProps({className: 'dropzone'})}>
      <input {...getInputProps()} />
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