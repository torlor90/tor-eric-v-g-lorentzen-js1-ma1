// Question 1

var cat = {
    complain: "Meow!"
};

console.log(cat.complain);


// Question 2

const heading = document.querySelector("h3");


// Question 3

heading.style.fontSize = "2em";


// Question 4

heading.classList.add("subheading");


// Question 5

let paragraphs = document.querySelectorAll("p");


// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";


// Question 7

  const cats = [
    {
      name: "Blob",
      age: 10
    },
    {
      name: "Harold"
    },
    {
      name: "Blurt",
      age: 21
    }
  ];
  
  function catsName(catArray) {
    for (let i = 0; i < catArray.length; i++) {
      console.log(catArray[i].name);
    }
  }
  
  catsName(cats);


// Question 8

function petsFunction(catArray) {
    let name = "";
    for(let i = 0; i < catArray.length; i++) {
        name += `<h5>${catArray[i].name}</h5>`
    }
    return name;
};

petsFunction(cats);


// Question 9

petsFunction(cats);

resultsContainer.innerHTML += petsFunction(cats);


// Question 10

function petsFunction(catArray) {
    let name = "";

    for (let i = 0; i < catArray.length; i++) {

        const ageValue = catArray[i].age ? catArray[i].age : "Age Uknown";

        name += `<div>
                    <h5>${catArray[i].name}</h5>
                    <p>${ageValue}</p>
                </div>`;

    }
    return name;
};