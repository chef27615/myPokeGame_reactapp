import React, { Component } from 'react'
import PokeCard from './PokeCard';
import './Pokedex.css';
export default class Pokedex extends Component {
    
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                <p>Total exp: {this.props.exp}</p>
                <p>{this.props.isWinner ? 'winner' : 'looser'}</p>
                <div className="Pokedex-cards">
                {this.props.pokemon.map( p => (
                    <PokeCard id={p.id} name= {p.name} type={p.type} exp={p.base_experience} key={p.name} />
                    ))}
                </div>
            </div>
        )
    }
}
