export interface Animal {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  detailImage: string;
  about: string;
  mass: string;
  conservationStatus: string;
  domain: string;
}

export const fakeDatabaseAnimal: Animal[] = [
  {
    id: 1,
    name: "Bald Eagle",
    scientificName: "Haliaeetus leucocephalus",
    image: "/baldEagle.png",
    detailImage: "/detailBaldEagle.jpg",
    about: "The bald eagle is a bird of prey found in North America.",
    mass: "3-6.3 kg",
    conservationStatus: "Least Concern",
    domain: "Eukaryota",
  },
  {
    id: 2,
    name: "Beaver",
    scientificName: "Castor canadensis",
    image: "/beaver.png",
    detailImage: "/detailBeaver.jpg",
    about:
      "The beaver is a large, nocturnal, semiaquatic rodent known for building dams and lodges.",
    mass: "11-32 kg",
    conservationStatus: "Least Concern",
    domain: "Eukaryota",
  },
  {
    id: 3,
    name: "Squirrel",
    scientificName: "Sciurus carolinensis",
    image: "/squirrel.png",
    detailImage: "/detailSquirrel.jpg",
    about: "Squirrels are small to medium-sized rodents with a bushy tail.",
    mass: "200-600 g",
    conservationStatus: "Least Concern",
    domain: "Eukaryota",
  },
  {
    id: 4,
    name: "Raccoon",
    scientificName: "Procyon lotor",
    image: "racoon.png",
    detailImage: "/detailRaccoon.jpg",
    about: "Raccoons are medium-sized mammals native to North America.",
    mass: "5-26 kg",
    conservationStatus: "Least Concern",
    domain: "Eukaryota",
  },
  {
    id: 5,
    name: "Great Blue Heron",
    scientificName: "Ardea herodias",
    image: "seabird.png",
    detailImage: "/detailSeaBird.jpg",
    about: "The great blue heron is a large wading bird in the heron family.",
    mass: "2-4.5 kg",
    conservationStatus: "Least Concern",
    domain: "Eukaryota",
  },
  {
    id: 6,
    name: "Pacific Salmon",
    scientificName: "Oncorhynchus spp.",
    image: "/pacificSalmon.png",
    detailImage: "/detailSalmon.jpg",
    about:
      "Pacific salmon are several species of salmon native to the Pacific Ocean.",
    mass: "Varies by species",
    conservationStatus: "Varies by species",
    domain: "Eukaryota",
  },
  {
    id: 7,
    name: "Black Bear",
    scientificName: "Ursus americanus",
    image: "/blackBear.png",
    detailImage: "/detailBlackBear.jpg",
    about: "The black bear is a medium-sized bear native to North America.",
    mass: "40-300 kg",
    conservationStatus: "Least Concern",
    domain: "Eukaryota",
  },
];

export const getAnimalById = (id: number): Animal | undefined => {
  return fakeDatabaseAnimal.find((animal) => animal.id === id);
};

export default { fakeDatabaseAnimal, getAnimalById };
