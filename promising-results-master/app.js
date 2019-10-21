const promise = slowMath.add(6,2)
.then(num => {
    console.log(num);
    return slowMath.multiply(num, 2);
})
.then(num => {
    console.log(num); //should show 16 (8 * 2)
    return slowMath.divide(num, 4);
})
.then(num => {
    console.log(num); //4
    return slowMath.subtract(num, 3)
})
.then(num => {
    console.log(num); //1
    return slowMath.add(num, 98)
})
.then(num => {
    console.log(num); //99
    return slowMath.remainder(num, 2)
})
.then(num => {
    console.log(num); //1 (remainder of 99/2)
    return slowMath.multiply(num, 50)
})
.then(num => {
    console.log(num); //50
    return slowMath.remainder(num, 40)
})
.then(num => {
    console.log(num); //0
    return slowMath.add(num, 32)
})
.then(num => {
    console.log('the final result is ' + num) //32
});
promise.catch(function(error) {
    console.error(error);
  });


async function doMath() {
    try {
        let result1 = await slowMath.add(6, 2)
        console.log(result1);

        let result2 = await slowMath.multiply(result1, 2)
        console.log(result2);

        let result3 = await slowMath.divide(result2, 4)
        console.log(result3);

        let result4 = await slowMath.subtract(result3, 3)
        console.log(result4);

        let result5 = await slowMath.add(result4, 98)
        console.log(result5);

        let result6 = await slowMath.remainder(result5, 2)
        console.log(result6);

        let result7 = await slowMath.multiply(result6, 50)
        console.log(result7);

        let result8 = await slowMath.remainder(result7, 40)
        console.log(result8);

        let result9 = await slowMath.add(result8, 32)
        console.log('the final result is ' + result9);
    } catch (err) {
        console.log(err);

    }
}
doMath()