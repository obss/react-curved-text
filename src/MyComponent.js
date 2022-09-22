import ReactCurvedText from './lib';

const MyComponent = () => {
    return (
        <ReactCurvedText
            width={370}
            height={300}
            cx="196"
            cy="204"
            rx={100}
            ry={100}
            startOffset={20}
            reversed={true}
            text=" agahsah aI'm cd text"
            textProps={{ style: { fontSize: '25' } }}
            tspanProps={{ dy: '-20' }}
        />
    );
};

export default MyComponent;
