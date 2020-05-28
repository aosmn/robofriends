import React from 'react'

export default function SearchBox(props) {
  return (
    <div className="pa2">
      <input 
        aria-label='Search text'
        className="pa3 ba br2 b--green bg-lightest-blue"
        type="search" 
        placeholder="Search robots"
        onChange={props.onSearchChange}
      />

    </div>
  )
}
