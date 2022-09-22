import { useState } from 'react';
import jsxToString from 'jsx-to-string';
import './App.css';
import HeaderInfo from './HeaderInfo';
import ReactCurvedText from './lib';

function App() {
    const [width, setWidth] = useState(370);
    const [height, setHeight] = useState(300);
    const [cx, setCx] = useState(190);
    const [cy, setCy] = useState(140);
    const [rx, setRx] = useState(100);
    const [ry, setRy] = useState(100);
    const [startOffset, setStartOffset] = useState(50);
    const [reversed, setReversed] = useState(false);
    const [text, setText] = useState('react-curved-text');
    const [fontSize, setFontSize] = useState(24);
    const [textPathFill, setTextPathFill] = useState();
    const [dy, setDy] = useState(0);
    const [fill, setFill] = useState();
    const [rotate, setRotate] = useState(0);

    const textProps = fontSize ? { style: { fontSize: fontSize } } : null;
    const textPathProps = textPathFill ? { fill: textPathFill } : null;
    const tspanProps = dy ? { dy: dy } : null;
    const ellipseProps = fill ? { style: `fill: ${fill}` } : null;
    const svgProps = rotate ? { style: { transform: `rotate(${rotate}deg)` } } : null;

    const currentJsx = (
        <ReactCurvedText
            width={width}
            height={height}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            startOffset={startOffset}
            reversed={reversed}
            text={text}
            textProps={textProps}
            textPathProps={textPathProps}
            tspanProps={tspanProps}
            ellipseProps={ellipseProps}
            svgProps={svgProps}
        />
    );

    let currentJsxString = jsxToString(currentJsx, {
        displayName: 'ReactCurvedText',
        useFunctionCode: true,
    });
    currentJsxString = "import ReactCurvedText from 'react-curved-text';\n\n" + currentJsxString;
    return (
        <div className="App">
            <HeaderInfo />
            <div className="exampleDemo">
                <br />
                <h2>
                    <a href={'https://www.npmjs.com/package/react-curved-text'} target="_blank" rel="noreferrer">
                        react-curved-text
                    </a>
                </h2>

                <div className="installationDiv">
                    <pre>npm install react-curved-app</pre>
                    <pre>yarn add react-curved-app</pre>
                </div>

                <h3>
                    <a
                        href="https://github.com/obss/react-curved-text/blob/master/src/App.js"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on GitHub
                    </a>
                </h3>
                <div className="exampleWrapperDiv">{currentJsx}</div>
                <div className="settingsDiv">
                    <div className="settingsItem">
                        <label htmlFor="text">text:</label>
                        <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="reversed">reversed:</label>
                        <input
                            type="checkbox"
                            id="reversed"
                            checked={reversed}
                            onChange={(e) => setReversed(e.target.checked)}
                        />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="startOffset">startOffset:</label>
                        <input
                            type="number"
                            id="startOffset"
                            value={startOffset}
                            onChange={(e) => setStartOffset(e.target.value)}
                        />
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={startOffset}
                            onChange={(e) => setStartOffset(e.target.value)}
                        />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="width">width:</label>
                        <input type="number" id="width" value={width} onChange={(e) => setWidth(e.target.value)} />
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                        />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="height">height:</label>
                        <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="cx">cx:</label>
                        <input type="number" id="cx" value={cx} onChange={(e) => setCx(e.target.value)} />
                        <input type="range" min="0" max="1000" value={cx} onChange={(e) => setCx(e.target.value)} />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="cy">cy:</label>
                        <input type="number" id="cy" value={cy} onChange={(e) => setCy(e.target.value)} />
                        <input type="range" min="0" max="1000" value={cy} onChange={(e) => setCy(e.target.value)} />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="rx">rx:</label>
                        <input type="number" id="rx" value={rx} onChange={(e) => setRx(e.target.value)} />
                        <input type="range" min="0" max="1000" value={rx} onChange={(e) => setRx(e.target.value)} />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="ry">ry:</label>
                        <input type="number" id="ry" value={ry} onChange={(e) => setRy(e.target.value)} />
                        <input type="range" min="0" max="1000" value={ry} onChange={(e) => setRy(e.target.value)} />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="fontSize">textProps.style.fontSize:</label>
                        <input
                            type="number"
                            id="fontSize"
                            value={fontSize}
                            onChange={(e) => setFontSize(e.target.value)}
                        />
                        <input
                            type="range"
                            min="0"
                            max="60"
                            value={fontSize}
                            onChange={(e) => setFontSize(e.target.value)}
                        />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="textPathFill">textPathProps.style.fill:</label>
                        <input
                            type="color"
                            id="textPathFill"
                            checked={textPathFill}
                            onChange={(e) => setTextPathFill(e.target.value)}
                        />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="dy">tspanProps.dy:</label>
                        <input type="number" id="dy" value={dy} onChange={(e) => setDy(e.target.value)} />
                        <input type="range" min="-60" max="60" value={dy} onChange={(e) => setDy(e.target.value)} />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="fill">ellipseProps.style.fill:</label>
                        <input type="color" id="fill" checked={fill} onChange={(e) => setFill(e.target.value)} />
                    </div>
                    <div className="settingsItem">
                        <label htmlFor="rotate">svgProps.style.rotate:</label>
                        <input type="number" id="rotate" value={rotate} onChange={(e) => setRotate(e.target.value)} />
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={rotate}
                            onChange={(e) => setRotate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="currentJsxDiv">
                    <h3>Current JSX</h3>
                    <span>{currentJsxString}</span>
                </div>
                <div className="apiDiv">
                    <h3>API</h3>
                    <table className="apiTable">
                        <thead>
                            <tr>
                                <th>Prop</th>
                                <th>Type</th>
                                <th>Required</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>text</td>
                                <td>string</td>
                                <td>yes</td>
                                <td>Text to be displayed</td>
                            </tr>
                            <tr>
                                <td>width</td>
                                <td>number</td>
                                <td>yes</td>
                                <td>Width of the SVG</td>
                            </tr>
                            <tr>
                                <td>height</td>
                                <td>number</td>
                                <td>yes</td>
                                <td>Height of the SVG</td>
                            </tr>
                            <tr>
                                <td>cx</td>
                                <td>number</td>
                                <td>yes</td>
                                <td>Center x of the ellipse</td>
                            </tr>
                            <tr>
                                <td>cy</td>
                                <td>number</td>
                                <td>yes</td>
                                <td>Center y of the ellipse</td>
                            </tr>
                            <tr>
                                <td>rx</td>
                                <td>number</td>
                                <td>yes</td>
                                <td>Radius x of the ellipse</td>
                            </tr>
                            <tr>
                                <td>ry</td>
                                <td>number</td>
                                <td>yes</td>
                                <td>Radius y of the ellipse</td>
                            </tr>
                            <tr>
                                <td>startOffset</td>
                                <td>number</td>
                                <td>no</td>
                                <td>Start offset of the text</td>
                            </tr>
                            <tr>
                                <td>reversed</td>
                                <td>boolean</td>
                                <td>no</td>
                                <td>Reverse the text path</td>
                            </tr>
                            <tr>
                                <td>textProps</td>
                                <td>object</td>
                                <td>no</td>
                                <td>Props to be passed to the text element</td>
                            </tr>
                            <tr>
                                <td>textPathProps</td>
                                <td>object</td>
                                <td>no</td>
                                <td>Props to be passed to the textPath element</td>
                            </tr>
                            <tr>
                                <td>tspanProps</td>
                                <td>object</td>
                                <td>no</td>
                                <td>Props to be passed to the tspan element</td>
                            </tr>
                            <tr>
                                <td>ellipseProps</td>
                                <td>object</td>
                                <td>no</td>
                                <td>Props to be passed to the ellipse element</td>
                            </tr>
                            <tr>
                                <td>svgProps</td>
                                <td>object</td>
                                <td>no</td>
                                <td>Props to be passed to the svg element</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
