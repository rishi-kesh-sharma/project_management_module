import { createNUsers } from "./user.js";
import fs from "fs";
import { createNWorkspaces } from "./workspace.js";
import { createNBookmarkedProjects } from "./bookmarked.js";
import { createNArchivedProjects } from "./archive.js";

(() => {
  fs.writeFileSync(
    "./db.json",
    JSON.stringify({
      users: createNUsers(20),
      workspaces: createNWorkspaces(4),
      bookmarks: createNBookmarkedProjects(5),
      archives: createNArchivedProjects(5),
    })
  );
})();
