import React from 'react'

const WelcomeFunctional = (props) => {
    console.log(props.person)
  return (
    <h1>Welcome {props.person.name} {props.person.lastName}</h1>
  )
}

export default WelcomeFunctional