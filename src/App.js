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
        key: 'kama',
        kama: 'key',
        'key seat': 'kama yatağı',
        'kama yatağı': 'key seat',
        'key way': 'kama yuvası',
        'kama yuvası': 'key way',
        'killed steel': 'söndürülmüş çelik',
        'söndürülmüş çelik': 'killed steel',
        knob: 'topuz, tokmak, düğme',
        'knuckle joint': 'press mafsallı pres',
        'knurled nut': 'tırtıllı somun, tırtıllı el ayar somunu',
        knurling: 'tırtıl çekme',
        'knurling tool': 'tırtıl çekme aleti',
        labor: 'işçilik',
        'işçilik': 'labor',
        'land': 'faz',
        'faz': 'land',
        'lap joint': 'bindirmeli bağlantı',
        'bindirmeli bağlantı': 'lap point',
        'lap welding': 'bindirmeli kaynak, iki parçayı üst üste bindirerek yapılan kaynak',
        'bindirmeli kaynak': 'lap welding',
        'lapping': 'parlatma',
        'parlatma': 'lapping',
        lateral: 'yanal torna',
        'yanal torna': 'lateral',
        lead: 'kurşun',
        'kurşun': 'lead',
        'lead screw': 'vida açma mili',
        'vida açma mili': 'lead screw',
        'leather': 'deri',
        'deri': 'leather',
        'linkage': 'bağlantı',
        'bağlantı': 'linkage',
        'lip angle': 'kenar açısı', 
        'kenar açısı': 'lip angel',
        'lock nut': 'kontra somunu',
        'kontra somunu': 'lock nut',
        longitudional: 'uzunlamasına', 
        'uzunlamasına': 'longitudional',
        lubricant: 'yağlama maddesi',
        'yağlama maddesi': 'lubricant',
        'lubricating gun': 'yağ tabancası',
        'yağ tabancası': 'lubricating gun',
        'lubrication': 'yağlama',
        'yağlama': 'lubrication',
        lubricator: 'yağdanlık',
        'yağdanlık': 'lubricator',
        betül: 'dünyanın en güzel kızı',
        'dünyanın en güzel kızı': 'betül',
        mirkan: 'Uygulamamızı kullandığınız için teşekkür ederiz'
      
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