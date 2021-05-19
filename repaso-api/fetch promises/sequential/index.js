const {taskOne, taskTwo} = require('./tasks');

async function main(){

    console.time("measuring time");
        const valueOne = await taskOne;
        const valueTwo = await taskTwo;
    console.timeEnd("Measuring time");

    console.log('Task one: ', valueOne);
    console.log('Task two: ', valueTwo);

}

main();