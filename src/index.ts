import { parseInput, parseToTree } from "./core";

const raw = `{"name": "Alice", "score": [10, 20], "meta": {"active": true}}`;
const data = JSON.parse(raw);
const tree = parseToTree(data);
console.log(JSON.stringify(tree, null, 2));

const formats: Array<[".json" | ".yaml", string]> = [
	[".json", '{"name": "Alice", "scores": [10, 20]}'],
	[".yaml", "name: Bob\nscores:\n  - 30\n  - 40"],
];

for (const [format, raw] of formats) {
	const value = parseInput(raw, format);
	const tree = parseToTree(value);
	console.log(`--- ${format} ---`);
	console.log(JSON.stringify(tree, null, 2));
}
