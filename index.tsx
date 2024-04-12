var messages = [
  "Use the Chat menu to talk to me.",
  "I can only see message chats.",
  ["Hello",
    ["Hi", "Hi there!", "Hi everyone"],
    ["Howdy", "Howdy partner!"],
    ["Greetings", "Greetings everyone", "Greetings Robloxians!", "Seasons greetings!"],
    ["Welcome", "Welcome to my place", "Welcome to our base", "Welcome to my barbeque"],
    "Hey there!",
    ["What's up?", "How are you doing?", "How's it going?", "What's new?"],
    ["Good day", "Good morning", "Good afternoon", "Good evening", "Good night"],
    ["Silly", "Waaaaaaaz up?!", "Hullo!", "Behold greatness, mortals!", "Pardon me, is this Sparta?", "THIS IS SPARTAAAA!"],
    ["Happy Holidays!", "Happy New Year!", "Happy Valentine's Day!", "Beware the Ides of March!", "Happy St. Patrick's Day!", "Happy Easter!", "Happy Earth Day!", "Happy 4th of July!", "Happy Thanksgiving!", "Happy Halloween!", "Happy Hanukkah!", "Merry Christmas!", "Happy Halloween!", "Happy May Day!", "Happy Towel Day!", "Happy ROBLOX Day!", "Happy LOL Day!"]
  ],
  [
    "Goodbye",
    ["Good Night", "Sweet dreams", "Go to sleep!", "Lights out!", "Bedtime", "Going to bed now"],
    ["Later", "See ya later", "Later gator!", "See you tomorrow"],
    ["Bye", "Hasta la bye bye!"],
    "I'll be right back",
    "I have to go",
    ["Farewell", "Take care", "Have a nice day", "Goodluck!", "Ta-ta for now!"],
    ["Peace", "Peace out!", "Peace dudes!", "Rest in pieces!"],
    ["Silly", "To the batcave!", "Over and out!", "Happy trails!", "I've got to book it!", "Tootles!", "Smell you later!", "GG!", "My house is on fire! gtg."]
  ],
  [
    "Friend",
    "Wanna be friends?",
    ["Follow me", "Come to my place!", "Come to my base!", "Follow me, team!", "Follow me"],
    ["Your place is cool", "Your place is fun", "Your place is awesome", "Your place looks good", "This place is awesome!"],
    ["Thank you", "Thanks for playing", "Thanks for visiting", "Thanks for everything", "No, thank you", "Thanx"],
    ["No problem", "Don't worry", "That's ok", "np"],
    ["You are ...", "You are great!", "You are good!", "You are cool!", "You are funny!", "You are silly!", "You are awesome!", "You are doing something I don't like, please stop"],
    ["I like ...", "I like your name", "I like your shirt", "I like your place", "I like your style", "I like you", "I like items", "I like money"],
    ["Sorry", "My bad!", "I'm sorry", "Whoops!", "Please forgive me.", "I forgive you.", "I didn't mean to do that.", "Sorry, I'll stop now."]
  ],
  [
    "Questions",
    ["Who?", "Who wants to be my friend?", "Who wants to be on my team?", "Who made this brilliant game?", "LOLWHO?"],
    ["What?", "What is your favorite animal?", "What is your favorite game?", "What is your favorite movie?", "What is your favorite TV show?", "What is your favorite music?", "What are your hobbies?", "LOLWUT?"],
    ["When?", "When are you online?", "When is the new version coming out?", "When can we play again?", "When will your place be done?"],
    ["Where?", "Where do you want to go?", "Where are you going?", "Where am I?!", "Where did you go?"],
    ["How?", "How are you today?", "How did you make this cool place?", "LOLHOW?"],
    ["Can I...", "Can I have a tour?", "Can I be on your team?", "Can I be your friend?"]
  ],
  [
    "Answers",
    ["You need help?", "Check out the news section", "Check out the help section", "Read the wiki!", "All the answers are in the wiki!", "I will help you with this."],
    ["Some people ...", "Me", "Not me", "You", "All of us", "Everyone but you", "Builderman!", "Telamon!", "My team", "My group", "Mom", "Dad", "Sister", "Brother", "Cousin", "Grandparent", "Friend"],
    ["Time ...", "In the morning", "In the afternoon", "At night", "Tomorrow", "This week", "This month", "Sometime", "Sometimes", "Whenever you want", "Never", "After this", "In 10 minutes", "In a couple of hours", "In a couple of days"],
    ["Animals", ["Cats", "Lion", "Tiger", "Leopard", "Cheetah"],
      ["Dogs", "Wolves", "Beagle", "Collie", "Dalmatian", "Poodle", "Spaniel", "Shepherd", "Terrier", "Retriever"],
      ["Horses", "Ponies", "Stallions", "Pwnyz"],
      ["Reptiles", "Dinosaurs", "Lizards", "Snakes", "Turtles!"],
      "Hamster",
      "Monkey",
      "Bears",
      ["Fish", "Goldfish", "Sharks", "Sea Bass", "Halibut", "Tropical Fish"],
      ["Birds", "Eagles", "Penguins", "Parakeets", "Owls", "Hawks", "Pigeons"],
      "Elephants",
      ["Mythical Beasts", "Dragons", "Unicorns", "Sea Serpents", "Sphinx", "Cyclops", "Minotaurs", "Goblins", "Honest Politicians", "Ghosts", "Scylla and Charybdis"]
    ],
    ["Games",
      ["Roblox", "BrickBattle", "Community Building", "Roblox Minigames", "Contest Place",],
      "Action",
      "Puzzle",
      "Strategy",
      "Racing",
      "RPG",
      "Obstacle Course",
      "Tycoon",
      ["Board games", "Chess", "Checkers", "Settlers of Catan", "Tigris and Euphrates", "El Grande", "Stratego", "Carcassonne"]
    ],
    [
      "Sports",
      "Hockey",
      "Soccer",
      "Football",
      "Baseball",
      "Basketball",
      "Volleyball",
      "Tennis",
      "Sports team practice",
      ["Watersports", "Surfing", "Swimming", "Water Polo"],
      ["Winter sports", "Skiing", "Snowboarding", "Sledding", "Skating"],
      ["Adventure", "Rock climbing", "Hiking", "Fishing", "Horseback riding"],
      ["Wacky", "Foosball", "Calvinball", "Croquet", "Cricket", "Dodgeball", "Squash", "Trampoline"]
    ],
    ["Movies/TV", "Science Fiction", "Animated", "Comedy", "Romantic", "Action", "Fantasy"],
    ["Music", "Country", "Jazz", "Rap", "Hip-hop", "Techno", "Classical", "Pop", "Rock"],
    [
      "Hobbies",
      ["Computers", "Building computers", "Videogames", "Coding", "Hacking"],
      ["The Internet", "lol. teh internets!", "Watching vids"],
      "Dance",
      "Gynastics",
      ["Martial Arts", "Karate", "Judo", "Taikwon Do", "Wushu", "Street fighting"],
      "Listening to music",
      ["Music lessons", "Playing in my band", "Playing piano", "Playing guitar", "Playing violin", "Playing drums", "Playing a weird instrument"],
      "Arts and crafts"
    ],
    [
      "Location",
      [
        "USA",
        [
          "West",
          "Alaska",
          "Arizona",
          "California",
          "Colorado",
          "Hawaii",
          "Idaho",
          "Montana",
          "Nevada",
          "New Mexico",
          "Oregon",
          "Utah",
          "Washington",
          "Wyoming"
        ],
        [
          "Midwest",
          "Illinois",
          "Indiana",
          "Iowa",
          "Kansas",
          "Michigan",
          "Minnesota",
          "Missouri",
          "Nebraska",
          "North Dakota",
          "Ohio",
          "South Dakota",
          "Wisconsin"
        ],
        [
          "Northeast",
          "Connecticut",
          "Delaware",
          "Maine",
          "Maryland",
          "Massachusetts",
          "New Hampshire",
          "New Jersey",
          "New York",
          "Pennsylvania",
          "Rhode Island",
          "Vermont"
        ],
        [
          "South",
          "Alabama",
          "Arkansas",
          "Florida",
          "Georgia",
          "Kentucky",
          "Louisiana",
          "Mississippi",
          "North Carolina",
          "Oklahoma",
          "South Carolina",
          "Tennessee",
          "Texas",
          "Virginia",
          "West Virginia"
        ]
      ],
      "Canada",
      [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon"
      ],
      "Mexico",
      "Central America",
      [
        "Europe",
        "Great Britain",
        "England",
        "Scotland",
        "Wales",
        "Northern Ireland",
        "France",
        "Germany",
        "Spain",
        "Italy",
        "Poland",
        "Switzerland",
        "Greece",
        "Romania",
        "Netherlands"
      ],
      [
        "Asia",
        "China",
        "India",
        "Japan",
        "Korea",
        "Russia",
        "Vietnam"
      ],
      [
        "South America",
        "Argentina",
        "Brazil"
      ],
      [
        "Africa",
        "Eygpt",
        "Swaziland"
      ],
      "Australia",
      "Middle East",
      "Antarctica",
      "New Zealand"
    ],
    [
      "Age", "Rugrat", "Kid", "Tween", "Teen", "Twenties", "Old", "Ancient", "Mesozoic", "I don't want to say my age. Don't ask."
    ],
    [
      "Mood", "Good", "Great!", "Not bad", "Sad", "Hyper", "Chill", "Happy", "Kind of mad"
    ],
    "Boy",
    "Girl",
    "I don't want to say boy or girl. Don't ask."
  ],
  [
    "Game",
    "Let's build",
    "Let's battle",
    "Nice one!",
    "So far so good!",
    "Lucky shot!",
    "Oh man!",
    "I challenge you to a fight!",
    "Help me with this",
    "Let's go to your game",
    "Can you show me how to do that?",
    "Backflip!",
    "Frontflip!",
    "Dance!",
    "I'm on your side!",
    [
      "Game Commands",
      "regen",
      "reset",
      "go",
      "fix",
      "respawn"
    ]
  ],
  [
    "Silly",
    "Muahahahaha!",
    "all your base are belong to me!",
    "GET OFF MAH LAWN",
    "TEH EPIK DUCK IS COMING!!!",
    "ROFL",
    [
      "1337",
      "i r teh pwnz0r!",
      "w00t!",
      "z0mg h4x!",
      "ub3rR0xXorzage!",
    ]
  ],
  [
    "Yes",
    "Absolutely!",
    "Rock on!",
    "Totally!",
    "Juice!",
    "Yay!",
    "Yesh",
    "Indeed"
  ],
  [
    "No",
    "Ummm. No.",
    "...",
    "Stop!",
    "Go away!",
    "Don't do that",
    "Stop breaking the rules",
    "I don't want to",
    "I decline!"
  ],
  [
    "Ok",
    "Well... ok",
    "Sure"
  ],
  [
    "Uncertain",
    "Maybe",
    "I don't know",
    "idk",
    "I can't decide",
    "Hmm..."
  ],
  [
    ":-)",
    ":-(",
    ":D",
    ":-O",
    "lol",
    "=D",
    "D=",
    "XD",
    ";D",
    ";)",
    "O_O",
    "=)",
    "@_@",
    ">_<",
    "T_T",
    "^_^",
    "<(0_0<) <(0_0)> (>0_0)> KIRBY DANCE",
    ")';",
    ":3",
  ],
  [
    "Ratings",
    "Rate it!",
    "I give it a 0 out of 10",
    "I give it a 1 out of 10",
    "I give it a 2 out of 10",
    "I give it a 3 out of 10",
    "I give it a 4 out of 10",
    "I give it a 5 out of 10",
    "I give it a 6 out of 10",
    "I give it a 7 out of 10",
    "I give it a 8 out of 10",
    "I give it a 9 out of 10",
    "I give it a 10 out of 10!"
  ]
] as (string | string[])[];

