function updateTime() {
  let losAngelesElement = document.querySelector("#losAngeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML =
    losAngelesCurrentTime.format("MMMM D, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoCurrentTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoCurrentTime.format("MMMM D, YYYY");
  tokyoTimeElement.innerHTML = tokyoCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
