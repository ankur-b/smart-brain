import React from  'react';
const ImageLinkForm = ({onInputChange,onSubmit}) =>{
    return(
        <center>
            <p className="f3">
                {'This Magic Brain will detect faces in your pictures.Git it a try.'}
            </p>
            <div>
                <input onChange={onInputChange} className="f4 pa2 w-70 center"/>
                <button onClick={onSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" style={{cursor:"pointer"}}>Detect</button>
            </div>
        </center>
    )
}
export default ImageLinkForm;