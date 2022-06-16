/* eslint-disable */
 
const new_post_form = document.getElementById('new-post-form')

new_post_form.addEventListener('submit', (eventObj) => {

  eventObj.preventDefault()
  let message = document.getElementById("new-post-message").value
  let user_id = document.getElementById("new-post-message").getAttribute('data-userid')
  let username = document.getElementById("new-post-message").getAttribute('data-username')
  console.log(message)
  console.log(user_id)
  console.log(username)

  options = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      user_id: user_id

    })
  }

  fetch('http://localhost:3000/posts/', options).then((data) => console.log(data))

  posts_container = document.querySelector(".posts")

  let likes_count = '0'
  new_post_div = document.createElement('div')
  new_post_div.className = 'post'
  new_post_div.innerHTML =   
    `<div id="dynamic-post" class="post"> 
    <div class="post_contents">
      <div class="author_container">
        <img src="" ></img>
        <div class="username">${username}</div>
      </div>
      <div class="message_container">
        
        <div class="likes_container">
         Likes:
        </div>
        <div class="likes-count">${likes_count}</div>
        <div>  |  </div>
  
        <div class="post-message">
          ${message}
        </div>
      </div>
      <div  class="footer">
          <form class="like-form" id="dynamic-post" data-user-id="${user_id}" action="/posts/add_like" method="post">
           <input id="user_id" type="hidden" value="${user_id}">
           <input id="post_id" type="hidden"  value="dynamic-post">
           <input class="add-like-button" id="submit-button" type="submit" value="Like">
          </form>
      </div>

      <div class="comment_container">
        <div class="comment">
          
        </div>
        
      </div>
      <div class="footer"><!Like and comment button container. Red box in miro.>
        <form  id="new-comment-form" class="comment-form" action="posts/create_comment" method="post">
          <input id="post_id" type="hidden" name="post_id" value="dynamic-post">
          <input id="user_id" type="hidden" name="user_email" value="dynamic post">
          <input id="message" class="comment-input" type="text" name="message" value="" placeholder="Write a comment...">
          <input type="submit" value="Add comment">
        </form>
      </div>
    </div>

  </div>`;
  posts_container.prepend(new_post_div)
  document.getElementById("new-post-message").value = ""


  
})