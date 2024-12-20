document.getElementById("addCountry").addEventListener("click", addCountryHandler);
document.getElementById("getCountry").addEventListener("click", getCountryHandler);
document.getElementById("listCountries").addEventListener("click", listCountriesHandler);
document.getElementById("deleteCountry").addEventListener("click", deleteCountryHandler);

function addCountryHandler() {
    let countryName = prompt("Введите название страны");
    let capitalName = prompt("Введите название столицы");
    if (countryName && capitalName) {
        addСountry(countryName, capitalName);
        console.log(`информация о ${countryName} добавлена`);
    } else {
        console.log("вы не зополнели все поля");
    }
}

function getCountryHandler() {
    let countryName = prompt("Введите название страны");
    console.log(getcountryInfo(countryName));
}

function listCountriesHandler() {
    console.log(listСountries());
}

function deleteCountryHandler() {
    let countryName = prompt("Введите название страны");
    if (countryName) {
        if (countryName in countries) {
            deleteСountry(countryName)
            console.log("cтрана: " + countryName + " удалена");
        } else {
            console.log("нет информации о cтране " + countryName + "!");

        }
    } else {
        console.log("вы не зополнели поле");
    }



}