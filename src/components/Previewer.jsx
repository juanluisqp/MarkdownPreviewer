import { marked } from "marked"

marked.setOptions({
    breaks: true,  
  });

const Previewer = ({text}) => {
  return (
    <div>
        <div className='col-md-6 preview' dangerouslySetInnerHTML={{__html: marked(text)}} 
        id='preview'>
        </div>
    </div>
  )
}

export default Previewer