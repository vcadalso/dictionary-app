import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
                    <div>
                        <p>
                            {props.meaning.definition}
                            <br />
                            <em>{props.meaning.example}</em>
                            <Synonyms synonyms={props.meaning.synonyms} />
                        </p>
                    </div>
        </div>
    );
}