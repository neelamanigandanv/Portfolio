// SVG icons based on weather code
const weatherIcons = {
    clear: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#FFB300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4" fill="#FFC107"></circle>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </svg>
    `,
    partlyCloudy: `
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v1M4.93 4.93l.7.7M2 12h1M6.34 17.66l-.7.7M19.07 4.93l-.7.7" stroke="#FFB300" />
            <circle cx="12" cy="12" r="3" fill="#FFC107" stroke="#FFB300" />
            <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.05-1.22.14a5 5 0 0 0-9.28 2.36c0 .17.01.34.02.5A4.5 4.5 0 0 0 10 23h7.5A3.5 3.5 0 0 0 17.5 19z" fill="#E2E8F0" stroke="#94A3B8"></path>
        </svg>
    `,
    cloudy: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.05-1.22.14a5 5 0 0 0-9.28 2.36c0 .17.01.34.02.5A4.5 4.5 0 0 0 10 23h7.5A3.5 3.5 0 0 0 17.5 19z" fill="#CBD5E1"></path>
        </svg>
    `,
    rainy: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.05-1.22.14a5 5 0 0 0-9.28 2.36c0 .17.01.34.02.5A4.5 4.5 0 0 0 10 23h7.5A3.5 3.5 0 0 0 17.5 19z" fill="#94A3B8" stroke="#64748B"></path>
            <path d="M8 27v-3M12 27v-3M16 27v-3" stroke-dasharray="2 2"></path>
        </svg>
    `,
    stormy: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#1E293B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.05-1.22.14a5 5 0 0 0-9.28 2.36c0 .17.01.34.02.5A4.5 4.5 0 0 0 10 23h7.5A3.5 3.5 0 0 0 17.5 19z" fill="#475569" stroke="#334155"></path>
            <path d="M13 23l-2 3h3l-2 3" stroke="#F59E0B" stroke-width="2"></path>
        </svg>
    `,
    snowy: `
        <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.05-1.22.14a5 5 0 0 0-9.28 2.36c0 .17.01.34.02.5A4.5 4.5 0 0 0 10 23h7.5A3.5 3.5 0 0 0 17.5 19z" fill="#E2E8F0" stroke="#CBD5E1"></path>
            <circle cx="8" cy="25" r="1" fill="#38BDF8" stroke="none"></circle>
            <circle cx="12" cy="26" r="1" fill="#38BDF8" stroke="none"></circle>
            <circle cx="16" cy="25" r="1" fill="#38BDF8" stroke="none"></circle>
        </svg>
    `
};

// Fallback / Default weather values for Hyderabad
const fallbackDefault = {
    cityName: "Hyderabad",
    countryCode: "IN",
    temp: 32,
    desc: "Partly Cloudy",
    icon: "partlyCloudy",
    humidity: 58,
    wind: 14,
    visibility: 10
};

// DOM Elements
const citySearch = document.getElementById("city-search");
const locationTitleVal = document.getElementById("location-title-val");
const suggestionsList = document.getElementById("suggestions-list");
const currentDateTime = document.getElementById("current-date-time");
const weatherIconContainer = document.getElementById("weather-icon-container");
const temperatureVal = document.getElementById("temperature-val");
const weatherDesc = document.getElementById("weather-desc");
const humidityVal = document.getElementById("humidity-val");
const windVal = document.getElementById("wind-val");
const visibilityVal = document.getElementById("visibility-val");
const updatedVal = document.getElementById("updated-val");
const loader = document.getElementById("loader");
const weatherContent = document.getElementById("weather-content");

// Format Date & Time: "26 May 2025 | 10:30 AM"
function formatDateTime(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    return `${day} ${month} ${year} | ${hours}:${minutes} ${ampm}`;
}

