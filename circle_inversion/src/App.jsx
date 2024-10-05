import { useCallback, useEffect, useState } from 'react'
import './App.css'
import PointsCircle from './Components/PointsCircle';
import PointsSquare from './Components/PointsSquare';
import PointsGrid from './Components/PointsGrid';
import PointsTriangle from './Components/PointsTriangle';
import PointPairs from './Components/PointPairs';

const styles = {
    referenceButton: {
        background: "#596a01",
        color: "white"
    },
    circleButton: {
        background: "green",
        color: "ivory"
    },
    squareButton: {
        background: "green",
        color: "ivory"
    },
    pointButton: {
        background: "green",
        color: "ivory"
    },
    projectionButton: {
        background: "#596a01",
        color: "ivory"
    },
    leftPanel: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: 0,
        bottom: 0,
        left: 0,
        width: "20vw",
        overflow: "auto"
    },
    page: {
        display: "flex",
        position: "relative",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        padding: 0,
        margin: 0
    },
    rightPanel: {
        display: "flex",
        position: "relative",
        top: 0,
        right: 0,
        bottom: 0,
        width: "80vw",
        background: "tan",
    }
}
function App() {
    const [refCircleX, setRefCircleX] = useState(0); //1
    const [refCircleY, setRefCircleY] = useState(0);  //2
    const [refCircleR, setRefCircleR] = useState(50); //3
    const [circleX, setCircleX] = useState(30);          //4
    const [circleY, setCircleY] = useState(0);        //5
    const [circleR, setCircleR] = useState(20);       //6
    const [squareW, setSquareW] = useState(0); //7
    const [squareH, setSquareH] = useState(0); //8
    const [squareX, setSquareX] = useState(0);
    const [squareY, setSquareY] = useState(0);
    const [tSide1, setTside1] = useState(0); //9
    const [tSide2, setTside2] = useState(0); //10
    const [tSide3, setTside3] = useState(0); //11
    const [triX, setTriX] = useState(0); //12
    const [triY, setTriY] = useState(0); //13
    const [isCircle, setIsCircle] = useState(false);
    const [isTriangle, setIsTriangle] = useState(false);
    const [isSquare, setIsSquare] = useState(false);
    const [squarePoints, setSquarePoints] = useState(100);
    const [innerR, setInnerR] = useState(0);
    const [innerX, setInnerX] = useState(0);
    const [innerY, setInnerY] = useState(0);
    const [isPoint, setIsPoint] = useState(false);
    const [pointX, setPointX] = useState(0);
    const [pointY, setPointY] = useState(0);
    const [isReference, setIsReference] = useState(false);
    const [color, setColor] = useState("");
    const [isProjection, setIsProjection] = useState(false);
    const [projectionX, setProjectionX] = useState(0);
    const [projectionY, setProjectionY] = useState(0);
    const [projectionR, setProjectionR] = useState(0);

    const SvgCallback = () => <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80vw"
        height="100vh"
        viewBox="-150 -100 300 200"
    >
        <circle cx={refCircleX} cy={refCircleY} r={refCircleR} stroke="red" strokeWidth={.5} />
        <circle cx={refCircleX} cy={refCircleY} r={.1} stroke="red" strokeWidth={.5} />
        {isCircle && <PointsCircle
            cx={refCircleX}
            cy={refCircleY}
            x={circleX}
            y={circleY}
            r={circleR}
            n={100}
            refR={refCircleR}
        />}
        {isSquare && squareH && squareW && <PointsSquare
            cx={refCircleX}
            cy={refCircleY}
            x1={squareX - squareW / 2}
            y1={squareY - squareH / 2}
            x2={squareX + squareW / 2}
            y2={squareY + squareH / 2}
            refR={refCircleR}
            n={squarePoints}
        />}
        {isTriangle && <PointsTriangle
            cx={refCircleX}
            cy={refCircleY}
            x1={innerX - innerR}
            y1={innerY - innerR}
            x2={innerX - innerR}
            y2={innerY + innerR}
            x3={innerX + innerR}
            y3={innerY}
            r={innerR}
            refR={refCircleR}
            n={100}
        />}
        {isPoint && <PointPairs
            cx={refCircleX}
            cy={refCircleY}
            x={pointX}
            y={pointY}
            r={refCircleR}
            red={150}
            green={150}
            blue={150}
        />}
        {isProjection && <>
            <circle
            cx={projectionX}
            cy={projectionY}
            r={projectionR}
            stroke="green"
            strokeWidth=".5"
            />
            <circle
                cx={projectionX}
                cy={projectionY}
                r={.1}
                stroke="green"
                strokeWidth=".5"
                />
            </>
        }
    </svg>;
    const CircleControls = ({ setCircleX, circleX, setCircleY, circleY, setCircleR, circleR }) => <div>
        <label>X: </label>
        <input type="number" value={circleX} onChange={(x) => setCircleX(parseInt(x.target.value))} />
        <br />
        <label>Y: </label>
        <input type="number" value={circleY} onChange={(y => setCircleY(parseInt(y.target.value)))} />
        <br />
        <label>R: </label>
        <input type="number" value={circleR} onChange={(r => setCircleR(parseInt(r.target.value)))} />
        <br />
    </div>;

    const SquareControls = () => <>
        <label>Width</label>
        <br />
        <input type="number" value={squareW} onChange={(w => setSquareW(parseInt(w.target.value)))} />
        <br />
        <label>Height</label>
        <br />
        <input type="number" value={squareH} onChange={(w => setSquareH(parseInt(w.target.value)))} />
        <br />
        <label>X: </label>
        <br />
        <input type="number" value={circleX} onChange={(x) => setCircleX(parseInt(x.target.value))} />
        <br />
        <label>Y: </label>
        <br />
        <input type="number" value={circleY} onChange={(y => setCircleY(parseInt(y.target.value)))} />
    </>;

    const TriangleControls = () => <>
        <label>Side1 Length</label>
        <br />
        <input type="number" value={tSide1} onChange={(s1) => s1.target.value ? setTside1(parseInt(s1.target.value)) : 0} />
        <br />
        <label>Side2 Length</label>
        <input type="number" value={tSide2} onChange={(s2) => s2.target.value ? setTside2(parseInt(s2.target.value)) : 0} />
        <br />
        <label>Side3 Length</label>
        <input type="number" value={tSide3} onChange={(s3) => s3.target.value ? setTside3(parseInt(s3.target.value)) : 0} />
        <br />
        <label>Center X</label>
        <input type="number" value={triX} onChange={(x) => x.target.value ? setTriX(parseInt(x.target.value)) : 0} />
        <br />
        <label>Center Y</label>
        <input type="number" value={triY} onChange={(y) => y.target.value ? setTriY(parseInt(y.target.value)) : 0} />
    </>

    const PointControls = () => <>
        <label>X: </label>
        <input type="number" value={pointX} onChange={(x) => x.target.value ? setPointX(parseInt(x.target.value)) : 0} />
        <br />
        <label>Y: </label>
        <input type="number" value={pointY} onChange={(y) => y.target.value ? setPointX(parseInt(y.target.value)) : 0} />
        <br />
    </>


    return (
        <div style={styles.page}>
            <div
                style={styles.leftPanel}
            >
                <input type="color" onChange={(c) => setColor(c.target.value)} />
                <div>{color}</div>
                <h2>Shapes</h2>
                <button style={styles.referenceButton} onClick={() => setIsReference(!isReference)}>Reference Circle</button>
                {isReference && <>
                    <label>X: </label>
                    <input type="number" label="referenceX" value={refCircleX} onChange={(x) => x.target.value ? setRefCircleX(parseInt(x.target.value)) : 10} />
                    <label>Y: </label>
                    <input type="number" label="referenceY" value={refCircleY} onChange={(y) => y.target.value ? setRefCircleY(parseInt(y.target.value)) : 10} />
                    <label>R: </label>
                    <input type="number" label="referenceRadius" value={refCircleR} onChange={(r) => r.target.value ? setRefCircleR(parseInt(r.target.value)) : 50} />
                </>}
                <br />
                <button style={styles.circleButton} label="circle" onClick={() => setIsCircle(!isCircle)}>Circle</button>
                {isCircle && <>
                    <label>X: </label>
                    <input type="number" value={circleX} onChange={(x) => x.target.value ? setCircleX(parseInt(x.target.value)) : 0} />
                    <label>Y: </label>
                    <input type="number" value={circleY} onChange={(y) => y.target.value ? setCircleY(parseInt(y.target.value)) : 0} />
                    <label>R: </label>
                    <input type="number" value={circleR} onChange={(r) => r.target.value ? setCircleR(parseInt(r.target.value)) : 0} />
                </>}
                <br />
                {/*<button onClick={() => setIsTriangle(!isTriangle)} >Triangle</button>*/}
                {/*isTriangle && <>
                <label>Side1 Length</label>
                <br />
                <input type="number" value={tSide1} onChange={(s1) => s1.target.value ? setTside1(parseInt(s1.target.value)) : 0} />
                <br />
                <label>Side2 Length</label>
                <input type="number" value={tSide2} onChange={(s2) => s2.target.value ? setTside2(parseInt(s2.target.value)) : 0} />
                <br />
                <label>Side3 Length</label>
                <input type="number" value={tSide3} onChange={(s3) => s3.target.value ? setTside3(parseInt(s3.target.value)) : 0} />
                <br />
                <label>Center X</label>
                <input type="number" value={triX} onChange={(x) => x.target.value ? setTriX(parseInt(x.target.value)) : 0} />
                <br />
                <label>Center Y</label>
                <input type="number" value={triY} onChange={(y) => y.target.value ? setTriY(parseInt(y.target.value)) : 0} />
            </>
            <br />*/}
                <button style={styles.squareButton} onClick={() => setIsSquare(!isSquare)} >Square</button>
                {isSquare && <>
                    <label>Width</label>
                    <input type="number" value={squareW} onChange={(w) => w.target.value ? setSquareW(parseInt(w.target.value)) : 0} />
                    <label>Height</label>
                    <input type="number" value={squareH} onChange={(h) => h.target.value ? setSquareH(parseInt(h.target.value)) : 0} />
                    <label>X: </label>
                    <input type="number" value={squareX} onChange={(x) => x.target.value ? setSquareX(parseInt(x.target.value)) : 0} />
                    <label>Y: </label>
                    <input type="number" value={squareY} onChange={(y) => y.target.value ? setSquareY(parseInt(y.target.value)) : 0} />
                    <label>Points: </label>
                    <input type="number" value={squarePoints} onChange={(p) => setSquarePoints(parseInt(p.target.value))} />
                </>}
                <br />
                <button style={styles.pointButton} onClick={() => setIsPoint(!isPoint)} >Point</button>
                {isPoint && <>
                    <label>X: </label>
                    <input type="number" value={pointX} onChange={(x) => x.target.value ? setPointX(parseInt(x.target.value)) : 0} />
                    <label>Y: </label>
                    <input type="number" value={pointY} onChange={(y) => y.target.value ? setPointY(parseInt(y.target.value)) : 0} />
                </>}
                <br />
                <button style={styles.projectionButton} onClick={() => setIsProjection(!isProjection)} >Projection Circle</button>
                {isProjection && <>
                    <label>X: </label>
                    <input type="number" value={projectionX} onChange={(x) => setProjectionX(parseInt(x.target.value))} />
                    <label>Y: </label>
                    <input type="number" value={projectionY} onChange={(y) => setProjectionY(parseInt(y.target.value))} />
                    <label>R: </label>
                    <input type="number" value={projectionR} onChange={(r) => setProjectionR(parseInt(r.target.value))} />
                </>}
            </div>
            <div
                style={styles.rightPanel}
            >
                <SvgCallback />
            </div>
        </div>
    );
}

export default App;