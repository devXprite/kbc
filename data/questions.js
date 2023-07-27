import { sampleSize } from "lodash";

const questions = {
    "easy": [
        {
            "question": "Who is the present Prime Minister of India ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "Devendra Farnandes",
                    "correct": false
                },
                {
                    "value": "Narendra Modi",
                    "correct": true
                },
                {
                    "value": "Mamta Banerjee",
                    "correct": false
                },
                {
                    "value": "Suresh Prabhu",
                    "correct": false
                }
            ]
        },
        {

            "question": "In which movie did Hrithik Roshan played the character of a thief ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "Dhoom 2",
                    "correct": true
                },
                {
                    "value": "Dhoom 3",
                    "correct": false
                },
                {
                    "value": "Dhoom",
                    "correct": false
                },
                {
                    "value": "Naksha",
                    "correct": false
                }
            ]
        },
        {

            "question": "What is the full form of HTML ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "HyperText Makeup Language",
                    "correct": false
                },
                {
                    "value": "HyperTest Marking Language",
                    "correct": false
                },
                {
                    "value": "HyperTest Making Language",
                    "correct": false
                },
                {
                    "value": "HyperText Markup Language",
                    "correct": true
                }
            ]
        },
        {

            "question": "Which of these sounds would you associate with the heart ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "Tring Tring",
                    "correct": false
                },
                {
                    "value": "Tap Tap",
                    "correct": false
                },
                {
                    "value": "Click Click",
                    "correct": false
                },
                {
                    "value": "Dhak Dhak",
                    "correct": true
                }
            ]
        },
        {

            "question": "In the Ramayana, Which demon impersonated Rama's voice, screaming, 'Lakshman! Help me' ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "Khara",
                    "correct": false
                },
                {
                    "value": "Dushana",
                    "correct": false
                },
                {
                    "value": "Maricha",
                    "correct": true
                },
                {
                    "value": "Surpanakha",
                    "correct": false
                }
            ]
        },
        {

            "question": "With Which of these cards would you associate the phrase 'Aam Aadmi ka Adhikaar' ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "PAN Card",
                    "correct": false
                },
                {
                    "value": "Voter ID Card",
                    "correct": false
                },
                {
                    "value": "AADHAR Card",
                    "correct": true
                },
                {
                    "value": "Ration Card",
                    "correct": false
                }
            ]
        },
        {

            "question": "Which of these is not a feature of Facebook ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "Like",
                    "correct": false
                },
                {
                    "value": "Timeline",
                    "correct": false
                },
                {
                    "value": "Poke",
                    "correct": false
                },
                {
                    "value": "Retweet",
                    "correct": true
                }
            ]
        },
        {

            "question": "What is your relation with your grandmother's granddaughter ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "Chachi",
                    "correct": false
                },
                {
                    "value": "Mata",
                    "correct": false
                },
                {
                    "value": "Bahan",
                    "correct": true
                },
                {
                    "value": "Bua",
                    "correct": false
                }
            ]
        },
        {

            "question": "Which animal is offered milk on 'Naga Panchami' ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "Mouse",
                    "correct": false
                },
                {
                    "value": "Cow",
                    "correct": false
                },
                {
                    "value": "Snake",
                    "correct": true
                },
                {
                    "value": "Bull",
                    "correct": false
                }
            ]
        },
        {

            "question": "In a 2014 film, Vidya Balan's character Bilkis Ahmed is also known by what other name ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "Babli Badmaash",
                    "correct": false
                },
                {
                    "value": "Bobby Jasoos",
                    "correct": true
                },
                {
                    "value": "Bebo Badnaam",
                    "correct": false
                },
                {
                    "value": "Baby Doll",
                    "correct": false
                }
            ]
        },
        {

            "question": "Which search engine has a button that says 'I'm feeling Lucky ?",
            "difficulty": "easy",
            "answers": [
                {
                    "value": "Bing",
                    "correct": false
                },
                {
                    "value": "Google",
                    "correct": true
                },
                {
                    "value": "Yahoo!",
                    "correct": false
                },
                {
                    "value": "Wikipedia",
                    "correct": false
                }
            ]
        }
    ],
    'moderate': [
        {
            "question": "Who is the 'Bharat Ka Veer Putra' Aaccording to the title of a 2013 TV Series ?",
            "answers": [
                {
                    "value": "Tipu Sultan",
                    "correct": false
                },
                {
                    "value": "Chandragupta Maurya",
                    "correct": false
                },
                {
                    "value": "Maharana Pratap",
                    "correct": true
                },
                {
                    "value": "Ashoka",
                    "correct": false
                }
            ]
        },
        {
            "question": "In 2013, where did the natural calamity known as Himalayan tsunami occur ?",
            "answers": [
                {
                    "value": "Arunachal Pradesh",
                    "correct": false
                },
                {
                    "value": "Uttrakhand",
                    "correct": true
                },
                {
                    "value": "Jammu and Kashmir",
                    "correct": false
                },
                {
                    "value": "Sikkim",
                    "correct": false
                }
            ]
        },
        {
            "question": "Poplin, Rubiya and flannel are types of what ?",
            "answers": [
                {
                    "value": "Leather",
                    "correct": false
                },
                {
                    "value": "Plastic",
                    "correct": false
                },
                {
                    "value": "Fabrics",
                    "correct": true
                },
                {
                    "value": "Rubber",
                    "correct": false
                }
            ]
        },
        {
            "question": "On the bank of which of these rivers is a Union Territory located ?",
            "answers": [
                {
                    "value": "Sutlej",
                    "correct": false
                },
                {
                    "value": "Yamuna",
                    "correct": true
                },
                {
                    "value": "Shipra",
                    "correct": false
                },
                {
                    "value": "Ganga",
                    "correct": false
                }
            ]
        },
        {
            "question": "Which of these animals has branched horns ?",
            "answers": [
                {
                    "value": "Zebra",
                    "correct": false
                },
                {
                    "value": "Musk Deer",
                    "correct": false
                },
                {
                    "value": "Barasingha",
                    "correct": true
                },
                {
                    "value": "Rhinocerous",
                    "correct": false
                }
            ]
        },
        {
            "question": "Which part of the eye is stored in eye banks for transplant ?",
            "answers": [
                {
                    "value": "Cornea",
                    "correct": true
                },
                {
                    "value": "Iris",
                    "correct": false
                },
                {
                    "value": "Pupil",
                    "correct": false
                },
                {
                    "value": "Retina",
                    "correct": false
                }
            ]
        },
        {
            "question": "Written by their daughter. 'Strictly Personal' is a biography of which couple ?",
            "answers": [
                {
                    "value": "Sunil Dutt and Nargis",
                    "correct": false
                },
                {
                    "value": "Rajiv and Sonia Gandhi",
                    "correct": false
                },
                {
                    "value": "Bill and Hillary Clinton",
                    "correct": false
                },
                {
                    "value": "Manmohan Singh and Gursharan Kaur",
                    "correct": true
                }
            ]
        },
        {
            "question": "Due to illegal construction, some residents of which of these housing societies in Mumbai were asked to vacate their flats after a notice from BMC ?",
            "answers": [
                {
                    "value": "Thums Up",
                    "correct": false
                },
                {
                    "value": "Campa Cola",
                    "correct": true
                },
                {
                    "value": "Limca",
                    "correct": false
                },
                {
                    "value": "Coca-Cola",
                    "correct": false
                }
            ]
        },
        {
            "question": "The sign for which mathematical function is also logo of the Red Cross Society ?",
            "answers": [
                {
                    "value": "Addition",
                    "correct": true
                },
                {
                    "value": "Subtraction",
                    "correct": false
                },
                {
                    "value": "Multiplication",
                    "correct": false
                },
                {
                    "value": "Division",
                    "correct": false
                }
            ]
        },
        {
            "question": "On which mythological character's wish did yamraj return the sight of her blind father-in-law Dyumatsen and also his lost kingdom ?",
            "answers": [
                {
                    "value": "Savitri",
                    "correct": true
                },
                {
                    "value": "Shakuntala",
                    "correct": false
                },
                {
                    "value": "Ahilya",
                    "correct": false
                },
                {
                    "value": "Gandhari",
                    "correct": false
                }
            ]
        },
        {
            "question": "The leaves of which of these trees are the smallest ?",
            "answers": [
                {
                    "value": "Ashoka",
                    "correct": false
                },
                {
                    "value": "Peepul",
                    "correct": false
                },
                {
                    "value": "Babool",
                    "correct": true
                },
                {
                    "value": "Coconut",
                    "correct": false
                }
            ]
        },
        {
            "question": "An endangered species of which of these is named after the Indian ornithologist Salim Ali ?",
            "answers": [
                {
                    "value": "Bat",
                    "correct": true
                },
                {
                    "value": "Vulture",
                    "correct": false
                },
                {
                    "value": "Owl",
                    "correct": false
                },
                {
                    "value": "Parrot",
                    "correct": false
                }
            ]
        },
        {
            "question": "What is the minimum number of coins of current denominations that will add up to make eight Indian rupees ?",
            "answers": [
                {
                    "value": "Two",
                    "correct": false
                },
                {
                    "value": "Three",
                    "correct": true
                },
                {
                    "value": "Four",
                    "correct": false
                },
                {
                    "value": "Five",
                    "correct": false
                }
            ]
        },
        {
            "question": "Which one of these countries is larger than India in terms of area ?",
            "answers": [
                {
                    "value": "Australia",
                    "correct": true
                },
                {
                    "value": "Argentina",
                    "correct": false
                },
                {
                    "value": "Kazakhstan",
                    "correct": false
                },
                {
                    "value": "Iran",
                    "correct": false
                }
            ]
        },
        {
            "question": "In which field has Alice Munro been awarded the Nobel prize in 2013 ?",
            "answers": [
                {
                    "value": "Literature",
                    "correct": true
                },
                {
                    "value": "Physics",
                    "correct": false
                },
                {
                    "value": "Peace",
                    "correct": false
                },
                {
                    "value": "Chemistry",
                    "correct": false
                }
            ]
        },
        {
            "question": "The shell of a hen's egg is mainly made of which of these substances ?",
            "answers": [
                {
                    "value": "Calcium carbonate",
                    "correct": true
                },
                {
                    "value": "Sodium hydroxide",
                    "correct": false
                },
                {
                    "value": "Phosphoric acid",
                    "correct": false
                },
                {
                    "value": "Sodium Chloride",
                    "correct": false
                }
            ]
        }
    ],
    'difficult':
        [
            {
                "question": "Which of these persons has not walked on the Moon ?",
                "answers": [
                    {
                        "value": "Charles Duke",
                        "correct": false
                    },
                    {
                        "value": "James A Lovell",
                        "correct": true
                    },
                    {
                        "value": "Alan Bean",
                        "correct": false
                    },
                    {
                        "value": "Pete Conrad",
                        "correct": false
                    }
                ]
            },
            {
                "question": "Who was the chairman of the Indian Calendar Reform Committee that initiated the adoption of Saka calendar as the Indian national Calendar ?",
                "answers": [
                    {
                        "value": "Meghnad Saha",
                        "correct": true
                    },
                    {
                        "value": "Subrahmanyan Chandrasekhar",
                        "correct": false
                    },
                    {
                        "value": "Prabodh Chandra Sengupta",
                        "correct": false
                    },
                    {
                        "value": "Vainu Bappu",
                        "correct": false
                    }
                ]
            },
            {
                "question": "Which of these writers is better known as 'Shivani' in the literary world ?",
                "answers": [
                    {
                        "value": "Krishna Sobti",
                        "correct": false
                    },
                    {
                        "value": "Mannu Bhandari",
                        "correct": false
                    },
                    {
                        "value": "Ira Pande",
                        "correct": false
                    },
                    {
                        "value": "Gaura Pant",
                        "correct": true
                    }
                ]
            },
            {
                "question": "In notes printed by the RBI after 1948, which language in the language panel was substituted with Oriya ?",
                "answers": [
                    {
                        "value": "Sindhi",
                        "correct": false
                    },
                    {
                        "value": "Nepali",
                        "correct": false
                    },
                    {
                        "value": "Pashto",
                        "correct": false
                    },
                    {
                        "value": "Burmese",
                        "correct": true
                    }
                ]
            },
            {
                "question": "Who is the founder of Patna's famous Super 30 Institute that coaches economically backward students for IIT-JEE ?",
                "answers": [
                    {
                        "value": "Nitish Kumar",
                        "correct": false
                    },
                    {
                        "value": "Anand Kumar",
                        "correct": true
                    },
                    {
                        "value": "Sushil Kumar",
                        "correct": false
                    },
                    {
                        "value": "Anurag Anand",
                        "correct": false
                    }
                ]
            },
            {
                "question": "Which ancient king got the title of Ashwamedha-Parakarmah after performing the 'Ashwamesha Yajna' ?",
                "answers": [
                    {
                        "value": "Bindusara",
                        "correct": false
                    },
                    {
                        "value": "Pulakesin II",
                        "correct": false
                    },
                    {
                        "value": "Samudragupta",
                        "correct": true
                    },
                    {
                        "value": "Ajantashatru",
                        "correct": false
                    }
                ]
            },
            {
                "question": "In 2014, which athlete got upgraded to gold after Russia's Tatyana Kotovo was disqualified for doping at the 2005 World Athletics Final ?",
                "answers": [
                    {
                        "value": "K M Beenamol",
                        "correct": false
                    },
                    {
                        "value": "Anju Bobby George",
                        "correct": true
                    },
                    {
                        "value": "Anuradha Biswal",
                        "correct": false
                    },
                    {
                        "value": "Neelam Jaswant Singh",
                        "correct": false
                    }
                ]
            },
            {
                "question": "With whom did legendary actress and dancer Zohar Sehgal start her dance career ?",
                "answers": [
                    {
                        "value": "Lachhu Maharaj",
                        "correct": false
                    },
                    {
                        "value": "Shambhu Maharaj",
                        "correct": false
                    },
                    {
                        "value": "Uday Shankar",
                        "correct": true
                    },
                    {
                        "value": "Kelucharan Mohapatra",
                        "correct": false
                    }
                ]
            },
            {
                "question": "28 Aug 2013 marked the 50th anniversary of the historic 'I have a dream' speech of which leader ?",
                "answers": [
                    {
                        "value": "Churchill",
                        "correct": false
                    },
                    {
                        "value": "JFK",
                        "correct": false
                    },
                    {
                        "value": "Dwight Eisenhower",
                        "correct": false
                    },
                    {
                        "value": "Martin Luther King",
                        "correct": true
                    }
                ]
            },
            {
                "question": "In 1859, British tea planters set up the world's first club in Silchar to play which sport ?",
                "answers": [
                    {
                        "value": "Badminton",
                        "correct": false
                    },
                    {
                        "value": "Snooker",
                        "correct": false
                    },
                    {
                        "value": "Polo",
                        "correct": true
                    },
                    {
                        "value": "Squash",
                        "correct": false
                    }
                ]
            },
            {
                "question": "Where did Homi Jehangir Bhabha, the principal architect of India's nuclear energy program, die in a plane crash ?",
                "answers": [
                    {
                        "value": "Mont Blanc",
                        "correct": true
                    },
                    {
                        "value": "Monte Rosa",
                        "correct": false
                    },
                    {
                        "value": "Mount Ararat",
                        "correct": false
                    },
                    {
                        "value": "Mount Elbrus",
                        "correct": false
                    }
                ]
            },
            {
                "question": "Thailand's Ratchanok Intanon became the youngest women's singles winner in the world Championship of which sports in August 2013 ?",
                "answers": [
                    {
                        "value": "Badminton",
                        "correct": true
                    },
                    {
                        "value": "Squash",
                        "correct": false
                    },
                    {
                        "value": "Table tennis",
                        "correct": false
                    },
                    {
                        "value": "Polo",
                        "correct": false
                    }
                ]
            },
            {
                "question": "Who served as the backup cosmonaut for Rakesh Sharma on the Soyuz T-11 mission, which launched the first Indian into space ?",
                "answers": [
                    {
                        "value": "Nivedita Bahsin",
                        "correct": false
                    },
                    {
                        "value": "Trilochan Singh Brar",
                        "correct": false
                    },
                    {
                        "value": "Ravish Malhotra",
                        "correct": true
                    },
                    {
                        "value": "Kamlesh Lulla",
                        "correct": false
                    }
                ]
            }
        ]
}

const randomQuestions = () => [
    ...sampleSize(questions.easy, 6),
    ...sampleSize(questions.moderate, 7),
    ...sampleSize(questions.difficult, 8)
]

export default randomQuestions;