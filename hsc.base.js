let _ = {
    g: (query) => this.querySelectorAll(query),
    i: (id) => document.getElementById(id)
}

_.doc = {
    get: () => {
        if (window.getSelection)
            return selection = window.getSelection();
        return null;
    },
    rep: (val) => {
        //https://stackoverflow.com/questions/3997659/replace-selected-text-in-contenteditable-div/3997896#3997896
        let selection, range;
        if (window.getSelection) {
            selection = window.getSelection();
            if (selection.rangeCount) {
                range = selection.getRangeAt(0);
                range.deleteContents();
                range.insertNode(document.createTextNode(val));
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.text = val;
        }
    },
    put: (editor_id, startTag, endTag) => {
        let v = _.doc.get();
        _.doc.rep("§" + v + "¥");
        _.i(editor_id).innerHTML = _.i(editor_id).innerHTML.replace("Â", "");
        _.i(editor_id).innerHTML = _.i(editor_id).innerHTML.replace("§", startTag);
        _.i(editor_id).innerHTML = _.i(editor_id).innerHTML.replace("¥", endTag);
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
        <button onclick="hsc.editor.cmd.highlight('${holder}_editor')">HighLight</button>
        <button onclick="hsc.editor.cmd.bold('${holder}_editor')">Bold</button>
        <button onclick="hsc.editor.cmd.italic('${holder}_editor')">Italic</button>
        
        <hsc-editor id="${holder}_editor" contenteditable="true">
        ABCDEF
        </hsc-editor>
        `
        //let editor = _.i(holder + "_editor");
        //document.addEventListener('keydown', (e) => {
        //    //e.key
        //}, false);
    },
    cmd: {
        highlight: (el) => _.doc.put(el, "<span style='color:yellow'>", "</span>"),
        bold: (el) => _.doc.put(el, "<strong>", "</strong>"),
        italic: (el) => _.doc.put(el, "<i>", "</i>"),
    }
}