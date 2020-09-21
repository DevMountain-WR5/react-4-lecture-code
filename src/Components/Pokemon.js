import React, {Component} from 'react';
import axios from 'axios';

class Pokemon extends Component {
    constructor(){
        super();
        this.state = {
            selectedPokemon: {},
            index: 1
        }
    }

    componentDidMount(){
        //sends request to PokeAPI
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.index}`)
        .then(res => {
            //.then contains functionality to handle a successful response
            this.setState({selectedPokemon: res.data})
        })
        .catch(err => console.log(err));
        //.catch handles a response that contains an error
    }

    nextPokemon = () => {
        // Add code here
        this.setState({index: this.state.index + 1});
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.index + 1}`)
        .then(res => {
            this.setState({selectedPokemon: res.data})
        })
        .catch(err => console.log(err));
    }

    previousPokemon = () => {
        const {index} = this.state;
        // Above code also works as this.state.index

        if(index !== 1){
            this.setState({index: this.state.index - 1});
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.index - 1}`)
            .then(res => {
                this.setState({selectedPokemon: res.data})
            })
            .catch(err => console.log(err));
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
                <button onClick={this.previousPokemon}>Previous</button>
                <button onClick={this.nextPokemon}>Next</button>
            </section>
        )
    }
}

export default Pokemon;