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


console.log(test);
console.log(test.has('apple'));
console.log(test.get("apple"));
console.log(test.length());
// console.log(test.remove('apple'));
// console.log(test);
// console.log(test.length());
// test.clear();
console.log(test.keys());
console.log(test.values());
console.table(test.entries());





