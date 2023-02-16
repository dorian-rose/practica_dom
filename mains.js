document.addEventListener("DOMContentLoaded", () => {
  //document site variables
  const bannerContainer = document.querySelector(".banner-container");
  const viajes = document.querySelector(".viajes");
  const select = document.querySelector("select");
  let fragment = document.createDocumentFragment();

  //arrays for foreaches
  let numberDisplayedOptions = [1, 2, 3];
  let cards = ["cardOne", "cardTwo", "cardThree"];

  //arrays for content
  const bannerImages = [
    ["1.jpg", "sunset"],
    ["2.jpg", "hot air balloons"],
    ["3.jpg", "dusk"],
    ["4.jpg", "hot air balloons over field"],
    ["5.jpg", "moonlit night"],
    ["6.jpg", "snowy mountains"],
    ["7.jpg", "birds at sunset"],
    ["8.jpg", "cottontail plant"],
  ];
  const travelImages = [
    ["viajes-1.jpg", "hammock on the beach"],
    ["viajes-2.jpg", "beach huts"],
    ["viajes-3.jpg", "signs"],
    ["viajes-4.jpg", "Seville"],
    ["viajes-5.jpg", "bridge in Seville"],
    ["viajes-6.jpg", "seaside road"],
    ["viajes-7.jpg", "Granada"],
  ];
  const travelContent = [
    [
      "Viaje 1",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
    ],
    [
      "Viaje 2",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    ],
    [
      "Viaje 3",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
    ],
    [
      "Viaje 4",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ",
    ],
    [
      "Viaje 5",
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    ],
    [
      "Viaje 6",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. ",
    ],
    [
      "Viaje 7",
      "Et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    ],
  ];

  //=======
  //functions
  //======

  //randomly select one of eight banner images and paint it in banner
  function makeBannerImage() {
    let num = Math.floor(Math.random() * bannerImages.length);
    let bannerImg = document.createElement("IMG");
    bannerImg.alt = bannerImages[num][1];
    bannerImg.src = `banner/${bannerImages[num][0]}`;
    bannerImg.title = bannerImages[num][1];
    bannerContainer.append(bannerImg);
  }

  //make a card container (article.card) and append it to container (div.viajes)
  //and make the card header (div) and the image it contains
  function makeCard() {
    //let travelNum = [];
    for (let i = 0; i < cards.length; i++) {
      let travelNum = Math.floor(Math.random() * travelImages.length);
      //do {
      // travelNum.push(Math.floor(Math.random() * travelImages.length));
      // } while (travelNum[i] == travelNum[i - 1]);
      //create card container and add a class to it
      const cardContainer = document.createElement("ARTICLE");
      cardContainer.classList.add("card");
      //create image, alt, src and title, attach to card container
      const cardImg = document.createElement("IMG");
      cardImg.alt = travelImages[travelNum][1];
      cardImg.src = `viajes/${travelImages[travelNum][0]}`;
      cardImg.title = travelImages[travelNum][1];
      //create a h3 and text content for it, and attach to card body div
      const cardTitle = document.createElement("h3");
      cardTitle.textContent = travelContent[travelNum][0];
      //create a para, text content for it, and attach to card body
      const cardPara = document.createElement("p");
      cardPara.textContent = travelContent[travelNum][1];
      cardContainer.append(cardImg, cardTitle, cardPara);
      //store (attache) card container to fragment
      fragment.append(cardContainer);
    }
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
    let optNum = Math.floor(Math.random() * destinations.length);
    let option = document.createElement("OPTION");
    option.value = destinations[optNum].toLowerCase();
    option.textContent = destinations[optNum];
    fragment.append(option);
  });
  select.append(fragment);
}*/
    let optNum = [];
    numberDisplayedOptions.forEach((item, i) => {
      //let optNum = Math.floor(Math.random() * destinations.length);
      do {
        optNum.push(Math.floor(Math.random() * destinations.length));
      } while (optNum[i] == optNum[i - 1]);
      let option = document.createElement("OPTION");
      option.value = destinations[optNum[i]].toLowerCase();
      option.textContent = destinations[optNum[i]];
      fragment.append(option);
    });

    select.append(fragment);
  }

  makeBannerImage();
  makeCard();
  makeSelect();
});
