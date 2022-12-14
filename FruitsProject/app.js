const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});



const insertResult = await collection.insertMany([
  { name: "Apple",
    score: 8,
    review: "Gereat fruit"
  },
  {
    name: "Orange",
    score: 6,
    review: "Kinda sour"
  },
  {
    name: "Banana",
    score: 9,
    review: "Great stuff!"

  }

  "Bella",
  "Charlie",
  "Lucy",
  "Luna",
  "Max",
  "Oliver",
  "Chloe",
  "Milo",
  "Simba",
  "Cleo",
  "Lily",
  "Nala",
  "Coco",
  "George",
  "Gracie",
  "Jack",
  "Jasper",
  "Leo",
  "Loki",
  "Lola",
  "Oreo",
  "Oscar",
  "Sophie",
  "Tiger",
  "Angel",
  "Bailey",
  "Daisy",
  "Felix",
  "Gizmo",
  "Pepper",
  "Sebastian",
  "Shadow",
  "Simon",
  "Tigger",
  "Zoe",
  "Abby",
  "Alice",
  "Biscuit",
  "Boots",
  "Buttercup",
  "Cupcake",
  "Finn",
  "Garfield",
  "Jasmine",
  "Kiki",
  "Kitty",
  "Lucky",
  "Lulu",
  "Misty",
  "Mittens",
  "Molly",
  "Murphy",
  "Orion",
  "Patches",
  "Peanut",
  "Rocky",
  "Romeo",
  "Sasha",
  "Smokey",
  "Stella",
  "Whiskers",
  "Ziggy",
  "Bandit",
  "Bear",
  "Belle",
  "Boo",
  "Buddy",
  "Caesar",
  "Callie",
  "Candy",
  "Chase",
  "Chester",
  "Cuddles",
  "Dusty",
  "Emma",
  "Fiona",
  "Frankie",
  "Ginger",
  "Harley",
  "Harry",
  "Hazel",
  "Hunter",
  "Jake",
  "Juno",
  "Maggie",
  "Mia",
  "Missy",
  "Moon",
  "Panda",
  "Penny",
  "Phoebe",
  "Princess",
  "Ruby",
  "Rusty",
  "Sadie",
  "Sam",
  "Sammy",
  "Sassy",
  "Socks",
  "Sylvester"


  ( 2022002 , " Abigail Ward " , " Data Science " , "SR" , 20 ),
  ( 2022003 , " Addison Gray " , " Mathematics " , "JR" , 20 ),
  ( 2022004 , " Aiden Lewis " , " Physics " , "SR" , 20 ),
  ( 2022006 , " Alexander Carter " , " Computer Science " , "SO" , 17 ),
  ( 2022008 , " Amelia Sanders " , " Computer Science " , "JR" , 19 ),
  ( 2022009 , " Andrew Reed " , " Physics " , "JR" , 19 ),
  ( 2022010 , " Anthony Gomez " , " Statistics " , "JR" , 18 ),
  ( 2022012 , " Aria Jones " , " Computer Science " , "JR" , 19 ),
  ( 2022015 , " Asher Russell " , " Statistics " , "JR" , 19 ),
  ( 2022017 , " Aubrey Clark " , " Computer Science " , "JR" , 19 ),
  ( 2022020 , " Audrey Fisher " , " Physics " , "SO" , 19 ),
  ( 2022023 , " Aurora Cooper " , " Computer Science " , "FR" , 16 ),
  ( 2022026 , " Ava James " , " Statistics " , "JR" , 19 ),
  ( 2022029 , " Avery Turner " , " Mathematics " , "SO" , 18 ),
  ( 2022031 , " Bella Diaz " , " Statistics " , "SR" , 21 ),
  ( 2022033 , " Benjamin Perry " , " Mathematics " , "FR" , 17 ),
  ( 2022034 , " Camila Davis " , " Physics " , "JR" , 18 ),
  ( 2022036 , " Carter Brooks " , " Mathematics " , "JR" , 19 ),
  ( 2022038 , " Charlotte Cook " , " Physics " , "SO" , 17 ),
  ( 2022039 , " Chloe Powell " , " Data Science " , "JR" , 18 ),
  ( 2022041 , " Christopher Thomas " , " Mathematics " , "FR" , 18 ),
  ( 2022042 , " Daniel Hall " , " Statistics " , "SR" , 19 ),
  ( 2022043 , " David Miller " , " Mathematics " , "SR" , 19 ),
  ( 2022046 , " Dylan Jackson " , " Mathematics " , "SR" , 21 ),
  ( 2022049 , " Eleanor Bennett " , " Data Science " , "SR" , 20 ),
  ( 2022050 , " Elijah Reyes " , " Physics " , "FR" , 17 ),
  ( 2022051 , " Elizabeth Martinez " , " Information Systems " , "JR" , 18 ),
  ( 2022052 , " Ella Thompson " , " Physics " , "JR" , 20 ),
  ( 2022054 , " Ellie Gutierrez " , " Data Science " , "JR" , 20 ),
  ( 2022055 , " Emilia Green " , " Information Systems " , "JR" , 20 ),
  ( 2022056 , " Emily Moore " , " Mathematics " , "SO" , 19 ),
  ( 2022058 , " Emma Hughes " , " Statistics " , "SR" , 21 ),
  ( 2022060 , " Ethan Baker " , " Computer Science " , "SO" , 17 ),
  ( 2022063 , " Evelyn Cruz " , " Information Systems " , "SR" , 19 ),
  ( 2022066 , " Everly Richardson " , " Information Systems " , "SR" , 21 ),
  ( 2022069 , " Ezra Wood " , " Information Systems " , "SR" , 20 ),
  ( 2022070 , " Gabriel Torres " , " Computer Science " , "FR" , 16 ),
  ( 2022073 , " Grace Long " , " Data Science " , "SO" , 18 ),
  ( 2022074 , " Grayson Robinson " , " Statistics " , "FR" , 18 ),
  ( 2022076 , " Hannah Hernandez " , " Data Science " , "JR" , 19 ),
  ( 2022079 , " Harper Young " , " Statistics " , "JR" , 20 ),
  ( 2022081 , " Hazel Bailey " , " Statistics " , "JR" , 18 ),
  ( 2022083 , " Henry Nelson " , " Information Systems " , "JR" , 19 ),
  ( 2022086 , " Hudson Nguyen " , " Information Systems " , "SO" , 19 ),
  ( 2022089 , " Isaac Smith " , " Information Systems " , "SO" , 18 ),
  ( 2022092 , " Isabella Lee " , " Computer Science " , "SR" , 21 ),
  ( 2022093 , " Jack Roberts " , " Statistics " , "SR" , 21 ),
  ( 2022094 , " Jackson Watson " , " Computer Science " , "SO" , 17 ),
  ( 2022096 , " Jacob Foster " , " Computer Science " , "SO" , 19 ),
  ( 2022099 , " James Kelly " , " Mathematics " , "SR" , 21 ),
  ( 2022100 , " Jaxon Phillips " , " Data Science " , "JR" , 19 ),
  ( 2022101 , " Jayden Anderson " , " Physics " , "FR" , 16 ),
  ( 2022103 , " John Ortiz " , " Computer Science " , "JR" , 20 ),
  ( 2022104 , " Joseph Allen " , " Physics " , "SR" , 20 ),
  ( 2022107 , " Joshua Martin " , " Mathematics " , "JR" , 19 ),
  ( 2022110 , " Josiah Jenkins " , " Data Science " , "SO" , 18 ),
  ( 2022112 , " Julian Cox " , " Statistics " , "SO" , 19 ),
  ( 2022114 , " Layla Hill " , " Computer Science " , "JR" , 19 ),
  ( 2022116 , " Leah Rodriguez " , " Computer Science " , "JR" , 19 ),
  ( 2022117 , " Leo Johnson " , " Computer Science " , "JR" , 18 ),
  ( 2022119 , " Levi Gonzalez " , " Information Systems " , "SR" , 19 ),
  ( 2022122 , " Liam Howard " , " Mathematics " , "SR" , 21 ),
  ( 2022125 , " Lillian Garcia " , " Data Science " , "SR" , 19 ),
  ( 2022126 , " Lily Sullivan " , " Mathematics " , "FR" , 18 ),
  ( 2022129 , " Lincoln Barnes " , " Statistics " , "SO" , 19 ),
  ( 2022130 , " Logan Myers " , " Physics " , "JR" , 19 ),
  ( 2022131 , " Lucas Evans " , " Statistics " , "JR" , 20 ),
  ( 2022133 , " Lucy Scott " , " Data Science " , "SO" , 18 ),
  ( 2022135 , " Luke Ramirez " , " Mathematics " , "JR" , 19 ),
  ( 2022136 , " Luna Taylor " , " Statistics " , "FR" , 17 ),
  ( 2022138 , " Madison Ross " , " Statistics " , "FR" , 18 ),
  ( 2022140 , " Mason Morales " , " Data Science " , "FR" , 18 ),
  ( 2022143 , " Mateo Williams " , " Computer Science " , "JR" , 18 ),
  ( 2022146 , " Matthew Wilson " , " Mathematics " , "SO" , 19 ),
  ( 2022148 , " Mia Murphy " , " Data Science " , "SO" , 17 ),
  ( 2022149 , " Michael Edwards " , " Data Science " , "SO" , 17 ),
  ( 2022151 , " Mila Morris " , " Statistics " , "FR" , 17 ),
  ( 2022154 , " Natalie Mitchell " , " Mathematics " , "FR" , 17 ),
  ( 2022157 , " Noah Rivera " , " Data Science " , "FR" , 16 ),
  ( 2022160 , " Nora Sanchez " , " Physics " , "SR" , 20 ),
  ( 2022162 , " Oliver Bell " , " Physics " , "SO" , 19 ),
  ( 2022163 , " Olivia Lopez " , " Computer Science " , "SO" , 17 ),
  ( 2022166 , " Owen Wright " , " Physics " , "JR" , 18 ),
  ( 2022169 , " Penelope Brown " , " Data Science " , "FR" , 16 ),
  ( 2022172 , " Riley Perez " , " Data Science " , "JR" , 18 ),
  ( 2022174 , " Samuel King " , " Mathematics " , "SO" , 18 ),
  ( 2022175 , " Scarlett Walker " , " Statistics " , "SO" , 17 ),
  ( 2022177 , " Sebastian Parker " , " Mathematics " , "SO" , 19 ),
  ( 2022180 , " Sofia Butler " , " Mathematics " , "SO" , 18 ),
  ( 2022182 , " Sophia Harris " , " Physics " , "FR" , 16 ),
  ( 2022185 , " Stella Flores " , " Computer Science " , "SO" , 19 ),
  ( 2022188 , " Theodore Collins " , " Statistics " , "JR" , 20 ),
  ( 2022191 , " Thomas White " , " Information Systems " , "SR" , 20 ),
  ( 2022193 , " Victoria Adams " , " Data Science " , "FR" , 17 ),
  ( 2022196 , " Violet Morgan " , " Physics " , "FR" , 18 ),
  ( 2022197 , " William Price " , " Information Systems " , "JR" , 20 ),
  ( 2022200 , " Willow Stewart " , " Statistics " , "JR" , 18 ),
  ( 2022202 , " Wyatt Peterson " , " Statistics " , "SO" , 19 ),
  ( 2022204 , " Zoe Campbell " , " Computer Science " , "SO" , 18 ),
  ( 2022206 , " Zoey Rogers " , " Information Systems " , "SO" , 19 );
