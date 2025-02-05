const countryContainer = document.querySelector(".maincontainer");
const fetchdata = [];
fetch("https://restcountries.com/v3.1/all")
  .then((Response) => Response.json())
  .then((data) => {
    fetchdata.push(data);
    countryContainer.innerHTML = data
      .map(
        (country) =>
          `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="innerconatiner">
              <img class="img-container" src="${country.flags.png}" alt="${
            country.name.common
          } flag">
              <h2>${country.name.common} ${
            country.capital ? `- ${country.capital}` : ""
          }</h2>
              <div class="country-all">
                <span><i class="fas fa-globe-americas"></i> ${
                  country.region
                }</span>
                <span><i class="fas fa-users"></i> ${country.population}</span>
                <span><i class="fas fa-map-marker-alt"></i> ${
                  country.continents
                }</span>
              </div>
            </div>
          </div>`
      )
      .join("");
  });

// fillter data ------------------------------------------------------------------------------------------------------------------

const navbar = document.querySelectorAll(".navbar span");
let arrcontinents = [];

navbar.forEach((element) => {
  element.addEventListener("click", (event) => {
    const Allcontinents = event.target.innerHTML;

    fetchdata.forEach((data) => {
      arrcontinents = [];
      data.forEach((element) => {
        const countryContainer = element.continents;

        if (Allcontinents == "All") {
          arrcontinents.push(element);
        }

        if (Allcontinents == countryContainer) {
          arrcontinents.push(element);
        }
      });

      countryContainer.innerHTML = arrcontinents
        .map(
          (country) =>
            `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="innerconatiner">
                <img class="img-container" src="${country.flags.png}" alt="${
              country.name.common
            } flag">
                <h2>${country.name.common} ${
              country.capital ? `- ${country.capital}` : ""
            }</h2>
                <div class="country-all">
                  <span><i class="fas fa-globe-americas"></i> ${
                    country.region
                  }</span>
                  <span><i class="fas fa-users"></i> ${
                    country.population
                  }</span>
                  <span><i class="fas fa-map-marker-alt"></i> ${
                    country.continents
                  }</span>
                </div>
              </div>
            </div>`
        )
        .join("");
    });
  });
});

// Search method ------------------------------------------------------------------------------------------------------------------

const inputText = document.querySelector("#input-text");
let arrsearch = [];
const btn = document.querySelector("#search");

btn.addEventListener("click", () => {
  fetchdata.forEach((element) => {
    arrsearch = [];
    let input = inputText.value.toLowerCase();

    element.forEach((data) => {
      let searchcountry = data.name.common;
      console.log(searchcountry);

      if (inputText.value.toLowerCase() == searchcountry.toLowerCase()) {
        arrsearch.push(data);
      }
    });

    countryContainer.innerHTML = arrsearch
      .map(
        (country) =>
          `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="innerconatiner">
              <img class="img-container" src="${country.flags.png}" alt="${
            country.name.common
          } flag">
              <h2>${country.name.common} ${
            country.capital ? `- ${country.capital}` : ""
          }</h2>
              <div class="country-all">
                <span><i class="fas fa-globe-americas"></i> ${
                  country.region
                }</span>
                <span><i class="fas fa-users"></i> ${country.population}</span>
                <span><i class="fas fa-map-marker-alt"></i> ${
                  country.continents
                }</span>
              </div>
            </div>
          </div>`
      )
      .join("");
  });
});

