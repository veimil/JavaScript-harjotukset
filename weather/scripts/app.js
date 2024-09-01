//file for DOM manipulation
//we can use the functions inside forecast.js (getCity and getWeather) straight away since it is included in our index file before this file

const locationInput = document.querySelector('.change-location');
const card = document.querySelector('.card');
const cardContent = document.querySelector('.card-content');
const details = document.querySelector('.details');

const updateUI = (data) => {
    const cityInfo = data.cityInfo;
    const [weatherInfo] = data.weatherInfo;

    //update icon
    const iconSrc = `img/icons/${weatherInfo.WeatherIcon}.svg`;

    //update details on the card
    cardContent.innerHTML = `
        <p class="location">${cityInfo.LocalizedName}, ${cityInfo.Country.ID}</p>
        <div class="details">
            <div class="icon">
                <img src=${iconSrc} alt="weather symbol">
            </div>
            <div class="degrees">
                <span>${weatherInfo.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
            <p class="weathertext">${weatherInfo.WeatherText}</p>
        </div>
        `;

    //update night/day styles
    
    if (!weatherInfo.IsDayTime) {
        card.classList.add('night');
        cardContent.classList.add('night');
        document.body.style.background = 'linear-gradient(rgb(43, 43, 43), rgb(0, 55, 117))';
    } else {
        card.classList.remove('night');
        cardContent.classList.remove('night');
        document.body.style.background = 'linear-gradient(rgb(143, 154, 255), rgb(192, 230, 255))';
    }
}


const updateCity = async (city) => {
    const cityInfo = await getCity(city);
    const weatherInfo = await getWeather(cityInfo.Key);

    return {
        cityInfo,
        weatherInfo
    }
}

locationInput.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = locationInput.city.value.trim();
    locationInput.reset();

    updateCity(city)
        .then((data) => {
            updateUI(data);
        })
        .catch((err) => console.log(err));
})

window.setTimeout(() => {
    updateCity('helsinki')
        .then((data) => {
            updateUI(data);
            card.classList.remove('hide');
            cardContent.classList.remove('hide');
        })
        .catch((err) => console.log(err));
}, 50);