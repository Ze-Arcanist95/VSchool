const numArr = [1, 2, 3];
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
const arrOfArrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
const personArr = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// 1) Turn an array of numbers into a total of all the numbers.
    function total(arr) {
        return arr.reduce((result, e) => {
            result += e;
            return result;
        });
    };

    console.log(total(numArr));

// 2) Turn an array of numbers into a long string of all those numbers.
    function stringConcat(arr) {
        return arr.reduce((result, e) => {
            return result.concat(e.toString());
        }, '');
    };

    console.log(stringConcat(numArr));

// 3) Turn an array of voter objects into a count of how many people voted.
    function totalVotes(arr) {
        return arr.reduce(function(result, e){
            if(e.voted){
                result++;
            };
            return result; 
        }, 0);
    };

console.log(totalVotes(personArr));

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
    return arr.reduce((result, e) => {
        return result + e.price;
    }, 0);
};

console.log(shoppingSpree(wishlist));

// 5) Given an array of arrays, flatten them into a single array

function flatten(arr) {
   return arr.reduce((result, e) => {
       return result.concat(e);
   }, []);
};

console.log(flatten(arrOfArrays));

// 6) Given an array of potential personArr, return an object representing the results of the vote
// Include how many of the potential personArr were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
    function voterResults(arr) {
        return arr.reduce((result, e) => {
            if (e.age >= 18 && e.age <= 25) {
                result.numYoungPeople++;
                if(e.voted) {
                    result.numYoungVotes++;
                };
            } else if (e.age <= 35) {
                result.numMidPeople++;
                if(e.voted) {
                    result.numMidVotes++;
                };
            } else if (e.age <= 55) {
                result.numOldPeople++;
                if(e.voted) {
                    result.numOldVotes++;
                };
            };

            return result;
        }, { numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0 });
    };

console.log(voterResults(personArr));