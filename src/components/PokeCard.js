
import React from 'react';
import './Pokecard.css';

// const POKE_API = ' https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API = ' https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

function PokeCard (props){
    let imgSrc = `${POKE_API}${padToThree(props.id)}.png`
    return(
        <div className="pokecard">
            <h1>{props.name}</h1>
            <img src={imgSrc} alt={props.name} />
            <div>Type: {props.type}</div>
            <div>exp: {props.exp}</div>
        </div>
    )
}

export default PokeCard
