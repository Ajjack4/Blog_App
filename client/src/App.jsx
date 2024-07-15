import Createposts from "./Components/Createposts"
import Post from "./Components/post"
function App() {


  return (
   
    <div className="container">
      <h1>Create Posts</h1>
      <Createposts />
      <h1>All Posts</h1>
      <Post />
    </div>
    
  )
}

export default App
