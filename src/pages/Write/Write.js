import "./Write.css"
import { useState } from "react";

export default function Write() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [output, setOutput] = useState([
    {inputTitle:"1", inputContent:"===================================="},
    {inputTitle:"2", inputContent:"===================================="},
    {inputTitle:"3", inputContent:"===================================="},

  
  ]); 
  const handleSubmit = (e) => {
    e.preventDefault()
     setOutput([...output, {inputTitle,inputContent}]
    );
    setInputTitle("")
    setInputContent("")
  };

  const handleDelete =(index) =>{
    const removeItem = output.filter((data,i)=>{
      return i!==index;
    })
    setOutput(removeItem);
    }

  return (
    <div className="write">
          <form onSubmit={handleSubmit} className="writeForm" >
            <div className="writeFormGroup">
            <input type="text"
              placeholder="Title"
              className="writeInput"
              value ={inputTitle} 
              onChange ={(e)=>{setInputTitle(e.target.value)}}/>
            </div>
            <div className="writeFormGroup">
            <textarea type="text" placeholder="Write here..." className="writeText" value={inputContent} 
            onChange = {(e) => {setInputContent(e.target.value)}}
            ></textarea>
            </div>
            <button type="submit"
              className="btn">
                Publish
            </button>
            <div className="output">
              <ul>
              {
              output.map((data,index)=>(
                      <li key={index}
                      className="writeInputList">
                       <h1>{data.inputTitle}</h1>
                      <p>{data.inputContent}</p>
                      <button className="btn">Edit</button>
                      <button className="btn" onClick={()=>{handleDelete(index)}}>Delete</button>
                      </li>
              ))
            }
              </ul>
            </div>
           </form>
    </div>
  )
}





