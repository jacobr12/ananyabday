
import { DOORWAYS, STAIR, STAIR_ZONE } from "@/lib/houseLayout";
import { getFloorY } from "@/lib/movement";

export type RoomType = "favorites" | "trivia" | "people";

export type Connection = {
  toRoom: string;
  zone: { x: number; y: number; w: number; h: number };
  type?: "doorway" | "stairs";
};

export type PersonData = {
  name: string;
  photo: string;
  caption?: string;
  sealColor?: string;
  letter?: string;
  signoff?: string;
  /** Wide polaroid frame for group / landscape photos */
  photoLayout?: "portrait" | "landscape";
};

export type Item = {
  id: string;
  name: string;
  icon: string;
  position: { x: number; y: number };
  favorite?: {
    heading: string;
    why: string;
    image?: string;
  };
  triviaFact?: string;
  person?: PersonData;
  isSecret?: boolean;
};

export type HouseRoom = {
  id: string;
  name: string;
  type: RoomType;
  bounds: { x: number; y: number; w: number; h: number };
  moodColor: string;
  connections?: Connection[];
  items: Item[];
};

const UW_LEFT = 480;
const UW_RIGHT = 408;
const UH = 260;
const DW = 320;
const DW_RIGHT = 248;

const STAIR_CONN = { x: STAIR_ZONE.x, y: STAIR_ZONE.y, w: STAIR_ZONE.w, h: STAIR_ZONE.h };

