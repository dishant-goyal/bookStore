import app from "./src/app.js";
import connectDb from "./db/index.js";

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  });
});

