import type { JsonPrimitive, TreeNode } from "./types";

export function parseToTree(input: unknown, rootKey?: string): TreeNode[] {
  const key = rootKey ?? "root";
  if (Array.isArray(input)) {
    const children = input
      .map((item, index) => parseToTree(item, String(index))[0])
      .filter((n): n is TreeNode => n !== undefined);
    return [{ kind: "array", key, children, expanded: true}];
  }
  if (typeof input === "object" && input !== null) {
    const obj = input as Record<string, unknown>;
    const children = Object.entries(obj)
      .map((k, v) => parseToTree(v, String(k))[0])
      .filter((n): n is TreeNode => n !== undefined);
    return [{ kind: "object", key, children, expanded: true}];
  }
  return [{ kind: "leaf", key, value: input as JsonPrimitive}];
}
