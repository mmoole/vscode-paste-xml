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

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.xmlPaste', () => {
		pasteEscapedXML();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
