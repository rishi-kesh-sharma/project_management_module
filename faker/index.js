import { createNUsers } from "./user.js";
import fs from "fs";
import { createNWorkspaces } from "./workspace.js";
import { createNBookmarkedProjects } from "./bookmarked.js";
import { createNArchivedProjects } from "./archive.js";
import { createNInventories } from "./inventories.js";
import { createNEquipments } from "./equipments.js";
import { createNHumanResources } from "./humanResource.js";
import { createNBudgets } from "./budgets.js";
import { createNSubTasks } from "./subTasks.js";
import { createNTasks } from "./task.js";

(() => {
  fs.writeFileSync(
    "./db.json",
    JSON.stringify({
      users: createNUsers(20),
      workspaces: createNWorkspaces(4),
      bookmarks: createNBookmarkedProjects(5),
      archives: createNArchivedProjects(5),
      inventories: createNInventories(10),
      equipments: createNEquipments(10),
      humanResources: createNHumanResources(20),
      budgets: createNBudgets(20),
      subTasks: createNSubTasks(20),
      tasks: createNTasks(10),
    })
  );
})();
