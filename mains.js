//document site variables
const bannerContainer = document.querySelector(".banner-container");
const viajes = document.querySelector(".viajes");
const select = document.querySelector("select");
const fragment = document.createDocumentFragment();
const appear = document.querySelector(".appear");

//arrays for banner image and alt/title
const bannerImages = [
  { url: "1.jpg", text: "sunset" },
  { url: "3.jpg", text: "dusk" },
  { url: "4.jpg", text: "hot air balloons over field" },
  { url: "5.jpg", text: "moonlit night" },
  { url: "6.jpg", text: "snowy mountains" },
  { url: "7.jpg", text: "birds at sunset" },
  { url: "8.jpg", text: "cottontail plant" },
  { url: "2.jpg", text: "hot air balloons" },
];
//arrays for card content
const travelImages = [
  {
    url: "viajes-1.jpg",
    text: "hammock on the beach",
    heading: "Trip 1",
    para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  },
  {
    url: "viajes-2.jpg",
    text: "beach huts",
    heading: "Trip 2",
    para: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
  },
  {
    url: "viajes-3.jpg",
    text: "signs",
    heading: "Trip 3",
    para: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    url: "viajes-4.jpg",
    text: "Seville",
    heading: "Trip 4",
    para: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ",
  },
  {
    url: "viajes-5.jpg",
    text: "bridge in Seville",
    heading: "Trip 5",
    para: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    url: "viajes-6.jpg",
    text: "seaside road",
    heading: "Trip 6",
    para: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. ",
  },
  {
    url: "viajes-7.jpg",
    text: "Granada",
    heading: "Trip 7",
    para: "Et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
];

//=======
//functions
//======

//randomly select one of eight banner images and paint it in banner
function makeBannerImage() {
  let num = Math.floor(Math.random() * bannerImages.length);
  let bannerImg = document.createElement("IMG");
  bannerImg.alt = bannerImages[num].text;
  bannerImg.src = `banner/${bannerImages[num].url}`;
  bannerImg.title = bannerImages[num].text;
  bannerContainer.append(bannerImg);
}

//make a card container (article.card) and append it to container (div.viajes)
//and make the card header (div) and the image it contains
function makeCard() {
  let numberOfCards = ["cardOne", "cardTwo", "cardThree"];
  //let travelNum = [];
  //numberOfCards.forEach((item, i) => {
  //   do {
  //     travelNum.push(Math.floor(Math.random() * travelImages.length));
  //   } while (travelNum[i] == travelNum[i - 1]);
  // });

  numberOfCards.forEach((item, i) => {
    let travelNum = Math.floor(Math.random() * travelImages.length);

    //create card container and add a class to it
    const cardContainer = document.createElement("ARTICLE");
    cardContainer.classList.add("card");
    //create image, alt, src and title, attach to card container
    const cardImg = document.createElement("IMG");
    cardImg.classList.add("appear-button");
    cardImg.alt = travelImages[travelNum].text;
    cardImg.src = `viajes/${travelImages[travelNum].url}`;
    cardImg.title = travelImages[travelNum].text;
    cardImg.addEventListener("click", showImage);
    //create a h3 and text content for it, and attach to card body div
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = travelImages[travelNum].heading;
    //create a para, text content for it, and attach to card body
    const cardPara = document.createElement("p");
    cardPara.textContent = travelImages[travelNum].para;
    cardContainer.append(cardImg, cardTitle, cardPara);
    //store (attache) card container to fragment
    fragment.append(cardContainer);
  });
  viajes.append(fragment);
}

function makeSelect() {
  let destinations = [
    "Seville",
    "Barcelona",
    "Mallorca",
    "Las Palmas",
    "Madrid",
    "Burgos",
    "Caceres",
    "Ubeda",
  ];

  /*numberDisplayedOptions.forEach((element) => {
    let numOptions = Math.floor(Math.random() * destinations.length);
    let option = document.createElement("OPTION");
    option.value = destinations[numOptions].toLowerCase();
    option.textContent = destinations[numOptions];
    fragment.append(option);
  });
  select.append(fragment);
}*/
  let numberDisplayedOptions = [1, 2, 3];
  //let numOptions = [];
  numberDisplayedOptions.forEach((item, i) => {
    let numOptions = Math.floor(Math.random() * destinations.length);
    // do {
    //   numOptions.push(Math.floor(Math.random() * destinations.length));
    // } while (numOptions[i] == numOptions[i - 1]);
    let option = document.createElement("OPTION");
    option.value = destinations[numOptions].toLowerCase();
    option.textContent = destinations[numOptions];
    fragment.append(option);
  });

  select.append(fragment);
}

// start: call functions on document load
document.addEventListener("DOMContentLoaded", () => {
  makeBannerImage();
  makeCard();
  makeSelect();
});

function showImage(event) {
  appear.style.display = "block";
  let appearImage = document.querySelector(".appear img");
  appearImage.src = event.target.src;
}
