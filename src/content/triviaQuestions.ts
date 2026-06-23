export type TriviaQuestion = {
  id: string;
  category: "pop" | "geo";
  question: string;
  answer: string;
};

export const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  { id: "pop-001", category: "pop", question: "What is Barbie's full name?", answer: "Barbara Millicent Roberts" },
  { id: "pop-002", category: "pop", question: "What is Ken's full name?", answer: "Kenneth Sean Carson" },
  { id: "pop-003", category: "pop", question: "What was Mickey Mouse almost named?", answer: "Mortimer Mouse" },
  { id: "pop-004", category: "pop", question: "What is Shaggy's real name in Scooby-Doo?", answer: "Norville Rogers" },
  { id: "pop-005", category: "pop", question: "What is the name of Ross's monkey in Friends?", answer: "Marcel" },
  { id: "pop-006", category: "pop", question: "What is Dwight Schrute's beet farm called?", answer: "Schrute Farms" },
  { id: "pop-007", category: "pop", question: "What Shakespeare play inspired 10 Things I Hate About You?", answer: "The Taming of the Shrew" },
  { id: "pop-008", category: "pop", question: "What Jane Austen novel inspired Clueless?", answer: "Emma" },
  { id: "pop-009", category: "pop", question: "What Shakespeare play inspired She's the Man?", answer: "Twelfth Night" },
  { id: "pop-010", category: "pop", question: "What book inspired Easy A?", answer: "The Scarlet Letter" },
  { id: "pop-011", category: "pop", question: "What is the name of Elle Woods's dog in Legally Blonde?", answer: "Bruiser" },
  { id: "pop-012", category: "pop", question: "What is Elle Woods's sorority in Legally Blonde?", answer: "Delta Nu" },
  { id: "pop-013", category: "pop", question: "What is the name of the hotel in The Suite Life of Zack & Cody?", answer: "The Tipton" },
  { id: "pop-014", category: "pop", question: "What is Voldemort's real name?", answer: "Tom Marvolo Riddle" },
  { id: "pop-015", category: "pop", question: "What is Hermione's cat named?", answer: "Crookshanks" },
  { id: "pop-016", category: "pop", question: "What is Wonder Woman's home island called?", answer: "Themyscira" },
  { id: "pop-017", category: "pop", question: "What is the name of Jasmine's tiger in Aladdin?", answer: "Rajah" },
  { id: "pop-018", category: "pop", question: "What kind of fish is Dory?", answer: "Blue tang" },
  { id: "pop-019", category: "pop", question: "What number is Lightning McQueen in Cars?", answer: "95" },
  { id: "pop-020", category: "pop", question: "What was Mario originally called?", answer: "Jumpman" },
  { id: "pop-021", category: "pop", question: "What language do Sims characters speak?", answer: "Simlish" },
  { id: "pop-022", category: "pop", question: "What is the fictional metal in Black Panther called?", answer: "Vibranium" },
  { id: "pop-023", category: "pop", question: "What is the name of Thor's hammer?", answer: "Mjolnir" },
  { id: "pop-024", category: "pop", question: "What is the name of the rat in Ratatouille?", answer: "Remy" },
  { id: "pop-025", category: "pop", question: "What is the name of WALL-E's robot love interest?", answer: "EVE" },
  { id: "pop-026", category: "pop", question: "What was the first feature-length computer-animated movie?", answer: "Toy Story" },
  { id: "pop-027", category: "pop", question: "What animated movie was the first to be nominated for Best Picture at the Oscars?", answer: "Beauty and the Beast" },
  { id: "pop-028", category: "pop", question: "What movie gave Audrey Hepburn her only Best Actress Oscar?", answer: "Roman Holiday" },
  { id: "pop-029", category: "pop", question: "What Beatles song was originally called \"Scrambled Eggs\"?", answer: "Scrambled Eggs" },
  { id: "pop-030", category: "pop", question: "What Queen song inspired Lady Gaga's stage name?", answer: "Radio Ga Ga" },
  { id: "pop-031", category: "pop", question: "What is Rihanna's real first name?", answer: "Robyn" },
  { id: "pop-032", category: "pop", question: "What is Drake's real first name?", answer: "Aubrey" },
  { id: "pop-033", category: "pop", question: "What is Lorde's real name?", answer: "Ella Yelich-O'Connor" },
  { id: "pop-034", category: "pop", question: "What was Destiny's Child originally called?", answer: "Girl's Tyme" },
  { id: "pop-035", category: "pop", question: "What was Beyoncé's character named in Austin Powers in Goldmember?", answer: "Foxxy Cleopatra" },
  { id: "pop-036", category: "pop", question: "What movie features the fictional African country Zamunda?", answer: "Coming to America" },
  { id: "pop-037", category: "pop", question: "What movie features the fictional country Genovia?", answer: "The Princess Diaries" },
  { id: "pop-038", category: "pop", question: "What is the fictional fashion magazine in The Devil Wears Prada?", answer: "Runway" },
  { id: "pop-039", category: "pop", question: "What is Miranda Priestly's assistant named in The Devil Wears Prada?", answer: "Emily Charlton" },
  { id: "pop-040", category: "pop", question: "What is the fictional town in Gilmore Girls?", answer: "Stars Hollow" },
  { id: "pop-041", category: "pop", question: "What is Lorelai and Rory's favorite diner in Gilmore Girls?", answer: "Luke's Diner" },
  { id: "pop-042", category: "pop", question: "What is Blair Waldorf's housekeeper named in Gossip Girl?", answer: "Dorota" },
  { id: "pop-043", category: "pop", question: "What is the main family in Succession called?", answer: "The Roy family" },
  { id: "pop-044", category: "pop", question: "What is the Roy family company called in Succession?", answer: "Waystar Royco" },
  { id: "pop-045", category: "pop", question: "What is the fictional resort chain in The White Lotus called?", answer: "The White Lotus" },
  { id: "pop-046", category: "pop", question: "What was the original sandwich shop in The Bear called?", answer: "The Original Beef of Chicagoland" },
  { id: "pop-047", category: "pop", question: "What is the fictional town in Stranger Things?", answer: "Hawkins, Indiana" },
  { id: "pop-048", category: "pop", question: "What is the alternate dimension in Stranger Things called?", answer: "The Upside Down" },
  { id: "pop-049", category: "pop", question: "What is the coffee shop in Seinfeld called?", answer: "Monk's Café" },
  { id: "pop-050", category: "pop", question: "What is the bar in How I Met Your Mother called?", answer: "MacLaren's Pub" },
  { id: "pop-051", category: "pop", question: "What is the mother's name in How I Met Your Mother?", answer: "Tracy McConnell" },
  { id: "pop-052", category: "pop", question: "What is the diner in Riverdale called?", answer: "Pop's Chock'lit Shoppe" },
  { id: "pop-053", category: "pop", question: "What is the glee club in Glee called?", answer: "New Directions" },
  { id: "pop-054", category: "pop", question: "What is the school in High School Musical called?", answer: "East High" },
  { id: "pop-055", category: "pop", question: "What is Sharpay Evans's twin brother named?", answer: "Ryan Evans" },
  { id: "pop-056", category: "pop", question: "What was Taylor Swift's debut single?", answer: "Tim McGraw" },
  { id: "pop-057", category: "pop", question: "What Taylor Swift album first won Album of the Year at the Grammys?", answer: "Fearless" },
  { id: "pop-058", category: "pop", question: "What was Ariana Grande's character named on Victorious?", answer: "Cat Valentine" },
  { id: "pop-059", category: "pop", question: "What was Selena Gomez's character named on Wizards of Waverly Place?", answer: "Alex Russo" },
  { id: "pop-060", category: "pop", question: "What was Hannah Montana's real identity?", answer: "Miley Stewart" },
  { id: "pop-061", category: "pop", question: "What was Zendaya's character named on Shake It Up?", answer: "Rocky Blue" },
  { id: "pop-062", category: "pop", question: "What was Olivia Rodrigo's character named in High School Musical: The Musical: The Series?", answer: "Nini Salazar-Roberts" },
  { id: "pop-063", category: "pop", question: "What was Billie Eilish's debut studio album called?", answer: "When We All Fall Asleep, Where Do We Go?" },
  { id: "pop-064", category: "pop", question: "Who is Billie Eilish's brother and main collaborator?", answer: "Finneas" },
  { id: "pop-065", category: "pop", question: "What is Rihanna's beauty brand called?", answer: "Fenty Beauty" },
  { id: "pop-066", category: "pop", question: "What was Kim Kardashian's mobile game called?", answer: "Kim Kardashian: Hollywood" },
  { id: "pop-067", category: "pop", question: "What is Paris Hilton's famous catchphrase?", answer: "That's hot" },
  { id: "pop-068", category: "pop", question: "Who is revealed to be Lady Whistledown in Bridgerton?", answer: "Penelope Featherington" },
  { id: "pop-069", category: "pop", question: "What newspaper does Carrie Bradshaw write for in Sex and the City?", answer: "The New York Star" },
  { id: "pop-070", category: "pop", question: "What designer shoe brand is Carrie Bradshaw famously obsessed with?", answer: "Manolo Blahnik" },
  { id: "pop-071", category: "pop", question: "At what museum is the Met Gala held?", answer: "The Metropolitan Museum of Art" },
  { id: "pop-072", category: "pop", question: "What Vogue editor is famously associated with the Met Gala?", answer: "Anna Wintour" },
  { id: "pop-073", category: "pop", question: "What was the 2019 Met Gala theme?", answer: "Camp: Notes on Fashion" },
  { id: "pop-074", category: "pop", question: "What is Zendaya's character named in Euphoria?", answer: "Rue Bennett" },
  { id: "pop-075", category: "pop", question: "What is the high school in Euphoria called?", answer: "East Highland High School" },
  { id: "pop-076", category: "pop", question: "What was the first city in the Real Housewives franchise?", answer: "Orange County" },
  { id: "pop-077", category: "pop", question: "What restaurant is central to Vanderpump Rules?", answer: "SUR" },
  { id: "pop-078", category: "pop", question: "Who is revealed to be Gossip Girl in Gossip Girl?", answer: "Dan Humphrey" },
  { id: "pop-079", category: "pop", question: "Who tries to make \"fetch\" happen in Mean Girls?", answer: "Gretchen Wieners" },
  { id: "pop-080", category: "pop", question: "Who were the original artists on \"Despacito\"?", answer: "Luis Fonsi and Daddy Yankee" },
  { id: "geo-001", category: "geo", question: "What is the national animal of Scotland?", answer: "unicorn" },
  { id: "geo-002", category: "geo", question: "What country is completely surrounded by South Africa?", answer: "Lesotho" },
  { id: "geo-003", category: "geo", question: "What major city sits on two continents?", answer: "Istanbul" },
  { id: "geo-004", category: "geo", question: "What is the largest desert in the world?", answer: "Antarctica" },
  { id: "geo-005", category: "geo", question: "What is the smallest country in the world?", answer: "Vatican City" },
  { id: "geo-006", category: "geo", question: "What country has the most time zones?", answer: "France" },
  { id: "geo-007", category: "geo", question: "What is the only continent with no native ants?", answer: "Antarctica" },
  { id: "geo-008", category: "geo", question: "What ancient queen lived closer to the Moon landing than to the building of the Great Pyramid?", answer: "Cleopatra" },
  { id: "geo-009", category: "geo", question: "What university is older than the Aztec Empire?", answer: "Oxford University" },
  { id: "geo-010", category: "geo", question: "What was the first animal to orbit Earth?", answer: "Laika the dog" },
  { id: "geo-011", category: "geo", question: "What animal has three hearts?", answer: "octopus" },
  { id: "geo-012", category: "geo", question: "What animal has cube-shaped poop?", answer: "wombat" },
  { id: "geo-013", category: "geo", question: "What is a group of flamingos called?", answer: "flamboyance" },
  { id: "geo-014", category: "geo", question: "What planet has a day longer than its year?", answer: "Venus" },
  { id: "geo-015", category: "geo", question: "What element has atomic number 22?", answer: "Titanium" },
  { id: "geo-016", category: "geo", question: "What is the only letter not in any U.S. state name?", answer: "Q" },
  { id: "geo-017", category: "geo", question: "What is the only U.S. state with a one-syllable name?", answer: "Maine" },
  { id: "geo-018", category: "geo", question: "What U.S. state is both the farthest west and farthest east?", answer: "Alaska" },
  { id: "geo-019", category: "geo", question: "What country gave the Statue of Liberty to the United States?", answer: "France" },
  { id: "geo-020", category: "geo", question: "What is the capital of Australia?", answer: "Canberra" },
  { id: "geo-021", category: "geo", question: "What is the capital of Brazil?", answer: "Brasília" },
  { id: "geo-022", category: "geo", question: "What is the capital of Turkey?", answer: "Ankara" },
  { id: "geo-023", category: "geo", question: "What is the capital of Morocco?", answer: "Rabat" },
  { id: "geo-024", category: "geo", question: "What country is Timbuktu in?", answer: "Mali" },
  { id: "geo-025", category: "geo", question: "What country is Petra in?", answer: "Jordan" },
  { id: "geo-026", category: "geo", question: "What country is Dubrovnik in?", answer: "Croatia" },
  { id: "geo-027", category: "geo", question: "What country is Cusco in?", answer: "Peru" },
  { id: "geo-028", category: "geo", question: "What country is Cartagena in?", answer: "Colombia" },
  { id: "geo-029", category: "geo", question: "What country is Jaipur in?", answer: "India" },
  { id: "geo-030", category: "geo", question: "What country is Salzburg in?", answer: "Austria" },
  { id: "geo-031", category: "geo", question: "What country is Bergen in?", answer: "Norway" },
  { id: "geo-032", category: "geo", question: "What country is Bruges in?", answer: "Belgium" },
  { id: "geo-033", category: "geo", question: "What country is Galway in?", answer: "Ireland" },
  { id: "geo-034", category: "geo", question: "What country is Porto in?", answer: "Portugal" },
  { id: "geo-035", category: "geo", question: "What country is Queenstown in?", answer: "New Zealand" },
  { id: "geo-036", category: "geo", question: "What country is Alexandria in?", answer: "Egypt" },
  { id: "geo-037", category: "geo", question: "What country has the most pyramids?", answer: "Sudan" },
  { id: "geo-038", category: "geo", question: "What modern country is the ancient city of Carthage in?", answer: "Tunisia" },
  { id: "geo-039", category: "geo", question: "What country is Angkor Wat in?", answer: "Cambodia" },
  { id: "geo-040", category: "geo", question: "What country is Chichén Itzá in?", answer: "Mexico" },
  { id: "geo-041", category: "geo", question: "What country are the ruins of Ephesus in?", answer: "Turkey" },
  { id: "geo-042", category: "geo", question: "What country is Mount Kilimanjaro in?", answer: "Tanzania" },
  { id: "geo-043", category: "geo", question: "Lake Titicaca sits on the border of what two countries?", answer: "Peru and Bolivia" },
  { id: "geo-044", category: "geo", question: "What strait separates Spain and Morocco?", answer: "Strait of Gibraltar" },
  { id: "geo-045", category: "geo", question: "What canal connects the Mediterranean Sea to the Red Sea?", answer: "Suez Canal" },
  { id: "geo-046", category: "geo", question: "What canal connects the Atlantic and Pacific Oceans?", answer: "Panama Canal" },
  { id: "geo-047", category: "geo", question: "What sea has no coastline?", answer: "Sargasso Sea" },
  { id: "geo-048", category: "geo", question: "What country has the world's only non-rectangular national flag?", answer: "Nepal" },
  { id: "geo-049", category: "geo", question: "What European country is double-landlocked?", answer: "Liechtenstein" },
  { id: "geo-050", category: "geo", question: "What country was formerly called Ceylon?", answer: "Sri Lanka" },
];

export function getTriviaAtPosition(
  x: number,
  y: number,
  roomBounds: { x: number; y: number; w: number; h: number },
  nonce: number
): TriviaQuestion {
  const cols = 13;
  const rows = 10;
  const length = TRIVIA_QUESTIONS.length;

  if (length === 0) {
    throw new Error("TRIVIA_QUESTIONS is empty");
  }

  const width = roomBounds.w > 0 ? roomBounds.w : 1;
  const height = roomBounds.h > 0 ? roomBounds.h : 1;

  const relX = (x - roomBounds.x) / width;
  const relY = (y - roomBounds.y) / height;

  const normalizedX = Math.max(0, Math.min(0.999999, relX));
  const normalizedY = Math.max(0, Math.min(0.999999, relY));

  const gridX = Math.floor(normalizedX * cols);
  const gridY = Math.floor(normalizedY * rows);

  const baseIndex = gridY * cols + gridX;
  const nonceOffset = ((nonce % length) + length) % length;
  const questionIndex = (baseIndex + nonceOffset) % length;

  return TRIVIA_QUESTIONS[questionIndex];
}
