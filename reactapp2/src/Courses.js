import React from 'react'

const list = ["PHP", "JavaScript", "Oracle"];

export default function Course() {
  if(list.length>0){
    return (
    <div>
        <h1>There are Courses</h1> 
        <ul>
        {list.map((item)=>
             <li>{item}</li>
        )}
        </ul>
    </div>
    )
    } else {
        return (
            <NoCourse/>
        )
    }
}

export function NoCourse() {
    return (
      <div>No Courses</div>
    )
  }
