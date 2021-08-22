async function main() {
  await liff.init({ liffId: "1656129299-LWZXKJ5v" })
  if (liff.isLoggedIn()) {
    getUserProfile()
  } else {
    liff.login()
  }
}
main()

async function getUserProfile() { // if dont use to show, dont call
  const profile = await liff.getProfile()
  document.getElementById("pictureUrl").src = profile.pictureUrl
  // document.getElementById("displayName").append(profile.displayName)
  // document.getElementById("statusMessage").append(profile.statusMessage)
  // document.getElementById("userId").append(profile.userId)
  document.getElementById('TB_userId').value = profile.userId;
  }

function logOut() {
  liff.logout()
  window.location.reload()
}

function checkUID(){
  // check uid that not have in db
}

let userList = document.querySelector('#userList');
let form = document.querySelector('#addUser');

function renderUser(doc) {
    let li = document.createElement('li');
    let firstname = document.createElement('span');
    let lastname = document.createElement('span');
    let userid = document.createElement('span');
    let studentid = document.createElement('span');
    

    li.setAttribute('data-id', doc.id);
    firstname.textContent = doc.data().firstname;
    lastname.textContent = doc.data().lastname;
    studentid.textContent = doc.data().studentid;
    userid.textContext = doc.data().TB_userId;

    li.appendChild(firstname);
    li.appendChild(lastname);
    li.appendChild(studentid);
    li.appendChild(userid);

    userList.appendChild(li);
}

db.collection('users').get().then(user => {
  user.docs.forEach(doc => {
      console.log(doc.data())
      renderUser(doc);
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('users').add({
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      studentid: form.studentid.value,
      userid: form.userid.value,
  })
  form.firstname.value = '';
  form.lastname.value = '';
  form.studentid.value = '';
  form.userid.value = '';
})