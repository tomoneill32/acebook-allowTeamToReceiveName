/* eslint-disable */
 
const posts = document.querySelectorAll('.post')

posts.forEach((post) => {
  comment_forms = post.querySelectorAll('.comment-form')
  
  comment_forms.forEach((comment_form) => {
    comment_form.addEventListener('submit', (eventObj) => {

      eventObj.preventDefault()

      let message = post.querySelector(".comment-input").value
      
      let username = post.querySelector(".comment-input").getAttribute('data-username')

      options = {
         method: "POST",
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
           message: message,
           post_id: post.id
         })
      }

      fetch('http://localhost:3000/posts/create_comment', options).catch((err) => console.log(err))
      console.log(message)
      new_comment_div = document.createElement('div')
       new_comment_div.className = 'comment_container'
       new_comment_div.innerHTML = 
        `<div class="comment">
          <div class="comment_username">${username}</div>
          <div class="comment_message">${message}</div>
         </div>`;
       post.querySelector('.all_comments').append(new_comment_div)

       comment_form.querySelector(".comment-input").value = ""
    })
  })
})








// comment_containers.forEach((comment_container) => {
//   comment_form = comment_container.querySelector('.comment-form')

  
//     comment_form.addEventListener('submit', (eventObj) => {

//       eventObj.preventDefault()
//       let message = comment_form.getElementById("new-comment-message").value
//       let user_id = comment_form.getElementById("new-comment-message").getAttribute('data-userid')
//       let username = comment_form.getElementById("new-comment-message").getAtribute('data-username')
//       console.log(message)
//       console.log(user_id)
//       console.log(username)


//       options = {
//         method: "POST",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//           message: message,
//           username: username,
//           user_id: user_id

//         })
//       }

//       fetch('http://localhost:3000/posts/create_comment', options).then((data) => console.log(data)).catch((err) => console.log(err))

    
//       new_comment_div = document.createElement('div')
//       new_post_div.className = 'comment'
//       new_post_div.textContent = `${username} : ${message}`

//       comment_container.append(new_comment_div)

      
//     })

