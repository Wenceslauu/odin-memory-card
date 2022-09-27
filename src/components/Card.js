import React from "react"

const images = require.context('../assets/images', true);

const Card = (props) => {
    const characterFace = images(`./${props.charName}.png`).default

    return (
        <div className="card" onClick={props.pickCard.bind(this, props.charName)}>
            <img src={characterFace}/>
            <div className="card-container">
                <h2>{props.charName.slice(0, 1).toUpperCase() + props.charName.slice(1)}</h2>
            </div>
        </div>
    )
}

export default Card