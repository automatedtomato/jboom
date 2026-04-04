import { Box, Text } from "ink";
import type { FlatRow } from "../core";

const DEFAULT_INDENT: number = 2;

type RowProps = { row: FlatRow };

export function NodeRow({ row }: RowProps) {
	let marker: string;
	let label: string;
	const indent: string = " ".repeat(row.depth * DEFAULT_INDENT);

	const node = row.node;

	if (node.kind === "leaf") {
		marker = "-";
		label = `${node.key}: ${String(node.value)}`;
	} else {
		marker = node.expanded ? "▼" : "▶";
		label = `${node.key}`;
	}
	return (
		<Box>
			<Text>{indent}</Text>
			<Text color={node.kind === "leaf" ? "white" : "blue"}>
				{marker} {label}
			</Text>
		</Box>
	);
}
