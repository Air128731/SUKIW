const path = require('path');

module.exports = {
  // ...
  resolve: {
    fallback: {
        "https": false
//      "https": require.resolve("https-browserify")
    }
  }
};