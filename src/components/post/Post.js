import "./Post.css"

 function Post() {
  return (
    <div className="post">
        <img 
        className="postImg" alt="" 
         src={require('../../Assets/beach.jpg')}/>

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Life</span>
            <span className="postCat">Sports</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur 
          </span>
          <hr />
          <span className="postDate">1 day ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Ratione placeat aliquam 
           deserunt repellat distinctio reprehenderit
            dolorum illo adipisci voluptatibus eligendi, 
            quod modi asperiores, suscipit quidem. Inventore, 
          ipsam similique! Harum, tempore!
          Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Ratione placeat aliquam 
           deserunt repellat distinctio reprehenderit
            dolorum illo adipisci voluptatibus eligendi, 
            quod modi asperiores, suscipit quidem. Inventore, 
          ipsam similique! Harum, tempore!
          Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Ratione placeat aliquam 
           deserunt repellat distinctio reprehenderit
            dolorum illo adipisci voluptatibus eligendi, 
            quod modi asperiores, suscipit quidem. Inventore, 
          ipsam similique! Harum, tempore!
          Lorem ipsum dolor sit, amet consectetur
           adipisicing elit. Ratione placeat aliquam 
           deserunt repellat distinctio reprehenderit
            dolorum illo adipisci voluptatibus eligendi, 
            quod modi asperiores, suscipit quidem. Inventore, 
          ipsam similique! Harum, tempore!
        </p>   
    </div>
  )
}
export default Post;

