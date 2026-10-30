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

let selectedTeam = [];

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

let getData = async () => {
    //GET request (finns andra: POST, PUT, PATCH, DELETE)

    let res = await fetch("https://randomuser.me/api");
    console.log(res)
    let json = await res.json();

    return json;
}


addPlayerBtn.addEventListener("click", () => {
     if(selectedTeam[0] === "A" || selectedTeam[0] === "B" || selectedTeam.length === 0) {
        addPlayer();
    } else {
        alert("Something is wrong with the fetch")
    }
})


lag.forEach(item => {item.addEventListener("change", () => {
        if(selectedTeam.length === 0 ){
            let lagValue = item.value;
            console.log(lagValue)
            selectedTeam.push(lagValue)
            console.log(selectedTeam)
        } else {
            selectedTeam.pop();
            let lagValue = item.value;
            console.log(lagValue)
            selectedTeam.push(lagValue)
            console.log(selectedTeam)
        }
    })
})

function removePlayers (removePlayer, li, teamMembers, name) {
    removePlayer.addEventListener("click", () => {
        li.remove()
        let currentIndex = teamMembers.findIndex(player => player === name);
        console.log(currentIndex)
        teamMembers.splice(currentIndex, 1);
        console.log(teamMembers)
    });
}

let teamMembersA = [];
let teamMembersB = [];
// let currentTeam = "A";

let addPlayer = async () => {
    let newPlayer = await getData();
    let name = newPlayer.results[0].name.first;

    const li = document.createElement("li");
    li.dataset.team = selectedTeam[0] || "A"
    li.classList.add("player");

    const playerActions = document.createElement("div");
    playerActions.classList.add("player-actions");

    const removePlayerBtn = document.createElement("button");
    removePlayerBtn.classList.add("btn-small","leave-btn");
    removePlayerBtn.textContent = "Leave Team"
    const changeTeamBtn = document.createElement("button");
    changeTeamBtn.classList.add("btn-small","change-btn");
    changeTeamBtn.textContent = "Change Team"


    if(selectedTeam[0] === "A" || selectedTeam.length === 0) {
        
        if (teamMembersA.length < 5) {
            teamMembersA.push(name)
            
            li.innerHTML = `<span class="player-name">${name}</span>`
            playerActions.append(changeTeamBtn, removePlayerBtn)
            console.log(playerActions)
            li.append(playerActions)
            console.log(name)
            teamA.append(li)
            removePlayers(removePlayerBtn, li, teamMembersA, name);

            // changeTeams(changeTeamA, removePlayerB, changeTeamB, removePlayerA, playerActions, li, teamMembersB, teamMembersA, name)
            changeTeamBtn.addEventListener("click", () => {
                if (li.dataset.team === "A") {
                    if (teamMembersB.length < 5) {

                    
                    const index = teamMembersA.indexOf(name);
        
                    teamMembersA.splice(index, 1);
                    teamMembersB.push(name)

                    teamB.append(li);

                    li.dataset.team = "B";
                    
                    console.log(teamMembersA)
                    } else {
                        alert(`Lag: ${teamNameB.value} är full, max 5.`)
                    }
                } else {
                    if (teamMembersA.length < 5) {
                    const index = teamMembersB.indexOf(name);
        
                    teamMembersB.splice(index, 1);
                    teamMembersA.push(name);
                    
                    teamA.append(li);

                    li.dataset.team = "A";
                    console.log(teamMembersB)
                    } else {
                        alert(`Lag: ${teamNameB.value} är full, max 5.`)
                    }
                }
            });

        } else {
            alert(`To many team ${teamNameA.value} members, max 5`)
        }   
    } else {
        if (teamMembersB.length < 5) {
            teamMembersB.push(name)
            
            const removePlayerBtn = document.createElement("button");
            removePlayerBtn.classList.add("btn-small","leave-btn");
            removePlayerBtn.textContent = "Leave Team"
            const changeTeamBtn = document.createElement("button");
            changeTeamBtn.classList.add("btn-small","change-btn");
            changeTeamBtn.textContent = "Change Team"
            
            li.innerHTML = `<span class="player-name">${name}</span>`
            playerActions.append(changeTeamBtn, removePlayerBtn)
            console.log(playerActions)
            li.append(playerActions)

            teamB.append(li)

            removePlayers(removePlayerBtn, li, teamMembersB, name)

            changeTeamBtn.addEventListener("click", () => {
                if (li.dataset.team === "A") {
                    if (teamMembersB.length < 5) {

                    const index = teamMembersA.indexOf(name);
        
                    teamMembersA.splice(index, 1);
                    teamMembersB.push(name)

                    teamB.append(li);

                    li.dataset.team = "B";
                    } else {
                        alert(`Lag: ${teamNameB.value} är full, max 5.`)
                    }
                } else {
                    if (teamMembersA.length < 5) {
                    const index = teamMembersB.indexOf(name);

                    teamMembersB.splice(index, 1);
                    teamMembersA.push(name);
                    
                    teamA.append(li);

                    li.dataset.team = "A";
                    } else {
                        alert(`Lag: ${teamNameB.value} är full, max 5.`)
                    }
                }
            });

        } else {
            alert(`To many team ${teamNameB.value} members, max 5`)
        }
    }
};