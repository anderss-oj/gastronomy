const categorySelect1 = document.getElementById("category-select-1");
const categorySelect2 = document.getElementById("category-select-2");
const displayButton = document.getElementById("display-button");
const displayedImage = document.getElementById("displayed-image");
const reverseButton = document.getElementById("reverse-button");
let categoryLabel1 = document.getElementById("category-label-1");
let categoryLabel2 = document.getElementById("category-label-2");
const content = document.getElementsByClassName("content")[0];
const splashImage = document.getElementById("splashbg-img")

splashImage.addEventListener("click", function() {
  content.style.display = "block"
  splashImage.style.display = "none"
});

reverseButton.addEventListener("click", function() {
    const temp = categoryLabel1.textContent;
    categoryLabel1.textContent= categoryLabel2.textContent;
    categoryLabel2.textContent = temp;
    //console.log(categoryLabel1.textContent, categoryLabel2.textContent);

    if (categoryLabel1.textContent === "Select a Restaurant"){
        categorySelect1.innerHTML = `
            <option value="">-- Select a category --</option>
            <option value="mcdonald's">McDonald's</option>
            <option value="taco bell">Taco Bell</option>
            <option value="kfc">KFC</option>
            <option value="cinnabon">Cinnabon</option>
            <option value="starbucks">Starbucks</option>
        `} else if (categoryLabel1.textContent === "Select a Vehicle"){
            categorySelect1.innerHTML = `
                <option value="">-- Select a category --</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="airplane">Airplane</option>
                <option value="helicopter">Helicopter</option>
                <option value="boat">Boat</option>
            `};
});

categorySelect1.addEventListener("change", function() {
  const selectedCategory = categorySelect1.value;

  if (selectedCategory === "car") {
    categorySelect2.innerHTML = `
      <option value="">-- Select an image --</option>
      <option value="images/mcdonald's/car_mcdonald's.png">McDonald's</option>
      <option value="images/taco bell/car_tacobell.png">Taco Bell</option>
      <option value="images/kfc/car_kfc.png">KFC</option>
      <option value="images/cinnabon/car_cinnabon.png">Cinnabon</option>
      <option value="images/starbucks/car_starbucks.png">Starbucks</option>
    `;
  } else if (selectedCategory === "bike") {
    categorySelect2.innerHTML = `
      <option value="">-- Select an image --</option>
      <option value="images/mcdonald's/bike_mcdonald's.png">McDonald's</option>
      <option value="images/taco bell/bike_tacobell.png">Taco Bell</option>
      <option value="images/kfc/bike_kfc.png">KFC</option>
      <option value="images/cinnabon/bike_cinnabon.png">Cinnabon</option>
      <option value="images/starbucks/bike_starbucks.png">Starbucks</option>
    `;
  } else if (selectedCategory === "airplane") {
    categorySelect2.innerHTML = `
      <option value="">-- Select an image --</option>
      <option value="images/mcdonald's/airplane_mcdonald's.png">McDonald's</option>
      <option value="images/taco bell/airplane_tacobell.png">Taco Bell</option>
      <option value="images/kfc/airplane_kfc.png">KFC</option>
      <option value="images/cinnabon/airplane_cinnabon.png">Cinnabon</option>
      <option value="images/starbucks/airplane_starbucks.png">Starbucks</option>
    `;
  } else if (selectedCategory === "helicopter") {
    categorySelect2.innerHTML = `
      <option value="">-- Select an image --</option>
      <option value="images/mcdonald's/helicopter_mcdonald's.png">McDonald's</option>
      <option value="images/taco bell/helicopter_tacobell.png">Taco Bell</option>
      <option value="images/kfc/helicopter_kfc.png">KFC</option>
      <option value="images/cinnabon/helicopter_cinnabon.png">Cinnabon</option>
      <option value="images/starbucks/helicopter_starbucks.png">Starbucks</option>
    `;
  } else if (selectedCategory === "boat") {
    categorySelect2.innerHTML = `
      <option value="">-- Select an image --</option>
      <option value="images/mcdonald's/boat_mcdonald's.png">McDonald's</option>
      <option value="images/taco bell/boat_tacobell.png">Taco Bell</option>
      <option value="images/kfc/boat_kfc.png">KFC</option>
      <option value="images/cinnabon/boat_cinnabon.png">Cinnabon</option>
      <option value="images/starbucks/boat_starbucks.png">Starbucks</option>
    `;
  } else if (selectedCategory === "mcdonald's") {
    categorySelect2.innerHTML = `
      <option value="">-- Select an image --</option>
      <option value="images/mcdonald's/mcdonald's_car.png">Car</option>
      <option value="images/mcdonald's/mcdonald's_bike.png">Bike</option>
      <option value="images/mcdonald's/mcdonald's_airplane.png">Airplane</option>
      <option value="images/mcdonald's/mcdonald's_helicopter.png">Helicopter</option>
      <option value="images/mcdonald's/mcdonald's_boat.png">Boat</option>
    `;
  } else if (selectedCategory === "taco bell") {
    categorySelect2.innerHTML = `
      <option value="">-- Select an image --</option>
      <option value="images/taco bell/tacobell_car.png">Car</option>
      <option value="images/taco bell/tacobell_bike.png">Bike</option>
      <option value="images/taco bell/tacobell_airplane.png">Airplane</option>
      <option value="images/taco bell/tacobell_helicopter.png">Helicopter</option>
      <option value="images/taco bell/tacobell_boat.png">Boat</option>
    `;
  } else if (selectedCategory === "kfc") {
    categorySelect2.innerHTML = `
      <option value="">-- Select an image --</option>
      <option value="images/kfc/kfc_car.png">Car</option>
      <option value="images/kfc/kfc_bike.png">Bike</option>
      <option value="images/kfc/kfc_airplane.png">Airplane</option>
      <option value="images/kfc/kfc_helicopter.png">Helicopter</option>
      <option value="images/kfc/kfc_boat.png">Boat</option>
    `;
  } else if (selectedCategory === "cinnabon") {
    categorySelect2.innerHTML = `
      <option value="">-- Select an image --</option>
      <option value="images/cinnabon/cinnabon_car.png">Car</option>
      <option value="images/cinnabon/cinnabon_bike.png">Bike</option>
      <option value="images/cinnabon/cinnabon_airplane.png">Airplane</option>
      <option value="images/cinnabon/cinnabon_helicopter.png">Helicopter</option>
      <option value="images/cinnabon/cinnabon_boat.png">Boat</option>
    `;
  } else if (selectedCategory === "starbucks") {
    categorySelect2.innerHTML = `
      <option value="">-- Select an image --</option>
      <option value="images/starbucks/starbucks_car.png">Car</option>
      <option value="images/starbucks/starbucks_bike.png">Bike</option>
      <option value="images/starbucks/starbucks_airplane.png">Airplane</option>
      <option value="images/starbucks/starbucks_helicopter.png">Helicopter</option>
      <option value="images/starbucks/starbucks_boat.png">Boat</option>
    `;
  } else {
    categorySelect2.innerHTML = `
      <option value="">-- Select a category first --</option>
    `;
  }

  categorySelect2.disabled = selectedCategory === "";
  displayButton.disabled = selectedCategory === "";
  displayedImage.style.display = "none";
  
});

displayButton.addEventListener("click", function() {
  displayedImage.src = categorySelect2.value;
  displayedImage.style.display = "block";
  reverseButton.disabled = false

});