import React,{Component} from 'react'

class  pokecard extends Component {
    render(){
    return (
        <div className="Pokecard">
            <h1>Welcome To Pokedex</h1>
            <h1>{this.props.name}</h1>
            
        </div>
    )
}
}

export default pokecard;
