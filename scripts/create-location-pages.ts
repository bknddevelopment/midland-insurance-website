// Script to create multiple location pages
const locations = [
  {
    name: 'Englewood',
    slug: 'englewood',
    zip: '07631',
    population: '29,308',
    description: 'Englewood is a vibrant city in Bergen County, known for its diverse community, historic downtown, and proximity to New York City.',
    nearbyAreas: [
      { name: 'Teaneck', distance: '3 miles' },
      { name: 'Englewood Cliffs', distance: '2 miles' },
      { name: 'Tenafly', distance: '3 miles' },
      { name: 'Fort Lee', distance: '4 miles' },
      { name: 'Hackensack', distance: '5 miles' }
    ]
  },
  {
    name: 'Fair Lawn',
    slug: 'fair-lawn',
    zip: '07410',
    population: '34,927',
    description: 'Fair Lawn is a well-established borough in Bergen County, featuring diverse neighborhoods, excellent schools, and a strong business community.',
    nearbyAreas: [
      { name: 'Paramus', distance: '3 miles' },
      { name: 'Glen Rock', distance: '3 miles' },
      { name: 'Saddle Brook', distance: '4 miles' },
      { name: 'Paterson', distance: '4 miles' },
      { name: 'Hackensack', distance: '6 miles' }
    ]
  },
  {
    name: 'Garfield',
    slug: 'garfield',
    zip: '07026',
    population: '32,655',
    description: 'Garfield is a diverse city in Bergen County with a rich industrial heritage and growing residential communities.',
    nearbyAreas: [
      { name: 'Lodi', distance: '2 miles' },
      { name: 'Saddle Brook', distance: '3 miles' },
      { name: 'Wallington', distance: '3 miles' },
      { name: 'Passaic', distance: '3 miles' },
      { name: 'Clifton', distance: '4 miles' }
    ]
  },
  {
    name: 'Lodi',
    slug: 'lodi',
    zip: '07644',
    population: '24,389',
    description: 'Lodi is a borough in Bergen County known for its residential neighborhoods, local businesses, and convenient location.',
    nearbyAreas: [
      { name: 'Garfield', distance: '2 miles' },
      { name: 'Hasbrouck Heights', distance: '2 miles' },
      { name: 'Wood-Ridge', distance: '3 miles' },
      { name: 'Hackensack', distance: '4 miles' },
      { name: 'Saddle Brook', distance: '4 miles' }
    ]
  },
  {
    name: 'Lyndhurst',
    slug: 'lyndhurst',
    zip: '07071',
    population: '22,519',
    description: 'Lyndhurst is a township in Bergen County featuring a mix of residential areas, commercial districts, and industrial zones.',
    nearbyAreas: [
      { name: 'Rutherford', distance: '2 miles' },
      { name: 'North Arlington', distance: '2 miles' },
      { name: 'Kearny', distance: '3 miles' },
      { name: 'Nutley', distance: '4 miles' },
      { name: 'Carlstadt', distance: '4 miles' }
    ]
  },
  {
    name: 'Ramsey',
    slug: 'ramsey',
    zip: '07446',
    population: '14,915',
    description: 'Ramsey is a borough in northern Bergen County known for its historic downtown, excellent schools, and strong community spirit.',
    nearbyAreas: [
      { name: 'Allendale', distance: '3 miles' },
      { name: 'Mahwah', distance: '3 miles' },
      { name: 'Upper Saddle River', distance: '4 miles' },
      { name: 'Wyckoff', distance: '5 miles' },
      { name: 'Franklin Lakes', distance: '6 miles' }
    ]
  },
  {
    name: 'Westwood',
    slug: 'westwood',
    zip: '07675',
    population: '11,580',
    description: 'Westwood is a borough in Bergen County with a charming downtown, historic architecture, and active arts community.',
    nearbyAreas: [
      { name: 'River Vale', distance: '2 miles' },
      { name: 'Hillsdale', distance: '3 miles' },
      { name: 'Park Ridge', distance: '4 miles' },
      { name: 'Emerson', distance: '4 miles' },
      { name: 'Oradell', distance: '5 miles' }
    ]
  }
];

export default locations;