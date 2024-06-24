import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
    console.log(props.phonetic[0].text);
    return (
        <div className="phonetic">{props.phonetic}</div>
    )
}