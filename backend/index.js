import express from "express";
import baseInfo from "./routes/baseInfo.js";
import projects from "./routes/projects.js";
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", baseInfo);
app.use("/api/projects", projects);
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
