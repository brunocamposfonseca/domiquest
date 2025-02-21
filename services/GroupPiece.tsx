import React from "react";
import Piece from "@/app/components/Piece";
import { DEL_NUM, PIECES_PER_PLAYER } from "../lib/constants/constants";
import { generateUniqueRandomNumbers } from "../lib/utils";

export default function Group() {
    const [userPieces, setUserPieces] = React.useState<number[]>([]);
    const [opponentPieces, setOpponentPieces] = React.useState<number[][]>([[], [], []]);
    const selectedNumbers = React.useRef<Set<number>>(new Set());

    React.useEffect(() => {
        const allPieces = generateUniqueRandomNumbers(
            PIECES_PER_PLAYER * 4,
            DEL_NUM,
            selectedNumbers.current
        );

        setUserPieces(allPieces.slice(0, PIECES_PER_PLAYER));
        setOpponentPieces([
            allPieces.slice(PIECES_PER_PLAYER, PIECES_PER_PLAYER * 2),
            allPieces.slice(PIECES_PER_PLAYER * 2, PIECES_PER_PLAYER * 3),
            allPieces.slice(PIECES_PER_PLAYER * 3, PIECES_PER_PLAYER * 4),
        ]);
    }, []);

    return (
        <div>
            <h1>User Pieces</h1>
            <div className="flex gap-4 ">
                {userPieces.map((piece, index) => (
                    <Piece w={60} h={110} key={index} piece={piece} />
                ))}
            </div>

            <h2>Opponents' Pieces</h2>
            {opponentPieces.map((pieces, oppIndex) => (
                <div key={oppIndex}>
                    <h3>Opponent {oppIndex + 1}</h3>
                    <div className="flex gap-4">
                        {pieces.map((piece, index) => (
                            <Piece w={50} h={100} key={index} piece={piece} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}