import { IconType } from 'react-icons';
import {
    HiLightningBolt,
    HiBeaker,
    HiCube,
    HiCog,
    HiTemplate,
    HiOfficeBuilding,
    HiHome,
    HiTruck,
    HiClipboard
} from 'react-icons/hi';

export interface Trade {
    icon: IconType;
    slug: string;
    title: string;
    description: string;
    services: string[];
    divisions: string[];
    image: string;
    featured: boolean;
}

export const trades: Trade[] = [
    {
        icon: HiLightningBolt,
        slug: 'electrical',
        title: 'Electrical Contractors',
        description: 'Comprehensive electrical estimating services for all types of electrical work including power distribution, lighting systems, and low voltage installations.',
        services: ['Power Distribution', 'Lighting Systems', 'Low Voltage & Data', 'Fire Alarms', 'Switchgear & Panels'],
        divisions: ['Division 26', 'Division 27', 'Division 28'],
        image: '/images/trade-electrical.png',
        featured: true,
    },
    {
        icon: HiBeaker,
        slug: 'plumbing',
        title: 'Plumbing Contractors',
        description: 'Professional plumbing estimates covering all aspects of water supply, drainage, fixtures, and gas piping systems for residential and commercial projects.',
        services: ['Water Supply Systems', 'Drainage Systems', 'Fixtures & Equipment', 'Gas Piping', 'Insulation'],
        divisions: ['Division 22'],
        image: '/images/trade-plumbing.png',
        featured: true,
    },
    {
        icon: HiCog,
        slug: 'hvac',
        title: 'HVAC Contractors',
        description: 'Detailed HVAC estimating for heating, ventilation, and air conditioning systems including ductwork, equipment, and controls.',
        services: ['Ductwork Systems', 'HVAC Equipment', 'Piping & Hydronics', 'Controls & Instrumentation', 'Testing & Balancing'],
        divisions: ['Division 23'],
        image: '/images/trade-hvac.png',
        featured: true,
    },
    {
        icon: HiCube,
        slug: 'concrete',
        title: 'Concrete Contractors',
        description: 'Accurate concrete and masonry estimates including foundations, slabs, structural concrete, and all related materials and labor.',
        services: ['Foundation Work', 'Slab Construction', 'Structural Concrete', 'Reinforcement', 'Finishing'],
        divisions: ['Division 3', 'Division 4'],
        image: '/images/trade-concrete.png',
        featured: true,
    },
    {
        icon: HiTemplate,
        slug: 'steel',
        title: 'Steel Contractors',
        description: 'Structural steel estimating services covering beams, columns, connections, metal decking, and miscellaneous metals.',
        services: ['Structural Steel', 'Metal Decking', 'Connections', 'Miscellaneous Metals', 'Steel Erection'],
        divisions: ['Division 5'],
        image: '/images/trade-steel.png',
        featured: false,
    },
    {
        icon: HiHome,
        slug: 'carpentry',
        title: 'Carpentry Contractors',
        description: 'Wood framing and finish carpentry estimates including lumber takeoffs, millwork, and all carpentry-related materials.',
        services: ['Rough Carpentry', 'Finish Carpentry', 'Millwork', 'Structural Timber', 'Hardware'],
        divisions: ['Division 6'],
        image: '/images/trade-carpentry.png',
        featured: false,
    },
    {
        icon: HiClipboard,
        slug: 'drywall',
        title: 'Drywall Contractors',
        description: 'Drywall and interior systems estimating including gypsum board, metal framing, insulation, and finishing materials.',
        services: ['Drywall Installation', 'Metal Framing', 'Insulation', 'Taping & Finishing', 'Acoustical Systems'],
        divisions: ['Division 9'],
        image: '/images/trade-drywall.png',
        featured: false,
    },
    {
        icon: HiOfficeBuilding,
        slug: 'masonry',
        title: 'Masonry Contractors',
        description: 'Masonry work estimates including brick, block, stone installation, and all related materials and mortar systems.',
        services: ['Brick Veneer', 'Block Work', 'Stone Installation', 'Mortar Systems', 'Restoration Work'],
        divisions: ['Division 4'],
        image: '/images/trade-masonry.png',
        featured: false,
    },
    {
        icon: HiTruck,
        slug: 'sitework',
        title: 'Sitework Contractors',
        description: 'Site preparation and earthwork estimates including excavation, grading, utilities, and site concrete work.',
        services: ['Excavation', 'Grading', 'Site Utilities', 'Paving', 'Landscaping'],
        divisions: ['Division 2', 'Division 32'],
        image: '/images/trade-sitework.png',
        featured: false,
    },
];

// Featured trades for homepage
export const featuredTrades = trades.filter(trade => trade.featured);

// Get trade by slug
export const getTradeBySlug = (slug: string): Trade | undefined => {
    return trades.find(trade => trade.slug === slug);
};