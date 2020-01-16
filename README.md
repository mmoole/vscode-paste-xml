# XML Paste

Paste escaped XML or HTML into a file. It simply replaces angle brackets and ampersands with HTML entities.

## Features

There is not much to this extension. It simply makes the following replacements from the clipboard:
 * &amp; to &amp;amp;
 * &gt; to &amp;gt;
 * &lt; to &amp;lt;

## Keyboard Shortcut
Use the following to embed a xmlPaste shortcut in keybindings.json. Replace with your preferred key bindings.

    {
      "key": "ctrl+alt+p",
      "command": "extension.xmlPaste",
      "when": "editorFocus"
    }

## Requirements

None

## Extension Settings

None

## Known Issues

None yet

## Release Notes

Released.

### 0.0.1

Initial release of XML Paste

### 0.5.0

Added note on keyboard shortcut
