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

const fakeDatabaseForXiao: AnimalForXiao[] = [
  {
    id: 1,
    name: "Bald-Eagle",
    scientificName: "Haliaeetus leucocephalus",
    imageSrc: "/bald-eagle.webp",
    status: ["Leg Injured", "Alive", "Female", "Richmond"],
    about: "Some information about the Bald Eagle.",
    firstAidLink: "../first-aid/bald-eagle",
  },
  {
    id: 2,
    name: "Raccoon",
    scientificName: "Procyon lotor",
    imageSrc: "/raccoon.webp",
    status: ["Head Injured", "Alive", "Male", "Richmond"],
    about: "Some information about the Raccoon.",
    firstAidLink: "../first-aid/raccoon",
  },
  // Add more data as needed
];

// fakeDb.ts

export interface AnimalDetails {
  name: string;
  condition: string[];
  steps: string[];
  contact: {
    organization: string;
    phone: string;
    hours: string;
  };
  imageSrc: string;
}

export const animalsForFirstAidDetailForXiao: { [key: string]: AnimalDetails } =
  {
    eagle: {
      name: "Bald-Eagle",
      condition: [
        "Leg Injured",
        "Alive",
        "Unconscious",
        "No Bleeding or Open Wounds",
      ],
      steps: [
        "Safety First: Approach the eagle carefully. Use protection like gloves.",
        "Call Authorities: Report injured eagles to local wildlife professionals for guidance and rescue.",
        "Maintain Distance: Minimize eagle's stress by keeping distance. If in a risky place, cover its head gently with a towel.",
        "Observe: Watch the eagle from afar, noting details about its condition and surroundings for the arriving experts.",
      ],
      contact: {
        organization: "BC SPCA Vancouver",
        phone: "(604)-879-7721",
        hours: "8:00 AM - 10:30 PM",
      },
      imageSrc: "/bald-eagle.webp",
    },
    raccoon: {
      name: "Raccoon",
      condition: ["Injured Paw", "Alive", "Conscious", "Minor Bleeding"],
      steps: [
        "Safety First: Approach the raccoon carefully. Use protection like gloves.",
        "Call Authorities: Report injured raccoons to local wildlife professionals for guidance and rescue.",
        "Provide Shelter: Create a safe and quiet space for the raccoon. Avoid direct contact if possible.",
        "Observe: Monitor the raccoon from a distance and note any changes in behavior.",
      ],
      contact: {
        organization: "Wildlife Rescue Association of BC",
        phone: "(604)-526-7275",
        hours: "24/7 Emergency Line",
      },
      imageSrc: "/raccoon.webp",
    },
    // Add more animals as needed
  };

export interface AnimalForXiao {
  id: number;
  name: string;
  scientificName: string;
  imageSrc: string;
  status: string[];
  about: string;
  firstAidLink: string;
}

export const getAnimalById = (id: number): Animal | undefined => {
  return fakeDatabaseAnimal.find((animal) => animal.id === id);
};

export const getAnimalByName = (name: string): AnimalForXiao | undefined => {
  return fakeDatabaseForXiao.find((animal) => animal.name === name);
};

export const getFirstAidDetailByName = (
  name: string
): AnimalDetails | undefined => {
  const lowercaseName = name.toLowerCase();
  const matchingAnimal = Object.values(animalsForFirstAidDetailForXiao).find(
    (animal) => animal.name.toLowerCase() === lowercaseName
  );
  return matchingAnimal;
};

export default {
  fakeDatabaseAnimal,
  getAnimalByName,
  getAnimalById,
  getFirstAidDetailByName,
};
