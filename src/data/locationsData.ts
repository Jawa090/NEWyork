export interface Location {
    slug: string;
    name: string;
    state: string;
    description: string;
    serviceAreas: string[];
    phone: string;
    email: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    coordinates: {
        lat: number;
        lng: number;
    };
    image: string;
    featured: boolean;
    projectTypes: string[];
    specialties: string[];
}

export const locations: Location[] = [
    {
        slug: 'manhattan',
        name: 'Manhattan',
        state: 'New York',
        description: 'Serving Manhattan with professional construction estimating services for high-rise buildings, commercial developments, and residential projects in the heart of NYC.',
        serviceAreas: ['Manhattan', 'Midtown', 'Lower Manhattan', 'Upper East Side', 'Upper West Side', 'Financial District'],
        phone: '(212) 555-0101',
        email: 'manhattan@nyestimators.com',
        address: {
            street: '123 Broadway',
            city: 'New York',
            state: 'NY',
            zip: '10001'
        },
        coordinates: {
            lat: 40.7589,
            lng: -73.9851
        },
        image: '/images/location-manhattan.jpg',
        featured: true,
        projectTypes: ['Commercial', 'Residential', 'Industrial'],
        specialties: ['High-Rise Buildings', 'Office Complexes', 'Luxury Residential']
    },
    {
        slug: 'brooklyn',
        name: 'Brooklyn',
        state: 'New York',
        description: 'Brooklyn construction estimating services covering residential developments, industrial projects, and commercial buildings across all Brooklyn neighborhoods.',
        serviceAreas: ['Brooklyn Heights', 'Williamsburg', 'Park Slope', 'DUMBO', 'Red Hook', 'Sunset Park'],
        phone: '(718) 555-0102',
        email: 'brooklyn@nyestimators.com',
        address: {
            street: '456 Atlantic Avenue',
            city: 'Brooklyn',
            state: 'NY',
            zip: '11201'
        },
        coordinates: {
            lat: 40.6892,
            lng: -73.9442
        },
        image: '/images/location-brooklyn.jpg',
        featured: true,
        projectTypes: ['Residential', 'Commercial', 'Mixed-Use'],
        specialties: ['Residential Developments', 'Warehouse Conversions', 'Mixed-Use Projects']
    },
    {
        slug: 'queens',
        name: 'Queens',
        state: 'New York',
        description: 'Queens estimating services for diverse construction projects including residential homes, commercial buildings, and infrastructure developments.',
        serviceAreas: ['Long Island City', 'Astoria', 'Flushing', 'Jamaica', 'Forest Hills', 'Elmhurst'],
        phone: '(718) 555-0103',
        email: 'queens@nyestimators.com',
        address: {
            street: '789 Northern Boulevard',
            city: 'Queens',
            state: 'NY',
            zip: '11101'
        },
        coordinates: {
            lat: 40.7282,
            lng: -73.7949
        },
        image: '/images/location-queens.jpg',
        featured: true,
        projectTypes: ['Residential', 'Commercial', 'Industrial'],
        specialties: ['Single Family Homes', 'Multi-Family Units', 'Industrial Facilities']
    },
    {
        slug: 'bronx',
        name: 'Bronx',
        state: 'New York',
        description: 'Bronx construction cost estimating for residential developments, commercial projects, and infrastructure improvements throughout the borough.',
        serviceAreas: ['South Bronx', 'Fordham', 'Riverdale', 'Hunts Point', 'Mott Haven', 'Concourse'],
        phone: '(718) 555-0104',
        email: 'bronx@nyestimators.com',
        address: {
            street: '321 Grand Concourse',
            city: 'Bronx',
            state: 'NY',
            zip: '10451'
        },
        coordinates: {
            lat: 40.8448,
            lng: -73.8648
        },
        image: '/images/location-bronx.jpg',
        featured: false,
        projectTypes: ['Residential', 'Commercial', 'Infrastructure'],
        specialties: ['Affordable Housing', 'Community Centers', 'Infrastructure Projects']
    },
    {
        slug: 'staten-island',
        name: 'Staten Island',
        state: 'New York',
        description: 'Staten Island estimating services specializing in residential construction, commercial developments, and municipal projects.',
        serviceAreas: ['St. George', 'Stapleton', 'New Brighton', 'Port Richmond', 'Tottenville', 'Great Kills'],
        phone: '(718) 555-0105',
        email: 'statenisland@nyestimators.com',
        address: {
            street: '654 Bay Street',
            city: 'Staten Island',
            state: 'NY',
            zip: '10301'
        },
        coordinates: {
            lat: 40.5795,
            lng: -74.1502
        },
        image: '/images/location-staten-island.jpg',
        featured: false,
        projectTypes: ['Residential', 'Commercial', 'Municipal'],
        specialties: ['Single Family Homes', 'Retail Centers', 'Municipal Buildings']
    },
    {
        slug: 'long-island',
        name: 'Long Island',
        state: 'New York',
        description: 'Long Island construction estimating covering Nassau and Suffolk counties with expertise in residential, commercial, and industrial projects.',
        serviceAreas: ['Nassau County', 'Suffolk County', 'Hempstead', 'Islip', 'Oyster Bay', 'Huntington'],
        phone: '(516) 555-0106',
        email: 'longisland@nyestimators.com',
        address: {
            street: '987 Hempstead Turnpike',
            city: 'Uniondale',
            state: 'NY',
            zip: '11553'
        },
        coordinates: {
            lat: 40.7001,
            lng: -73.5901
        },
        image: '/images/location-long-island.jpg',
        featured: true,
        projectTypes: ['Residential', 'Commercial', 'Industrial'],
        specialties: ['Suburban Developments', 'Shopping Centers', 'Manufacturing Facilities']
    },
    {
        slug: 'westchester',
        name: 'Westchester County',
        state: 'New York',
        description: 'Westchester County estimating services for upscale residential projects, commercial developments, and municipal infrastructure.',
        serviceAreas: ['White Plains', 'Yonkers', 'New Rochelle', 'Mount Vernon', 'Scarsdale', 'Rye'],
        phone: '(914) 555-0107',
        email: 'westchester@nyestimators.com',
        address: {
            street: '147 Mamaroneck Avenue',
            city: 'White Plains',
            state: 'NY',
            zip: '10601'
        },
        coordinates: {
            lat: 41.0340,
            lng: -73.7629
        },
        image: '/images/location-westchester.jpg',
        featured: false,
        projectTypes: ['Residential', 'Commercial', 'Municipal'],
        specialties: ['Luxury Homes', 'Corporate Offices', 'Educational Facilities']
    },
    {
        slug: 'new-jersey',
        name: 'New Jersey',
        state: 'New Jersey',
        description: 'New Jersey construction estimating services covering northern New Jersey with focus on residential, commercial, and industrial projects.',
        serviceAreas: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Woodbridge'],
        phone: '(201) 555-0108',
        email: 'newjersey@nyestimators.com',
        address: {
            street: '258 Market Street',
            city: 'Newark',
            state: 'NJ',
            zip: '07102'
        },
        coordinates: {
            lat: 40.7357,
            lng: -74.1724
        },
        image: '/images/location-new-jersey.jpg',
        featured: false,
        projectTypes: ['Residential', 'Commercial', 'Industrial'],
        specialties: ['Multi-Family Housing', 'Logistics Centers', 'Manufacturing Plants']
    }
];

// Featured locations for homepage
export const featuredLocations = locations.filter(location => location.featured);

// Get location by slug
export const getLocationBySlug = (slug: string): Location | undefined => {
    return locations.find(location => location.slug === slug);
};

// Get locations by state
export const getLocationsByState = (state: string): Location[] => {
    return locations.filter(location => location.state === state);
};