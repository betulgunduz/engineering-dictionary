import React, {Component} from 'react';
import './App.css';

class TranslateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myWord: "",
            translatedWord: ""
        }
    }

    dict = {
        engineer: 'mühendis',
        mühendis: 'engineer',
        efficiency: 'verimlilik',
        verimlilik: 'efficiency',
        empirical: 'deneysel',
        deneysel: 'empirical',
        chip: 'yontmak',
        yontmak: 'chip',
        force: 'kuvvet',
        kuvvet: 'force',
        friction: 'sürtünme',
        sürtünme: 'friction',
        'block and tackle': 'palanga takımı',
        'palanga takımı': 'block and tackle',
        lever: 'kaldıraç',
        'kaldıraç': 'lever',
        fulcrum: 'dayanak',
        dayanak: 'fulcrum',
        alloy: 'alaşım',
        alaşım: 'alloy',
        angle: 'köşe',
        köşe: 'angle',
        beam: 'kiriş',
        kiriş: 'beam',
        belt: 'kayış',
        kayış: 'belt',
        bolt: 'civata',
        civata: 'bolt',
        carbide: 'karbür',
        karbür: 'carbide',
        cement: 'çimento',
        çimento: 'cement',
        betül: 'dünyanın en güzel kızı'


    }

    clickTranslate() {
        let val = this.dict[this.state.myWord];
        if(val === undefined) {
            this.setState({translatedWord: "Not in the database, will be added soon"})
        } else {
            this.setState({translatedWord: val})
        }
        
    }

    render() {
        return (
            <div>
                <input className="form" onChange={(e) => {
                    this.setState({myWord: e.target.value.toLowerCase()})
                }}/>
                <h1>{this.state.myWord}</h1>
                <button className="btn" onClick={() => {
                    this.clickTranslate()
                }}>Translate!
                </button>
                <h1>{this.state.translatedWord}</h1>
            </div>
        );
    }
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="container">
                    <TranslateInput/>
                </header>
            </div>
        );
    }
}

export default App;