const QuizzData = [
  {
    category: 'Counter Strike 2',
    question:
      'Which weapon is commonly used for long-range combat in Counter-Strike 2?',
    answers: [
      {
        text: 'AK-47',
        correct: false,
      },
      {
        text: 'AWP',
        correct: true,
      },
      {
        text: 'M4A4',
        correct: false,
      },
      {
        text: 'P90',
        correct: false,
      },
    ],
  },
  {
    category: 'Counter Strike 2',
    question:
      'Which map is known for its tight corridors and close-quarters combat in Counter-Strike 2?',
    answers: [
      {
        text: 'Dust II',
        correct: false,
      },
      {
        text: 'Mirage',
        correct: false,
      },
      {
        text: 'Nuke',
        correct: false,
      },
      {
        text: 'Inferno',
        correct: true,
      },
    ],
  },
  {
    category: 'Counter Strike 2',
    question:
      'What is the objective of the Terrorist team in Counter-Strike 2?',
    answers: [
      {
        text: 'Defuse the bomb',
        correct: false,
      },
      {
        text: 'Plant the bomb',
        correct: true,
      },
      {
        text: 'Rescue hostages',
        correct: false,
      },
      {
        text: 'Prevent the bomb from exploding',
        correct: false,
      },
    ],
  },
  {
    category: 'Counter Strike 2',
    question: 'Which Counter-Strike 2 map is set in a snowy environment?',
    answers: [
      {
        text: 'Dust II',
        correct: false,
      },
      {
        text: 'Mirage',
        correct: false,
      },
      {
        text: 'Nuke',
        correct: false,
      },
      {
        text: 'Train',
        correct: true,
      },
    ],
  },
  {
    category: 'Valorant',
    question: 'Which agent has the ability to heal allies in Valorant?',
    answers: [
      {
        text: 'Jett',
        correct: false,
      },
      {
        text: 'Sage',
        correct: true,
      },
      {
        text: 'Reyna',
        correct: false,
      },
      {
        text: 'Phoenix',
        correct: false,
      },
    ],
  },
  {
    category: 'Valorant',
    question:
      'Which weapon is known for its one-shot headshot potential in Valorant?',
    answers: [
      {
        text: 'Vandal',
        correct: true,
      },
      {
        text: 'Phantom',
        correct: false,
      },
      {
        text: 'Spectre',
        correct: false,
      },
      {
        text: 'Bulldog',
        correct: false,
      },
    ],
  },
  {
    category: 'Valorant',
    question: 'Which agent can create a wall of ice in Valorant?',
    answers: [
      {
        text: 'Cypher',
        correct: false,
      },
      {
        text: 'Sage',
        correct: true,
      },
      {
        text: 'Viper',
        correct: false,
      },
      {
        text: 'Killjoy',
        correct: false,
      },
    ],
  },
  {
    category: 'Valorant',
    question:
      'Which agent has the ultimate ability called "Showstopper" in Valorant?',
    answers: [
      {
        text: 'Raze',
        correct: true,
      },
      {
        text: 'Brimstone',
        correct: false,
      },
      {
        text: 'Omen',
        correct: false,
      },
      {
        text: 'Sova',
        correct: false,
      },
    ],
  },
  {
    category: 'League of Legends',
    question:
      'Which champion is known as the "Grand Duelist" in League of Legends?',
    answers: [
      {
        text: 'Fiora',
        correct: true,
      },
      {
        text: 'Darius',
        correct: false,
      },
      {
        text: 'Yasuo',
        correct: false,
      },
      {
        text: 'Garen',
        correct: false,
      },
    ],
  },
  {
    category: 'League of Legends',
    question:
      'What is the name of the League of Legends game mode where players race to destroy the enemy Nexus as fast as possible?',
    answers: [
      {
        text: "Summoner's Rift",
        correct: false,
      },
      {
        text: 'ARAM',
        correct: false,
      },
      {
        text: 'Nexus Blitz',
        correct: true,
      },
      {
        text: 'Twisted Treeline',
        correct: false,
      },
    ],
  },
  {
    category: 'League of Legends',
    question:
      'Which League of Legends champion has the passive ability "Rebirth"?',
    answers: [
      {
        text: 'Anivia',
        correct: true,
      },
      {
        text: 'Zilean',
        correct: false,
      },
      {
        text: 'Kayle',
        correct: false,
      },
      {
        text: 'Tryndamere',
        correct: false,
      },
    ],
  },
  {
    category: 'League of Legends',
    question:
      'Which League of Legends champion has the ultimate ability "Elder Dragon Form"?',
    answers: [
      {
        text: 'Shyvana',
        correct: true,
      },
      {
        text: 'Nidalee',
        correct: false,
      },
      {
        text: 'Elise',
        correct: false,
      },
      {
        text: 'Rengar',
        correct: false,
      },
    ],
  },
  {
    category: 'Genshin Impact',
    question:
      'Which element is associated with the character Diluc in Genshin Impact?',
    answers: [
      {
        text: 'Pyro',
        correct: true,
      },
      {
        text: 'Electro',
        correct: false,
      },
      {
        text: 'Geo',
        correct: false,
      },
      {
        text: 'Anemo',
        correct: false,
      },
    ],
  },
  {
    category: 'Genshin Impact',
    question:
      'What is the name of the region where the game primarily takes place in Genshin Impact?',
    answers: [
      {
        text: 'Mondstadt',
        correct: false,
      },
      {
        text: 'Liyue',
        correct: true,
      },
      {
        text: 'Inazuma',
        correct: false,
      },
      {
        text: 'Snezhnaya',
        correct: false,
      },
    ],
  },
  {
    category: 'Genshin Impact',
    question:
      'Which character in Genshin Impact has the ability "Elemental Burst: Starshatter"?',
    answers: [
      {
        text: 'Ningguang',
        correct: true,
      },
      {
        text: 'Beidou',
        correct: false,
      },
      {
        text: 'Xiangling',
        correct: false,
      },
      {
        text: 'Fischl',
        correct: false,
      },
    ],
  },
  {
    category: 'Genshin Impact',
    question:
      'Which element is not present among the seven elemental powers in Genshin Impact?',
    answers: [
      {
        text: 'Hydro',
        correct: false,
      },
      {
        text: 'Cryo',
        correct: false,
      },
      {
        text: 'Pyro',
        correct: false,
      },
      {
        text: 'Nature',
        correct: true,
      },
    ],
  },
  {
    category: 'Genshin Impact',
    question:
      'Which of the following characters cannot perform a plunge attack?',
    answers: [
      {
        text: 'Diluc',
        correct: true,
      },
      {
        text: 'Venti',
        correct: false,
      },
      {
        text: 'Klee',
        correct: false,
      },
      {
        text: 'Childe (Tartaglia)',
        correct: false,
      },
    ],
  },
  {
    category: 'Genshin Impact',
    question:
      'What is the maximum Adventure Rank attainable in Genshin Impact as of Version 2.4?',
    answers: [
      {
        text: '60',
        correct: false,
      },
      {
        text: '70',
        correct: false,
      },
      {
        text: '80',
        correct: false,
      },
      {
        text: '90',
        correct: true,
      },
    ],
  },
  {
    category: 'Genshin Impact',
    question:
      'Which region is known as the "Land of the Immortals" in Genshin Impact lore?',
    answers: [
      {
        text: 'Mondstadt',
        correct: false,
      },
      {
        text: 'Liyue',
        correct: true,
      },
      {
        text: 'Inazuma',
        correct: false,
      },
      {
        text: 'Snezhnaya',
        correct: false,
      },
    ],
  },
  {
    category: 'Genshin Impact',
    question:
      'Which of the following domains has the highest recommended level requirement?',
    answers: [
      {
        text: 'Hidden Palace of Zhou Formula',
        correct: true,
      },
      {
        text: 'Peak of Vindagnyr',
        correct: false,
      },
      {
        text: 'Momiji-Dyed Court',
        correct: false,
      },
      {
        text: 'Taishan Mansion',
        correct: false,
      },
    ],
  },
  {
    category: 'Dota 2',
    question: 'Which hero has the ability "Chronosphere" in Dota 2?',
    answers: [
      {
        text: 'Anti-Mage',
        correct: false,
      },
      {
        text: 'Invoker',
        correct: false,
      },
      {
        text: 'Faceless Void',
        correct: true,
      },
      {
        text: 'Juggernaut',
        correct: false,
      },
    ],
  },
  {
    category: 'Dota 2',
    question:
      'What is the name of the item that grants invisibility and bonus damage to the wearer?',
    answers: [
      {
        text: 'Black King Bar',
        correct: false,
      },
      {
        text: 'Ethereal Blade',
        correct: false,
      },
      {
        text: 'Shadow Blade',
        correct: true,
      },
      {
        text: 'Desolator',
        correct: false,
      },
    ],
  },
  {
    category: 'Dota 2',
    question: 'Which hero has the highest base strength at level 1?',
    answers: [
      {
        text: 'Tiny',
        correct: false,
      },
      {
        text: 'Axe',
        correct: false,
      },
      {
        text: 'Centaur Warrunner',
        correct: true,
      },
      {
        text: 'Sven',
        correct: false,
      },
    ],
  },
  {
    category: 'Dota 2',
    question:
      'What is the maximum number of charges Rubick can steal with his ultimate "Spell Steal"?',
    answers: [
      {
        text: '2',
        correct: false,
      },
      {
        text: '3',
        correct: false,
      },
      {
        text: '4',
        correct: true,
      },
      {
        text: '5',
        correct: false,
      },
    ],
  },
  {
    category: 'Dota 2',
    question: 'Which hero has the ultimate ability "Black Hole"?',
    answers: [
      {
        text: 'Enigma',
        correct: true,
      },
      {
        text: 'Dark Seer',
        correct: false,
      },
      {
        text: 'Shadow Fiend',
        correct: false,
      },
      {
        text: 'Lich',
        correct: false,
      },
    ],
  },
  {
    category: 'Dota 2',
    question:
      'Which item provides a passive ability that grants a chance to evade attacks?',
    answers: [
      {
        text: 'Monkey King Bar',
        correct: false,
      },
      {
        text: 'Butterfly',
        correct: true,
      },
      {
        text: 'Daedalus',
        correct: false,
      },
      {
        text: 'Silver Edge',
        correct: false,
      },
    ],
  },
  {
    category: 'Dota 2',
    question:
      'What is the name of the terrain feature that blocks vision and movement in Dota 2?',
    answers: [
      {
        text: 'Obelisk',
        correct: false,
      },
      {
        text: 'Shrine',
        correct: false,
      },
      {
        text: 'Barracks',
        correct: false,
      },
      {
        text: 'Ramp',
        correct: true,
      },
    ],
  },
  {
    category: 'Dota 2',
    question: 'Which hero has the ability "Requiem of Souls" in Dota 2?',
    answers: [
      {
        text: 'Shadow Fiend',
        correct: true,
      },
      {
        text: 'Death Prophet',
        correct: false,
      },
      {
        text: 'Necrophos',
        correct: false,
      },
      {
        text: 'Lina',
        correct: false,
      },
    ],
  },
  {
    category: 'Fortnite',
    question: 'Which location in Fortnite is known for its giant llama statue?',
    answers: [
      {
        text: 'Pleasant Park',
        correct: false,
      },
      {
        text: 'Retail Row',
        correct: false,
      },
      {
        text: 'Salty Springs',
        correct: false,
      },
      {
        text: 'Loot Lake',
        correct: true,
      },
    ],
  },
  {
    category: 'Fortnite',
    question:
      'What is the name of the in-game currency used to purchase items from the Item Shop in Fortnite?',
    answers: [
      {
        text: 'V-Bucks',
        correct: true,
      },
      {
        text: 'Battle Stars',
        correct: false,
      },
      {
        text: 'Gold Bars',
        correct: false,
      },
      {
        text: 'Credits',
        correct: false,
      },
    ],
  },
  {
    category: 'Fortnite',
    question:
      'Which of the following weapons has the highest rarity in Fortnite?',
    answers: [
      {
        text: 'Pistol',
        correct: false,
      },
      {
        text: 'Assault Rifle',
        correct: false,
      },
      {
        text: 'Rocket Launcher',
        correct: true,
      },
      {
        text: 'Submachine Gun',
        correct: false,
      },
    ],
  },
  {
    category: 'Fortnite',
    question:
      'What is the name of the seasonal event that introduces new content and gameplay changes in Fortnite?',
    answers: [
      {
        text: 'Battle Pass',
        correct: false,
      },
      {
        text: 'Fortnite Live',
        correct: false,
      },
      {
        text: 'Fortnite Fest',
        correct: false,
      },
      {
        text: 'Fortnite Chapter',
        correct: true,
      },
    ],
  },
  {
    category: 'Fortnite',
    question:
      'Which of the following items can be used to build structures in Fortnite?',
    answers: [
      {
        text: 'Medkit',
        correct: false,
      },
      {
        text: 'Shield Potion',
        correct: false,
      },
      {
        text: 'Bandages',
        correct: false,
      },
      {
        text: 'Wood',
        correct: true,
      },
    ],
  },
  {
    category: 'Fortnite',
    question:
      'What is the name of the island where players battle against each other in Fortnite?',
    answers: [
      {
        text: 'Battle Island',
        correct: false,
      },
      {
        text: 'Combat Island',
        correct: false,
      },
      {
        text: 'Battle Royale Island',
        correct: true,
      },
      {
        text: 'Fight Island',
        correct: false,
      },
    ],
  },
  {
    category: 'Fortnite',
    question: 'Which of the following is not a playable game mode in Fortnite?',
    answers: [
      {
        text: 'Solo',
        correct: false,
      },
      {
        text: 'Duo',
        correct: false,
      },
      {
        text: 'Squad',
        correct: false,
      },
      {
        text: 'Capture the Flag',
        correct: true,
      },
    ],
  },
  {
    category: 'Fortnite',
    question: 'What is the name of the main antagonist in Fortnite?',
    answers: [
      {
        text: 'The Visitor',
        correct: false,
      },
      {
        text: 'The Foundation',
        correct: false,
      },
      {
        text: 'The Scientist',
        correct: false,
      },
      {
        text: 'The Imagined Order',
        correct: true,
      },
    ],
  },
];

export default QuizzData;
