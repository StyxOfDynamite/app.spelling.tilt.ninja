const Underline = (props) => {
    const letters = props.word.split('');
    return (
        <li>
            {letters.map((letter, index) => (
                <p key={`${props.mode}-underline-${index}`} className="underline">
                </p>
            ))}
        </li>
    );
};

export default Underline;