// Convert WMO code to description and icon key
function interpretWeatherCode(code) {
    if (code === 0) return { desc: "Clear Sky", icon: "clear" };
    if ([1, 2].includes(code)) return { desc: "Partly Cloudy", icon: "partlyCloudy" };
    if ([3, 45, 48].includes(code)) return { desc: "Cloudy", icon: "cloudy" };
    if ([51, 53, 55, 56, 57, 61, 63, 80, 81].includes(code)) return { desc: "Rainy", icon: "rainy" };
    if ([65, 66, 67, 82].includes(code)) return { desc: "Heavy Rain", icon: "rainy" };
    if ([71, 73, 75, 77, 85, 86].includes(code)) return { desc: "Snowy", icon: "snowy" };
    if ([95, 96, 99].includes(code)) return { desc: "Thunderstorm", icon: "stormy" };
    return { desc: "Partly Cloudy", icon: "partlyCloudy" };
}

// Fetch live weather data by lat & lon
async function fetchWeather(lat, lon, cityName, countryCode) {
    showLoader(true);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,visibility`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("API failed");
        
        const data = await response.json();
        const current = data.current;
        const weatherInfo = interpretWeatherCode(current.weather_code);
        
        // Update DOM
        citySearch.value = `${cityName}, ${countryCode}`;
        if (locationTitleVal) {
            locationTitleVal.textContent = `${cityName}, ${countryCode}`;
        }
        temperatureVal.textContent = Math.round(current.temperature_2m);
        weatherDesc.textContent = weatherInfo.desc;
        weatherIconContainer.innerHTML = weatherIcons[weatherInfo.icon] || weatherIcons.partlyCloudy;
        
        humidityVal.textContent = `${current.relative_humidity_2m}%`;
        windVal.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
        
        // Visibility in meters to km
        const visibilityKm = current.visibility ? Math.round(current.visibility / 1000) : 10;
        visibilityVal.textContent = `${visibilityKm} km`;
        
        // Updated At time
        const now = new Date();
        currentDateTime.textContent = formatDateTime(now);
        
        let updateHour = now.getHours();
        const updateMin = now.getMinutes().toString().padStart(2, '0');
        const updateAmpm = updateHour >= 12 ? 'PM' : 'AM';
        updateHour = updateHour % 12;
        updateHour = updateHour ? updateHour : 12;
        updatedVal.textContent = `${updateHour}:${updateMin} ${updateAmpm}`;

    } catch (error) {
        console.warn("Using fallback weather data due to network error", error);
        loadFallbackDefault();
    } finally {
        showLoader(false);
    }
}

// Fallback renderer
function loadFallbackDefault() {
    citySearch.value = `${fallbackDefault.cityName}, ${fallbackDefault.countryCode}`;
    if (locationTitleVal) {
        locationTitleVal.textContent = `${fallbackDefault.cityName}, ${fallbackDefault.countryCode}`;
    }
    temperatureVal.textContent = fallbackDefault.temp;
    weatherDesc.textContent = fallbackDefault.desc;
    weatherIconContainer.innerHTML = weatherIcons[fallbackDefault.icon];
    humidityVal.textContent = `${fallbackDefault.humidity}%`;
    windVal.textContent = `${fallbackDefault.wind} km/h`;
    visibilityVal.textContent = `${fallbackDefault.visibility} km`;

    const now = new Date();
    currentDateTime.textContent = formatDateTime(now);
    
    let hr = now.getHours();
    const min = now.getMinutes().toString().padStart(2, '0');
    const ampm = hr >= 12 ? 'PM' : 'AM';
    hr = hr % 12;
    hr = hr ? hr : 12;
    updatedVal.textContent = `${hr}:${min} ${ampm}`;
}

function showLoader(show) {
    if (show) {
        loader.classList.add("active");
        weatherContent.classList.add("loading");
    } else {
        loader.classList.remove("active");
        weatherContent.classList.remove("loading");
    }
}

// Debounce helper
let debounceTimeout;
function debounce(func, delay) {
    return function (...args) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Local suggestions helper in case of network issues
function getLocalSuggestions(query) {
    const term = query.toLowerCase().trim();
    const localDatabase = [
        { name: "Hyderabad", latitude: 17.3850, longitude: 78.4867, country: "India", country_code: "IN", admin1: "Telangana" },
        { name: "Mumbai", latitude: 19.0760, longitude: 72.8777, country: "India", country_code: "IN", admin1: "Maharashtra" },
        { name: "Delhi", latitude: 28.6139, longitude: 77.2090, country: "India", country_code: "IN", admin1: "Delhi" },
        { name: "London", latitude: 51.5074, longitude: -0.1278, country: "United Kingdom", country_code: "GB", admin1: "England" },
        { name: "New York", latitude: 40.7128, longitude: -74.0060, country: "United States", country_code: "US", admin1: "New York" },
        { name: "Tokyo", latitude: 35.6762, longitude: 139.6503, country: "Japan", country_code: "JP", admin1: "Tokyo" },
        { name: "Sydney", latitude: -33.8688, longitude: 151.2093, country: "Australia", country_code: "AU", admin1: "New South Wales" }
    ];

    return localDatabase.filter(city => 
        city.name.toLowerCase().includes(term) || 
        city.country.toLowerCase().includes(term)
    );
}

// Fetch city list suggestions from Open-Meteo Geocoding API
async function fetchCitySuggestions(query) {
    if (!query || query.trim().length < 2) {
        suggestionsList.classList.remove("active");
        suggestionsList.innerHTML = "";
        return;
    }

    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=en&format=json`);
        if (!response.ok) throw new Error("Geocoding failed");
        
        const data = await response.json();
        
        if (!data.results || data.results.length === 0) {
            const localResults = getLocalSuggestions(query);
            if (localResults.length > 0) {
                renderSuggestions(localResults);
                return;
            }
            suggestionsList.innerHTML = `<div class="suggestion-item"><span class="suggestion-city">No cities found</span></div>`;
            suggestionsList.classList.add("active");
            return;
        }

        renderSuggestions(data.results);
    } catch (e) {
        console.warn("Using local suggestions fallback", e);
        const localResults = getLocalSuggestions(query);
        if (localResults.length > 0) {
            renderSuggestions(localResults);
        } else {
            suggestionsList.innerHTML = `<div class="suggestion-item"><span class="suggestion-city">No cities found</span></div>`;
            suggestionsList.classList.add("active");
        }
    }
}

