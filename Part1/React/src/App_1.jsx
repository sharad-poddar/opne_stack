import React from 'react'
import Header from './Excersice_1/Header'
import Content from './Excersice_1/Content'
import Footer from './Excersice_1/Footer'

export default function App_1(){

    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: '10',
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: '7',
    }
    const part3 = {
        name: 'State of a component',
        exercises: '14',
    }

    return(<div>
        <Header title={course}/>
        <Content part={part1["name"]} exercises={part1["exercises"]}/>
        <Content part={part2["name"]} exercises={part2["exercises"]}/>
        <Content part={part3["name"]} exercises={part3["exercises"]}/>
        <Footer exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </div>)
}