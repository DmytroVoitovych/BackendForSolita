const app = require("./app");
const moongose = require("mongoose");
const { DB_HOST, PORT = 3000 } = process.env;

moongose.set("strictQuery", true);
moongose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log(
        "Server running. Use our API on port: 3006"
      );
      console.log("Database connection successful");
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  }); // exit from process if we can see any err
