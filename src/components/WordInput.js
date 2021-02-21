const WordInput = (props) => (
    <form onSubmit={props.onSubmit}>
        <div className="form-control">
            <input
                onInput={props.onInput}
                id="word"
                type="text"
                placeholder="Enter a word"
                value={props.word}
            />
        </div>
    </form>
);

export default WordInput;
