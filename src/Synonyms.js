import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <ul className="synonyms">
                
                <li>{props.synonyms}</li>
            </ul>
        );
    } else {
        return null;
    }
    
}