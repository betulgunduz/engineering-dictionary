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
        mühendis: 'engineer'

    }

    clickTranslate() {
        let val = this.dict[this.state.myWord];
        this.setState({translatedWord: val})
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