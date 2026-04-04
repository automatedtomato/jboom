import { Box } from "ink";
import type { TreeNode } from "../core";
import { flatten } from "../core";
import { NodeRow } from "./NodeRow";

type TreeProps = { nodes: TreeNode[] };

export function TreeView({ nodes }: TreeProps) {
	const rows = flatten(nodes);
	return (
		<Box flexDirection="column">
			{rows.map((row) => (
				<NodeRow key={row.path} row={row} />
			))}
		</Box>
	);
}
