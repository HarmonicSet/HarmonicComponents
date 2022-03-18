let _ = {
    g: (query) => this.querySelectorAll(query),
    i: (id) => document.getElementById(id)
}

_.doc = {
    TYPES: {
        BACK_COLOR: "backColor",
        BOLD: "bold"
    },
    cmd: (command, val = "") => {
        //execCommand is deprecated -> https://w3c.github.io/input-events/
        return document.execCommand(command, false, val)
    }
}

/**
 * hsc: Harmonic Set Components
 */
let hsc = {
    editor: null
}

hsc.editor = {
    init: (holder) => {
        _.i(holder).innerHTML = `
        <button onclick="_.doc.cmd(_.doc.TYPE.BACK_COLOR,'#21abc3')">BACK_COLOR</button>
        <button onclick="_.doc.cmd(_.doc.TYPE.BOLD)">BOLD</button>
        <hsc-editor id=${holder}_editor contenteditable="false">
        ABC<hsc-caret></hsc-caret>DEF
        </hsc-editor>
        `
        let editor = _.i(holder + "_editor");
        editor.onkeypress = () => {
            //¥
            editor.innerHTML.replace("<hsc-caret></hsc-caret>","¶");
            
            editor.innerHTML.replace("¶","<hsc-caret></hsc-caret>");
        }
    }
}