import { addContextMenuPatch, findGroupChildrenByChildId, NavContextMenuPatchCallback, removeContextMenuPatch } from "@api/ContextMenu";
import definePlugin from "@utils/types";
import { Menu, PermissionsBits, PermissionStore } from "@webpack/common";
import { settings } from "./settings";
import { findByPropsLazy, findStoreLazy } from "@webpack";
const OptionClasses = findByPropsLazy("optionName", "optionIcon", "optionLabel");

const createMenuItems = (items: (string | string[])[]) => {
  return items.map((item, index) => {
    if (Array.isArray(item)) {
      const [category, ...subItems] = item;

      const categoryMenuItem = (
        <Menu.MenuItem
          key={index.toString()}
          id={category}
          label={category}
        >
          {createMenuItems(subItems)}
        </Menu.MenuItem>
      );

      //Checks if authentic display is off, then makes a starting button, so it can be selectable.
      if (!settings.store.authenticDisplay) {
        const selectableItemMenuItem = (
          <Menu.MenuItem
            key={`${index}-selectable`}
            id={`${category}-selectable`}
            label={category}
            action={() => sendSafechatMessage(category)}
          />
        );

        //Adds the message at the start of the array.
        categoryMenuItem.props.children.unshift(selectableItemMenuItem);
      }

      return categoryMenuItem;
    } else {
      return (
        <Menu.MenuItem
          key={index.toString()}
          id={item}
          label={item}
          action={() => sendSafechatMessage(item)}
        />
      );
    }
  });
};


