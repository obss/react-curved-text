# react-curved-text <!-- omit in toc -->

> react-curved-text a library for creating circular / curved texts in React projects.

<img alt="exampletext" src="https://raw.githubusercontent.com/obss/react-curved-text/master/public/curved-text-example.png" />

## Installation

**react-curved-text** requires:

-   React **18.0.0** or later

```shell
yarn add react-curved-text
```

or

```shell
npm install react-curved-text
```

## Usage

```js
import ReactCurvedText from 'react-curved-text';

const MyComponent = () => {
    return (
        <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={50}
            reversed={false}
            text="react-curved-text"
            textProps={{ style: { fontSize: 24 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
        />
    );
};

export default MyComponent;
```

## Examples


Checkout live examples on [react-curved-text-demo](https://obss.github.io/react-curved-text) page for various customizations.

Checkout a [Live Example with Rotate Animation](https://stackblitz.com/edit/react-curved-text-animation).


## API

| **Prop**          | **Type** | **Required** | **Description**                            |
| ----------------- | -------- | ------------ | ------------------------------------------ |
| **text**          | string   | yes          | Text to be displayed                       |
| **width**         | number   | yes          | Width of the SVG                           |
| **height**        | number   | yes          | Height of the SVG                          |
| **cx**            | number   | yes          | Center x of the ellipse                    |
| **cy**            | number   | yes          | Center y of the ellipse                    |
| **rx**            | number   | yes          | Radius x of the ellipse                    |
| **ry**            | number   | yes          | Radius y of the ellipse                    |
| **startOffset**   | number   | no           | Start offset of the text                   |
| **reversed**      | boolean  | no           | Reverse the text path                      |
| **textProps**     | object   | no           | Props to be passed to the text element     |
| **textPathProps** | object   | no           | Props to be passed to the textPath element |
| **tspanProps**    | object   | no           | Props to be passed to the tspan element    |
| **ellipseProps**  | object   | no           | Props to be passed to the ellipse element  |
| **svgProps**      | object   | no           | Props to be passed to the svg element      |
