/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ReactSortable } from "react-sortablejs";
import { ReactSortable } from "react-sortablejs";
import { CardType } from "./board";
import { SetStateAction } from "react";

type ColumnProps = {

  name: string;
  cards: CardType[];
  setCards: SetStateAction<any>;
  id: string;

}



const Column = ({ id, name, cards, setCards }: ColumnProps) => {
  const handleCardUpdate = (sortedCards: CardType[], newColumnId: string) => {
    setCards((prevCards: CardType[]) => {
      // Create a map of all cards for quick lookup
      const cardMap = new Map(prevCards.map(card => [card.id, card]));

      // Update the cards that were sorted
      const updatedCards = sortedCards.map((card, index) => ({
        ...cardMap.get(card.id)!, // Spread all existing properties
        order: index,             // Update the order based on new position
        columnId: newColumnId     // Update column if it changed
      }));

      // Merge with unchanged cards (those not in this column)
      const otherCards = prevCards.filter(card =>
        !sortedCards.some(sc => sc.id === card.id)
      );

      return [...updatedCards, ...otherCards];
    });
  }



  return (
    <div className="w-48 bg-white shadow-md rounded-md p-2">
      <h3>{name}</h3>
      <ReactSortable list={cards}
        setList={cards => handleCardUpdate(cards, id)}
        group="cards"
        className="min-h-12"
        ghostClass="opacity-10"
      >

        {cards.map((card) => (
          <div key={card.id} className="border bg-white my-2 p-2 rounded-md">
            <span>{card.name}</span>
          </div>
        ))}

      </ReactSortable>
    </div>


  )
}

export default Column