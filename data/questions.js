import { sampleSize } from "lodash";

const questions = {
    "easy": [
        {
            "question": "Who is the present Prime Minister of India ?",         
            "answers": [
                {
                    "value": "Devendra Farnandes",
                    
                },
                {
                    "value": "Narendra Modi",
                    "correct": true
                },
                {
                    "value": "Mamta Banerjee",
                    
                },
                {
                    "value": "Suresh Prabhu",
                }
            ]
        },
        {

            "question": "In which movie did Hrithik Roshan played the character of a thief ?",
            
            "answers": [
                {
                    "value": "Dhoom 2",
                    "correct": true
                },
                {
                    "value": "Dhoom 3",
                    
                },
                {
                    "value": "Dhoom",
                    
                },
                {
                    "value": "Naksha",
                    
                }
            ]
        },
        {

            "question": "What is the full form of HTML ?",
            
            "answers": [
                {
                    "value": "HyperText Makeup Language",
                    
                },
                {
                    "value": "HyperTest Marking Language",
                    
                },
                {
                    "value": "HyperTest Making Language",
                    
                },
                {
                    "value": "HyperText Markup Language",
                    "correct": true
                }
            ]
        },
        {

            "question": "Which of these sounds would you associate with the heart ?",
            
            "answers": [
                {
                    "value": "Tring Tring",
                    
                },
                {
                    "value": "Tap Tap",
                    
                },
                {
                    "value": "Click Click",
                    
                },
                {
                    "value": "Dhak Dhak",
                    "correct": true
                }
            ]
        },
        {

            "question": "In the Ramayana, Which demon impersonated Rama's voice, screaming, 'Lakshman! Help me' ?",
            
            "answers": [
                {
                    "value": "Khara",
                    
                },
                {
                    "value": "Dushana",
                    
                },
                {
                    "value": "Maricha",
                    "correct": true
                },
                {
                    "value": "Surpanakha",
                    
                }
            ]
        },
        {

            "question": "With Which of these cards would you associate the phrase 'Aam Aadmi ka Adhikaar' ?",
            
            "answers": [
                {
                    "value": "PAN Card",
                    
                },
                {
                    "value": "Voter ID Card",
                    
                },
                {
                    "value": "AADHAR Card",
                    "correct": true
                },
                {
                    "value": "Ration Card",
                    
                }
            ]
        },
        {

            "question": "Which of these is not a feature of Facebook ?",
            
            "answers": [
                {
                    "value": "Like",
                    
                },
                {
                    "value": "Timeline",
                    
                },
                {
                    "value": "Poke",
                    
                },
                {
                    "value": "Retweet",
                    "correct": true
                }
            ]
        },
        {

            "question": "What is your relation with your grandmother's granddaughter ?",
            
            "answers": [
                {
                    "value": "Chachi",
                    
                },
                {
                    "value": "Mata",
                    
                },
                {
                    "value": "Bahan",
                    "correct": true
                },
                {
                    "value": "Bua",
                    
                }
            ]
        },
        {

            "question": "Which animal is offered milk on 'Naga Panchami' ?",
            
            "answers": [
                {
                    "value": "Mouse",
                    
                },
                {
                    "value": "Cow",
                    
                },
                {
                    "value": "Snake",
                    "correct": true
                },
                {
                    "value": "Bull",
                    
                }
            ]
        },
        {

            "question": "In a 2014 film, Vidya Balan's character Bilkis Ahmed is also known by what other name ?",
            
            "answers": [
                {
                    "value": "Babli Badmaash",
                    
                },
                {
                    "value": "Bobby Jasoos",
                    "correct": true
                },
                {
                    "value": "Bebo Badnaam",
                    
                },
                {
                    "value": "Baby Doll",
                    
                }
            ]
        },
        {

            "question": "Which search engine has a button that says 'I'm feeling Lucky ?",
            
            "answers": [
                {
                    "value": "Bing",
                    
                },
                {
                    "value": "Google",
                    "correct": true
                },
                {
                    "value": "Yahoo!",
                    
                },
                {
                    "value": "Wikipedia",
                    
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
                    
                },
                {
                    "value": "Chandragupta Maurya",
                    
                },
                {
                    "value": "Maharana Pratap",
                    "correct": true
                },
                {
                    "value": "Ashoka",
                    
                }
            ]
        },
        {
            "question": "In 2013, where did the natural calamity known as Himalayan tsunami occur ?",
            "answers": [
                {
                    "value": "Arunachal Pradesh",
                    
                },
                {
                    "value": "Uttrakhand",
                    "correct": true
                },
                {
                    "value": "Jammu and Kashmir",
                    
                },
                {
                    "value": "Sikkim",
                    
                }
            ]
        },
        {
            "question": "Poplin, Rubiya and flannel are types of what ?",
            "answers": [
                {
                    "value": "Leather",
                    
                },
                {
                    "value": "Plastic",
                    
                },
                {
                    "value": "Fabrics",
                    "correct": true
                },
                {
                    "value": "Rubber",
                    
                }
            ]
        },
        {
            "question": "On the bank of which of these rivers is a Union Territory located ?",
            "answers": [
                {
                    "value": "Sutlej",
                    
                },
                {
                    "value": "Yamuna",
                    "correct": true
                },
                {
                    "value": "Shipra",
                    
                },
                {
                    "value": "Ganga",
                    
                }
            ]
        },
        {
            "question": "Which of these animals has branched horns ?",
            "answers": [
                {
                    "value": "Zebra",
                    
                },
                {
                    "value": "Musk Deer",
                    
                },
                {
                    "value": "Barasingha",
                    "correct": true
                },
                {
                    "value": "Rhinocerous",
                    
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
                    
                },
                {
                    "value": "Pupil",
                    
                },
                {
                    "value": "Retina",
                    
                }
            ]
        },
        {
            "question": "Written by their daughter. 'Strictly Personal' is a biography of which couple ?",
            "answers": [
                {
                    "value": "Sunil Dutt and Nargis",
                    
                },
                {
                    "value": "Rajiv and Sonia Gandhi",
                    
                },
                {
                    "value": "Bill and Hillary Clinton",
                    
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
                    
                },
                {
                    "value": "Campa Cola",
                    "correct": true
                },
                {
                    "value": "Limca",
                    
                },
                {
                    "value": "Coca-Cola",
                    
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
                    
                },
                {
                    "value": "Multiplication",
                    
                },
                {
                    "value": "Division",
                    
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
                    
                },
                {
                    "value": "Ahilya",
                    
                },
                {
                    "value": "Gandhari",
                    
                }
            ]
        },
        {
            "question": "The leaves of which of these trees are the smallest ?",
            "answers": [
                {
                    "value": "Ashoka",
                    
                },
                {
                    "value": "Peepul",
                    
                },
                {
                    "value": "Babool",
                    "correct": true
                },
                {
                    "value": "Coconut",
                    
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
                    
                },
                {
                    "value": "Owl",
                    
                },
                {
                    "value": "Parrot",
                    
                }
            ]
        },
        {
            "question": "What is the minimum number of coins of current denominations that will add up to make eight Indian rupees ?",
            "answers": [
                {
                    "value": "Two",
                    
                },
                {
                    "value": "Three",
                    "correct": true
                },
                {
                    "value": "Four",
                    
                },
                {
                    "value": "Five",
                    
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
                    
                },
                {
                    "value": "Kazakhstan",
                    
                },
                {
                    "value": "Iran",
                    
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
                    
                },
                {
                    "value": "Peace",
                    
                },
                {
                    "value": "Chemistry",
                    
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
                    
                },
                {
                    "value": "Phosphoric acid",
                    
                },
                {
                    "value": "Sodium Chloride",
                    
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
                        
                    },
                    {
                        "value": "James A Lovell",
                        "correct": true
                    },
                    {
                        "value": "Alan Bean",
                        
                    },
                    {
                        "value": "Pete Conrad",
                        
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
                        
                    },
                    {
                        "value": "Prabodh Chandra Sengupta",
                        
                    },
                    {
                        "value": "Vainu Bappu",
                        
                    }
                ]
            },
            {
                "question": "Which of these writers is better known as 'Shivani' in the literary world ?",
                "answers": [
                    {
                        "value": "Krishna Sobti",
                        
                    },
                    {
                        "value": "Mannu Bhandari",
                        
                    },
                    {
                        "value": "Ira Pande",
                        
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
                        
                    },
                    {
                        "value": "Nepali",
                        
                    },
                    {
                        "value": "Pashto",
                        
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
                        
                    },
                    {
                        "value": "Anand Kumar",
                        "correct": true
                    },
                    {
                        "value": "Sushil Kumar",
                        
                    },
                    {
                        "value": "Anurag Anand",
                        
                    }
                ]
            },
            {
                "question": "Which ancient king got the title of Ashwamedha-Parakarmah after performing the 'Ashwamesha Yajna' ?",
                "answers": [
                    {
                        "value": "Bindusara",
                        
                    },
                    {
                        "value": "Pulakesin II",
                        
                    },
                    {
                        "value": "Samudragupta",
                        "correct": true
                    },
                    {
                        "value": "Ajantashatru",
                        
                    }
                ]
            },
            {
                "question": "In 2014, which athlete got upgraded to gold after Russia's Tatyana Kotovo was disqualified for doping at the 2005 World Athletics Final ?",
                "answers": [
                    {
                        "value": "K M Beenamol",
                        
                    },
                    {
                        "value": "Anju Bobby George",
                        "correct": true
                    },
                    {
                        "value": "Anuradha Biswal",
                        
                    },
                    {
                        "value": "Neelam Jaswant Singh",
                        
                    }
                ]
            },
            {
                "question": "With whom did legendary actress and dancer Zohar Sehgal start her dance career ?",
                "answers": [
                    {
                        "value": "Lachhu Maharaj",
                        
                    },
                    {
                        "value": "Shambhu Maharaj",
                        
                    },
                    {
                        "value": "Uday Shankar",
                        "correct": true
                    },
                    {
                        "value": "Kelucharan Mohapatra",
                        
                    }
                ]
            },
            {
                "question": "28 Aug 2013 marked the 50th anniversary of the historic 'I have a dream' speech of which leader ?",
                "answers": [
                    {
                        "value": "Churchill",
                        
                    },
                    {
                        "value": "JFK",
                        
                    },
                    {
                        "value": "Dwight Eisenhower",
                        
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
                        
                    },
                    {
                        "value": "Snooker",
                        
                    },
                    {
                        "value": "Polo",
                        "correct": true
                    },
                    {
                        "value": "Squash",
                        
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
                        
                    },
                    {
                        "value": "Mount Ararat",
                        
                    },
                    {
                        "value": "Mount Elbrus",
                        
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
                        
                    },
                    {
                        "value": "Table tennis",
                        
                    },
                    {
                        "value": "Polo",
                        
                    }
                ]
            },
            {
                "question": "Who served as the backup cosmonaut for Rakesh Sharma on the Soyuz T-11 mission, which launched the first Indian into space ?",
                "answers": [
                    {
                        "value": "Nivedita Bahsin",
                        
                    },
                    {
                        "value": "Trilochan Singh Brar",
                        
                    },
                    {
                        "value": "Ravish Malhotra",
                        "correct": true
                    },
                    {
                        "value": "Kamlesh Lulla",
                        
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