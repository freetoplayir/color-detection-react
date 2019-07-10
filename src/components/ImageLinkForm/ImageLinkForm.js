import React from 'react';

const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
    return (
        <div>
            <p className="title">{'This Smart App will detect colors in your picture!'}</p>
            <div>
                <input className="img-input" onChange={onInputChange}></input>
                <button className="detect-btn" onClick={onBtnSubmit}>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;

