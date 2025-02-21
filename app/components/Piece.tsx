import React, { JSX } from "react";

export interface PieceProps {
    piece: number;
    w: number;
    h: number;
}

const PIECE_CONTENT: Record<number, JSX.Element> = {
    0: <></>,
    10: <circle cx="50" cy="150" r="8" fill="black" />,
    11: (
        <>
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
        </>
    ),
    20: (
        <>
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    21: (
        <>
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    22: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    30: (
        <>
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    31: (
        <>
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    32: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    33: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    40: (
        <>
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    41: (
        <>
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    42: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    43: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    44: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="25" r="8" fill="black" />
            <circle cx="25" cy="75" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    50: (
        <>
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    51: (
        <>
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    52: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    53: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    54: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="25" r="8" fill="black" />
            <circle cx="25" cy="75" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    55: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="25" r="8" fill="black" />
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="25" cy="75" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="50" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    60: (
        <>
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="150" r="8" fill="black" />
            <circle cx="75" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    61: (
        <>
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="150" r="8" fill="black" />
            <circle cx="75" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    62: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="150" r="8" fill="black" />
            <circle cx="75" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    63: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="150" r="8" fill="black" />
            <circle cx="75" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    64: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="25" r="8" fill="black" />
            <circle cx="25" cy="75" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="150" r="8" fill="black" />
            <circle cx="75" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    65: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="25" r="8" fill="black" />
            <circle cx="50" cy="50" r="8" fill="black" />
            <circle cx="25" cy="75" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="150" r="8" fill="black" />
            <circle cx="75" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
    66: (
        <>
            <circle cx="25" cy="25" r="8" fill="black" />
            <circle cx="75" cy="25" r="8" fill="black" />
            <circle cx="25" cy="50" r="8" fill="black" />
            <circle cx="75" cy="50" r="8" fill="black" />
            <circle cx="25" cy="75" r="8" fill="black" />
            <circle cx="75" cy="75" r="8" fill="black" />
            <circle cx="25" cy="120" r="8" fill="black" />
            <circle cx="75" cy="120" r="8" fill="black" />
            <circle cx="25" cy="150" r="8" fill="black" />
            <circle cx="75" cy="150" r="8" fill="black" />
            <circle cx="25" cy="175" r="8" fill="black" />
            <circle cx="75" cy="175" r="8" fill="black" />
        </>
    ),
};

export default function Piece({ piece, w, h }: PieceProps) {
    const content = PIECE_CONTENT[piece] || null;

    return (
        <svg width={w} height={h} viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="90" height="190" rx="10" ry="10" fill="white" stroke="black" strokeWidth="5" />
            <line x1="5" y1="100" x2="95" y2="100" stroke="black" strokeWidth="5" />
            {content}
        </svg>
    );
}