//file for interacting with APIs

const key = 'lrRzK8Kts1Vak4lRf63H44IgbRgqJED0';

const getWeather = async (citykey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const queryParams = `${citykey}?apikey=${key}`;

    const response = await fetch(base + queryParams);
    const data = await response.json();

    return data;
}

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryParams = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + queryParams);
    const data = await response.json();

    return data[0];
}
