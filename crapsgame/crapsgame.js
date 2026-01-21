// HTML Elements IDs
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationpane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"


function registerCrapsPlayer () {
	let crapsUsername = document.getElementById(crapsUsernameInput).value
    alert("Got: " + crapsUsername)
    removeRegistrationPane()
    showMainGameSection()
}

function removeRegistrationPane () {
    document.getElementById(crapsRegistrationpane).style.display = "none"

}

function showMainGameSection () {
    document.getElementById(crapsMainSection).style.display = "block"
}