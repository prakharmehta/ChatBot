const states = document.querySelectorAll(".state")
console.log(states);
states.forEach(state => {
const stateBtn = state.querySelector(".state__reveal > button")
const stateBar = state.querySelector(".state__bar")
    stateBtn.addEventListener('click', () => {
        const transitions = state.querySelector(".state__transitions")
        console.log(transitions);
        state.classList.toggle("active");
        transitions.classList.toggle("hidden")
        stateBar.classList.toggle("active__state")
    })
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = 481 + "px";
        }
    });
}