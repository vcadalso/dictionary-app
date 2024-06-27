import React from "react";
import "./Photos.css"

export default function Photos(props) {
    if (props.photos) {
        return (
            <section className="photos">
                <div className="row">
                {props.photos.map(function (photo, index) {
                    return (
                    <div className="col-4" key={index}>
                    <a href={photo.src.original} rel="noreferrer" target="_blank">
                    <img alt="landscape" src={photo.src.landscape} className="img-fluid" />
                    </a>
                    </div>
                    );
                })}
                </div>
            </section>
        );
    } else {
        return null;
    }
}