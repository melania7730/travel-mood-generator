function generateMood(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  new Typewriter("#result", {
    strings: `🌴 ${userInput.value} Escape<br />
    Golden sunsets, ocean breeze,<br />
    slow mornings and peaceful nights.`,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let travelFormElement = document.querySelector("#travel-form");

travelFormElement.addEventListener("submit", generateMood);
