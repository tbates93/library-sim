import React from 'react'

export default function Topic(props) {
  console.log(props.match)
  return <h1>{props.match.params.name}</h1>
}