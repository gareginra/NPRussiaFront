const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export default function dateProcessor (str) {
        const dayMonth = new Date().getDate() == new Date(str).getDate() ? "" : new Date(str).getDate() + " " + months[new Date(str).getMonth()] + " ";
        const hours = new Date(str).getHours() < 10 ? "0" + new Date(str).getHours() : new Date(str).getHours();
        const minutes = new Date(str).getMinutes() < 10? "0" + new Date(str).getMinutes() : new Date(str).getMinutes();
        const time = hours + ":" + minutes;
        return dayMonth + time;
}