import React, { useEffect, useState } from "react";
import PointPairs from "./PointPairs";

export const PointsTriangle = ({ x1, x2, x3, y1, y2, y3, r, n }) => {
    const [pointPositions, setPointPositions] = useState([]);

    useEffect(() => {
        const positions = [{ x: x1, y: y1, red: 100, green: 100, blue: 100 }, { x: x2, y: y2, red: 100, green: 100, blue: 100 }, { x: x3, y: y3, red: 100, green: 100, blue: 100 }];
        for (var i = 0; i < n; i++) {
            const red = 100;
            const green = 100;
            const blue = 100;
            positions.push({ x: (x2 - x1) / n + i, y: (y2 - y1) / n + i, red, green, blue });
            positions.push({ x: (x3 - x1) / n + i, y: (y3 - y1) / n + i, red, green, blue });
            positions.push({ x: (x3 - x2) / n + i, y: (y3 - y2) / n + i, red, green, blue });
        }
        console.log("positions: ", positions);
        setPointPositions(positions);
    }, [])

    return <>
        {pointPositions.map((p, i) =>
            <PointPairs
                key={i}
                x={p.x}
                y={p.y}
                r={r}
                red={p.red}
                green={p.green}
                blue={p.blue}
            />
        )}
    </>
}

export default PointsTriangle;