import { readFileSync } from "fs";
import { extname } from "path";
import { parseInput, parseToTree, type TreeNode } from "../core";
import { TreeView } from "./TreeView";

type AppProps = { filePath: string };

export function App({ filePath }: AppProps) {
	const format = extname(filePath);
	const raw: string = readFileSync(filePath, "utf-8");

	if (format === ".json" || format === ".yaml") {
		const input = parseInput(raw, format);
		const tree: TreeNode[] = parseToTree(input);
		return <TreeView nodes={tree} />;
	} else {
		throw new Error(`Unsupported format: ${format}`);
	}
}
