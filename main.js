// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }

class hashMap {
    constructor(bucketSize = 16, loadFactor = 0.75) {
        this.buckets = new Array(bucketSize).fill(null).map( ()=>[]);
        this.bucketSize = bucketSize;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.currentLoad = this.size / this.bucketSize;
    } 
    resize() {
        const newBucketSize = this.bucketSize * 2;
        const newBuckets = new Array(newBucketSize).fill(null).map(() => []);
        for (const bucket of this.buckets) {
            for (const {key, value} of bucket) {
                const index = this.hash(key) % newBucketSize;
                newBuckets[index].push({key, value});
            }
        }
        this.buckets = newBuckets;
        this.bucketSize = newBucketSize;
        this.currentLoad = (this.size / this.bucketSize);
    }
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }
    bucket(key) {
        let h = this.hash(key);
        return this.buckets[h % this.buckets.length];
    }
    entry(bucket, key){
        for (let e of bucket){
            if(e.key === key) {
                return e;
            }
        }
        return null;
    }
    set(key, value) {
        let b = this.bucket(key);
        let e = this.entry(b, key);
        if (e) {
            e.value = value;
            return;
        }
        b.push({key, value});
        this.size ++;
        this.currentLoad = this.size / this.bucketSize;
        if(this.size / this.bucketSize > this.loadFactor) {
            console.log("Load Exceeded, BucketSize Doubled")
            this.resize();
        }
    }
    get(key) {
       let b = this.bucket(key);
       let e = this.entry(b , key);
       if (e) {
        return e.value;
       }
       return null;
    }
    has(key) {
        let b = this.bucket(key);
        let e = this.entry(b, key);
        if (e) {
            return true;
        }
        return false;
    }
    remove(key) {
        let b = this.bucket(key);
        for (let i = 0; i < b.length; i++) {
            if (b[i].key === key) {
                b[i] = b[b.length - 1];
                b.pop();
                this.currentLoad = this.size / this.bucketSize;
                return true
            }
        }
        return false;
    }
    length() {
        let bs = this.buckets;
        let storedKeys = 0;
        for (let i = 0; i < bs.length; i ++){
            if(bs[i]) {  
                for(let j = 0; j < bs[i].length; j++){
                    storedKeys ++;
                }
            }
        }
        return storedKeys;
    }
    clear() {
        for (let i = 0; i < this.bucketSize; i++) {
            this.buckets[i] = [];
        }
        // let bs = this.buckets;
        // for( let i = 0; i < bs.length; i++) {
        //     if (bs[i].length > 0) {
        //         for (let j = 0; j <= bs[i].length; j++) {
        //             bs[i].pop();
        //         }
        //     } 
        // }
    }
    keys() {
        let bs = this.buckets;
        let keysArray = [];
        for( let i = 0; i < bs.length; i++) {
            if (bs[i].length > 0) {
                for (let j = 0; j < bs[i].length; j++) {
                    keysArray.push(Object.values(bs[i][j])[0]); // Keys and values use different methods to extract keys / values
                }
            }
        }
        return "Keys are : " + keysArray;
    }
    values() {
        let bs = this.buckets;
        let valuesArray = [];
        for( let i = 0; i < bs.length; i++) {
            if (bs[i].length > 0) {
                for (let j = 0; j < bs[i].length; j++) {
                    let entry = bs[i][j];
                    valuesArray.push(entry.value);
                }
            }
        }
        return "Values are : " + valuesArray;
    }
    entries() {
        let bs = this.buckets;
        let entryArray = [];
        for (let i = 0; i < bs.length; i++) {
            if(bs[i].length > 0) {
                for( let j = 0; j < bs[i].length; j++) {
                    let entry = bs[i][j];
                    entryArray.push([entry.key, entry.value]);
                }
            }
        }
        return entryArray;
    }
    // let bs = this.buckets;
        // let entriesArray = [];
        // let entryKey = "";
        // let entryValue = "";
        // let entryPair = ''
        // for( let i = 0; i < bs.length; i++) {
        //     if (bs[i].length > 0) {
        //         for (let j = 0; j < bs[i].length; j++) {
        //             entryKey = Object.values(bs[i][j])[0];
        //             entryValue = Object.values(bs[i][j])[1];
        //             entryPair = `[${entryKey}, ${entryValue}]`;
        //             entriesArray.push(entryPair);
        //         }
        //     }
        // }
        // return "Entries are : " + entriesArray;

}
const test = new hashMap(16, 0.75);

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('moon', 'silver');
test.set('sun', 'gold');
test.set('earth', 'blue');
test.set('star', 'yellow');
test.set('comet', 'icy');
test.set('planet', 'rocky');
test.set('cloud', 'fluffy');
test.set('sky', 'azure');
test.set('mountain', 'rock');
test.set('river', 'clear');
test.set('forest', 'green');
test.set('apple pie', 'sweet');
test.set('banana split', 'chocolate');
test.set('peach', 'pink');
test.set('plum', 'purple');
test.set('watermelon', 'green');
test.set('pineapple', 'yellow');
test.set('coconut', 'brown');
test.set('kiwi', 'brown');
test.set('cherry', 'red');
test.set('grapefruit', 'pink');
test.set('lemon', 'yellow');
test.set('lime', 'green');
test.set('mango', 'orange');
test.set('blueberry', 'blue');
test.set('raspberry', 'red');
test.set('strawberry', 'red');
test.set('blackberry', 'black');
test.set('avocado', 'green');
test.set('tomato', 'red');
test.set('cucumber', 'green');
test.set('carrot cake', 'orange');
test.set('hot dog', 'brown');
test.set('burger', 'beef');
test.set('pizza', 'cheese');
test.set('sandwich', 'white');
test.set('sushi', 'fish');
test.set('taco', 'spicy');
test.set('pasta', 'Italian');
test.set('noodle', 'stir-fry');
test.set('soup', 'broth');
test.set('steak', 'red');
test.set('chicken', 'white');
test.set('fish', 'silver');
test.set('lobster', 'red');
test.set('crab', 'brown');
test.set('shrimp', 'pink');
test.set('prawn', 'pink');
test.set('clam', 'beige');
test.set('oyster', 'black');
test.set('scallop', 'white');
test.set('frog legs', 'green');
test.set('duck', 'white');
test.set('goose', 'gray');
test.set('chicken nugget', 'golden');
test.set('beef', 'brown');
test.set('pork', 'pink');
test.set('lamb', 'red');
test.set('egg', 'white');
test.set('cheese', 'yellow');
test.set('butter', 'yellow');
test.set('milk', 'white');
test.set('yogurt', 'white');
test.set('ice cream cone', 'wafer');
test.set('cookie', 'chocolate');
test.set('cupcake', 'frosted');
test.set('candy', 'sugar');
test.set('chocolate bar', 'brown');
test.set('candy cane', 'red and white');
test.set('caramel', 'golden');
test.set('marshmallow', 'white');
test.set('cotton candy', 'pink');
test.set('popcorn', 'buttery');
test.set('potato chips', 'salty');
test.set('peanut butter', 'creamy');
test.set('jelly', 'grape');
test.set('honey', 'gold');
test.set('jam', 'strawberry');
test.set('toast', 'brown');
test.set('bagel', 'golden');
test.set('croissant', 'flaky');
test.set('pancake', 'fluffy');
test.set('waffle', 'crispy');
test.set('donut', 'sweet');
test.set('muffin', 'blueberry');
test.set('cinnamon roll', 'spicy');
test.set('pop tart', 'fruity');
test.set('granola bar', 'healthy');
test.set('fruit salad', 'mixed');
test.set('veggie salad', 'fresh');
test.set('potato salad', 'creamy');
test.set('pasta salad', 'Italian');
test.set('tuna salad', 'fishy');
test.set('coleslaw', 'crunchy');
test.set('spinach', 'leafy');
test.set('kale', 'green');
test.set('lettuce', 'green');
test.set('tomato salad', 'tangy');
test.set('carrot salad', 'orange');
test.set('onion', 'white');
test.set('garlic', 'strong');
test.set('ginger', 'spicy');
test.set('basil', 'herb');
test.set('mint', 'refreshing');
test.set('rosemary', 'aromatic');
test.set('oregano', 'herb');
test.set('thyme', 'spicy');
test.set('parsley', 'green');
test.set('sage', 'earthy');
test.set('cilantro', 'fresh');
test.set('chive', 'green');


// TOP TEST CASE WORKING

// test.set('apple', 'red')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')
// test.set('moon', 'silver')




// console.log(test.has('apple'));
// console.log(test.get("apple"));
// console.log(test.length());
// // console.log(test.remove('apple'));
// // console.log(test);
// // console.log(test.length());
// // test.clear();
// console.log(test.keys());
// console.log(test.values());
console.table(test.entries());
console.log(test);





