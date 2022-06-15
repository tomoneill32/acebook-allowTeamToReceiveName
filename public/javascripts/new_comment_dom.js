/* eslint-disable */
 
const new_post_form = document.getElementById('new-comment-form')

new_post_form.addEventListener('submit', (eventObj) => {

  eventObj.preventDefault()
  let message = document.getElementById("new-comment-message").value
  let user_id = document.getElementById("new-comment-message").datauserid
  let username = document.getElementById("new-comment-message").datausername


  options = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      message: message,
      username: username,
      user_id: user_id

    })
  }

  fetch('http://localhost:3000/posts/create_comment', options).then((data) => console.log(data))

  comment_container = document.querySelector(".comment_container")

  new_comment_div = document.createElement('div')
  new_post_div.className = 'comment'
  new_post_div.textContent = `${username} : ${message}`

  posts_container.appendChild(new_comment_div)

  
})