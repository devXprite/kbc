import fs from 'fs';

const data = [];


const filteredData = data.map((item) => {
    const { question, correctAnswer, incorrectAnswers } = item;
    const answers = [
        { value: correctAnswer, correct: true },
        { value: incorrectAnswers[0] },
        { value: incorrectAnswers[1] },
        { value: incorrectAnswers[2] },
    ];
    return { question: question.text, answers };
});


console.log(filteredData.length);

fs.writeFile('data/x.json', JSON.stringify(filteredData), function (err) {
    if (err) throw err;
    console.log('Saved!');
});
