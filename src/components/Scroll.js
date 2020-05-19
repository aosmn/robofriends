import React from 'react'

export default function Scroll(props) {
  return (
    <div style={{'overflow-y': 'scroll', height: 'calc(100vh - 216px)'}}>
      {props.children}
    </div>
  );
}
