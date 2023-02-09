import "./Write.css"

export default function Write() {
  return (
    <div className="write">
        <form className="writeForm">
            <div className="writeFormGroup">
            <label htmlFor="fileInput" className="addFile">Add File</label>
            <input type="file" name="" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput"   />
            </div>
            <div className="writeFormGroup">
                <textarea type="text" placeholder="Write here..." className="writeText" ></textarea>
            </div>
            <button className="writeSubmit">
                Publish
            </button>

        </form>
    </div>
  )
}
