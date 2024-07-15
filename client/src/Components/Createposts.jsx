import { useState } from "react"
import axios from "axios";


const Createposts = () => {
  const [title, setTitle] = useState("")

 const onSubmit = async() =>{
  // event.preventDefault();
  await axios.post('http://posts.com/posts/create',{
    title: title,
  })
  setTitle("")
 }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Createposts
