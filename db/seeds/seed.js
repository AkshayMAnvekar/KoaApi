exports.seed = (knex, Promise) => {
  return knex("artist").del()
  .then(() => {
    return knex("album").del()
  })
  .then(() => {
    return knex("track").del()
  })
  .then(() => {
      return knex("artist").insert([
        {
          id: 1,
          name: "AC/DC",
        },
        {
          id: 2,
          name: "Accept",
        },
        {
          id: 3,
          name: "Aerosmith",
        },
        {
          id: 4,
          name: "Alanis Morissette",
        },
        {
          id: 5,
          name: "Alice In Chains",
        },
        {
          id: 6,
          name: "Antônio Carlos Jobim",
        },
        {
          id: 7,
          name: "Apocalyptica",
        },
        {
          id: 8,
          name: "Audioslave",
        },
      ]);
    })
    .then(() => {
      return knex("album").insert([
        {
          id: 1,
          title: "For Those About To Rock We Salute You",
          artist_id: 1,
        },
        {
          id: 2,
          title: "Balls to the Wall",
          artist_id: 2,
        },
        {
          id: 3,
          title: "Restless and Wild",
          artist_id: 2,
        },
        {
          id: 4,
          title: "Let There Be Rock",
          artist_id: 1,
        },
        {
          id: 5,
          title: "Big Ones",
          artist_id: 3,
        },
        {
          id: 6,
          title: "Jagged Little Pill",
          artist_id: 4,
        },
        {
          id: 7,
          title: "Facelift",
          artist_id: 5,
        },
        {
          id: 8,
          title: "Warner 25 Anos",
          artist_id: 6,
        },
        {
          id: 9,
          title: "Plays Metallica By Four Cellos",
          artist_id: 7,
        },
        {
          id: 10,
          title: "Audioslave",
          artist_id: 8,
        },
      ]);
    })
    .then(() => {
      return knex("track").insert([
        {
          id: 1,
          title: "For Those About To Rock (We Salute You)",
          album_id: 1,
          composer: "Angus Young, Malcolm Young, Brian Johnson",
        },
        {
          id: 2,
          title: "Balls to the Wall",
          album_id: 2,
          composer: null,
        },
        {
          id: 3,
          title: "Fast As a Shark",
          album_id: 3,
          composer: "F. Baltes, S. Kaufman, U. Dirkscneider & W. Hoffman",
        },
        {
          id: 4,
          title: "Restless and Wild",
          album_id: 3,
          composer:
            "F. Baltes, R.A. Smith-Diesel, S. Kaufman, U. Dirkscneider & W. Hoffman",
        },
        {
          id: 5,
          title: "Princess of the Dawn",
          album_id: 3,
          composer: "Deaffy & R.A. Smith-Diesel",
        },
        {
          id: 6,
          title: "Put The Finger On You",
          album_id: 1,
          composer: "Angus Young, Malcolm Young, Brian Johnson",
        },
        {
          id: 7,
          title: "Let's Get It Up",
          album_id: 1,
          composer: "Angus Young, Malcolm Young, Brian Johnson",
        },
        {
          id: 8,
          title: "Inject The Venom",
          album_id: 1,
          composer: "Angus Young, Malcolm Young, Brian Johnson",
        },
        {
          id: 9,
          title: "Snowballed",
          album_id: 1,
          composer: "Angus Young, Malcolm Young, Brian Johnson",
        },
        {
          id: 10,
          title: "Evil Walks",
          album_id: 1,
          composer: "Angus Young, Malcolm Young, Brian Johnson",
        },
        {
          id: 11,
          title: "C.O.D.",
          album_id: 1,
          composer: "Angus Young, Malcolm Young, Brian Johnson",
        },
        {
          id: 12,
          title: "Breaking The Rules",
          album_id: 1,
          composer: "Angus Young, Malcolm Young, Brian Johnson",
        },
        {
          id: 13,
          title: "Night Of The Long Knives",
          album_id: 1,
          composer: "Angus Young, Malcolm Young, Brian Johnson",
        },
        {
          id: 14,
          title: "Spellbound",
          album_id: 1,
          composer: "Angus Young, Malcolm Young, Brian Johnson",
        },
        {
          id: 15,
          title: "Go Down",
          album_id: 4,
          composer: "AC/DC",
        },
        {
          id: 16,
          title: "Dog Eat Dog",
          album_id: 4,
          composer: "AC/DC",
        },
        {
          id: 17,
          title: "Let There Be Rock",
          album_id: 4,
          composer: "AC/DC",
        },
        {
          id: 18,
          title: "Bad Boy Boogie",
          album_id: 4,
          composer: "AC/DC",
        },
        {
          id: 19,
          title: "Problem Child",
          album_id: 4,
          composer: "AC/DC",
        },
        {
          id: 20,
          title: "Overdose",
          album_id: 4,
          composer: "AC/DC",
        },
        {
          id: 21,
          title: "Hell Ain't A Bad Place To Be",
          album_id: 4,
          composer: "AC/DC",
        },
        {
          id: 22,
          title: "Whole Lotta Rosie",
          album_id: 4,
          composer: "AC/DC",
        },
        {
          id: 23,
          title: "Walk On Water",
          album_id: 5,
          composer: "Steven Tyler, Joe Perry, Jack Blades, Tommy Shaw",
        },
        {
          id: 24,
          title: "Love In An Elevator",
          album_id: 5,
          composer: "Steven Tyler, Joe Perry",
        },
        {
          id: 25,
          title: "Rag Doll",
          album_id: 5,
          composer: "Steven Tyler, Joe Perry, Jim Vallance, Holly Knight",
        },
        {
          id: 26,
          title: "What It Takes",
          album_id: 5,
          composer: "Steven Tyler, Joe Perry, Desmond Child",
        },
        {
          id: 27,
          title: "Dude (Looks Like A Lady)",
          album_id: 5,
          composer: "Steven Tyler, Joe Perry, Desmond Child",
        },
        {
          id: 28,
          title: "Janie's Got A Gun",
          album_id: 5,
          composer: "Steven Tyler, Tom Hamilton",
        },
        {
          id: 29,
          title: "Cryin'",
          album_id: 5,
          composer: "Steven Tyler, Joe Perry, Taylor Rhodes",
        },
        {
          id: 30,
          title: "Amazing",
          album_id: 5,
          composer: "Steven Tyler, Richie Supa",
        },
        {
          id: 31,
          title: "Blind Man",
          album_id: 5,
          composer: "Steven Tyler, Joe Perry, Taylor Rhodes",
        },
        {
          id: 32,
          title: "Deuces Are Wild",
          album_id: 5,
          composer: "Steven Tyler, Jim Vallance",
        },
        {
          id: 33,
          title: "The Other Side",
          album_id: 5,
          composer: "Steven Tyler, Jim Vallance",
        },
        {
          id: 34,
          title: "Crazy",
          album_id: 5,
          composer: "Steven Tyler, Joe Perry, Desmond Child",
        },
        {
          id: 35,
          title: "Eat The Rich",
          album_id: 5,
          composer: "Steven Tyler, Joe Perry, Jim Vallance",
        },
        {
          id: 36,
          title: "Angel",
          album_id: 5,
          composer: "Steven Tyler, Desmond Child",
        },
        {
          id: 37,
          title: "Livin' On The Edge",
          album_id: 5,
          composer: "Steven Tyler, Joe Perry, Mark Hudson",
        },
        {
          id: 38,
          title: "All I Really Want",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 39,
          title: "You Oughta Know",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 40,
          title: "Perfect",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 41,
          title: "Hand In My Pocket",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 42,
          title: "Right Through You",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 43,
          title: "Forgiven",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 44,
          title: "You Learn",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 45,
          title: "Head Over Feet",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 46,
          title: "Mary Jane",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 47,
          title: "Ironic",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 48,
          title: "Not The Doctor",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 49,
          title: "Wake Up",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 50,
          title: "You Oughta Know (Alternate)",
          album_id: 6,
          composer: "Alanis Morissette & Glenn Ballard",
        },
        {
          id: 51,
          title: "We Die Young",
          album_id: 7,
          composer: "Jerry Cantrell",
        },
        {
          id: 52,
          title: "Man In The Box",
          album_id: 7,
          composer: "Jerry Cantrell, Layne Staley",
        },
        {
          id: 53,
          title: "Sea Of Sorrow",
          album_id: 7,
          composer: "Jerry Cantrell",
        },
        {
          id: 54,
          title: "Bleed The Freak",
          album_id: 7,
          composer: "Jerry Cantrell",
        },
        {
          id: 55,
          title: "I Can't Remember",
          album_id: 7,
          composer: "Jerry Cantrell, Layne Staley",
        },
        {
          id: 56,
          title: "Love, Hate, Love",
          album_id: 7,
          composer: "Jerry Cantrell, Layne Staley",
        },
        {
          id: 57,
          title: "It Ain't Like That",
          album_id: 7,
          composer: "Jerry Cantrell, Michael Starr, Sean Kinney",
        },
        {
          id: 58,
          title: "Sunshine",
          album_id: 7,
          composer: "Jerry Cantrell",
        },
        {
          id: 59,
          title: "Put You Down",
          album_id: 7,
          composer: "Jerry Cantrell",
        },
        {
          id: 60,
          title: "Confusion",
          album_id: 7,
          composer: "Jerry Cantrell, Michael Starr, Layne Staley",
        },
        {
          id: 61,
          title: "I Know Somethin (Bout You)",
          album_id: 7,
          composer: "Jerry Cantrell",
        },
        {
          id: 62,
          title: "Real Thing",
          album_id: 7,
          composer: "Jerry Cantrell, Layne Staley",
        },
        {
          id: 63,
          title: "Desafinado",
          album_id: 8,
          composer: null,
        },
        {
          id: 64,
          title: "Garota De Ipanema",
          album_id: 8,
          composer: null,
        },
        {
          id: 65,
          title: "Samba De Uma Nota Só (One Note Samba)",
          album_id: 8,
          composer: null,
        },
        {
          id: 66,
          title: "Por Causa De Você",
          album_id: 8,
          composer: null,
        },
        {
          id: 67,
          title: "Ligia",
          album_id: 8,
          composer: null,
        },
        {
          id: 68,
          title: "Fotografia",
          album_id: 8,
          composer: null,
        },
        {
          id: 69,
          title: "Dindi (Dindi)",
          album_id: 8,
          composer: null,
        },
        {
          id: 70,
          title: "Se Todos Fossem Iguais A Você (Instrumental)",
          album_id: 8,
          composer: null,
        },
        {
          id: 71,
          title: "Falando De Amor",
          album_id: 8,
          composer: null,
        },
        {
          id: 72,
          title: "Angela",
          album_id: 8,
          composer: null,
        },
        {
          id: 73,
          title: "Corcovado (Quiet Nights Of Quiet Stars)",
          album_id: 8,
          composer: null,
        },
        {
          id: 74,
          title: "Outra Vez",
          album_id: 8,
          composer: null,
        },
        {
          id: 75,
          title: "O Boto (Bôto)",
          album_id: 8,
          composer: null,
        },
        {
          id: 76,
          title: "Canta, Canta Mais",
          album_id: 8,
          composer: null,
        },
        {
          id: 77,
          title: "Enter Sandman",
          album_id: 9,
          composer: "Apocalyptica",
        },
        {
          id: 78,
          title: "Master Of Puppets",
          album_id: 9,
          composer: "Apocalyptica",
        },
        {
          id: 79,
          title: "Harvester Of Sorrow",
          album_id: 9,
          composer: "Apocalyptica",
        },
        {
          id: 80,
          title: "The Unforgiven",
          album_id: 9,
          composer: "Apocalyptica",
        },
        {
          id: 81,
          title: "Sad But True",
          album_id: 9,
          composer: "Apocalyptica",
        },
        {
          id: 82,
          title: "Creeping Death",
          album_id: 9,
          composer: "Apocalyptica",
        },
        {
          id: 83,
          title: "Wherever I May Roam",
          album_id: 9,
          composer: "Apocalyptica",
        },
        {
          id: 84,
          title: "Welcome Home (Sanitarium)",
          album_id: 9,
          composer: "Apocalyptica",
        },
        {
          id: 85,
          title: "Cochise",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 86,
          title: "Show Me How to Live",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 87,
          title: "Gasoline",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 88,
          title: "What You Are",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 89,
          title: "Like a Stone",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 90,
          title: "Set It Off",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 91,
          title: "Shadow on the Sun",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 92,
          title: "I am the Highway",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 93,
          title: "Exploder",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 94,
          title: "Hypnotize",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 95,
          title: "Bring'em Back Alive",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 96,
          title: "Light My Way",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 97,
          title: "Getaway Car",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
        {
          id: 98,
          title: "The Last Remaining Light",
          album_id: 10,
          composer: "Audioslave/Chris Cornell",
        },
      ]);
    });
};
