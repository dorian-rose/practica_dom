let num = 3;
let bannerContainer = document.querySelector(".banner-container");
let viajes = document.querySelector(".viajes");
console.log(viajes);

//randomly select one of eight banner images
function makeBannerImage() {
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

  let num = Math.floor(Math.random() * bannerImages.length);
  console.log(num);
  let bannerImg = document.createElement("IMG");
  bannerImg.alt = bannerImages[num][1];
  bannerImg.src = `banner/${bannerImages[num][0]}`;
  bannerImg.title = bannerImages[num][1];
  bannerContainer.append(bannerImg);
}

//make a card container (article.card) and append it to container (div.viajes)
//arrray of images included here
function makeCard() {
  const travelImages = [
    ["viajes-1.jpg", "hammock on the beach"],
    ["viajes-2.jpg", "beach huts"],
    ["viajes-3.jpg", "signs"],
    ["viajes-4.jpg", "Seville"],
    ["viajes-5.jpg", "bridge in Seville"],
    ["viajes-6.jpg", "seaside road"],
    ["viajes-7.jpg", "Granada"],
  ];
  let cards = ["cardOne", "cardTwo", "cardThree"];
  cards.forEach((element) => {
    let travelNum = Math.floor(Math.random() * travelImages.length);
    let cardContainer = document.createElement("ARTICLE");
    cardContainer.classList.add("card");
    viajes.append(cardContainer);
    makeCardHeader(cardContainer, travelNum, travelImages);
    makeCardContent(cardContainer, travelNum);
  });
}

//Make the card header (div) and the image it contains
function makeCardHeader(cardContainer, travelNum, travelImages) {
  let cardHeader = document.createElement("DIV");
  cardContainer.append(cardHeader);
  let cardImg = document.createElement("IMG");
  cardImg.alt = travelImages[travelNum][1];
  cardImg.src = `viajes/${travelImages[travelNum][0]}`;
  cardImg.title = travelImages[travelNum][1];
  cardHeader.append(cardImg);
}

//Append a h3 and a p to the card container
function makeCardContent(cardContainer, travelNum) {
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
  let cardBody = document.createElement("DIV");
  cardContainer.append(cardBody);
  let cardTitle = document.createElement("h3");
  cardTitle.textContent = travelContent[travelNum][0];
  cardBody.append(cardTitle);
  let cardPara = document.createElement("p");
  cardPara.textContent = travelContent[travelNum][1];
  cardBody.append(cardPara);
}

makeBannerImage();
makeCard();
