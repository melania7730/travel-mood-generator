function displayMood(response) {
  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
    html: true,
  });
}

function generateMood(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let apiKey = "b5dca18t5009430fdddbc6b9afdb4d2o";

  let context =
    "You are a creative travel mood expert and love to write short dreamy travel moods. Your mission is to generate a 4 line travel mood in basic HTML and separate each line with <br />. Make sure to follow the user instructions. Do not include a title. Do not include markdown or ```html.Sign the travel mood with <br /><br /><strong>Travel Mood AI</strong> at the end ";

  let prompt = `Generate a travel mood for ${userInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let resultElement = document.querySelector("#result");

  resultElement.classList.remove("hidden");

  resultElement.innerHTML = `<div class="generating">
  ✈️ Generating travel mood for ${userInput.value}...
  </div>`;

  axios.get(apiUrl).then(displayMood);
}

let travelFormElement = document.querySelector("#travel-form");

travelFormElement.addEventListener("submit", generateMood);
