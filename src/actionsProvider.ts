import * as vscode from "vscode";

export class ActionsProvider
  implements vscode.TreeDataProvider<ICommandSerialized>
{
  private _onDidChangeTreeData: vscode.EventEmitter<
    ICommandSerialized | undefined | null | void
  > = new vscode.EventEmitter<ICommandSerialized | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<
    ICommandSerialized | undefined | null | void
  > = this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: ICommandSerialized): vscode.TreeItem {
    return new CustomActionItem(element);
  }

  getChildren(element?: ICommandSerialized): Thenable<ICommandSerialized[]> {
    if (!element) {
      const allActions: ICommandSerialized[] =
        vscode.workspace.getConfiguration("quick-actions")["customActions"];
      const validActions = allActions.filter((x) => {
        return "commands" in x && "label" in x;
      });

      return Promise.resolve(validActions);
    }

    return Promise.resolve([]);
  }
}

class CustomActionItem extends vscode.TreeItem {
  constructor(serialized: ICommandSerialized) {
    super(serialized.label, vscode.TreeItemCollapsibleState.None);

    // Icon
    const iconColor = new vscode.ThemeColor(
      serialized.iconColor || "icon.foreground"
    );
    this.iconPath = new vscode.ThemeIcon(serialized.icon || "zap", iconColor);

    // Command
    const command = {
      title: serialized.label,
      command: "quick-actions.executeCommand",
      arguments: [serialized.commands],
    };
    this.command = command;
  }
}

interface ICommandSerialized {
  label: string;
  icon?: string;
  iconColor?: string;
  commands: string[];
}
