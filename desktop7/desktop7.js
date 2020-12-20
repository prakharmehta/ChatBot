let stateArray = document.querySelectorAll(".state")
console.log(states);
stateArray.forEach(state => {
const stateBtn = state.querySelector(".state__reveal > button")
const stateBar = state.querySelector(".state__bar")
    stateBtn.addEventListener('click', () => {
        const transitions = state.querySelector(".state__transitions")
        console.log(transitions);
        state.classList.toggle("active");
        transitions.classList.toggle("hidden")
        stateBar.classList.toggle("active__state")
    })

const transitionsContainer = state.querySelector(".transitions__container");
const addTransitionBtn = state.querySelector(".add_transition > button");
transitionCount = 1;    
addTransitionBtn.addEventListener('click', () => {
    const transitionDiv = document.createElement("div");
    transitionDiv.classList.add("transition");
    transitionCount++;
    transitionDiv.id = `state1-transition${transitionCount}`
    transitionDiv.innerHTML = `<button class="collapsible" id="transition1">
    Transition ${transitionCount}
  </button>
  <div class="transition__form content">
    <br />
    <div
      class="transition__form__container"
      id="transition-form-1"
    >
      <form action="">
        <div class="transition__form__left">
          <div class="input">
            <label for="msg">Message</label><br />
            <input
              class="input__field"
              type="text"
              id="msg"
              name="message"
            />
          </div>
          <div class="input">
            <label for="key">Keywords</label><br />
            <input
              class="input__field"
              type="text"
              id="key"
              name="keywords"
            />
          </div>
          <div class="input">
            <label for="end">End</label><br />
            <input
              class="input__field"
              type="text"
              id="end"
              name="end"
            />
          </div>
          <div class="input">
            <label for="spare">Spare Content</label><br />
            <input
              class="input__field"
              type="text"
              id="spare"
              name="spare_content"
            />
          </div>
        </div>
        <div class="transition__form__right">
          <div class="input">
            <label for="intent">Intent</label><br />
            <input
              class="input__field"
              type="text"
              id="intent"
              name="intent"
            />
          </div>
          <div class="input">
            <label for="transition_state"
              >Transition State</label
            ><br />
            <input
              class="input__field"
              type="text"
              id="transition_state"
              name="transition_state"
            />
          </div>
          <div class="input">
            <label for="type">Type</label><br />
            <input
              class="input__field"
              type="text"
              id="type"
              name="type"
            />
          </div>
          <div class="input">
            <label for="">&nbsp;</label><br />
            <button>ADD</button>
          </div>
        </div>
      </form>
    </div>
  </div>`
  transitionsContainer.append(transitionDiv)
  var coll = transitionDiv.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = 481 + "px";
        }
    });
}
    })
});

var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = 481 + "px";
        }
    });
}
