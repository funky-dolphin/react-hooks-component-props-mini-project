import React from "react";

function Header(props){
    const Heading= <h1> {props.name}</h1>
    return (
        <header>{Heading}</header>
    )
}

export default Header