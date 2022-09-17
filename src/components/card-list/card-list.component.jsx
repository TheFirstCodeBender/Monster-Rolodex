import { Component } from "react";
import Card from "../card/mon-card.component";

import './card-list.style.css'
class CardList extends Component {
    
    render() {
        
        const { monsters } = this.props;
       
        return (
            <div className="card-list">
                {monsters.map(
                (monster, i) => {
                    const { name, email } = monster
                        return <Card name={name} email={email} id={i} />
          })}
        </div>
        )
    }
}

export default CardList