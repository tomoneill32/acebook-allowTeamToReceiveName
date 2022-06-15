/* eslint-disable */
 
const new_post_form = document.getElementById('new-post-form')

new_post_form.addEventListener('submit', (eventObj) => {

  eventObj.preventDefault()
  let message = document.getElementById("new-post-message").value
  let user_id = document.getElementById("new-post-message").datauserid
  let username = document.getElementById("new-post-message").datausername


  options = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      message: message,
      username: username,
      user_id: user_id

    })
  }

  fetch('http://localhost:3000/posts/', options).then((data) => console.log(data))

  posts_container = document.querySelector(".posts")

  new_post_div = document.createElement('div')
  new_post_div.className = 'post'
  new_post_div.textContent = message

  posts_container.appendChild(new_post_div)

  
})