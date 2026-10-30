// API: https://randomuser.me/api
// Tips:
// Struktur för en spelare finns som kommentar i index.html.
// Lägg till klassen "full" på .team när laget har fem spelare.

const teamA = document.querySelector("#team-A");
const teamB = document.querySelector("#team-B");
const lag = document.querySelectorAll("input[type=radio][name=team]");
console.log(lag)
const teamName = document.querySelector("#team-name-input");
const changeTeamName = document.querySelector("#change-name-btn");
const teamNameA = document.querySelector("#team-name-A");
const teamNameB = document.querySelector("#team-name-B");
const addPlayerBtn = document.querySelector("#add-player-btn");


changeTeamName.addEventListener("click", () => {
    let teamNameValue = teamName.value;
    console.log(teamNameValue);
    if (teamNameValue.trim() !=="" && selectedTeam.length === 0) {
         teamNameA.textContent = `${teamNameValue}`
    } else if(teamNameValue.trim() !== "" && selectedTeam[selectedTeam.length-1] === "A") {
        teamNameA.textContent = `${teamNameValue}`
    } else if (teamNameValue.trim() !== "" && selectedTeam[selectedTeam.length-1] === "B"){
        teamNameB.textContent = `${teamNameValue}`
    } else {
        alert("Add new team name")
    }
})

let selectedTeam = [];

lag.forEach(item => {item.addEventListener("change", () => {
        let lagValue = item.value;
        console.log(lagValue)
        selectedTeam.push(lagValue)
    })
})

let getData = async () => {
    //GET request (finns andra: POST, PUT, PATCH, DELETE)

    let res = await fetch("https://randomuser.me/api");
    console.log(res)
    let json = await res.json();

    return json;
}


addPlayerBtn.addEventListener("click", () => {
     if(selectedTeam[selectedTeam.length-1] === "A" || selectedTeam.length === 0) {
        addPlayerA();
    } else if (selectedTeam[selectedTeam.length-1] === "B"){
        addPlayerB();
    } else {
        alert("Something is wrong with the fetch")
    }
})

let teamMembersA = [];
let teamMembersB = [];

let addPlayerA = async () => {
    let newPlayer = await getData();
    let name = newPlayer.results[0].name.first;
    const li = document.createElement("li");
    li.classList.add("player");
    const removePlayer = document.createElement("button");
    removePlayer.classList.add("btn-small","leave-btn");
    removePlayer.textContent = "Leave Team"
    const changeTeam = document.createElement("button");
    changeTeam.classList.add("btn-small","change-btn");
    changeTeam.textContent = "Change Team"

    const playerActions = document.createElement("div");
    playerActions.classList.add("player-actions");

    if (teamMembersA.length < 5) {
        teamMembersA.push(name)
        li.innerHTML += `<span class="player-name">${name}</span>`
        playerActions.append(changeTeam, removePlayer)
        console.log(playerActions)
        li.append(playerActions)

        teamA.append(li)

        removePlayer.addEventListener("click", () => {
            li.remove()
        });

    } else {
        alert("To many team members, max 5")
    }

}

// <div class="player-actions">
// <button class="btn-small change-btn">Change Team</button>
// <button class="btn-small leave-btn">Leave Team</button>
// </div>

let addPlayerB = async () => {
    let newPlayer = await getData();
    let name = newPlayer.results[0].name.first;
    const li = document.createElement("li");
    li.classList.add("player");
    const removePlayer = document.createElement("button");
    removePlayer.classList.add("btn-small","leave-btn");
    removePlayer.textContent = "Leave Team"
    const changeTeam = document.createElement("button");
    changeTeam.classList.add("btn-small","change-btn");
    changeTeam.textContent = "Change Team"

    const playerActions = document.createElement("div");
    playerActions.classList.add("player-actions");

    if (teamMembersB.length < 5) {
        teamMembersB.push(name)
        li.innerHTML += `<span class="player-name">${name}</span>`
        playerActions.append(changeTeam, removePlayer)
        console.log(playerActions)
        li.append(playerActions)

        teamB.append(li)

        removePlayer.addEventListener("click", () => {
        li.remove()
    });
    } else {
        alert("To many team members, max 5")
    }

}




