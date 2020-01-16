// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


function pasteEscapedXML() {
	
	vscode.env.clipboard.readText().then((text)=>{
		const activeEditor = vscode.window.activeTextEditor;
		if (activeEditor && activeEditor.selection && activeEditor.selection.active) {
			activeEditor.edit((editor) => {
					let content = text.replace(/&/g, '&amp;');
					content = content.replace(/>/g, '&gt;');
					content = content.replace(/</g, '&lt;');
		
					const selection = activeEditor.selection;
					if (selection.end === selection.start) {
						editor.insert(selection.active, content);
					} else {
						editor.replace(selection, content);
					}
				});
		}
	});
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "xml-paste" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.xmlPaste', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('XML Paste!');
		pasteEscapedXML();
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
