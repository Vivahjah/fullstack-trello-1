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
    { id: "col2", name: "In progress", index: 1 },
    { id: "col3", name: "Done", index: 2 }

]

const defaultCards: CardType[] = [
    { id: "asdf1", name: "Task 1", order: 0, columnId: "col1" },
    { id: "asdf2", name: "Task 5", order: 0, columnId: "col1" },
    { id: "asdx", name: "Task 2", order: 1, columnId: "col2" },
    { id: "asdz", name: "Task 3", order: 2, columnId: "col3" },
]

const Board = () => {


    const [cards, setCards] = useState<CardType[]>(defaultCards);
    const [columns, setColumns] = useState(defaultColumns);
    return (
        <>
            <div className="flex gap-4">
                {columns.map((column) => (
                    <Column key={column.id}
                    setCards={setCards}
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