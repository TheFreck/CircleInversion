import React, { useEffect, useState } from "react";
import PointPairs from "./PointPairs";

export const PointsCircle = ({ cx, cy, x, y, r, refR, n }) => {
    const [pointPositions, setPointPositions] = useState([]);

    useEffect(() => {
        const positions = [];
        for (var i = 0; i < Math.PI * 2; i += Math.PI * 2 / n) {
            const red = -Math.cos(i) * 155 + 50;
            const green = -Math.cos(i) * 10 + 105;
            const blue = -Math.cos(i) * 20 + 35;
            const point = { x: Math.cos(i) * r + x, y: Math.sin(i) * r + y, red, green, blue };
            positions.push(point);
        }
        setPointPositions(positions);
    }, [])

    return <>
        {pointPositions.map((p, i) =>
            <PointPairs
                key={i}
                cx={cx}
                cy={cy}
                x={p.x}
                y={p.y}
                r={refR}
                red={p.red}
                green={p.green}
                blue={p.blue}
            />
        )}
    </>
}

export default PointsCircle;