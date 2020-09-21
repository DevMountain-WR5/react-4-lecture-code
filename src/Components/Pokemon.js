import React, {Component} from 'react';

class Pokemon extends Component {
    constructor(){
        super();
        this.state = {
            selectedPokemon: {},
            index: 1
        }
    }

    nextPokemon = () => {
        // Add code here
    }

    previousPokemon = () => {
        const {index} = this.state;
        // Above code also works as this.state.index

        if(index !== 0){
            //code here
        }
    }

    render(){
        const {selectedPokemon} = this.state;

        return (
            <section>
                {selectedPokemon.sprites
                ? <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name}/>
                : null}
                <h2>{selectedPokemon.name}</h2>
                <button>Previous</button>
                <button>Next</button>
            </section>
        )
    }
}