export const rooms: HouseRoom[] = [
  {
    id: "favorites",
    name: "Ananya's Favorites",
    type: "favorites",
    bounds: { x: 0, y: 0, w: UW_LEFT, h: UH },
    moodColor: "#f8efd4",
    connections: [
      { toRoom: "fun-facts", zone: DOORWAYS.upstairs, type: "doorway" },
    ],
    items: [
      {
        id: "fav-virgin-suicides",
        name: "The Virgin Suicides",
        icon: "virgin-suicides",
        position: { x: 58, y: 102 },
        favorite: {
          heading: "The Virgin Suicides",
          why: "Not actually really a book about sex.",
          image: "/photos/virginsuicides.jpg",
        },
      },
      {
        id: "fav-olivia-dean",
        name: "Olivia Dean",
        icon: "olivia-dean",
        position: { x: 195, y: 102 },
        favorite: {
          heading: "Olivia Dean",
          why: "You liked her before everyone liked her.",
          image: "/photos/oliviadean.jpg",
        },
      },
      {
        id: "fav-sarah-kinsley",
        name: "Sarah Kinsley",
        icon: "sarah-kinsley",
        position: { x: 332, y: 102 },
        favorite: {
          heading: "Sarah Kinsley",
          why: "Heard there was a fire concert for her on March 30.",
          image: "/photos/sarahkin.jpg",
        },
      },
      {
        id: "fav-fleabag",
        name: "Fleabag",
        icon: "fleabag",
        position: { x: 58, y: 158 },
        favorite: {
          heading: "Fleabag",
          why: "I heard season 2 was really good.",
          image: "/photos/fleabag.jpg",
        },
      },
      {
        id: "fav-houston",
        name: "Houston",
        icon: "houston",
        position: { x: 195, y: 158 },
        favorite: {
          heading: "Houston",
          why: "HOME (well technically Pearland but that's ok), the goated place everyone can hang out with Kanta and Kumar.",
          image: "/photos/houston.jpeg",
        },
      },
      {
        id: "fav-pim",
        name: "Pim",
        icon: "pim",
        position: { x: 332, y: 158 },
        favorite: {
          heading: "Pim",
          why: "He is a smiling friend like you are a smiling friend.",
          image: "/photos/pim.png",
        },
      },
      {
        id: "fav-rootbeer-ollipop",
        name: "Rootbeer Olipop",
        icon: "food",
        position: { x: 126, y: 192 },
        favorite: {
          heading: "Rootbeer Olipop",
          why: "Hopefully someone puts these in the daily.",
          image: "/photos/rootbeer-ollipop.webp",
        },
      },
      {
        id: "fav-small-edible",
        name: "Small edible",
        icon: "cookie",
        position: { x: 264, y: 192 },
        favorite: {
          heading: "Small edible",
          why: "Because who would want to take a regular dose of an edible!",
          image: "/photos/smalledible.jpeg",
        },
      },
      {
        id: "secret-inside-joke",
        name: "",
        icon: "none",
        position: { x: 462, y: 248 },
        isSecret: true,
        triviaFact:
          "you found it. this whole house was built by someone who thinks you're extraordinary. happy birthday. 🌙",
      },
    ],
  },
  {
    id: "fun-facts",
    name: "Fun Facts",
    type: "trivia",
    bounds: { x: UW_LEFT, y: 0, w: UW_RIGHT, h: UH },
    moodColor: "#dceee6",
    connections: [
      { toRoom: "favorites", zone: DOORWAYS.upstairs, type: "doorway" },
      { toRoom: "family", zone: STAIR_CONN, type: "stairs" },
    ],
    items: [],
  },
  {
    id: "girlfriends",
    name: "Girlfriends",
    type: "people",
    bounds: { x: 0, y: UH, w: DW, h: UH },
    moodColor: "#edd5c8",
    connections: [
      { toRoom: "guyfriends", zone: DOORWAYS.downLeft, type: "doorway" },
    ],
    items: [
      {
        id: "person-greta",
        name: "Greta",
        icon: "polaroid",
        position: { x: 50, y: 115 },
        person: {
          name: "Greta",
          photo: "/photos/greta.jpeg",
        },
      },
      {
        id: "person-zara",
        name: "Zara",
        icon: "polaroid",
        position: { x: 160, y: 115 },
        person: {
          name: "Zara",
          photo: "/photos/zara.jpeg",
        },
      },
      {
        id: "person-jermaine",
        name: "Jermaine",
        icon: "polaroid",
        position: { x: 270, y: 115 },
        person: {
          name: "Jermaine",
          photo: "/photos/jermaine.jpeg",
        },
      },
      {
        id: "person-erin",
        name: "Erin",
        icon: "polaroid",
        position: { x: 105, y: 195 },
        person: {
          name: "Erin",
          photo: "/photos/erin.jpeg",
        },
      },
      {
        id: "person-eliza",
        name: "Eliza",
        icon: "polaroid",
        position: { x: 215, y: 195 },
        person: {
          name: "Eliza",
          photo: "/photos/eliza.jpeg",
        },
      },
    ],
  },
  {
    id: "guyfriends",
    name: "Guyfriends",
    type: "people",
    bounds: { x: DW, y: UH, w: DW, h: UH },
    moodColor: "#ead4d4",
    connections: [
      { toRoom: "girlfriends", zone: DOORWAYS.downLeft, type: "doorway" },
      { toRoom: "family", zone: DOORWAYS.downRight, type: "doorway" },
    ],
    items: [
      {
        id: "person-ruby",
        name: "Ruby",
        icon: "polaroid",
        position: { x: 50, y: 115 },
        person: {
          name: "Ruby",
          photo: "/photos/ruby.png",
          sealColor: "#f4a0b0",
          letter: `thanks for being the amazing person that you are ananya! you inspire me in so many ways and i am so lucky to have you in my life`,
          signoff: "Jrube",
        },
      },
      {
        id: "person-chris",
        name: "Chris",
        icon: "polaroid",
        position: { x: 160, y: 115 },
        person: {
          name: "Chris",
          photo: "/photos/chris.png",
        },
      },
      {
        id: "person-dean",
        name: "Dean",
        icon: "polaroid",
        position: { x: 270, y: 115 },
        person: {
          name: "Dean",
          photo: "/photos/dean.png",
        },
      },
      {
        id: "person-graham-adri",
        name: "Graham & Adri",
        icon: "polaroid",
        position: { x: 50, y: 195 },
        person: {
          name: "Graham & Adri",
          photo: "/photos/adri.jpeg",
        },
      },
      {
        id: "person-mario",
        name: "Mario",
        icon: "polaroid",
        position: { x: 160, y: 195 },
        person: {
          name: "Mario",
          photo: "/photos/mario.jpeg",
        },
      },
      {
        id: "person-rush",
        name: "Rush",
        icon: "polaroid",
        position: { x: 270, y: 195 },
        person: {
          name: "Rush",
          photo: "/photos/rush.jpeg",
        },
      },
    ],
  },
  {
    id: "family",
    name: "Family",
    type: "people",
    bounds: { x: DW * 2, y: UH, w: DW_RIGHT, h: UH },
    moodColor: "#dce8d4",
    connections: [
      { toRoom: "guyfriends", zone: DOORWAYS.downRight, type: "doorway" },
      { toRoom: "fun-facts", zone: STAIR_CONN, type: "stairs" },
    ],
    items: [
      {
        id: "person-family",
        name: "Family",
        icon: "polaroid",
        position: { x: 52, y: 130 },
        person: {
          name: "Family",
          photo: "/photos/family.png",
          photoLayout: "landscape",
        },
      },
      {
        id: "person-adi",
        name: "Adi",
        icon: "polaroid",
        position: { x: 75, y: 200 },
        person: {
          name: "Adi",
          photo: "/photos/adi.jpeg",
        },
      },
      {
        id: "person-family-2",
        name: "Family",
        icon: "polaroid",
        position: { x: 173, y: 200 },
        person: {
          name: "Family",
          photo: "/photos/family2.png",
        },
      },
    ],
  },
];

export const allItems = rooms.flatMap((r) => r.items.filter((i) => !i.isSecret));

export { getFloorY, resolveRoomAt as getRoomAt } from "@/lib/movement";

export function getSpawnPosition(): { x: number; y: number } {
  const fav = rooms.find((r) => r.id === "favorites")!;
  return {
    x: fav.bounds.x + fav.bounds.w / 2,
    y: getFloorY(fav),
  };
}

export function getRoomForItem(itemId: string): HouseRoom | undefined {
  return rooms.find((r) => r.items.some((i) => i.id === itemId));
}

export function getItemById(itemId: string): Item | undefined {
  for (const room of rooms) {
    const item = room.items.find((i) => i.id === itemId);
    if (item) return item;
  }
  return undefined;
}

export function getItemWorldPosition(item: Item, room: HouseRoom) {
  return {
    x: room.bounds.x + item.position.x,
    y: room.bounds.y + item.position.y,
  };
}
