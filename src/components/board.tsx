"use client";

import { useState } from "react";
import Column from "./Column"
import NewColumnForms from "./forms/NewColumnForms"


export type CardType = {
    id: string;
    name: string;
    order: number;
    columnId: string;
}

const defaultColumns = [
    { id: "col1", name: "Todo", index: 0 },
    { id: "col2", name: "In Progress", index: 1 },
    { id: "col3", name: "Done", index: 2 },

]

const defaultCards: CardType[] = [
    { id: "adszf", name: "Card 1", order: 0, columnId: "col1" },
    // { id: "adszf", name: "Card 4", order: 0, columnId: "col1" },
    { id: "qwerz", name: "Card 2", order: 1, columnId: "col2" },
    { id: "zxcvb", name: "Card 3", order: 2, columnId: "col3" },
]



const Board = () => {
    const [cards, setCards] = useState<CardType[]>(defaultCards);
    const [columns, setColumns] = useState(defaultColumns);
    return (
        <>
            <div className="flex gap-4">
                {columns.map(column => (
                    <Column
                        setCards={setCards}
                        key={column.index}
                        {...column}
                        cards={cards.filter(card => card.columnId === column.id)}
                    />
                ))}
                <NewColumnForms />
            </div>
        </>
    )
}

export default Board