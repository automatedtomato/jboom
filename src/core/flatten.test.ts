import { expect, test } from "bun:test";
import { flatten } from "./flatten";
import type { FlatRow, TreeNode } from "./types";

test("leaf only", () => {
	const leaf: TreeNode = { kind: "leaf", key: "x", value: 1 };
	const nodes: TreeNode[] = [leaf];
	expect(flatten(nodes)).toEqual([{ node: leaf, depth: 0, path: "x" }]);
});

test("expanded obj show children", () => {
	const child: TreeNode = { kind: "leaf", key: "a", value: 1 };
	const root: TreeNode = {
		kind: "object",
		key: "root",
		children: [child],
		expanded: true,
	};
	const rows: FlatRow[] = flatten([root]);
	expect(rows).toEqual([
		{ node: root, depth: 0, path: "root" },
		{ node: child, depth: 1, path: "root/a" },
	]);
});

test("collapsed object hides children", () => {
	const child: TreeNode = { kind: "leaf", key: "a", value: 1 };
	const root: TreeNode = {
		kind: "object",
		key: "root",
		children: [child],
		expanded: false,
	};
	const rows: FlatRow[] = flatten([root]);
	expect(rows).toEqual([{ node: root, depth: 0, path: "root" }]);
});
