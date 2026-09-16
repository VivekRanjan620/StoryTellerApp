const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require("./middlewares/errorMiddleware");
const helmet = require("helmet");

dotenv.config();

const db = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json({ limit: "10kb" }));

db.getConnection()
  .then((connection) => {
    console.log("MySQL Connected Successfully");
    connection.release();
  })
  .catch((error) => {
    console.error("MySQL Connection Failed:", error.message);
  });

app.get("/", (req, res) => {
  res.send("StoryTeller API is running");
});

app.use("/api/auth", authRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
