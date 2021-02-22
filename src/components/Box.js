const className = (letter) => {
    letter = letter.toLowerCase();

    if (isHanging(letter)) {
        return 'letter hanging';
    }

    if (isTall(letter)) {
        return 'letter tall';
    }

    return 'letter';
};

const isHanging = (l) => {
    return ['q', 'y', 'p', 'g', 'j'].includes(l);
};

const isTall = (l) => {
    return ['t', 'd', 'f', 'h', 'l', 'b'].includes(l);
};

const Box = (props) => {
    return (
        <li key={`box-${props.index}`}>
            {props.word.split('').map((letter, index) => (
                <p key={`letter-${index}`} className={className(letter)}></p>
            ))}
        </li>
    );
};

export default Box;
