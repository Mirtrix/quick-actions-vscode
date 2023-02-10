# Quick Actions [VSCode Extension]

We all have our share of terminal commands that we have to use repeatedly in our work. While some of them may not be as annoying to type or can be automated with other extensions, there's always that pesky script two directories up that you have to call twenty times a day. This little extension is my attempt to make my workflow easier and maybe help others.

## Features

You can save terminal commands and organize them in the Actions panel on the Explorer tab. Commands can be parametrized. You can configure your actions in the `setttings.json`.

\!\[preview\]\(docs/action-panel.png\)

> This extension comes pre-populated with a couple of example actions. For a more detailed guide look in the 'Settings' section.

## Extension Settings

This extension has only one setting - `quick-actions.customActions` - a list of json objects.

Every action describes as a json-object and must have the following two properties:

- `label: string`: the name of your action that will be displayed;
- `commands: string[]`: the command lines that will be executed in terminal, they can be parametrized.

Additionaly, you may provide the following properties to customize the look of your actions:

- `color: string`: action icon color from [vscode theme colors](https://code.visualstudio.com/api/references/theme-color), defaults to `icon.foreground`;
- `icon: string`: action icon from [vscode icons](https://code.visualstudio.com/api/references/icons-in-labels#icon-listing), defaults to `zap`. Be sure to use values from 'identifier' column of the 'Icon Listing' table.

## Known Issues

- Tell me about them!
