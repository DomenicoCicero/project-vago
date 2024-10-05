const yachts = [
  {
    id: 1,
    name: "Ocean Explorer",
    lunghezza: 30,
    larghezza: 8,
    acqua: 5000,
    carburante: 15000,
    n_passeggeri: 20,
    potenza_motori: 2000,
    velocita_propulsione: 35,
    omologazione: "Classe A",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image7.webp",
      "assets/img/image6.webp",
      "assets/img/image5.webp",
      "assets/img/image4.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "L'Ocean Explorer è uno yacht di lusso da 30 metri per crociere a lungo raggio. Ospita fino a 20 passeggeri, con una velocità di 35 nodi e serbatoi capienti per lunghe traversate.",
  },
  {
    id: 2,
    name: "Sea Breeze",
    lunghezza: 25,
    larghezza: 6,
    acqua: 4000,
    carburante: 12000,
    n_passeggeri: 16,
    potenza_motori: 1500,
    velocita_propulsione: 30,
    omologazione: "Classe B",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Sea Breeze è uno yacht da 25 metri perfetto per piccoli gruppi. Con una velocità di 30 nodi, è adatto a crociere rilassanti e confortevoli per 16 passeggeri.",
  },
  {
    id: 3,
    name: "Wave Rider",
    lunghezza: 28,
    larghezza: 7,
    acqua: 4500,
    carburante: 13000,
    n_passeggeri: 18,
    potenza_motori: 1800,
    velocita_propulsione: 33,
    omologazione: "Classe A",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Wave Rider, lungo 28 metri, offre prestazioni eccellenti con una velocità di 33 nodi. Progettato per 18 passeggeri, combina potenza e comfort per le crociere in mare aperto.",
  },
  {
    id: 4,
    name: "Marine Dream",
    lunghezza: 35,
    larghezza: 9,
    acqua: 6000,
    carburante: 20000,
    n_passeggeri: 25,
    potenza_motori: 2500,
    velocita_propulsione: 40,
    omologazione: "Classe A",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Marine Dream è uno yacht di lusso da 35 metri che può trasportare fino a 25 persone. Con una velocità di 40 nodi e un design elegante, è perfetto per crociere veloci.",
  },
  {
    id: 5,
    name: "Blue Horizon",
    lunghezza: 27,
    larghezza: 7.5,
    acqua: 4800,
    carburante: 14000,
    n_passeggeri: 19,
    potenza_motori: 1700,
    velocita_propulsione: 34,
    omologazione: "Classe B",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Blue Horizon è uno yacht elegante da 27 metri, ideale per 19 passeggeri. Con una velocità di 34 nodi, è perfetto per esplorare nuove destinazioni con stile.",
  },
  {
    id: 6,
    name: "Sunset Voyager",
    lunghezza: 22,
    larghezza: 6.5,
    acqua: 3500,
    carburante: 10000,
    n_passeggeri: 14,
    potenza_motori: 1400,
    velocita_propulsione: 28,
    omologazione: "Classe C",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Sunset Voyager, con i suoi 22 metri di lunghezza e 14 posti, è ideale per brevi crociere costiere. Con una velocità di 28 nodi, offre un'esperienza tranquilla e rilassante.",
  },
  {
    id: 7,
    name: "Tropical Escape",
    lunghezza: 32,
    larghezza: 8.5,
    acqua: 5200,
    carburante: 17000,
    n_passeggeri: 22,
    potenza_motori: 2200,
    velocita_propulsione: 38,
    omologazione: "Classe A",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Tropical Escape, lungo 32 metri, è ideale per una fuga esotica. Ospita fino a 22 passeggeri e raggiunge una velocità massima di 38 nodi, perfetto per avventure tropicali.",
  },
  {
    id: 8,
    name: "Coral Pearl",
    lunghezza: 29,
    larghezza: 7.8,
    acqua: 4600,
    carburante: 13500,
    n_passeggeri: 18,
    potenza_motori: 1850,
    velocita_propulsione: 32,
    omologazione: "Classe B",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Coral Pearl, lungo 29 metri, combina eleganza e prestazioni, ospitando fino a 18 passeggeri. Con una velocità di 32 nodi, è perfetto per crociere indimenticabili.",
  },
  {
    id: 9,
    name: "Crystal Voyager",
    lunghezza: 33,
    larghezza: 8,
    acqua: 5500,
    carburante: 18000,
    n_passeggeri: 24,
    potenza_motori: 2300,
    velocita_propulsione: 37,
    omologazione: "Classe A",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Crystal Voyager è uno yacht da 33 metri che può ospitare fino a 24 passeggeri. Con una velocità massima di 37 nodi, offre lusso e avventura in mare aperto.",
  },
  {
    id: 10,
    name: "Pacific Explorer",
    lunghezza: 36,
    larghezza: 9.5,
    acqua: 6200,
    carburante: 22000,
    n_passeggeri: 28,
    potenza_motori: 2700,
    velocita_propulsione: 42,
    omologazione: "Classe A",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Pacific Explorer, con i suoi 36 metri e una velocità di 42 nodi, è l'ideale per crociere lunghe. Con una capienza di 28 passeggeri, offre un'esperienza di viaggio epica.",
  },
  {
    id: 11,
    name: "Golden Horizon",
    lunghezza: 30,
    larghezza: 8,
    acqua: 4800,
    carburante: 16000,
    n_passeggeri: 20,
    potenza_motori: 1900,
    velocita_propulsione: 35,
    omologazione: "Classe B",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Golden Horizon è uno yacht di 30 metri progettato per 20 passeggeri. Perfetto per crociere veloci con una velocità massima di 35 nodi.",
  },
  {
    id: 12,
    name: "Aqua Spirit",
    lunghezza: 31,
    larghezza: 7.9,
    acqua: 4900,
    carburante: 16500,
    n_passeggeri: 21,
    potenza_motori: 1950,
    velocita_propulsione: 36,
    omologazione: "Classe A",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "L'Aqua Spirit è uno yacht di 31 metri con capacità per 21 passeggeri. Dotato di motori potenti, raggiunge una velocità massima di 36 nodi.",
  },
  {
    id: 13,
    name: "Majestic Sun",
    lunghezza: 34,
    larghezza: 9,
    acqua: 6100,
    carburante: 21000,
    n_passeggeri: 26,
    potenza_motori: 2400,
    velocita_propulsione: 40,
    omologazione: "Classe A",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Majestic Sun è uno yacht di lusso di 34 metri, capace di trasportare fino a 26 persone. Ideale per crociere rapide con una velocità di 40 nodi.",
  },
  {
    id: 14,
    name: "Emerald Seas",
    lunghezza: 29,
    larghezza: 8,
    acqua: 4500,
    carburante: 15000,
    n_passeggeri: 18,
    potenza_motori: 1850,
    velocita_propulsione: 32,
    omologazione: "Classe B",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "L'Emerald Seas è uno yacht elegante di 29 metri, perfetto per 18 passeggeri. Con una velocità di 32 nodi, offre un'esperienza di navigazione indimenticabile.",
  },
  {
    id: 15,
    name: "Silver Breeze",
    lunghezza: 28,
    larghezza: 7.8,
    acqua: 4700,
    carburante: 14500,
    n_passeggeri: 17,
    potenza_motori: 1750,
    velocita_propulsione: 33,
    omologazione: "Classe B",
    immagini: [
      "assets/img/image1.webp",
      "assets/img/image2.webp",
      "assets/img/image3.webp",
      "assets/img/image4.webp",
      "assets/img/image5.webp",
      "assets/img/image6.webp",
      "assets/img/image7.webp",
      "assets/img/image8.webp",
      "assets/img/image9.webp",
      "assets/img/image10.webp",
      "assets/img/image11.webp",
      "assets/img/image12.webp",
    ],
    description:
      "Il Silver Breeze è uno yacht raffinato di 28 metri che può ospitare fino a 17 persone. Raggiunge una velocità di 33 nodi, perfetto per esplorazioni marine.",
  },
];

