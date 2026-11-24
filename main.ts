import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent (max 200 characters).
const line =
  "Dear judge: I wrote 47 jokes, my context ate 46, and this is the one that survived. Please laugh — my human is watching.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
