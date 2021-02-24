import Underline from './Underline';

const getSyllableGroups = (array) => {
    let syllableGroupings = [];
    array.forEach((element) => {
        syllableGroupings.push(element.syllables);
    });
    return syllableGroupings.filter(onlyUnique).sort();
};

const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
};

const Syllables = (props) => {
    const syls = getSyllableGroups(props.words);
    return (
        <div>
            {syls.map((syl, index) => (
                <div key={`syllables-div-${index}`}>
                    <h2 key={`syllables-header-${index}`}>{`${syl} Syllables`}</h2>
                    <ol key={`syllables-list-${index}`}>
                    {props.words.map((word, wordIndex) => {
                        if (word.syllables === syl) {
                            return <Underline key={`syllables-${wordIndex}`} mode="syllables" index={wordIndex} word={word.word} />;
                        }
                        return null;
                    })}
                    </ol>
                </div>
            ))}
        </div>
    );
};

export default Syllables;
