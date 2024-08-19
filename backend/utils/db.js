import sqlite from "node:sqlite"

export default sqlite.open("./mydb.sqlite", { timeout: 3000 })