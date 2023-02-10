import { ActionTerminal } from "./actionTerminal";
import { parameters } from "./commandParameters";
import * as vscode from "vscode";

function buildCommand(line: string) {
  for (const parameter of parameters) {
    line = parameter.build(line);
  }
  return line;
}

export const executeCommandHandler = (commandLines: string[]) => {
  try {
    for (const line of commandLines) {
      ActionTerminal.run(buildCommand(line));
    }
  } catch (error) {
    vscode.window.showErrorMessage(`Quick Actions, ${error}`);
  }
};
