let _ = {
    i: (id) => document.getElementById(id)
}

/**
 * hsc: Harmonic Set Components
 */
let hsc = {
    editor: null
}

hsc.editor = {
    init:(holder)=>{
        _.i(holder).innerHTML=`
        <hsc-editor contenteditable="true">
        
        </hsc-editor>
        `
    }
}