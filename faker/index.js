import { createNUsers } from "./user.js";
import fs from "fs";

(() => {
  fs.writeFileSync("./db.json", JSON.stringify({ users: createNUsers(20) }));
})();
