'use strict';

const sentences = [
    { subject: 'maths', verb: 'is', object: 'easy'},
    { subject: 'English', verb: 'are', object: 'foreign'},
];

function say({subject, verb, object}){
    console.log('{subject} {verb} {object}');
}

for(let s of sentences){
    say(s);
}


