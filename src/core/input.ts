import { parse as parseYaml } from "yaml";

const SUPPORTED_FORMAT = new Set([".json", ".yaml", ".yml"]);

function assertNever(_x: never): never {
	throw new Error(`Input format must be one of ${SUPPORTED_FORMAT}, got ${_x}`);
}

export function parseInput(raw: string, format: ".json" | ".yaml" | ".yml"): unknown {
	if (format === ".json") {
		try {
			return JSON.parse(raw);
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			throw new Error(`Invalid JSON: ${msg}`);
		}
  } else if (format === ".yaml" || format === ".yml") {
			try {
				return parseYaml(raw);
			} catch (err) {
				const msg = err instanceof Error ? err.message : String(err);
				throw new Error(`Invalid YAML: ${msg}`);
			}
    } else {
			assertNever(format);
	}
}
