import React, { useEffect, useId, useRef, useState } from 'react';
import SVGPathCommander from 'svg-path-commander';
import { isNullOrUndefined } from './ControlUtils';

const ReactCurvedText = (props) => {
    const {
        width,
        height,
        cx,
        cy,
        rx,
        ry,
        startOffset,
        reversed,
        text,
        svgProps,
        ellipseProps,
        textPathProps,
        textProps,
        tspanProps,
    } = props;
    const [rendered, setRendered] = useState(false);
    const uniqueId = useId();
    const ellipseId = `ellipse-id${uniqueId.replaceAll(':', '-').substring(0, uniqueId.length - 1)}`;
    const svgRef = useRef();

    useEffect(() => {
        if (svgRef.current) {
            const myEllipseAttr = {
                id: ellipseId,
                type: 'ellipse',
                rx: rx,
                ry: ry,
                cx: cx,
                cy: cy,
                style: 'fill: none;',
                ...ellipseProps,
            };
            const mySvg = svgRef.current;
            const newEllipsePath = SVGPathCommander.shapeToPath(myEllipseAttr, true);

            const alreadyAddedChild = document.getElementById(ellipseId);
            if (alreadyAddedChild) {
                alreadyAddedChild.remove();
            }

            mySvg.prepend(newEllipsePath);

            if (reversed) {
                const currentPath = newEllipsePath.getAttribute('d');
                const pathValueReversed = SVGPathCommander.reversePath(currentPath);
                const pathValueReversedStr = SVGPathCommander.pathToString(pathValueReversed);
                newEllipsePath.setAttribute('d', pathValueReversedStr);
            }

            setRendered(true);
        }
    }, [svgRef.current, reversed, width, height, svgProps, cx, cy, rx, ry, ellipseProps]);

    if (isNullOrUndefined(width)) {
        throw new Error('ReactCurvedText Error: width is required');
    }

    if (isNullOrUndefined(height)) {
        throw new Error('ReactCurvedText Error: height is required');
    }

    if (isNullOrUndefined(cx)) {
        throw new Error('ReactCurvedText Error: cx is required');
    }

    if (isNullOrUndefined(cy)) {
        throw new Error('ReactCurvedText Error: cy is required');
    }

    if (isNullOrUndefined(rx)) {
        throw new Error('ReactCurvedText Error: rx is required');
    }

    if (isNullOrUndefined(ry)) {
        throw new Error('ReactCurvedText Error: ry is required');
    }

    if (isNullOrUndefined(text)) {
        throw new Error('ReactCurvedText Error: text is required');
    }

    const textKey = JSON.stringify({
        width,
        height,
        cx,
        cy,
        rx,
        ry,
        startOffset,
        reversed,
        text,
        svgProps,
        ellipseProps,
        textPathProps,
        textProps,
        tspanProps,
        rendered,
    });

    return (
        <svg ref={svgRef} height={height} width={width} {...svgProps}>
            <text key={textKey} {...textProps}>
                <textPath xlinkHref={`#${ellipseId}`} startOffset={startOffset} {...textPathProps}>
                    <tspan {...tspanProps}>{text}</tspan>
                </textPath>
            </text>
        </svg>
    );
};

export default ReactCurvedText;
