async function main() {
  await liff.init({ liffId: "1656129299-LWZXKJ5v" })
  if (liff.isLoggedIn()) {
    getUserProfile()
  } else {
    liff.login()
  }
}
main()

async function getUserProfile() {
  const profile = await liff.getProfile()
  document.getElementById("pictureUrl").src = profile.pictureUrl
  document.getElementById("displayName").append(profile.displayName)
  document.getElementById("statusMessage").append(profile.statusMessage)
  document.getElementById("userId").append(profile.userId)
  }

function logOut() {
  liff.logout()
  window.location.reload()
}
