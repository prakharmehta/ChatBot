let states = document.getElementById("states");
stateArrayCount = document.querySelectorAll(".state").length
let addStateBtn = document.getElementById("add_state");
let stateCount = stateArrayCount;
addStateBtn.addEventListener('click', () => {
    let stateDiv = document.createElement("div");
    stateDiv.classList.add("state");
    stateCount++;
    let transitionCount = 1;
    stateDiv.id = "state" + stateCount;
    stateDiv.innerHTML = `<div class="state__bar"></div>
    <div class="state__reveal">
      <button id="btn-state1">State ${stateCount}</button>
      <div class="state__transitions hidden">
        <br />
        <div class="transitions__content">
          <div class="transitions__container">
            <div class="transition" id="state1-transition1">
              <button class="collapsible" id="transition1">
                Transition 1
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
              </div>
            </div>
          </div>
          <div class="add_transition">
            <button id="add_transition_btn_1">Add Transition</button>
          </div>
        </div>
      </div>
    </div>`;
    states.append(stateDiv)
    stateBtn = stateDiv.querySelector(".state__reveal > button")
    stateBar = stateDiv.querySelector(".state__bar")
    stateBtn.addEventListener('click', () => {
        let transitions = stateDiv.querySelector(".state__transitions")
        console.log(transitions);
        stateDiv.classList.toggle("active");
        transitions.classList.toggle("hidden")
        stateBar.classList.toggle("active__state")
    })

    let transitionsContainer = stateDiv.querySelector(".transitions__container");
    let addTransitionBtn = stateDiv.querySelector(".add_transition > button");
    addTransitionBtn.addEventListener('click', () => {
      transitionCount++;
    let transitionDiv = document.createElement("div");
    transitionDiv.classList.add("transition");
    transitionDiv.id = `state${stateCount}-transition${transitionCount}`
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

    var coll = stateDiv.getElementsByClassName("collapsible");
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