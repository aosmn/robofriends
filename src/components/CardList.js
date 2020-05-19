import React from 'react'
import Card from './Card';

export default function CardList(props) {
    const {robots} = props;
    const cardsArray = robots.map(robot => {
      return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
    })
  return (
    <div className='ma3'>
      {cardsArray}
    </div>
  )
}
