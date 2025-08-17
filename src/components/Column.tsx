import { ReactSortable } from "react-sortablejs";
import { CardType } from "./board";

type ColumnProps = {
  id: string;
  name: string;
  cards: CardType[];
  setCards: (cards: CardType[]) => void;
}



const Column = ({id,  name, cards, setCards }: ColumnProps) => {

  const setCardsForColumn = (cards: CardType[], columnId : string) => {
    setCards(cards.map(card => ({ ...card, columnId: id })));
    console.log({cards, columnId });
  }
  return (
    <div className="w-48 bg-white shadow-md rounded-md p-2">
      <h3>{name}</h3>
      <ReactSortable
        list={cards}
        setList={cards => setCardsForColumn(cards, id)}
        group="cards"
      >
        {cards.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
        {cards.map(card => (
          <div key={card.id} className="border p-4 rounded-md my-2">
            <span>{card.name}</span>
          </div>
        ))}
      </ReactSortable>
    </div>
  )
}

export default Column