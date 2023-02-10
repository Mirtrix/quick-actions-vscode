import * as exceptions from "./commandErrors";
import * as vscode from "vscode";

class CommandParameter {
  name: string;
  replacement: Function;

  constructor(name: string, replacement: Function) {
    this.name = name;
    this.replacement = replacement;
  }

  build(line: string): string {
    if (line.indexOf(`\${${this.name}}`) === -1) {
      return line;
    }

    const replacement = this.replacement(this.name);
    return line.replace(`\${${this.name}}`, replacement);
  }
}

export const parameters: CommandParameter[] = [
  new CommandParameter("workspaceDir", (param: string) => {
    // No active workspace
    if (!vscode.workspace.workspaceFolders) {
      throw new exceptions.NoActiveWorkspaceError(param);
    }

    const workspaceDir =
      vscode.workspace.workspaceFolders[0].uri.fsPath.replace(/^.*[\\\/]/, "");

    return workspaceDir;
  }),
  new CommandParameter("workspacePath", (param: string) => {
    // No active workspace
    if (!vscode.workspace.workspaceFolders) {
      throw new exceptions.NoActiveWorkspaceError(param);
    }

    const workspacePath = vscode.workspace.workspaceFolders[0].uri.fsPath;

    return workspacePath;
  }),
  new CommandParameter("file", (param: string) => {
    // No active workspace
    if (!vscode.window.activeTextEditor) {
      throw new exceptions.NoActiveFileError(param);
    }

    const filename = vscode.window.activeTextEditor.document.uri.fsPath.replace(
      /^.*[\\\/]/,
      ""
    );

    return filename;
  }),
  new CommandParameter("filePath", (param: string) => {
    // No active workspace
    if (!vscode.window.activeTextEditor) {
      throw new exceptions.NoActiveFileError(param);
    }

    const filename = vscode.window.activeTextEditor.document.uri.fsPath;

    return filename;
  }),
];
