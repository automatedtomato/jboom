import { expect, test } from "bun:test";
import { flatten } from "./flatten";
import type { TreeNode } from "./types";

test("leaf only", () => {
	const nodes: TreeNode[] = [{ kind: "leaf", key: "x", value: 1 }];
	expect(flatten(nodes)).toEqual([{ node: nodes[0], depth: 0 }]);
});
