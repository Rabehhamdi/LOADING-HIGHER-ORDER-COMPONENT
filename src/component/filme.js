import React, { Component }from 'react';  
import Item from './item'; 
import Hoc from './hoc';

let tab = [ 
    {
        name: "Mia et le Lion Blanc",
        img:"http://fr.web.img6.acsta.net/pictures/18/10/16/11/18/3360862.jpg",
        description:"azerazerazerazerazerazer"
    },
    {
        name: "Casablanca",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CasablancaPoster-Gold.jpg/290px-CasablancaPoster-Gold.jpg",
        description:"azerazerzaerzerzerazerzaer"
    },
    {
        name: "Filme 3",
        img:"http://www.ladefense.fr/sites/default/files/peur_sur_la_ville.jpg",
        description:"azerazerzarzaerzerzea"
    },
    {
        name: "Shazam",
        img:"https://www.ecranlarge.com/uploads/image/001/080/shazam-affiche-1080678.jpg",
        description:"zearzearzaerzaerzaerazerzaezea"
    },
    {
        name: "Halloween",
        img:"http://fr.web.img5.acsta.net/pictures/18/09/19/14/32/4251359.jpg",
        description:"azerzaerzerzerzerzerzaeraz"
    },
    {
        name: "From Hell",
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/6/66/From_Hell_film.jpg/220px-From_Hell_film.jpg",
        description:"azrzaerzarzrzarazzarzrze"
    }
] 


class Filme extends Component {
    constructor(props) {
        super(props)  
    } 
    render() {
        return (
            <div className="cadre">
                <div className="Liste">
                    {tab.map((el, index) => <Item item={el} key={index} />)} 
                </div>
            </div > 
        ) 
    }}

Filme = Hoc(Filme);
export default Filme;



 

 