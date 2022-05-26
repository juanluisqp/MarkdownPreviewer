import React, {useState} from 'react';

const Textarea = () => {
    const [texto, setTexto] = useState({
        markdown: ''
    });
    const onChange = (e) =>{ 
        setTexto({markdown: e.target.value})
    };
    return (
    <div className='col-md-6'>
            <textarea id='editor' value={texto.markdown} onChange={onChange} />
    </div>
    );
}


export default Textarea;