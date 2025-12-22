export interface ServiceArea {
  state: string;
  areas: string[];
}

export const serviceAreasData: ServiceArea[] = [
  {
    state: 'New York',
    areas: [
      'Manhattan',
      'Brooklyn', 
      'Queens',
      'Bronx',
      'Staten Island',
      'Long Island',
      'Westchester County',
      'Albany',
      'Buffalo',
      'Rochester',
      'Syracuse',
      'Yonkers'
    ]
  },
  {
    state: 'New Jersey',
    areas: [
      'Newark',
      'Jersey City',
      'Paterson',
      'Elizabeth',
      'Edison',
      'Woodbridge',
      'Lakewood',
      'Toms River',
      'Hamilton',
      'Trenton'
    ]
  },
  {
    state: 'Connecticut',
    areas: [
      'Bridgeport',
      'New Haven',
      'Hartford',
      'Stamford',
      'Waterbury',
      'Norwalk',
      'Danbury',
      'New Britain',
      'West Hartford',
      'Greenwich'
    ]
  }
];