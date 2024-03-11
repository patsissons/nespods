type PodLine = "original" | "vertuo";
type PodType = "Alto XL" | "Double espresso" | "Espresso" | "Gran Lungo";
type PodLabel = "Limited Edition" | "Next Pop";
type PodProfile =
  | "Cereal, roasted"
  | "Full bodied and creamy"
  | "Honeyed & delicate"
  | "Roasted & woody"
  | "Woody & flowery"
  | "Woody & spicy";
export type PodRegion = "us" | "ca" | "hk";

export interface PodRegionAvailability {
  price: number;
  // default to
  // - `https://www.nespresso.com/${region}/en/order/capsules/${line}/${slug}`
  url?: string;
}

export interface Pod {
  slug: string;
  name: string;
  description: string;
  line: PodLine;
  type: PodType;
  nextPop?: boolean;
  labels?: PodLabel[];
  profile: PodProfile;
  weight: number;
  intensity: number;
  bitterness: number;
  acidity: number;
  body: number;
  roasting: number;
  caffeine?: number;
  oz?: number;
  year?: number;
  discontinued?: boolean;
  notes?: string;
  image?: string;
  review?: string;
  availability: Partial<Record<PodRegion, PodRegionAvailability>>;
}

// source of data from this spreadsheet:
// https://docs.google.com/spreadsheets/u/0/d/1kZJCdTmqQla2ha3DDYyixQDIUuf9wLvt3122akBkhgM/htmlview#
export const pods: Pod[] = [
  {
    slug: "aged-sumatra-vertuo-coffee-pods",
    name: "Aged Sumatra",
    description:
      "Aged Sumatra is a specialty coffee with elegant woody notes. Refined by time, the carefully aged beans gain in smoothness and complex spice notes. Try Aged Sumatra as a Cappuccino, for a full-bodied, intense treat with roasted cocoa notes and subtle, pleasantly bitter aftertaste.",
    line: "vertuo",
    type: "Double espresso",
    labels: ["Limited Edition"],
    profile: "Woody & spicy",
    weight: 10,
    intensity: 8,
    bitterness: 4,
    acidity: 1,
    body: 3,
    roasting: 4,
    oz: 2.7,
    image: "/img/pods/aged-sumatra-vertuo-coffee-pods.avif",
    availability: {
      us: {
        price: 12,
      },
    },
  },
  {
    slug: "altissio-vertuo-espresso-pods",
    name: "Altisso",
    description:
      "Altissio's velvety crema sits luxuriously on your tongue. The Latin American blend is a full- bodied and bold espresso cloaked in a creamy cereal note.",
    line: "vertuo",
    type: "Espresso",
    profile: "Full bodied and creamy",
    weight: 7,
    intensity: 9,
    bitterness: 3,
    acidity: 1,
    body: 3,
    roasting: 3,
    caffeine: 108,
    oz: 1.35,
    image: "/img/pods/altissio-vertuo-espresso-pods.webp",
    availability: {
      us: {
        price: 9.8,
      },
    },
  },
  {
    slug: "altissio-decaffeinato-coffee-pods",
    name: "Altisso Decaffeinato",
    description:
      "Altissio Decaffeinato's velvety crema sits luxuriously on your tongue. The decaffeinated Latin American blend is a full- bodied and bold espresso cloaked in a creamy cereal note.",
    line: "vertuo",
    type: "Espresso",
    profile: "Cereal, roasted",
    weight: 7,
    intensity: 9,
    bitterness: 3,
    acidity: 1,
    body: 3,
    roasting: 3,
    caffeine: 4,
    oz: 1.35,
    image: "/img/pods/altissio-decaffeinato-coffee-pods.avif",
    availability: {
      us: {
        price: 10.5,
      },
    },
  },
  {
    slug: "alto-ambrato",
    name: "Alto Ambrato",
    description:
      "Ambrato is a delicate blend with light toasted bread and honey notes and a light body.",
    line: "vertuo",
    type: "Alto XL",
    nextPop: true,
    profile: "Honeyed & delicate",
    weight: 17.1,
    intensity: 7,
    bitterness: 2,
    acidity: 1,
    body: 3,
    roasting: 2,
    caffeine: 170,
    oz: 12,
    image: "/img/pods/alto-ambrato.avif",
    availability: {
      hk: {
        price: 67,
      },
    },
  },
  {
    slug: "alto-onice",
    name: "Alto Onice",
    description: "An intense coffee with roasted, woody and spicy notes.",
    line: "vertuo",
    type: "Alto XL",
    nextPop: true,
    profile: "Roasted & woody",
    weight: 17.1,
    intensity: 4,
    bitterness: 3,
    acidity: 1,
    body: 3,
    roasting: 3,
    caffeine: 190,
    oz: 12,
    image: "/img/pods/alto-onice.png",
    availability: {
      hk: {
        price: 67,
      },
    },
  },
  {
    slug: "ethiopia-vertuo-coffee-pods",
    name: "Ethiopia",
    description:
      "Ethiopia is a naturally flowery coffee that gains fruitiness and complexity from its signature drying method, revealing ripe blueberry notes and a hint of musk.",
    line: "vertuo",
    type: "Gran Lungo",
    profile: "Woody & flowery",
    weight: 10,
    intensity: 6,
    bitterness: 4,
    acidity: 2,
    body: 4,
    roasting: 4,
    caffeine: 135,
    oz: 5,
    notes: "Reviving Origins",
    image: "/img/pods/ethiopia-vertuo-coffee-pods.png",
    availability: {
      us: {
        price: 12,
      },
    },
  },
  // {
  //   slug: "",
  //   name: "",
  //   description: "",
  //   line: "vertuo",
  //   type: "",
  //   profile: "",
  //   weight: 0,
  //   intensity: 0,
  //   bitterness: 0,
  //   acidity: 0,
  //   body: 0,
  //   roasting: 0,
  //   caffeine: 0,
  //   oz: 0,
  //   price: 0,
  //   url: "",
  //   image: "",
  // }
];

// export const podsBySlug = Object.fromEntries(
//   pods.map((pod) => [pod.slug, pod])
// );
