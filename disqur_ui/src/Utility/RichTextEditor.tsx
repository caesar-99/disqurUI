import { Dispatch, SetStateAction } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

interface RichTextEditorProp {
    setHTMLText?: Dispatch<SetStateAction<string>>;
    placeHolderMessage?: string;
}

export const RichTextEditor = ({setHTMLText, placeHolderMessage} : RichTextEditorProp) => {
    const modules = {
        toolbar: [
            [{font: []}],
            [{header: [1, 2, 3, 4, 5, 6, false]}],
            ["bold", "italic", "underline", "strike"],
            [{color: []}, {background: []}],
            ["blockquote", "code-block"],
            [{list: "ordered"}, {list: "bullet"}],
            [{indent: "-1"}, {indent: "+1"}, {align: []}],
            ["link", "image",],
            ["clean"]
        ],
    };

    return <ReactQuill modules={modules} theme="snow" placeholder={placeHolderMessage} onChange={setHTMLText}/>
}