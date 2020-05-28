import React from 'react'

export default function Card(props) {
    const {email, name, id} = props
  return (
    <div className="tc bg-near-white dib br3 pa3 ma3 grow bw2 shadow-2">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="avatar"/>
      <div className="">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
