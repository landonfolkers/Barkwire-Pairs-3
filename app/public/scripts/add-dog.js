document.querySelector("form").addEventListener("submit", submitForm)


function submitForm(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    return fetch("http://localhost:3000/api/dogs", {
        method: "POST",
        headers: new Headers({
            "content-type": "application/json"
        }),
        body: JSON.stringify({
            name: data.get("name"),
            profilePicture: data.get("profile-picture"),
            bio: data.get("bio"),
        })
    })
        .then(res => {
            return res.json()
        })
        .then(serverResponse => {
            console.log(serverResponse);
        })
        .then(() => { window.location.pathname = "/dogs" })
        .catch(err => {
            console.error(err)
        })
}