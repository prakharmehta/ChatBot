const stateBtn = document.getElementById("btn-state1")
const transitions = document.querySelector("#state1 .state__transitions")
const stateBar = document.querySelector("#state1 .state__bar")
stateBtn.addEventListener('click', () => {
    if(transitions.classList.contains("hidden"))
    {
        transitions.classList.remove("hidden")
        stateBar.classList.add("active__state")
    }
    else
    {
        transitions.classList.add("hidden")
        stateBar.classList.remove("active__state")
    }
})