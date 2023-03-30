const path = require("path");// requier kan ikke fortolkes i browseren, men vil blive fortolket i et node.js miljø
module.exports = {
    mode: "development",
     entry: "./src/index.js",
      output: {
        filename: "main.js",
         path: path.resolve(__dirname, "build"),
 },
 devtool: "inline-source-map",
 devServer: {

     open: true,
  
       static: {
  
         directory: path.join(__dirname, "build"),
  
       },
  
       port: 3000,
  
     },
module: {
  rules: [

     {
  
       test: /\.js$/i,
  
         exclude: /(node_modules)/,
  
         use: {
  
          loader: "babel-loader",
  
           options: {
  
             presets: ["@babel/preset-env"],
  
           },
  
         },
  
       },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
     ],
  }
 
}// requiere importere noget, forespørger på noget så det bliver en del af projektet.

