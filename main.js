// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }

class hashMap {
    constructor(bucketSize = 16) {
        this.buckets = new Array(bucketSize).fill(null).map( ()=>[]);
        this.bucketSize = bucketSize;
    } 
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }
    set(key, value) {
        this.key = key;
        this.value = value;
        let newKey = this.hash(key);
        const index = newKey % 16;
        this.buckets[index].push([this.key, this.value]);
    }
    get(key) {
        this.key = key;
        let newKey = this.hash(key);
        const index = newKey % 16;
        for (let i = 0; i < this.buckets[index].length; i ++){
            const [key, value] = this.buckets[1];
            console.log(`Key ${key} Value ${value}`);
        }
        // console.log(this.buckets[index] ? this.buckets[index] : null);
    }
    has(key) {
        this.key = key;
        let newKey = this.hash(key);
        const index = newKey % 16;
        console.log(this.buckets[index].length > 0 ? true : false);
    }
    remove(key) {
        this.key = key;
        let newKey = this.hash(key);
        const index = newKey % 16;
        this.buckets[index] = [];
    }
}
const test = new hashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
// console.log(test);
test.has('apple');
// test.remove('elephant');
console.log(test);
test.has('apples');
test.has('kite');
test.get("apple");




