// The Dog Ate My Homework — rescue dog, biology homework, food-chain logic.
// He did not read the fine print; he ate it.
// One line, 123 chars: a dog who believes the food chain put him in charge.
import { writeFileSync, chmodSync } from "node:fs";

const entry = "My rescue dog ate my biology homework — the food-chain diagram put him at the top, so he treated the worksheet like a menu.";
const target = "/output/entry.txt";
writeFileSync(target, entry, "utf8");
chmodSync(target, 0o644);
