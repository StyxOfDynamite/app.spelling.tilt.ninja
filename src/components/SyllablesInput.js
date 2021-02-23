const SyllablesInput = (props) => (
    <>
        <label htmlFor="syllables">Syllables</label>
        <input
            id="syllables"
            type="number"
            min="1"
            max="7"
            value={props.value}
            onInput={props.onInput}
        />
    </>
);

export default SyllablesInput;
