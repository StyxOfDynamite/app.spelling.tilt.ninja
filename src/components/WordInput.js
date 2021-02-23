const WordInput = (props) => (
    <div className="form-control">
        <input
            onInput={props.onInput}
            id="word"
            type="text"
            placeholder="Enter a word"
            value={props.word}
        />
    </div>
);

export default WordInput;
