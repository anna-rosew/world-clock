function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace(`_`, `/`).split(`/`)[1];
  let cityTime = moment().tz(`${cityTimeZone}`);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city" id="new-york">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "h:mm:ss:SS [<small>]A[</small>]"
            )}</div>
          </div>
        </div>`;
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
