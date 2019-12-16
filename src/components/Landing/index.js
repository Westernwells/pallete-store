import React from 'react'
import './styles.css'
export default function Landing(props){

    return(
        <section className="landing">
        <div className="container-fluid cx">
        <div className="row">
        <div className="land">
        <p className="l-header">{props.header}</p>
        <p className="l-sub-header">{props.subheader}</p>
        {props.children}
        </div>
        </div>
        </div>
        </section>
    )
}