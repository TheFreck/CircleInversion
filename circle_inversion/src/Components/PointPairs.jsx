import React, { useEffect } from "react";

export const PointPairs = ({ cx, cy, x, y, r, red, green, blue }) => {
    const Y = (r * r * y) / (x * x + y * y);
    const X = (r * r * x) / (x * x + y * y);

    return <>
        <circle cx={x+cx} cy={y+cy} r={.5} fill={`rgb(${red}, ${green}, ${blue})`} strokeWidth={.1} />
        <circle cx={X+cx} cy={Y+cy} r={.5} fill={`rgb(${red}, ${green}, ${blue})`} strokeWidth={.1} />
        <line
            x1={x+cx}
            y1={y+cy}
            x2={X+cx}
            y2={Y+cy}
            stroke={`rgb(${red}, ${green}, ${blue})`}
            strokeWidth={.1}
        />
        <line
            x1={0+cx}
            y1={0+cy}
            x2={x+cx}
            y2={y+cy}
            stroke={`rgb(${red}, ${green}, ${blue})`}
            strokeWidth={.01}
        />
    </>
}

export default PointPairs;