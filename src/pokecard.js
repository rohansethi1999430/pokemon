import React,{Component} from 'react'
const poki_api='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


class  pokecard extends Component {
    render(){
        let imgSrc=`${poki_api}${this.props.id}.png`;
    return (
        <div className="Pokecard">
            
            <h1>{this.props.name}</h1>
            <img src={imgSrc}/>
            
        </div>
    )
}
}

export default pokecard;
