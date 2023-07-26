import fs from 'fs';

const data =
{
    "easy": [
        {
            "question": "Who is the present Prime Minister of India ?",
            "options": [
                {
                    "option": "Devendra Farnandes"
                },
                {
                    "option": "Narendra Modi"
                },
                {
                    "option": "Mamta Banerjee"
                },
                {
                    "option": "Suresh Prabhu"
                }
            ],
            "answer": "Narendra Modi"
        },
        {
            "question": "In which movie did Hrithik Roshan played the character of a thief ?",
            "options": [
                {
                    "option": "Dhoom 2"
                },
                {
                    "option": "Dhoom 3"
                },
                {
                    "option": "Dhoom"
                },
                {
                    "option": "Naksha"
                }
            ],
            "answer": "Dhoom 2"
        },
        {
            "question": "What is the full form of HTML ?",
            "options": [
                {
                    "option": "HyperText Makeup Language"
                },
                {
                    "option": "HyperTest Marking Language"
                },
                {
                    "option": "HyperTest Making Language"
                },
                {
                    "option": "HyperText Markup Language"
                }
            ],
            "answer": "HyperText Markup Language"
        },
        {
            "question": "Which of these sounds would you associate with the heart ?",
            "options": [
                {
                    "option": "Tring Tring"
                },
                {
                    "option": "Tap Tap"
                },
                {
                    "option": "Click Click"
                },
                {
                    "option": "Dhak Dhak"
                }
            ],
            "answer": "Dhak Dhak"
        },
        {
            "question": "In the Ramayana, Which demon impersonated Rama's voice, screaming, 'Lakshman! Help me' ?",
            "options": [
                {
                    "option": "Khara"
                },
                {
                    "option": "Dushana"
                },
                {
                    "option": "Maricha"
                },
                {
                    "option": "Surpanakha"
                }
            ],
            "answer": "Maricha"
        },
        {
            "question": "With Which of these cards would you associate the phrase 'Aam Aadmi ka Adhikaar' ?",
            "options": [
                {
                    "option": "PAN Card"
                },
                {
                    "option": "Voter ID Card"
                },
                {
                    "option": "AADHAR Card"
                },
                {
                    "option": "Ration Card"
                }
            ],
            "answer": "AADHAR Card"
        },
        {
            "question": "Which of these is not a feature of Facebook ?",
            "options": [
                {
                    "option": "Like"
                },
                {
                    "option": "Timeline"
                },
                {
                    "option": "Poke"
                },
                {
                    "option": "Retweet"
                }
            ],
            "answer": "Retweet"
        },
        {
            "question": "What is your relation with your grandmother's granddaughter ?",
            "options": [
                {
                    "option": "Chachi"
                },
                {
                    "option": "Mata"
                },
                {
                    "option": "Bahan"
                },
                {
                    "option": "Bua"
                }
            ],
            "answer": "Bahan"
        },
        {
            "question": "Which animal is offered milk on 'Naga Panchami' ?",
            "options": [
                {
                    "option": "Mouse"
                },
                {
                    "option": "Cow"
                },
                {
                    "option": "Snake"
                },
                {
                    "option": "Bull"
                }
            ],
            "answer": "Snake"
        },
        {
            "question": "In a 2014 film, Vidya Balan's character Bilkis Ahmed is also known by what other name ?",
            "options": [
                {
                    "option": "Babli Badmaash"
                },
                {
                    "option": "Bobby Jasoos"
                },
                {
                    "option": "Bebo Badnaam"
                },
                {
                    "option": "Baby Doll"
                }
            ],
            "answer": "Bobby Jasoos"
        },
        {
            "question": "Which search engine has a button that says 'I'm feeling Lucky ?",
            "options": [
                {
                    "option": "Bing"
                },
                {
                    "option": "Google"
                },
                {
                    "option": "Yahoo!"
                },
                {
                    "option": "Wikipedia"
                }
            ],
            "answer": "Google"
        }
    ],
    "moderate": [
        {
            "question": "Who is the 'Bharat Ka Veer Putra' Aaccording to the title of a 2013 TV Series ?",
            "options": [
                {
                    "option": "Tipu Sultan"
                },
                {
                    "option": "Chandragupta Maurya"
                },
                {
                    "option": "Maharana Pratap"
                },
                {
                    "option": "Ashoka"
                }
            ],
            "answer": "Maharana Pratap"
        },
        {
            "question": "In 2013, where did the natural calamity known as Himalayan tsunami occur ?",
            "options": [
                {
                    "option": "Arunachal Pradesh"
                },
                {
                    "option": "Uttrakhand"
                },
                {
                    "option": "Jammu and Kashmir"
                },
                {
                    "option": "Sikkim"
                }
            ],
            "answer": "Uttrakhand"
        },
        {
            "question": "Poplin, Rubiya and flannel are types of what ?",
            "options": [
                {
                    "option": "Leather"
                },
                {
                    "option": "Plastic"
                },
                {
                    "option": "Fabrics"
                },
                {
                    "option": "Rubber"
                }
            ],
            "answer": "Fabrics"
        },
        {
            "question": "On the bank of which of these rivers is a Union Territory located ?",
            "options": [
                {
                    "option": "Sutlej"
                },
                {
                    "option": "Yamuna"
                },
                {
                    "option": "Shipra"
                },
                {
                    "option": "Ganga"
                }
            ],
            "answer": "Yamuna"
        },
        {
            "question": "Which of these animals has branched horns ?",
            "options": [
                {
                    "option": "Zebra"
                },
                {
                    "option": "Musk Deer"
                },
                {
                    "option": "Barasingha"
                },
                {
                    "option": "Rhinocerous"
                }
            ],
            "answer": "Barasingha"
        },
        {
            "question": "Which part of the eye is stored in eye banks for transplant ?",
            "options": [
                {
                    "option": "Cornea"
                },
                {
                    "option": "Iris"
                },
                {
                    "option": "Pupil"
                },
                {
                    "option": "Retina"
                }
            ],
            "answer": "Cornea"
        },
        {
            "question": "Written by their daughter. 'Strictly Personal' is a biography of which couple ?",
            "options": [
                {
                    "option": "Sunil Dutt and Nargis"
                },
                {
                    "option": "Rajiv and Sonia Gandhi"
                },
                {
                    "option": "Bill and Hillary Clinton"
                },
                {
                    "option": "Manmohan Singh and Gursharan Kaur"
                }
            ],
            "answer": "Manmohan Singh and Gursharan Kaur"
        },
        {
            "question": "Due to illegal construction, some residents of which of these housing societies in Mumbai were asked to vacate their flats after a notice from BMC ?",
            "options": [
                {
                    "option": "Thums Up"
                },
                {
                    "option": "Campa Cola"
                },
                {
                    "option": "Limca"
                },
                {
                    "option": "Coca-Cola"
                }
            ],
            "answer": "Campa Cola"
        },
        {
            "question": "The sign for which mathematical function is also logo of the Red Cross Society ?",
            "options": [
                {
                    "option": "Addition"
                },
                {
                    "option": "Subtraction"
                },
                {
                    "option": "Multiplication"
                },
                {
                    "option": "Division"
                }
            ],
            "answer": "Addition"
        },
        {
            "question": "On which mythological character's wish did yamraj return the sight of her blind father-in-law Dyumatsen and also his lost kingdom ?",
            "options": [
                {
                    "option": "Savitri"
                },
                {
                    "option": "Shakuntala"
                },
                {
                    "option": "Ahilya"
                },
                {
                    "option": "Gandhari"
                }
            ],
            "answer": "Savitri"
        },
        {
            "question": "The leaves of which of these trees are the smallest ?",
            "options": [
                {
                    "option": "Ashoka"
                },
                {
                    "option": "Peepul"
                },
                {
                    "option": "Babool"
                },
                {
                    "option": "Coconut"
                }
            ],
            "answer": "Babool"
        },
        {
            "question": "An endangered species of which of these is named after the Indian ornithologist Salim Ali ?",
            "options": [
                {
                    "option": "Bat"
                },
                {
                    "option": "Vulture"
                },
                {
                    "option": "Owl"
                },
                {
                    "option": "Parrot"
                }
            ],
            "answer": "Bat"
        },
        {
            "question": "What is the minimum number of coins of current denominations that will add up to make eight Indian rupees ?",
            "options": [
                {
                    "option": "Two"
                },
                {
                    "option": "Three"
                },
                {
                    "option": "Four"
                },
                {
                    "option": "Five"
                }
            ],
            "answer": "Three"
        },
        {
            "question": "Which one of these countries is larger than India in terms of area ?",
            "options": [
                {
                    "option": "Australia"
                },
                {
                    "option": "Argentina"
                },
                {
                    "option": "Kazakhstan"
                },
                {
                    "option": "Iran"
                }
            ],
            "answer": "Australia"
        },
        {
            "question": "In which field has Alice Munro been awarded the Nobel prize in 2013 ?",
            "options": [
                {
                    "option": "Literature"
                },
                {
                    "option": "Physics"
                },
                {
                    "option": "Peace"
                },
                {
                    "option": "Chemistry"
                }
            ],
            "answer": "Literature"
        },
        {
            "question": "The shell of a hen's egg is mainly made of which of these substances ?",
            "options": [
                {
                    "option": "Calcium carbonate"
                },
                {
                    "option": "Sodium hydroxide"
                },
                {
                    "option": "Phosphoric acid"
                },
                {
                    "option": "Sodium Chloride"
                }
            ],
            "answer": "Calcium carbonate"
        }
    ],
    "difficult": [
        {
            "question": "Which of these persons has not walked on the Moon ?",
            "options": [
                {
                    "option": "Charles Duke"
                },
                {
                    "option": "James A Lovell"
                },
                {
                    "option": "Alan Bean"
                },
                {
                    "option": "Pete Conrad"
                }
            ],
            "answer": "James A Lovell"
        },
        {
            "question": "Who was the chairman of the Indian Calendar Reform Committee that initiated the adoption of Saka calendar as the Indian national Calendar ?",
            "options": [
                {
                    "option": "Meghnad Saha"
                },
                {
                    "option": "Subrahmanyan Chandrasekhar"
                },
                {
                    "option": "Prabodh Chandra Sengupta"
                },
                {
                    "option": "Vainu Bappu"
                }
            ],
            "answer": "Meghnad Saha"
        },
        {
            "question": "Which of these writers is better known as 'Shivani' in the literary world ?",
            "options": [
                {
                    "option": "Krishna Sobti"
                },
                {
                    "option": "Mannu Bhandari"
                },
                {
                    "option": "Ira Pande"
                },
                {
                    "option": "Gaura Pant"
                }
            ],
            "answer": "Gaura Pant"
        },
        {
            "question": "In notes printed by the RBI after 1948, which language in the language panel was substituted with Oriya ?",
            "options": [
                {
                    "option": "Sindhi"
                },
                {
                    "option": "Nepali"
                },
                {
                    "option": "Pashto"
                },
                {
                    "option": "Burmese"
                }
            ],
            "answer": "Burmese"
        },
        {
            "question": "Who is the founder of Patna's famous Super 30 Institute that coaches economically backward students for IIT-JEE ?",
            "options": [
                {
                    "option": "Nitish Kumar"
                },
                {
                    "option": "Anand Kumar"
                },
                {
                    "option": "Sushil Kumar"
                },
                {
                    "option": "Anurag Anand"
                }
            ],
            "answer": "Anand Kumar"
        },
        {
            "question": "Which ancient king got the title of Ashwamedha-Parakarmah after performing the 'Ashwamesha Yajna' ?",
            "options": [
                {
                    "option": "Bindusara"
                },
                {
                    "option": "Pulakesin II"
                },
                {
                    "option": "Samudragupta"
                },
                {
                    "option": "Ajantashatru"
                }
            ],
            "answer": "Samudragupta"
        },
        {
            "question": "In 2014, which athlete got upgraded to gold after Russia's Tatyana Kotovo was disqualified for doping at the 2005 World Athletics Final ?",
            "options": [
                {
                    "option": "K M Beenamol"
                },
                {
                    "option": "Anju Bobby George"
                },
                {
                    "option": "Anuradha Biswal"
                },
                {
                    "option": "Neelam Jaswant Singh"
                }
            ],
            "answer": "Anju Bobby George"
        },
        {
            "question": "With whom did legendary actress and dancer Zohar Sehgal start her dance career ?",
            "options": [
                {
                    "option": "Lachhu Maharaj"
                },
                {
                    "option": "Shambhu Maharaj"
                },
                {
                    "option": "Uday Shankar"
                },
                {
                    "option": "Kelucharan Mohapatra"
                }
            ],
            "answer": "Uday Shankar"
        },
        {
            "question": "28 Aug 2013 marked the 50th anniversary of the historic 'I have a dream' speech of which leader ?",
            "options": [
                {
                    "option": "Churchill"
                },
                {
                    "option": "JFK"
                },
                {
                    "option": "Dwight Eisenhower"
                },
                {
                    "option": "Martin Luther King"
                }
            ],
            "answer": "Martin Luther King"
        },
        {
            "question": "In 1859, British tea planters set up the world's first club in Silchar to play which sport ?",
            "options": [
                {
                    "option": "Badminton"
                },
                {
                    "option": "Snooker"
                },
                {
                    "option": "Polo"
                },
                {
                    "option": "Squash"
                }
            ],
            "answer": "Polo"
        },
        {
            "question": "Where did Homi Jehangir Bhabha, the principal architect of India's nuclear energy program, die in a plane crash ?",
            "options": [
                {
                    "option": "Mont Blanc"
                },
                {
                    "option": "Monte Rosa"
                },
                {
                    "option": "Mount Ararat"
                },
                {
                    "option": "Mount Elbrus"
                }
            ],
            "answer": "Mont Blanc"
        },
        {
            "question": "Thailand's Ratchanok Intanon became the youngest women's singles winner in the world Championship of which sports in August 2013 ?",
            "options": [
                {
                    "option": "Badminton"
                },
                {
                    "option": "Squash"
                },
                {
                    "option": "Table tennis"
                },
                {
                    "option": "Polo"
                }
            ],
            "answer": "Badminton"
        },
        {
            "question": "Who served as the backup cosmonaut for Rakesh Sharma on the Soyuz T-11 mission, which launched the first Indian into space ?",
            "options": [
                {
                    "option": "Nivedita Bahsin"
                },
                {
                    "option": "Trilochan Singh Brar"
                },
                {
                    "option": "Ravish Malhotra"
                },
                {
                    "option": "Kamlesh Lulla"
                }
            ],
            "answer": "Ravish Malhotra"
        }
    ]
}


// question: "Rolex is a company that specializes in what type of product?",
//     options: [
//         {
//             value: "Phone",
//              correct: false, 
//         },
//         {
//             value: "Watches",
//             correct: true,
//         },
//         {
//             value: "Food",
//              correct: false, 
//         },
//         {
//             value: "Cosmetic",
//              correct: false, 
//         },
//     ],

const easy = data.easy.map((e, index) => {
    return {
        question: e.question,
        difficulty: "easy",
        options: e.options.map((o, index) => ({ value: o.option, correct: o.option === e.answer })),
    }
})


// console.log(easy.length);

// save file as temp/questions.js

// fs.writeFile('data/questions.js', JSON.stringify(easy), function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });
