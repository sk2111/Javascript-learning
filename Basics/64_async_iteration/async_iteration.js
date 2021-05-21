/* 
    Async iteration allow us to iterate over data that comes asynchronously , on-demand,
    Like for example when we download something chun by chunk over the network
    
*/

/* 
    Async iterables 

    => Previously we have used symbol.iterator to implement an iteration protocol
    => we have used for..of loop to iterate over it
    => But sometimes we need to implment async iteration (which will be helpful for making network
        request)
    => To make async itertor we need to Symbol.asyncIterator
*/

let obj = {
    from: 1,
    to: 10,
    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            end: this.to,
            async next() {
                await new Promise((resolve) => setTimeout(resolve, 4000));
                return { done: false, value: this.current + 1 };
            }
        }
    }
}

for await (let i of obj) {
    console.log(i);
}

//Like sync iterators it wont block the thread and it pushes each cycle to microtask queue and process


/* 
    Generators helping

    => We already sw that generators will return a generator object with next() throw() and few other methods
    => Generators are perfect fit for introducing Iterable protocol 
    => It makes the code to be clean and neat
    => We can write both synchronous and asynchrnous version of generators
*/

async function* generator(start, end) {
    for (let i = start; i < end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}
// or we can also introduce generator in object

let obj = {
    start: 1,
    end: 2,

    *[Symbol.asyncIterator]() {
        for (let value = this.start; value <= this.end; value++) {
            yield value;
        }
    }
};

(async function () {
    for await (let i of generator(1, 2)) {
        console.log(i);
    }
})();


/* 
    If we take a look deeply we can see that

    => In synchronous iterators we call the next method and it return the value
    => But in async version the generators will return a next method with a promise
    => So only we need to call async generators with await in front of it

    result = await generator.next(); // result = {value: ..., done: true/false}
*/

//using in object example
let range = {
    from: 1,
    to: 5,

    // this line is same as [Symbol.asyncIterator]: async function*() {
    async *[Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {

            // make a pause between values, wait for something
            await new Promise(resolve => setTimeout(resolve, 1000));

            yield value;
        }
    }
};

(async () => {

    for await (let value of range) {
        alert(value); // 1, then 2, then 3, then 4, then 5
    }

})();


/* 
    Technically we can add both Symbol.iterator and Symbol.asynIterator to the obj 
    and it works corresponding for for...of loop and for await of loop
*/

/* 
    Real life paginated data

    Lets see how to use async generator to fetch real life paginate data over the network

*/


async function* fetchCommits(url) {
    while (url) {

        const res = await fetch(url);
        const body = await res.json();

        let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
        nextPage = nextPage?.[1];

        url = nextPage;

        for (let commit of body) { //yield commits one by one, until the page ends
            yield commit;
        }
    }
};

(async () => {
    for await (let i of fetchCommits("my/example.com")) {
        console.log(i); // commit printed one by one 
    }
});
