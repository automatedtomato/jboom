import { Text } from "ink";
import type { FlatRow } from "../core";

const DEFAULT_INDENT: number = 2;

type RowProps = { row: FlatRow };

export function NodeRow({ row }: RowProps) {
	return (
		<Text>
			{" ".repeat(row.depth * DEFAULT_INDENT)}- {row.node.key}
		</Text>
	);
}
