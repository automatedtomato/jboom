export type JsonPrimitive = string | number | boolean | null;
export type TreeNode =
	| { kind: "object"; key: string; children: TreeNode[]; expanded: boolean }
	| { kind: "array"; key: string; children: TreeNode[]; expanded: boolean }
	| { kind: "leaf"; key: string; value: JsonPrimitive };
export type FlatRow = { node: TreeNode; depth: number };
