fetch("/api/dogs")
    .then(response => response.json())
    .then(response => addDogsToPage(response.dogs));

function addDogsToPage(dogs){
    dogs.forEach(addDogToPage);
}

function addDogToPage(dog){
    const $li = document.createElement("li");
    $li.innerHTML = `
        <h3 class="name"><a href="/dogs/${dog.id}">${dog.name}</a></h3>
        <img class="profile-picture" src="/${dog.profilePicture}" alt="${dog.name}" />
    `;
    document.querySelector(".dogs").appendChild($li);
}
