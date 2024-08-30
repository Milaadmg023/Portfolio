import express from "express";
import cors from "cors";
import baseInfo from "./routes/baseInfo.js";
import message from "./routes/message.js"

const app = express();

app.use(cors()); 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", baseInfo);
app.use("/api/messages" , message)

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