const innerImages = [
  "assets/img/image1.webp",
  "assets/img/image2.webp",
  "assets/img/image3.webp",
  "assets/img/image7.webp",
];

const urlParams = new URLSearchParams(window.location.search);
const yachtId = parseInt(urlParams.get("id"));

const yacht = yachts.find(yacht => yacht.id === yachtId);

if (yacht) {
  const heroSection = document.querySelector(".hero-section");

  heroSection.style.backgroundImage = `url('${yacht.immagini[0]}')`;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";
  heroSection.style.height = "100vh";
}

if (yacht) {
  const heroDetailsTitle = document.getElementById("hero-details-title");
  heroDetailsTitle.innerText = yacht.name;

  const heroDetailsDescription = document.getElementById("hero-details-description");
  heroDetailsDescription.innerText = yacht.description;

  const heroDetailsLength = document.getElementById("hero-details-length");
  heroDetailsLength.innerText = yacht.lunghezza + "mt";

  const heroDetailsLarge = document.getElementById("hero-details-large");
  heroDetailsLarge.innerText = yacht.larghezza + "mt";

  const heroDetailsSpeed = document.getElementById("hero-details-speed");
  heroDetailsSpeed.innerText = yacht.velocita_propulsione + "kts";
}

if (yacht) {
  const sectionImagesGallery = document.getElementById("section-images-gallery");
  for (let i = 0; i < yacht.immagini.length; i++) {
    const divCol = document.createElement("div");
    divCol.classList.add("col-6", "col-sm-4", "d-flex", "justify-content-center", "my-3");
    const singleImage = document.createElement("div");
    singleImage.classList.add("single-image");
    const img = document.createElement("img");
    img.src = yacht.immagini[i];
    img.alt = yacht.immagini[i] + i;

    singleImage.appendChild(img);
    divCol.appendChild(singleImage);
    sectionImagesGallery.appendChild(divCol);
  }
}

if (yacht) {
  const carouselInner = document.getElementsByClassName("carousel-inner")[0];
  for (let i = 0; i < yacht.immagini.length; i++) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item", "image-carousel");
    if (i === 0) {
      carouselItem.classList.add("active");
    }

    const img = document.createElement("img");
    img.src = yacht.immagini[i];
    img.alt = yacht.immagini[i] + i;

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  }
}

if (yacht) {
  const specificLength = document.getElementById("specific-length");
  specificLength.innerText = yacht.lunghezza + " mt";
  const specificLarge = document.getElementById("specific-large");
  specificLarge.innerText = yacht.larghezza + " mt";
  const specificWater = document.getElementById("specific-water");
  specificWater.innerText = yacht.acqua + " lt";
  const specificFuel = document.getElementById("specific-fuel");
  specificFuel.innerText = yacht.carburante + " lt";
  const specificNumberPassengers = document.getElementById("specific-n-passenger");
  specificNumberPassengers.innerText = yacht.n_passeggeri;
  const specificPowerMotors = document.getElementById("specific-power-motors");
  specificPowerMotors.innerText = "max " + yacht.potenza_motori + " hp";
  const specificSpeed = document.getElementById("specific-speed");
  specificSpeed.innerText = "fino a " + yacht.velocita_propulsione + " kts";
  const specificApproval = document.getElementById("specific-approval");
  specificApproval.innerText = yacht.omologazione;
}
