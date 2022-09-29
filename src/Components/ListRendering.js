import React from 'react'
import Person from './Person'

function ListRendering() {

    const names = ['Shubham', 'Sanket', 'Smita', 'Shubham']

    const persons = [
        {
            id: 1,
            name: 'Shubham',
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Sanket',
            age: 27,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Smita',
            age: 29,
            skill: 'React'
        },
        {
            id: 4,
            name: 'Sarika',
            age: 30,
            skill: 'Node'
        }
    ]

    // const personList = persons.map(person => <Person key={person.id} person={person} />)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {/* {personList} */}
            {nameList}
        </div>
    )
}

export default ListRendering
