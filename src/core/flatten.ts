import type { FlatRow, TreeNode } from "./types";

function flattenNode(node: TreeNode, depth: number, rows: FlatRow[]): void {
	rows.push({ node, depth });
	if (node.kind !== "leaf" && node.expanded) {
		for (const child_node of node.children) {
			flattenNode(child_node, depth + 1, rows);
		}
	}
}

export function flatten(nodes: TreeNode[], depth: number = 0): FlatRow[] {
	const rows: FlatRow[] = [];
	for (const node of nodes) {
		flattenNode(node, depth, rows);
	}
	return rows;
}
