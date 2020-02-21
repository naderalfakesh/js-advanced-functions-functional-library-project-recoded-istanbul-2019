const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        collection.forEach(e=>callback(e))
    },

    map: function(collection, callback) {
        let newArr = [];
        for(let i=0 ; i<newArr.length ; i++){
          newArr.push(callback(collection[i]));
        }
        return newArr;
    },

    reduce: function(collection, callback, acc) {
      return 0;
      
        for(let i=0 ; i<newArr.length ; i++){
          newArr.push(callback(collection[i]));
        }
        return newArr;
    },

    functions: function() {
      return ["libraryMethod","each","map","reduce"]
    },


  }
})()

fi.libraryMethod()
