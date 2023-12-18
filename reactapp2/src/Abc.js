import React from 'react'
import ButtonOutside from './Button'

function ButtonInside(props){
    return (
        <>
            <button>Button Inside with {props.info.color} color and {props.info.size} size</button>
        </>
    )
}
export default function Abc() {
        // const color = "green";
        const btninfo = {size:"big", color:"yellow"};
    return (
    <div>
        <h1>My Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sit ab vero voluptatem modi possimus ullam aperiam officia laudantium iusto quae totam
        </p>
        <ButtonInside info={btninfo} />
        <ButtonOutside/>
    </div>
  )
}