// Render dynamic suggestions UI
function renderSuggestions(results) {
    suggestionsList.innerHTML = "";
    results.forEach(city => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        
        const region = [city.admin1, city.country].filter(Boolean).join(", ");
        
        item.innerHTML = `
            <svg class="suggestion-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div class="suggestion-info">
                <span class="suggestion-city">${city.name}</span>
                <span class="suggestion-region">${region}</span>
            </div>
            ${city.country_code ? `<span class="suggestion-badge">${city.country_code}</span>` : ''}
        `;
        
        // Suggestion click event
        item.addEventListener("click", () => {
            citySearch.value = city.name;
            suggestionsList.classList.remove("active");
            fetchWeather(city.latitude, city.longitude, city.name, city.country_code || "Global");
        });
        
        suggestionsList.appendChild(item);
    });
    
    suggestionsList.classList.add("active");
}

// Attach Event Listeners
citySearch.addEventListener("input", debounce((e) => {
    fetchCitySuggestions(e.target.value);
}, 300));

// Close suggestions on outside click
document.addEventListener("click", (e) => {
    if (!e.target.closest(".location-search-wrapper")) {
        suggestionsList.classList.remove("active");
    }
});

// Auto-select text on focus
citySearch.addEventListener("focus", () => {
    citySearch.select();
});

// Load default location (Hyderabad, IN) on start
document.addEventListener("DOMContentLoaded", () => {
    fetchWeather(17.3850, 78.4867, "Hyderabad", "IN");
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