//Patches so you can do safechat from right clicking messages, and from the navigation button.
const messagePatch: NavContextMenuPatchCallback = (children, { message }) => {
  if (!message.content) return;
  let safechatIcon = settings.store.safechatIcon

  if (safechatIcon == null || safechatIcon == "") {
    children.push(
      <Menu.MenuItem
        id="SafechatMenu"
        label="Safechat"
      >
        {createMenuItems(messages)}
      </Menu.MenuItem>
    );
  } else {
    children.push(
      <Menu.MenuItem
        id="SafechatMenu"
        label={
          <div className={OptionClasses.optionLabel}>
            <img src={safechatIcon} height='24px' width='24px'></img>
            <div className={OptionClasses.optionName}>Safechat</div>
          </div>
        }
      >
        {createMenuItems(messages)}
      </Menu.MenuItem>
    );
  }
};

const navigationPatch: NavContextMenuPatchCallback = (children, props) => {
  let safechatIcon = settings.store.safechatIcon
  if (safechatIcon == null || safechatIcon == "") {
    children.push(
      <Menu.MenuItem
        id="SafechatMenu"
        label="Safechat"
      >
        {createMenuItems(messages)}
      </Menu.MenuItem>
    );
  } else {
    children.push(
      <Menu.MenuItem
        id="SafechatMenu"
        label={
          <div className={OptionClasses.optionLabel}>
            <img src={safechatIcon} height='24px' width='24px'></img>
            <div className={OptionClasses.optionName}>Safechat</div>
          </div>
        }
      >
        {createMenuItems(messages)}
      </Menu.MenuItem>
    );
  }
};

export default definePlugin({
  name: "Roblox Safechat",
  description: "Allows you to send roblox's safechat texts, from the navigation menu or the message's right click menu.",
  settings,
  authors: [
    {
      id: 483056015890186263n,
      name: "Tiny Games",
    },
  ],
  start() {
    addContextMenuPatch(["channel-attach"], navigationPatch);
    addContextMenuPatch(["message"], messagePatch);
  },

  stop() {
    removeContextMenuPatch(["channel-attach"], navigationPatch);
    removeContextMenuPatch(["message"], messagePatch);
  }
});

//Sends the selected safechat message, to the channel.
async function sendSafechatMessage(text) {
  const currentChannel = Vencord.Webpack.findByProps('getCurrentlySelectedChannelId').getCurrentlySelectedChannelId()
  Vencord.Webpack.findByProps('_sendMessage').sendMessage(currentChannel, { content: text, invalidEmojis: [], validNonShortcutEmojis: [] })
}