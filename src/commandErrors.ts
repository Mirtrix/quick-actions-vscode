export const noActiveWorkspace = "No active workspace detected";
export const noActiveFile = "No active file detected";

export class NoActiveWorkspaceError extends Error {
  constructor(param: string) {
    super(`"No active workspace detected when processing param "${param}"`);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NoActiveWorkspaceError.prototype);
  }
}

export class NoActiveFileError extends Error {
  constructor(param: string) {
    super(`No active file detected when processing param "${param}"`);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NoActiveFileError.prototype);
  }
}
