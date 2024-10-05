import React, { useEffect, useState } from "react";
import PointPairs from "./PointPairs";

export const PointsSquare = ({cx, cy, x1, x2, y1, y2, refR, n }) => {
    const [pointPositions, setPointPositions] = useState([]);

    useEffect(() => {
        const positions = [];
        for (var i = 0; i < n; i++) {
            const stepX = (x2 - x1) / n;
            const stepY = (y2 - y1) / n;
            const red = -Math.cos(i) * 155 + 50;
            const green = -Math.cos(i) * 10 + 105;
            const blue = -Math.cos(i) * 100 + 35;
            const point1 = { x: x1 + i * stepX, y: y1, red, green, blue };
            const point2 = { x: x1, y: y1 + i * stepY, red, green, blue };
            const point3 = { x: x2 - i * stepX, y: y2, red, green, blue };
            const point4 = { x: x2, y: y2 - i * stepY, red, green, blue };
            positions.push(point1);
            positions.push(point2);
            positions.push(point3);
            positions.push(point4);
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

export default PointsSquare;