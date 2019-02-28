/**
 * Using List utility functions available in ES6
 * 
 * - map
 * - reduce
 * - fetch
 * - combining (map, reduce and fetch)
 */

 // object to be used
 var cadets = [
    {
        id: 5,
        name: "Luke Skywalker",
        age: 26,
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
      },
      {
        id: 82,
        age: 23,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
      },
      {
        id: 22,
        age: 30,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
      },
      {
        id: 15,
        age: 25,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
      },
      {
        id: 11,
        age: 28,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
      },
];

 // map - create a list of cadets names
 var names = cadets.map( cadet => cadet.name);

 // filter - create a list of the sum of Pilot Score and shooting score
 var force = cadets.filter( cadet => cadet.isForceUser);

 // reduce - sum the scores of all cadets
 var total_score = cadets.reduce((sum, cadet) => sum + cadet.pilotingScore + cadet.shootingScore, 0)

 // reduce - return the cadet with the highest shooting score
 var top_shooter = cadets.reduce( function (score, cadet) {
     return (score.shootingScore || 0) > cadet.shootingScore ? score : cadet;
 },{});

 // combine (filter and map) - create a list of cadet names who are in the Force
 var cadets_inforce = cadets.filter( cadet => cadet.isForceUser)
                            .map(inforce => inforce.name);

 // Combine (filter and reduce) - give the sum of shootingScore for cadets in force
 var cadets_force_shooting_score = cadets.filter( cadet => cadet.isForceUser)
                                         .reduce((sum, shooting) => sum + shooting.shootingScore,0);

 // Combine (filter, map and reduce) - give the sum of all scores for cadets
 // over the age of 25
 var score_qualified_cadets = cadets.filter( cadet => cadet.age > 25)
                                    .map( score_list => score_list.pilotingScore + score_list.shootingScore)
                                    .reduce((sum, score) => sum + score, 0);


 (function(){
    console.log("\tMap, Filter and Reduce Functions")
    console.log("\t----------------------------------\n")
    
    console.log("\tMap Function:")
    console.log(`\tCadets names: ${names}\n`)

    console.log("\tFilter Function:")
    // display object
    var force_json = JSON.stringify(force)
    console.log(`\tCadets in the FORCE: ${force_json}\n`)

    console.log("\tReduce Function:")
    console.log(`\tTotal Score: ${total_score}`)
    // display in json format
    var shooter = JSON.stringify(top_shooter)
    console.log(`\tTop Shooter: ${shooter}\n`)

    console.log("\tCombined Functions:")
    console.log(`\tCadets in the Force: ${cadets_inforce}`)
    console.log(`\tCadets in the Force Shooting Score: ${cadets_force_shooting_score}`)
    console.log(`\tCadets in the Force Total Score: ${score_qualified_cadets}`)
 })()