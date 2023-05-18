import React from 'react';
export default function Popup({content}) {
    return (
        <div className="popup-box">
      <div className="box">
        {content}
      </div>
    </div>
    );
}