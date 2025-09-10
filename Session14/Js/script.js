function changeImg() {
  var img = document.querySelector("#myImage")
  console.log(myImage.src)
  if (img.src.includes("image1.jpg")) {
    myImage.src = "images/image2.jpg"
  } else {
    myImage.src = "images/image1.jpg"
  }
}




//////////////////////////////////////////////////




var userForm = document.getElementById("userForm");
  var users = []

  userForm.addEventListener("submit", (e) => {
    e.preventDefault()

    var user = {
      name: e.target.elements.userName.value,
      email: e.target.elements.userEmail.value,
    }

    users.push(user)
    userForm.reset()

    showUser()
  });

  var showUser = () => {
    var tBody = document.getElementById("tableBody")
    tBody.innerText = ""

    users.forEach((item, i) => {
      var tr = document.createElement("tr")

      var td = document.createElement("td")
      td.innerText = item.name;

      var td2 = document.createElement("td")
      td2.innerText = item.email;

      var td3 = document.createElement("td")

      var editBtn = document.createElement("button")
      editBtn.innerText = "Edit"
      editBtn.classList.add("btn", "btn-success", "btn-sm")
      editBtn.addEventListener("click", () => {
        userForm.elements.userName.value = item.name
        userForm.elements.userEmail.value = item.email
        users.splice(i, 1)
        showUser()
      })

      var deleteBtn = document.createElement("button")
      deleteBtn.innerText = "Remove"
      deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
      deleteBtn.addEventListener("click", () => {
        users.splice(i, 1)
        showUser()
      })

      td3.append(editBtn)
      td3.append(deleteBtn)

      tr.append(td)
      tr.append(td2)
      tr.append(td3)
      tBody.append(tr)
    })
  }