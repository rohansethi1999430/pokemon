import React,{Component} from 'react'
import './pokecard.css'
const poki_api='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


class  pokecard extends Component {
    render(){
        let imgSrc=`${poki_api}${this.props.id}.png`;
    return (
        <div className="Pokecard">
            
            <h1>{this.props.name}</h1>
            <img src={imgSrc}alt={this.props.name}/>
            <div>Type:{this.props.type}</div>
            <div>EXP:{this.props.exp}</div>
            
        </div>
    )
}
}

export default pokecard;
