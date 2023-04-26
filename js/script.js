function updateTime() {
  //new york
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = document.querySelector("#ny-date");
  let newYorkTimeElement = document.querySelector("#ny-time");
  let newYorkTime = moment()
    .tz("America/New_York")
    .format("h:mm:ss:SS [<small>]A[</small>]");
  let newYorkDate = moment().tz("America/New_York").format("MMMM Do YYYY");

  newYorkDateElement.innerHTML = newYorkDate;
  newYorkTimeElement.innerHTML = newYorkTime;
  //Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDateElement = document.querySelector("#amsterdam-date");
  let amsterdamTimeElement = document.querySelector("#amsterdam-time");
  let amsterdamTime = moment()
    .tz("Europe/Amsterdam")
    .format("h:mm:ss:SS [<small>]A[</small>]");
  let amsterdamDate = moment().tz("Europe/Amsterdam").format("MMMM Do YYYY");

  amsterdamDateElement.innerHTML = amsterdamDate;
  amsterdamTimeElement.innerHTML = amsterdamTime;
}
setInterval(updateTime, 1);
