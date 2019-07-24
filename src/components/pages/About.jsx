import React from 'react'

export default function About() {
    return (
// if you don't want to use <div> you can use <react.fragment>
        <div style = {textStyle}>
            <h1>About</h1>
            <p>This is the List-To-Do app v1.0.0. 
                It is part of studying React</p>
        </div>
    )
}
const textStyle = {
    color: "white",
    fontFamily: "cursive"

}
