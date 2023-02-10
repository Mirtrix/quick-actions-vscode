// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { ActionsProvider } from "./actionsProvider";
import { executeCommandHandler } from "./executeCommand";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Extension "actionPanel" is now active!');

  const executeCommand = vscode.commands.registerCommand(
    "quick-actions.executeCommand",
    executeCommandHandler
  );
  context.subscriptions.push(executeCommand);

  vscode.window.registerTreeDataProvider(
    "quick-actions.actionPanel",
    new ActionsProvider()
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
