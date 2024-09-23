import React, { Component } from 'react';
import './estilo.css'

import biscoito from './assets/biscoito.png';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
 'O riso é a menor distância entre duas pessoas.', 
 'Deixe de lado as preocupações e seja feliz.',
 'Realize o óbvio, pense no improvável e conquiste o impossível.',
 'Acredite em milagres, mas não dependa deles.',
 'A maior barreira para o sucesso é o medo do fracasso.'] ;

    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
        this.setState(state);

    }

    render(){
        return(
            <div className='titulo'>
                <h1>Bem vindo(a) ao biscoito da sorte :) </h1>
                <h4>Clique no botão e receba sua Sorte</h4>
            
            <div className="container">
                <img src={biscoito} className="img" />
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>     
            </div>    
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
            <a>    <button className="button" onClick={this.props.acaoBtn} >{this.props.nome}</button></a>
            </div>
        );
    }
}



export default App;