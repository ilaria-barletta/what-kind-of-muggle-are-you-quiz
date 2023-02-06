/* jshint esversion: 6 */

const quizQuestions = [
    {
        title: "Where did all begin?",
        options: [
            {
                title: "12 Grimmauld Place",
                value: 0,
            }, 
            {
                title: "All, what? I didn't understand the question",
                value: -10,
            }, 
            {
                title: "Godric's Hollow, west country, England",
                value: 10,
            }, 
            {
                title: "Hogsmeade's high street",
                value: 0,
            },
            {
                title: "4 Privet Drive",
                value: 5,
            }
        ]
    },
    {
        title: "How would you prefer to go places?",
        options: [
            {
                title: "Using a Broomstick",
                value: 10,
            }, 
            {
                title: "Using a portkey",
                value: 10,
            }, 
            {
                title: "pixie dust",
                value: 10,
            }, 
            {
                title: "oopsie daisy",
                value: -10,    
            },
            {
                title: "knight bus",
                value: 10,
            }
        ]
    },
    {
        title: "What's the best broom ever made",
        options: [
            {
                title: "dyson cyclon v 10",
                value: -10,
            }, 
            {
                title: "Firebolt",
                value: 10,
            }, 
            {
                title: "Nimbus 2000",
                value: 5,
            }, 
            {
                title: "Nimbus 1000",
                value: 0,    
            },
            {
                title: "Roomba i7",
                value: -10,
            }
        ]
    },
    {
        title: "How would you make someone do what you want?",
        options: [
            {
                title: "Expelliarmus",
                value: 0,
            }, 
            {
                title: "Please",
                value: -5,
            }, 
            {
                title: "Please, I beg you",
                value: -10,
            }, 
            {
                title: "Imperio",
                value: 10,    
            },
            {
                title: "Stupefy",
                value: 0,
            }
        ]
    },
    {
        title: "Who has proven to be the worst pet animal ever?",
        options: [
            {
                title: "Nagini the snake",
                value: 0,
            }, 
            {
                title: "Trevor the toad",
                value: 0,
            }, 
            {
                title: "Crookshanks the cat",
                value: 0,
            }, 
            {
                title: "Scrabbers the rat",
                value: 10,    
            },
            {
                title: "Scooby the dog",
                value: -10,
            }
        ]
    },
    {
        title: "Which one, in the list, is not a deathly hallow?",
        options: [
            {
                title: "The invisible cloack",
                value: -10,
            }, 
            {
                title: "Petrifying pain",
                value: 10,
            }, 
            {
                title: "The elden wand",
                value: -10,
            }, 
            {
                title: "The philosopher stone",
                value: 10,    
            },
            {
                title: "the resurrection stone",
                value: -10,
            }
        ]
    },
    {
        title: "Who is the most hated teacher amongst wizards and muggles?",
        options: [
            {
                title: "Severus Snape",
                value: 5,
            }, 
            {
                title: "Dolores Umbridge",
                value: 10,
            }, 
            {
                title: "Lockhart",
                value: 0,
            }, 
            {
                title: "Pomona Sprout",
                value: 0,    
            },
            {
                title: "Dudley",
                value: -10,
            }
        ]
    },
    {
        title: "Which one, here, is not a Weasley?",
        options: [
            {
                title: "Ginny",
                value: -10,
            }, 
            {
                title: "Rolf",
                value: 10,
            }, 
            {
                title: "Percy",
                value: -10,
            }, 
            {
                title: "Bill",
                value: -10,    
            },
            {
                title: "John",
                value: 10,
            }
        ]
    },
    {
        title: "What is Harry's Patronus ?",
        options: [
            {
                title: "A stag",
                value: 10,
            }, 
            {
                title: "A doe",
                value: 5,
            }, 
            {
                title: "A dementor",
                value: -10,
            }, 
            {
                title: "A silver fox",
                value: -10,   
            },
            {
                title: "A full moon",
                value: -10,
            }
        ]
    },
    {
        title: "If you were born of the same blood status as You-Know-Who, what would you be?",
        options: [
            {
                title: "AB+",
                value: -10,
            }, 
            {
                title: "Pure blood",
                value: -10,
            }, 
            {
                title: "Half blood",
                value: 10,
            }, 
            {
                title: "Muggle born",
                value: 5,    
            },
            {
                title: "Muggle",
                value: -10,
            }
        ]
    },   
    {
        title: "Who did not take part in the Triwizard Tournament?",
        options: [
            {
                title: "Harry",
                value: -10,
            }, 
            {
                title: "Fred",
                value: 10,
            }, 
            {
                title: "Victor",
                value: -10,
            }, 
            {
                title: "Fleur",
                value: -10,    
            },
            {
                title: "Cedric",
                value: -10,
            }
        ]
    },   
    {
        title: "What is Harry's dream job?",
        options: [
            {
                title: "Hogwarts teacher",
                value: 0,
            }, 
            {
                title: "Minister of magic",
                value: 0,
            }, 
            {
                title: "Auror",
                value: 10,
            }, 
            {
                title: "Hogwarts headmaster",
                value: 0,    
            },
            {
                title: "Goblin",
                value: -10,
            }
        ]
    },   
    {
        title: "What's the main ingredient in Harry's wand?",
        options: [
            {
                title: "A phoenix feather",
                value: 10,
            }, 
            {
                title: "Unicorn hair",
                value: 0,
            }, 
            {
                title: "Dragon heartstring",
                value: 0,
            }, 
            {
                title: "A drop of You-Know-Who blood",
                value: -10,    
            },
            {
                title: "Basilisk scale",
                value: -10,
            }
        ]
    },   
    {
        title: "Which one, here, is not a ball used in quidditch?",
        options: [
            {
                title: "Snitch",
                value: -10,
            }, 
            {
                title: "Bludger",
                value: -10,
            }, 
            {
                title: "Yule",
                value: 10,
            }, 
            {
                title: "Oval",
                value: 10,    
            },
            {
                title: "Quaffle",
                value: -10,
            }
        ]
    },   
    {
        title: "What's the name of Hagrid's dog?",
        options: [
            {
                title: "Fang",
                value: 10,
            }, 
            {
                title: "Buckbeak",
                value: 0,
            }, 
            {
                title: "Fluffy",
                value: 5,
            }, 
            {
                title: "Aragog",
                value: 0,    
            },
            {
                title: "Norbert",
                value: 0,
            }
        ]
    },   
    {
        title: "What did Dobby get from Harry that set him free from Lucius Malfoy?",
        options: [
            {
                title: "The oak wand",
                value: -10,
            }, 
            {
                title: "A glove",
                value: 0,
            }, 
            {
                title: "A sock",
                value: 10,
            }, 
            {
                title: "A scarf",
                value: 0,    
            },
            {
                title: "A pebble",
                value: -10,
            }
        ]
    },   
    {
        title: "If you were born of the same blood status as Hermione, what would you be?",
        options: [
            {
                title: "AB+",
                value: -10,
            }, 
            {
                title: "Pure blood",
                value: 0,
            }, 
            {
                title: "Half blood",
                value: 0,
            }, 
            {
                title: "Muggle born",
                value: 10,    
            },
            {
                title: "Muggle",
                value: -10,
            }
        ]
    },   
    {
        title: "Who is Harry's godfather?",
        options: [
            {
                title: "Padfoot",
                value: 10,
            }, 
            {
                title: "Moony",
                value: 0,
            }, 
            {
                title: "Wormtail",
                value: -10,
            }, 
            {
                title: "Dumbledore",
                value: 0,    
            },
            {
                title: "Snape",
                value: 0,
            }
        ]
    },   
    {
        title: "What's the potion that can change your appearance into that of someone else",
        options: [
            {
                title: "Felix felicis",
                value: -10,
            }, 
            {
                title: "Fungiface Potion",
                value: 0,
            }, 
            {
                title: "Malevolent mixture",
                value: -10,
            }, 
            {
                title: "Polijuice potion",
                value: 10,    
            },
            {
                title: "Skele-Gro",
                value: -10,
            }
        ]
    },   
    {
        title: "Finish the quote: 'After all this time?'",
        options: [
            {
                title: "Yes",
                value: 0,
            }, 
            {
                title: "Always",
                value: 10,
            }, 
            {
                title: "Sometimes",
                value: 0,
            }, 
            {
                title: "I'm afraid so",
                value: -10,    
            },
            {
                title: "Whatever",
                value: -10,
            }
        ]
    },   
];