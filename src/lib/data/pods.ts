type PodLine = "original" | "vertuo";
type PodType = "Alto XL" | "Double espresso" | "Espresso";
type PodLabel = "Limited Edition" | "Next Pop";
type PodProfile =
  | "Cereal, roasted"
  | "Full bodied and creamy"
  | "Honeyed & delicate"
  | "Woody & spicy";

export interface Pod {
  slug: string;
  name: string;
  description: string;
  line: PodLine;
  type: PodType;
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
  price: number;
  year?: number;
  discontinued?: boolean;
  notes?: string;
  image?: string;
  // default to `https://www.nespresso.com/us/en/order/capsules/${line}/${slug}`
  url?: string;
  review?: string;
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
    price: 12,
    image: "/img/pods/aged-sumatra-vertuo-coffee-pods.avif",
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
    price: 9.8,
    image: "/img/pods/altissio-vertuo-espresso-pods.webp",
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
    price: 10.5,
    image: "/img/pods/altissio-decaffeinato-coffee-pods.avif",
  },
  {
    slug: "alto-ambrato",
    name: "Alto Ambrato",
    description:
      "Ambrato is a delicate blend with light toasted bread and honey notes and a light body.",
    line: "vertuo",
    type: "Alto XL",
    profile: "Honeyed & delicate",
    weight: 17.1,
    intensity: 7,
    bitterness: 2,
    acidity: 1,
    body: 3,
    roasting: 2,
    caffeine: 170,
    oz: 12,
    price: 11.52,
    url: "https://www.nespresso.com/hk/en/order/capsules/vertuo/alto-ambrato",
    image: "/img/pods/alto-ambrato.avif",
  },
];

// export const podsBySlug = Object.fromEntries(
//   pods.map((pod) => [pod.slug, pod])
// );
