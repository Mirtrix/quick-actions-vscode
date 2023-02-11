# Quick Actions [VSCode Extension]

We all have our share of terminal commands that we have to use repeatedly in our work. While some of them may not be as annoying to type or can be automated with other extensions, there's always that pesky script two directories up that you have to call twenty times a day. This little extension is my attempt to make my workflow easier and maybe help others.

You can get it at [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=Mirtrix.quick-actions)!

## Features

You can save terminal commands and organize them in the Actions panel on the Explorer tab. Commands can be parametrized. You can configure your actions in the `setttings.json`.

![preview](/docs/action-panel.png)

> This extension comes pre-populated with a couple of example actions. For a more detailed guide look in the 'Settings' section.

## Extension Settings

This extension has only one setting - `quick-actions.customActions` - a list of json objects.

### Action object structure

Every action describes as a json-object and must have the following two properties:

- `label: string`: the name of your action that will be displayed;
- `commands: string[]`: the command lines that will be executed in terminal, they can be parametrized.

Additionaly, you may provide the following properties to customize the look of your actions:

- `color: string`: action icon color from [vscode theme colors](https://code.visualstudio.com/api/references/theme-color), defaults to `icon.foreground`;
- `icon: string`: action icon from [vscode icons](https://code.visualstudio.com/api/references/icons-in-labels#icon-listing), defaults to `zap`. Be sure to use values from 'identifier' column of the 'Icon Listing' table.

### Command parameters

Currently the following parameters are supported:

- `${workspaceDir}`: workspace directory name, open workspace required;
- `${workspacePath}`: absolute path to the workspace directory, open workspace required;
- `${file}`: the name of the currently opened file, an open file is required;
- `${filePath}`: the absolute pat of the currently opened file, an open file is required.

### Default actions

Theese are default actions that will greet you once you install this extension.

```json
[
  {
    "label": "Hello World!",
    "icon": "octoface",
    "iconColor": "errorForeground",
    "commands": ["cd ..", "ls"]
  },
  {
    "label": "Echo variables",
    "icon": "zap",
    "iconColor": "editorLightBulb.foreground",
    "commands": ["echo ${workspaceDir}", "echo ${workspacePath}"]
  },
  {
    "label": "Cat current file",
    "icon": "output-view-icon",
    "iconColor": "testing.runAction",
    "commands": ["cat ${file}"]
  }
]
```

## Known Issues

None so far, but be sure to open an issue ticket in GitHub if you encounter any.
