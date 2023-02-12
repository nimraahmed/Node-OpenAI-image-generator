const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

//enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//steps
//1. require dotenv and set port env variable -> done
//2. start server -> done
//3. get openapikey, add to .env -> done
//4. make routes folder with openaiRoutes.js -> done
//5. make middleware in app.js -> done
//6. in openaiRoutes.js make a post endpoint at '/generateimage' & send a generic callback function with res.send json object with success: true
//7. test post route with postman
//8. make controllers folder, make openaiController file, make generateImage controller function with res.send json object with success: true
//9. bring in generate image to openairoutes, replace anonymous function with generateimage, should have the same results in postman
