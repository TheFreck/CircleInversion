import React, { useEffect, useState } from "react";
import PointPairs from "./PointPairs";
import PointsSquare from "./PointsSquare";

const PointsLine = ({cx, cy, x1, y1, x2, y2, s, n, r, g, b }) => {
    const linePoints = [];
    const xStep = (x2 - x1) / n;
    const yStep = (y2 - y1) / n;
    for (var i = 0; i < n; i++) {
        linePoints.push({ x: x1 + i * xStep, y: y1 + i * yStep });
    }
    return linePoints.map((p, i) =>
        <>
            <line
                key={`hLine-${i}`}
                cx={cx}
                cy={cy}
                x1={p.x}
                y1={p.y}
                x2={linePoints[i - 1]?.x}
                y2={p.y}
                stroke="white"
            />
            <line
                key={`vLine-${i}`}
                cx={cx}
                cy={cy}
                x1={p.x}
                y1={p.y}
                x2={p.x}
                y2={linePoints[i - 1]?.y}
                stroke="white"
            />
            {/* <PointPairs
                key={`pair=${i}`}
                x={p.x}
                y={p.y}
                r={s}
                red={r}
                green={g}
                blue={b}
            /> */}
        </>
    );
}

export const PointsGrid = ({ s, n }) => {
    const [pointPositions, setPointPositions] = useState([]);

    useEffect(() => {
        const positions = [];
        let start = -s / 2;
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                let red = -Math.cos(i) * 155 + 100;
                let green = -Math.cos(i) * 155 + 100;
                let blue = -Math.cos(i) * 155 + 100;
                positions.push({ x: start + i * s / n, y: start + j * s / n, red, green, blue });
            }
        }
        setPointPositions(positions);
    }, []);

    // return pointPositions.map((p,i) => 
    //     <>
    //         <PointsSquare
    //             key={i}
    //             x1={p.x}
    //             y1={p.y}
    //             x2={p.x+pointPositions[i+1]?.x}
    //             y2={p.y+pointPositions[i+1]?.y}
    //             refR={s}
    //             n={n}
    //         />
    //         {/* <PointsLine
    //             x1={p.x}
    //             y1={p.y}
    //             x2={pointPositions[i+1]?.x}
    //             y2={p.y}
    //             s={s}
    //             n={1}
    //             r={p.red}
    //             g={p.green}
    //             b={p.blue}
    //         />
    //         <PointsLine
    //             x1={p.x}
    //             y1={p.y}
    //             x2={p.x}
    //             y2={pointPositions[i+1]?.y}
    //             s={s}
    //             n={1}
    //             r={p.red}
    //             g={p.green}
    //             b={p.blue}
    //         /> */}
    //     </>
    // );

    return pointPositions.map((p, i) =>
        <>
            <PointPairs
                key={i}
                x={p.x}
                y={p.y}
                r={s}
                red={p.red}
                green={p.green}
                blue={p.blue}
            />
        </>
    );
}

export default PointsGrid;