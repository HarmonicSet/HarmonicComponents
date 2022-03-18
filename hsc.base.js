let _ = {
    g: (query) => this.querySelectorAll(query),
    i: (id) => document.getElementById(id)
}

_.doc = {
    TYPES: {
        BACK_COLOR: "backColor",
        BOLD: "bold"
    },
    CARET: "<hsc-caret></hsc-caret>",//¥
    cmd: (command, val = "") => {
        //execCommand is deprecated -> https://w3c.github.io/input-events/
        return document.execCommand(command, false, val)
    },
    pos: (editor) => {
        return editor.innerHTML.indexOf(_.doc.CARET)
    },
    put: (doc, char) => {
        doc.innerHTML = doc.innerHTML.replace(_.doc.CARET, "¶");
        doc.innerHTML = doc.innerHTML.replace("¶", char + "¶");
        doc.innerHTML = doc.innerHTML.replace("¶", _.doc.CARET);
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
        
        <hsc-editor id=${holder}_editor>
        ABC${_.doc.CARET}DEF
        </hsc-editor>
        `
        let editor = _.i(holder + "_editor");
        document.addEventListener('keydown', (e) => {
            if (e.key.length == 1)
                _.doc.put(editor, e.key)
            else {
                if (e.key === "Enter")
                    _.doc.put(editor, "<br/>")
            }
        }, false);

        ele.addEventListener('keydown', function () {
            //code
        }, false);

    }
}