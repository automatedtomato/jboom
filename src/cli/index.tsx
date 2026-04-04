import { render } from "ink";
import { App } from "./App";

const args: string[] = process.argv.slice(2);
if (typeof args[0] === "string") {
	const filePath: string = args[0];
	render(<App filePath={filePath} />);
} else {
	throw new Error("Invalid arg or arg is empty.");
}
