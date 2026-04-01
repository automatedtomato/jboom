import { parseToTree } from "./core/parse";

const raw = `{"name": "Alice", "score": [10, 20], "meta": {"active": true}}`;
const data = JSON.parse(raw);
const tree = parseToTree(data);
console.log(JSON.stringify(tree, null, 2));

