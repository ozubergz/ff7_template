const characters = [
  {
      id: 1,
      name: "Cloud Strife",
      japanese: "クラウド・ストライフ",
      age: 21,
      birthday: "August 11th",
      occupation: "Mercernary",
      weapon: "Swords",
      image: "https://ff7characters.s3.amazonaws.com/cloud_strife.png",
      summary: "An arrogant and proud swordsman at first, Cloud introduces himself to AVALANCHE as a former member of an elite warrior unit called SOLDIER who has turned mercenary, and uninterested in anything beyond his hired task at hand. He later discovers more about his past and, with the help of his friends, learns there is more to being a hero than possessing physical strength and fame, developing compassion for the Planet and people he fights to protect. He fights to protect the Planet against his nemesis, Sephiroth."
  },
  {
      id: 2,
      name: "Barret Wallace",
      japanese: "バレット・ウォーレス",
      age: 37,
      birthday: "December 15th",
      occupation: "Leader of Avalanche",
      weapon: "Gun-arms",
      image: "https://ff7characters.s3.amazonaws.com/barret_wallace.png",
      summary: "Barret fights passionately for his cause and cares greatly for his allies. His seemingly benevolent cause of fighting for the Planet is a cover for his personal vendetta and anger, which he later must come to terms with. Despite his brash and sometimes violent attitude, Barret has a good heart, and is torn between fighting and caring for his daughter, Marlene."   
  },
  {
      id: 3,
      name: "Tifa Lockhart",
      japanese: "ティファ・ロックハート",
      age: 20,
      birthday: "May 30rd",
      occupation: "Bartender",
      weapon: "Knuckles",
      image: "https://ff7characters.s3.amazonaws.com/tifa_lockhart.png",
      summary: "Tifa is Cloud's childhood friend from Nibelheim, but lost contact with him years ago. When she meets him again, she convinces him to join AVALANCHE, the resistance group she is a member of, to fight Shinra Electric Power Company, whom she bears hatred for due to the destruction of their hometown. She supports Cloud as his comrade and helps him and his allies fight Sephiroth. Tifa is emotionally shy and empathic, acting as a motherly figure towards her allies when providing encouragement and emotional support."   
  },
  {
      id: 4,
      name: "Aerith Gainsborough",
      japanese: "エアリス・ゲインズブール",
      age: 22,
      birthday: "February 7th",
      occupation: "Flower seller",
      weapon: "Staves",
      image: "https://ff7characters.s3.amazonaws.com/aerith_gainsborough.png",
      summary: "Aerith is the last of the Cetra, an ancient race with powerful magical abilities, and so the Shinra Electric Power Company hunts her throughout her life, seeking to exploit her powers. She meets Cloud Strife in Midgar, and the two become close, leading her to join his quest to fight Shinra and hunt down Sephiroth. Aerith is upbeat, carefree and joyful, being flirtatious towards Cloud and also compassionate towards others."   
  },
  {
      id: 5,
      name: "Red XIII",
      japanese: "レッドXIII",
      age: 48,
      birthday: "Unknown",
      occupation: "Research specimen",
      weapon: "Headdresses",
      image: "https://ff7characters.s3.amazonaws.com/red_XIII.png",
      summary: "Red XIII is thenamehe received as a specimen designation while held captive and experimented upon by Professor Hojo, and remains thenamehe is called by the party and in battle in Final Fantasy VII. Although he is 48 years old, he is developmentally equivalent to a 15- or 16-year-old human by his long-lived species' standards. He fights alongside Cloud Strife and his allies to fulfill his duty to the Planet to defend it as a warrior."
  },    {
      id:6,
      name:"Biggs",
      japanese: "ビックス",
      age: "Unknown",
      bithday: "Unknown",
      occuation: "Member of Avalanche",
      weapon: "Gun",
      image: "https://ff7characters.s3.amazonaws.com/biggs.png",
      summary: "Biggs is a member of the resistance group called AVALANCHE, which is run by Barret Wallace. He often has to intervene when things start to get out of hand and is essentially the glue that holds the operation together, even if he does come off worse for it."
  },
  {
      id: 7,
      name: "Jessie Rasberry",
      japanese: "ジェシー",
      age: "Unknown",
      birthday: "Unknown",
      occupation: "Member of Avalanche",
      weapon: "Gun",
      image: "https://ff7characters.s3.amazonaws.com/jessie.png",
      summary: "Jessie is a member of the rejuvenated resistance group called AVALANCHE. She, along with Biggs and Wedge make up the core of the team, which is run by Barret Wallace. She is the resident technician and is in charge of demolitions and wants to use her skills for the good of the planet."   
  },
  {
      id: 8,
      name: "Wedge",
      japanese: "ウェッジ",
      age: "Unknown",
      birthday: "Unknown",
      occupation: "Member of Avalanche",
      weapon: "Gun",
      image: "https://ff7characters.s3.amazonaws.com/wedge.png",
      summary: "Wedge isn't exactly what you'd expect from a typical resistance member, but he is part of AVALANCHE anyway. He is really shy and pretty chubby, but he provides a good dynamic within the team, even if it's through is incessant whining."   
  },
  {
      id: 9,
      name: "Sephiroth",
      japanese: "セフィロス",
      age: 27,
      birthday: "Unknown",
      occupation: "Soldier 1st Class",
      weapon: "Masamune",
      image: "https://ff7characters.s3.amazonaws.com/sephiroth.png",
      summary: "Before his fall from grace, Sephiroth was one of the most lauded success stories of the Shinra Electric Power Company's SOLDIER program. His successes in the field of battle during the conflicts surrounding Shinra's bid for global domination led to his status as a celebrity war hero and the poster boy for both the Shinra Military and the company's SOLDIER program. Learning of his true origins drove him insane, causing him to be driven by a desire to destroy the world."   
  },
  {
      id: 10,
      name: "President Shinra",
      japanese: "プレジデント神羅",
      age: "Unknown",
      birthday: "Unknown",
      occupation: "President of Shinra",
      weapon: "none",
      image: "https://ff7characters.s3.amazonaws.com/president_shinra.png",
      summary: "President Shinra is an overly ambitious, greedy man, stopping at nothing to gain more money and power. Both callous and ruthless, President Shinra is unfazed at disposing anyone who might oppose him and his company. As the de facto ruler of the world he exercises his power with impunity. His lifelong dream is to build Neo Midgar in the Promised Land, a place he believes is fertile with Mako energy. His only soft spot appears to be his son, Rufus, whose traitorous behavior he forgives. Even his passkey at the Shinra Building is his son's birthday."   
  },
  {
      id: 11,
      name: "Rufus Shinra",
      japanese: "ルーファウス神羅",
      age: 25,
      birthday: "Unknown",
      occupation: "Vice President of Shinra",
      weapon: "Gun",
      image: "https://ff7characters.s3.amazonaws.com/rufus_shinra.png",
      summary: "Rufus Shinra is the vice president of the Shinra Electric Power Company. He most likely gained the title for being President Shinra's son."   
  },
  {
      id: 12,
      name: "Heidegger",
      japanese: "ハイデッカー",
      age: "Unknown",
      birthday: "Unknown",
      occupation: "Head of Public Safety",
      weapon: "none",
      image: "https://ff7characters.s3.amazonaws.com/heidegger.png",
      summary: "Heidegger is Shinra's highest ranking official and he is the head of Public Safety aka The Military. Because of this, he is often seen working alongside Scarlet, who is the head of Weapons Development."   
  },
  {
      id: 13,
      name: "Reno",
      japanese: "レノ",
      age: "Unknown",
      birthday: "Unknown",
      occupation: "Turk",
      weapon: "Baton",
      image: "https://ff7characters.s3.amazonaws.com/reno.png",
      summary: "Reno is a Turk. He's cocky, cynical, somewhat lazy, and can be friendly. Reno also has a penchant for gossiping. Despite his appearance and attitude, he is regarded as a prominent worker; while second in command, he takes his job with pride and obtains skills that allow him to surpass many of his fellow Turks. He has a rebellious temperament and his actions can be sadistic, contrasting his laid back personality."   
  },
  {
      id: 14,
      name: "Rude",
      japanese: "ルード",
      age: "Unknown",
      birthday: "Unknown",
      occupation: "Turk",
      weapon: "knuckles",
      image: "https://ff7characters.s3.amazonaws.com/rude.png",
      summary: "Rude has a soft spot for Tifa Lockhart, and will not attack her if she battles him. In one of his rare lines of dialogue in Final Fantasy VII, he reveals to Reno he has a crush on her."   
  },
  {
      id: 15,
      name: "Tseng",
      japanese: "ツォン",
      age: "Unknown",
      birthday: "Unknown",
      occupation: "Leader of the Turks",
      weapon: "none",
      image: "https://ff7characters.s3.amazonaws.com/tseng.png",
      summary: "Tseng is stern, no-nonsense, and sometimes temperamental. He has known Aerith Gainsborough since she was a child and has special feelings for her, thus never completing his long-delayed mission to bring her to the Shinra Electric Power Company. In spite of several instances of ruthlessness (such as striking Aeris as she was trying to assure Barret and Tifa that Marlene was safe), he is devoted to his associates and friends, as he sent out the Turks to save Zack and Cloud before the Shinra Army could catch up with them, a failure which torments him throughout the Compilation."   
  },
  {
      id: 16,
      name: "Reeve Tuesti",
      japanese: "リーブ・トゥエスティ",
      age: "35",
      birthday: "Unknown",
      occupation: "Head of Urban Development",
      weapon: "none",
      image: "https://ff7characters.s3.amazonaws.com/reeve_tuesti.png",
      summary: "Reeve is in charge of Urban Development at Shinra and he is first seen as the Shinra executives are discussing the destruction of Sector 7. Unlike the others, Reeve seems to be against the plans and questions why the destruction of an entire district is necessary to quash the actions of a small group."   
  },
  {
      id: 17,
      name: "Palmer",
      japanese: "パルマー",
      age: "Unknown",
      birthday: "Unknown",
      occupation: "Head of the Space Program",
      weapon: "none",
      image: "https://ff7characters.s3.amazonaws.com/palmer.png",
      summary: "Palmer is the head of Shinra Electric Power Company's failed Space Program in Final Fantasy VII. He continues to act as an executive at the Shinra Company, even if his department is mostly defunct. Palmer is sycophantic toward the company president and generally viewed as incompetent at his job."   
  },
  {
      id: 18,
      name: "Professor Hojo",
      japanese: "宝条",
      age: "Uknown",
      birthday: "Uknown",
      occupation: "Head of Shin-Ra's Science & Research Division",
      weapon: "none",
      image: "https://ff7characters.s3.amazonaws.com/professor_hojo.png",
      summary: "Hojo is the main mastermind behind SOLDIER and the Jenova Project, and initially heads the Shinra Electric Power Company's Science Research Division. However, Hojo's goals stand apart from Shinra's, with a focus on scientific pursuits and monitoring the actions of his greatest creation, Sephiroth. Hojo's actions with SOLDIER and Jenova connect him to most of the major antagonists of the Compilation."   
  },
  {
      id: 19,
      name: "Scarlet",
      japanese: "スカーレット",
      age: "Unknown",
      birthday: "Uknown",
      occupation: "Head of Weapons Development",
      weapon: "none",
      image: "https://ff7characters.s3.amazonaws.com/scarlet.png",
      summary: "Scarlet is the Head of Weapons Development in the Shinra Electric Power Company. She is ruthless and will use any means necessary to fulfill her goals. She has a characteristic laugh, much like her colleague Heidegger. The two often work together, despite feelings of mutual contempt."
  }
]

export default characters