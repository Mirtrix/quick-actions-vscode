import * as vscode from "vscode";

export class ActionTerminal {
  static terminalName: string = "Action Terminal";
  static currentTerminal?: vscode.Terminal;

  static getTerminal() {
    if (!ActionTerminal.currentTerminal) {
      ActionTerminal.currentTerminal = vscode.window.createTerminal({
        name: ActionTerminal.terminalName,
        iconPath: new vscode.ThemeIcon("zap"),
      });
      ActionTerminal.currentTerminal.show(true);

      vscode.window.onDidCloseTerminal((event) => {
        if (this.getTerminal() && event.name === ActionTerminal.terminalName) {
          ActionTerminal.currentTerminal = undefined;
        }
      });
    }
    return ActionTerminal.currentTerminal;
  }

  static run(command: string) {
    this.getTerminal().sendText(command, true);
  }

  static dispose() {
    if (this.getTerminal()) {
      this.getTerminal().dispose();
      ActionTerminal.currentTerminal = undefined;
    }
  }
}
