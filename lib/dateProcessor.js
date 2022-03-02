const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export default function dateProcessor(date) {
  var datet = new Date(date),
    mnth = ("0" + (datet.getMonth() + 1)).slice(-2),
    day = ("0" + datet.getDate()).slice(-2);
  let str = [datet.getFullYear(), mnth, day].join("-");
  const dayMonth =
    new Date().getDate() == new Date(str).getDate()
      ? ""
      : new Date(str).getDate() + " " + months[new Date(str).getMonth()] + " ";

  const hours =
    new Date(str).getHours() < 10
      ? "0" + new Date(str).getHours()
      : new Date(str).getHours();

  const minutes =
    new Date(str).getMinutes() < 10
      ? "0" + new Date(str).getMinutes()
      : new Date(str).getMinutes();

  const time = hours + ":" + minutes;

  return dayMonth + time;
}
