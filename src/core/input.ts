import { parse as parseYaml } from "yaml";

const SUPPORTED_FORMAT = new Set([".json", ".yaml"]);

function assertNever(_x: never): never {
	throw new Error(`Input format must be one of ${SUPPORTED_FORMAT}, got ${_x}`);
}

export function parseInput(raw: string, format: ".json" | ".yaml"): unknown {
	switch (format) {
		case ".json":
			try {
				return JSON.parse(raw);
			} catch (err) {
				const msg = err instanceof Error ? err.message : String(err);
				throw new Error(`Invalid JSON: ${msg}`);
			}
		case ".yaml":
			try {
				return parseYaml(raw);
			} catch (err) {
				const msg = err instanceof Error ? err.message : String(err);
				throw new Error(`Invalid YAML: ${msg}`);
			}
		default:
			assertNever(format);
	}
}
