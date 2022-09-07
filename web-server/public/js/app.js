const weatherForm = document.querySelector(`form`);
const search = document.querySelector(`input`);
const messageOne = document.querySelector(`#msg1`);
const messageTwo = document.querySelector(`#msg2`);

weatherForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = `Loading...`;
  messageTwo.textContent = ``;

  fetch(`/weather?address=` + encodeURI(location)).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else if (!location) {
        console.log(`Provide an address!`);
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
