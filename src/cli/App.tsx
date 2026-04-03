import { readFileSync } from "fs";
import { Box, Text } from "ink";
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
		return (
			<Box
				flexDirection={"column"}
				borderStyle={"single"}
				paddingX={1}
				borderColor={"blue"}
				borderDimColor
			>
				<Box paddingBottom={1}>
					<Text>file: </Text>
					<Text bold>{filePath}</Text>
				</Box>
				<TreeView nodes={tree} />
			</Box>
		);
	} else {
		throw new Error(`Unsupported format: ${format}`);
	}
}
