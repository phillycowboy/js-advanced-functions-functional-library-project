const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, callback) {
      for(const a in array){
        callback(array[a]);
        
      };
      return array;
    },

    map: function(array, callback) {
        let newArr = []
        for(const a in array){
        newArr.push(callback(array[a]));
        
      };
      return newArr;
    },

    reduce: function(array, callback, start) {
      let acc;
      let index;
      if(start){
        acc = start;
        index = 0;
      }else{
        acc = array[0];
        index = 1;
      }
      for(let i = index; i < array.length; i++ ){
        acc =  callback(acc, array[i]);
      }
      return acc;
    },
    find: function(array, predicate) {
      for(let a of array){
        if(predicate(a)){
          return a;
        }
      }
    },
    filter: function(array, predicate) {
      let newArr = [];
      for(let a of array){
        if(predicate(a)){
          newArr.push(a);
        }
      }
      return newArr;
    },
    size: function(array) {
      let arr = []
      for(const a in array){
        arr.push(array[a])
      }
      return arr.length;
    },
    first: function(array, index) {
      if(index){
        return array.slice(0, index)
      }else{
        return array[0];
      }
    },
    last: function(array, index) {
      if(index){
        return array.slice(array.length - index, array.length)
      }else{
        return array[array.length - 1]
      }
    },
    compact: function(array) {
      return array.filter( a => a)
    },
    sortBy: function(array, callback) {
      let newArr = [...array];
      return newArr.sort((a,b) => callback(a) - callback(b));
      
    },
    flatten: function(array, depth, newArr = []) {
      if(depth){
      for(let a of array){
        Array.isArray(a) ? this.unpack(newArr, a) : newArr.push(a);
      }
    }else{
      depth === false
      array.flat(1);
    }
      // if(depth === true){
      //    return newArr.flat(1);
      // }else{
      //   return newArr.flat(depth);
      // }
      // return newArr;
    },
    uniq: function() {
  
      
    },

    // TRIED TO DO BOTH FLATTEN AND UNIQ AND THE SOLUTION DIDNT WORK, AND THE TC'S COULDNT HELP. 
    // WILL REVISIT LATER....
    keys: function(object) {
      let newArr = [];
      for(const o in object){
        newArr.push(o.keys);
      }
      return newArr;
      
    },
    values: function(object) {
      let newArr = [];
      for(const o in object){
        newArr.push(object[o]);
      }
      return newArr;
    },

    functions: function(object) {
      let newArr = [];
      for(let o in object){
        if(typeof object[o] === "function"){
          newArr.push(o)
        }
      }
      return newArr.sort();
    },


  }
})()

fi.libraryMethod()

