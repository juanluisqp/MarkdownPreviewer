import React, {useState} from 'react';
import { marked } from 'marked';



const Textarea = () => {
    const [text, setText] = useState({
        paragraph: ''
    });
    const onChange = (e) =>{ 
        setText({paragraph: e.target.value})
    };

    const markdown = marked(text.paragraph);
    return (
        <>
    <div className='col-md-6'>
            <textarea className='form-control' id='editor' value={text.markdown} onChange={onChange} />
    </div>
    <div className='col-md-6 preview' dangerouslySetInnerHTML={{__html: markdown}}></div>
    </>
    );
}


export default Textarea;