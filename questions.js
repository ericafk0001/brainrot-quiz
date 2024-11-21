const questions = [
  {
    question: 'Which Internet Celebrity said "Hawk TUAH Spit on that Thang!"?',
    answers: [
      { text: "Whitney Cummings", correct: false },
      { text: "Haliey Welch", correct: true },
      { text: "Jake Paul", correct: false },
      { text: "Sydney Sweeney", correct: false },
    ],
  },
  {
    question: 'What happens when someone says "I Understand It Now"?',
    answers: [
      { text: "They become an NBA athlete", correct: false },
      { text: "They accept their death", correct: false },
      { text: "They get extremely good at what their doing", correct: true },
      { text: "They achieve inner peace", correct: false },
    ],
  },
  {
    question:
      "Fill in the blank: PUT THE MANGO DOWN! THIS IS FOR MY _____ ___!",
    answers: [
      { text: "WINTER ARC", correct: true },
      { text: "SKIBIDI RIZZ", correct: false },
      { text: "MOM SIR", correct: false },
      { text: "FORTNITE KITTEN", correct: false },
    ],
  },
  {
    question: "Fill in the blank: That feeling when ____ ______ is tommorow",
    answers: [
      { text: "knee sugery", correct: true },
      { text: "your marriage", correct: false },
      { text: "gritty performance", correct: false },
      { text: "feet licking", correct: false },
    ],
  },
  {
    question: "Fill in the blank: No ___ __________",
    answers: [
      { text: "New Negativity", correct: false },
      { text: "Net Lease", correct: false },
      { text: "Nut November", correct: true },
      { text: "Naughty Night", correct: false },
    ],
  },
  {
    question: 'Who is the purple guy that gets played with the song "Whistle"?',
    answers: [
      { text: "John Smith", correct: false },
      { text: "John Doe", correct: false },
      { text: "John Hutcherson", correct: true },
      { text: "John Pork", correct: false },
    ],
  },
  {
    question: "What was the song playing at the Tiktok Rizz Party?",
    answers: [
      { text: "Took Her To The O by King Von", correct: false },
      { text: "If We Being Rëal by Yeat", correct: false },
      { text: "FE!N by Travis Scott", correct: false },
      { text: "Carnival By Kanye", correct: true },
    ],
  },
  {
    question: "Who is the boy with the red red red face?",
    answers: [
      { text: "Tomato Boy", correct: true },
      { text: "Firetruck Optimus Prime", correct: false },
      { text: "Senpai", correct: false },
      { text: "Playboy Carti", correct: false },
    ],
  },
  {
    question: "Who is the leader of the tiktok rizz party?",
    answers: [
      { text: "Red Tie Kid", correct: false },
      { text: "Blue Tie Kid", correct: true },
      { text: "Togger the Mogger", correct: false },
      { text: "Bluddy", correct: false },
    ],
  },
  {
    question:
      "What ethnicity was the quandale dingle at the tiktok rizz party?",
    answers: [
      { text: "Turkish", correct: true },
      { text: "Chinese", correct: false },
      { text: "Kazakhstanian", correct: false },
      { text: "Nigerian", correct: false },
    ],
  },
  {
    question: 'Who sang this song? "skibidi dop-dop-dop yes yes.."',
    answers: [
      { text: "Kai Cenat", correct: false },
      { text: "Skibidi Rizzler", correct: false },
      { text: "Skibidi Hydra", correct: false },
      { text: "Skibidi Toilet", correct: true },
    ],
  },
  {
    question: "How many skibidi toilets are there?",
    answers: [
      { text: "8", correct: false },
      { text: "420", correct: false },
      { text: "69", correct: false },
      { text: "77", correct: true },
    ],
  },
  {
    question: "What is the multi-head skibidi toilet called?",
    answers: [
      { text: "YN Skibidi", correct: false },
      { text: "Skibidiest of the Skibidi's", correct: false },
      { text: "The hydra skibidi toilet.", correct: true },
      { text: "Skibidi toilet king", correct: false },
    ],
  },
  {
    question: "Who is the king of the chicken bake?",
    answers: [
      { text: "The Costco Guys", correct: true },
      { text: "Young Neighbor", correct: false },
      { text: "Duke Dennis", correct: false },
      { text: "Hawk Tuah Girl", correct: false },
    ],
  },
  {
    question: 'Fill in the blank: "Dang, Look at his ____!!"',
    answers: [
      { text: "Swag", correct: false },
      { text: "Drip", correct: false },
      { text: "Rizz", correct: true },
      { text: "Huzz", correct: false },
    ],
  },
  {
    question: 'Fill in the blank: "Sticking out your ____ for the ____"',
    answers: [
      { text: "Gyat, Rizzler", correct: true },
      { text: "Stick, Huzz", correct: false },
      { text: "Money, Grandma", correct: false },
      { text: "Knee, Sugery", correct: false },
    ],
  },
  {
    question: 'Fill in the blank: "hey... its _______ calling..."',
    answers: [
      { text: "Ray", correct: false },
      { text: "Freakbob", correct: true },
      { text: "Drake", correct: false },
      { text: "Your Mom", correct: false },
    ],
  },
  {
    question:
      'Fill in the blank: "She wanna have my kids, OMG, ____ ___ ___ ____"',
    answers: [
      { text: "Talk Tuah Momma", correct: false },
      { text: "Sean John Combs", correct: false },
      { text: "Jace got W rizz", correct: true },
      { text: "Grace got wizz", correct: false },
    ],
  },
  {
    question: "What song plays when Lebron is being absorbed by light?",
    answers: [
      { text: "You are my song", correct: false },
      { text: "You are my sunshine", correct: true },
      { text: "You are my everything", correct: false },
      { text: "You are my goal", correct: false },
    ],
  },
  {
    question: "What does the orange nugget with a roblox man face say?",
    answers: [
      { text: "Kneel Down BAKA!", correct: false },
      { text: "Oi Oi Oi", correct: false },
      { text: "Gedagedigedagedago", correct: true },
      { text: "JaJaJajaJa", correct: false },
    ],
  },
  {
    question: "What does the red larva say?",
    answers: [
      { text: "That's sus", correct: false },
      { text: "Oi Oi Oi", correct: true },
      { text: "Hawk TUAH Spit on that thang!", correct: false },
      { text: "Yellow Larva your done.", correct: false },
    ],
  },
  {
    question:
      'Fill in the blank: "When she ruins your life but your lowkey just __ ____ ____"',
    answers: [
      { text: "lowkey a chill dude", correct: true },
      { text: "a nonchalant dreadhead", correct: false },
      { text: "a sigma who dont care", correct: false },
      { text: "a freshmen", correct: false },
    ],
  },
  {
    question: "What is the Broccoli in the Hot Tub called?",
    answers: [
      { text: "Black Broccoli", correct: false },
      { text: "Dripped out Broccoli", correct: false },
      { text: "Water Broccoli", correct: false },
      { text: "Gangsta Broccoli", correct: true },
    ],
  },
  {
    question: "What is the green caterpillar with a cig called?",
    answers: [
      { text: "Kratos", correct: false },
      { text: "Kennick", correct: false },
      { text: "Krater", correct: true },
      { text: "Karson", correct: false },
    ],
  },
  {
    question: "I just lost __ ____",
    answers: [
      { text: "my bust", correct: false },
      { text: "my huzz", correct: false },
      { text: "my dawg", correct: true },
      { text: "my wife", correct: false },
    ],
  },
  {
    question: "Who rizzed up level 10 gyat Livvy Dunne",
    answers: [
      { text: "Baby Groot", correct: false },
      { text: "Lil baby", correct: false },
      { text: "Baby Gronk", correct: true },
      { text: "Dababy", correct: false },
    ],
  },
  {
    question: 'Fill in the blank: "Erm, what the _____"',
    answers: [
      { text: "skibidi", correct: false },
      { text: "sigma", correct: true },
      { text: "heck", correct: false },
      { text: "flip", correct: false },
    ],
  },
  {
    question: "What is it called when you beat your meat very often?",
    answers: [
      { text: "diddling", correct: false },
      { text: "gooning", correct: true },
      { text: "feining", correct: false },
      { text: "tripping", correct: false },
    ],
  },
  {
    question: "What youtuber is two steps ahead?",
    answers: [
      { text: "Diddy", correct: false },
      { text: "Nikocado Avacado", correct: true },
      { text: "Sam Sulek", correct: false },
      { text: "Robert Fanum Escanio", correct: false },
    ],
  },
  {
    question: "Who's mass is so huge it creates a blackhole?",
    answers: [
      { text: "Nikocado Avacado", correct: false },
      { text: "TenZ", correct: false },
      { text: "Sam Sulek", correct: false },
      { text: "Caseoh", correct: true },
    ],
  },
  {
    question: "What is it called when someone takes your food?",
    answers: [
      { text: "YN Tax", correct: false },
      { text: "Youngboul Tax", correct: false },
      { text: "Food Tax", correct: false },
      { text: "Fanum tax", correct: true },
    ],
  },
  {
    question: "What is it called when you stretch your Johnson?",
    answers: [
      { text: "Jelqing", correct: true },
      { text: "Diddling", correct: false },
      { text: "Joking", correct: false },
      { text: "Gooning", correct: false },
    ],
  },
  {
    question:
      "What is it called when you look way better than someone next to you?",
    answers: [
      { text: "Mogging", correct: true },
      { text: "Diddling", correct: false },
      { text: "Looksmaxxing", correct: false },
      { text: "Gooning", correct: false },
    ],
  },
  {
    question: "Who does everyone want to work with?",
    answers: [
      { text: "Natalie Tran", correct: false },
      { text: "Sigma", correct: false },
      { text: "Nonchalant Dreadhead", correct: true },
      { text: "Alpha Wolf", correct: false },
    ],
  },
  {
    question:
      'What song is this? "From the screen to the ring, to the pen, to the king"',
    answers: [
      { text: "Carnival By Kanye", correct: false },
      { text: "FE!N By Travis Scott", correct: false },
      { text: "Thick Of It By KSI", correct: true },
      { text: "New By Ken Carson", correct: false },
    ],
  },
  {
    question: "Who escaped the matrix?",
    answers: [
      { text: "Andrew Tate", correct: true },
      { text: "Kai Cenat", correct: false },
      { text: "NBA Youngboy", correct: false },
      { text: "Mark Zuckerberg", correct: false },
    ],
  },
];
