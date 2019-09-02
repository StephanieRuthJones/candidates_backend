
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('candidates').del()
    .then(function () {
      // Inserts seed entries
      return knex('candidates').insert([
        {
          name: "Elizabeth Warren",
          image: "data:image/jpeg;base64,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",
          description: "Elizabeth Ann Warren (née Herring; born June 22, 1949) is an American politician and former academic serving as the senior United States Senator from Massachusetts since 2013. She was formerly a law school professor specializing in bankruptcy law. A member of the Democratic Party and a progressive, Warren has focused on consumer protection, economic opportunity, and the social safety net while in the Senate.",
          votes: 2
        },
        {
          name: "Elizabeth Warren",
          image: "data:image/jpeg;base64,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",
          description: "Kamala Devi Harris (/ˈkɑːmələ/ KAH-mə-lə;[1] born October 20, 1964) is an American lawyer and politician serving as the junior United States Senator from California since 2017. A member of the Democratic Party, she previously served as the 27th District Attorney of San Francisco from 2004 to 2011 and 32nd Attorney General of California from 2011 until 2017. She is a candidate for the Democratic nomination for President of the United States in the 2020 election.",
          votes: 0
        }
      ]);
    });
};