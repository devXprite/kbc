import fs from 'fs';

const data =
[{"category":"history","id":"622a1c3c7cc59eab6f951811","correctAnswer":"The Reichstag","incorrectAnswers":["The Brandenburg Gate","Charlottenburg Palace","The Berlin Wall"],"question":{"text":"Which building in Berlin was burned down In 1933?"},"tags":["germany","world_war_2","1930's","buildings","events"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"history","id":"647638d1f05ea6d6f587a154","correctAnswer":"Germany","incorrectAnswers":["France","Spain","Italy"],"question":{"text":"During World War 2, which country was home to the White Rose, a group of student rebels fighting against fascism?"},"tags":["history","world_war_2","politics"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"history","id":"622a1c3c7cc59eab6f95186f","correctAnswer":"Yalta","incorrectAnswers":["Dresden","Maastricht","Versailles"],"question":{"text":"Where did Churchill, Roosevelt and Stalin meet in 1945?"},"tags":["politics","world_war_2","leaders","places","history"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"society_and_culture","id":"6293ec837f41d6338b96eef6","correctAnswer":"Joseph Stalin","incorrectAnswers":["Vladimir Lenin","Nikita Khrushchev","Peter the Great"],"question":{"text":"Who was the ruler of the Soviet Union from 1924 to his death, leading the Soviet Union in WWII?"},"tags":["people","history","society_and_culture","russia","cold_war","soviet_union","leaders","world_war_2"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"history","id":"639898405c9a75021f31046b","correctAnswer":"Japan","incorrectAnswers":["Germany","Italy","Russia"],"question":{"text":"Which country declared war on the US after the attack on Pearl Harbor?"},"tags":["history","world_war_2","wars"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"history","id":"639898395c9a75021f310465","correctAnswer":"1939","incorrectAnswers":["1941","1945","1937"],"question":{"text":"What year did World War II begin?"},"tags":["history","world_war_2","wars"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"history","id":"63a039bcc7d86251f9b65caa","correctAnswer":"Winston Churchill","incorrectAnswers":["Neville Chamberlain","Anthony Eden","Tony Blair"],"question":{"text":"Which British Prime Minister was in office for the majority of World War II?"},"tags":["history","britain","uk","british_prime_ministers","world_war_2"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"history","id":"64824eab7778562fd76a9672","correctAnswer":"The Maginot Line","incorrectAnswers":["The Hadrian Wall","The de Galle Bunkers","The Vichy System"],"question":{"text":"What was the name of the defensive fortifications built by France along its border before World War 2?"},"tags":["history","france","world_war_2"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"history","id":"63a039cdc7d86251f9b65cb7","correctAnswer":"1941","incorrectAnswers":["1939","1948","1945"],"question":{"text":"What year did the United States enter World War II?"},"tags":["history","usa","world_war_2","wars"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"history","id":"622a1c3c7cc59eab6f9518c7","correctAnswer":"Fat Man","incorrectAnswers":["Big Boy","Bonnie Lad","Chunky Joe"],"question":{"text":"What was the name given to the atom bomb that was dropped on Hiroshima?"},"tags":["world_war_2","wars","names","history"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false}]


// convert in this format
// {
//     "question": "Who is the present Prime Minister of India ?",         
//     "answers": [
//         {"value": "Devendra Farnandes"},
//         {"value": "Narendra Modi","correct": true},
//         {"value": "Mamta Banerjee",},
//         {"value": "Suresh Prabhu",}
//     ]
// },
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

// save file as temp/questions.js

fs.writeFile('data/x.json', JSON.stringify(filteredData), function (err) {
    if (err) throw err;
    console.log('Saved!');
});
