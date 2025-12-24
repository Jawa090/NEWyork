import { IconType } from 'react-icons';
import {
    HiLightningBolt,
    HiBeaker,
    HiCube,
    HiCog,
    HiTemplate,
    HiOfficeBuilding,
    HiHome,
    HiTruck
} from 'react-icons/hi';

export interface Service {
    icon: IconType;
    slug: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    category: 'project-type' | 'trade-specific';
}

// Main Project Type Services
export const projectTypeServices: Service[] = [
    {
        icon: HiOfficeBuilding,
        slug: 'commercial',
        title: 'Commercial Estimating Services',
        description: 'You need accuracy for commercial constructions to complete tasks on time. One should plan early designs and bids to increase success chances. Our services include complete breakdowns for material cost and bid projections. The firm will handle all trades for you with complex scopes. We develop cost projections after a complete review. We deliver the right pricing to you for all your developments. Our company deals with warehouses and hospitality places among others. You will get our support in the complete process of calculation. In short, New York construction estimating services will give you solid numbers in a clear format. This way, you can make better decisions to complete your work in success.',
        features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Hospitality Projects', 'Mixed-Use Developments'],
        image: '/images/service-commercial.png',
        category: 'project-type',
    },
    {
        icon: HiHome,
        slug: 'residential',
        title: 'Residential Estimating Services',
        description: 'Household constructions need a balance between cost control and expected quality. You will also need to handle the changes in design. We have years of experience to understand these challenges. Thus, we are able to deal with housings of every size. Our team pays attention to detail while we do these calculations. You will get realistic labor hours and the right material quantities. So, this smart calculation will help you plan your budget and avoid delays. Our best construction estimators New York will give you clarity with numbers in all your residential projects. You will be able to have more financial control in your project. Our cost analysis is also for renovations, additions and other changes.',
        features: ['Single Family Homes', 'Multi-Family Units', 'Renovations', 'Additions', 'Custom Homes'],
        image: '/images/service-residential.png',
        category: 'project-type',
    },
    {
        icon: HiCog,
        slug: 'industrial',
        title: 'Industrial Estimating Services',
        description: 'Industrial developments need technical knowledge for right analysis. We will meet all the needs of this complex environment. Our professionals follow an approach that deals with all factors. We support production units with many systems in them and cover process piping, gas and other setups for you. We do the right calculations to decrease risks and refine the process. Our expert construction estimators New York have all the knowledge and tools for best results. We meet the industry standards and give clear cost insight. In other words, we will support your production sites to make them successful.',
        features: ['Manufacturing Facilities', 'Process Piping', 'Gas Systems', 'Production Units', 'Industrial Equipment'],
        image: '/images/service-industrial.png',
        category: 'project-type',
    },
    {
        icon: HiTruck,
        slug: 'civil',
        title: 'Civil Estimating Services',
        description: 'You need an understanding of earthwork quantities and conditions for civil works. We have experience in cost calculation for civil sites like roads and highways. Also, we will help you with bid preparation for better performance. You will also be able to plan better in terms of finances and delivery time for the work.',
        features: ['Roads & Highways', 'Site Preparation', 'Earthwork', 'Utilities', 'Infrastructure'],
        image: '/images/service-civil.png',
        category: 'project-type',
    },
];

// Trade Specific Services
export const tradeServices: Service[] = [
    {
        icon: HiLightningBolt,
        slug: 'mep',
        title: 'MEP Estimating Services',
        description: 'MEP services are for cost analysis of technical building systems. It includes mechanical, electrical and plumbing systems. We prepare the right takeoffs and cost projections for HVAC systems and ductwork. In this, our team includes piping, wiring and all other fitting equipment. This helps contractors plan labor and budget with a practical plan.',
        features: ['Mechanical Systems', 'Electrical Systems', 'Plumbing Systems', 'HVAC Ductwork', 'Wiring & Piping'],
        image: '/images/service-mep.png',
        category: 'trade-specific',
    },
    {
        icon: HiCube,
        slug: 'concrete',
        title: 'Concrete Estimating Services',
        description: 'Our concrete cost projections include all quantities and costs of concrete work. This will include foundations, slabs and parking areas. We help you bid right with accurate construction estimating services New York. In all our calculations, we pay attention to material quantities and labor. Hence, this will allow you to manage concrete work without risks.',
        features: ['Foundations', 'Slabs', 'Parking Areas', 'Structural Concrete', 'Reinforcement'],
        image: '/images/service-concrete.png',
        category: 'trade-specific',
    },
    {
        icon: HiTemplate,
        slug: 'steel',
        title: 'Steel Estimating Services',
        description: 'Steel cost calculations include exact quantities for all parts. We measure beam, columns and all connections. Our team also covers contractors and other material to ensure the exact values. Thus, we will help you order material and control costs. You will be able to complete tasks on time with these numbers as well.',
        features: ['Structural Steel', 'Beams & Columns', 'Connections', 'Metal Decking', 'Miscellaneous Metals'],
        image: '/images/service-steel.png',
        category: 'trade-specific',
    },
    {
        icon: HiBeaker,
        slug: 'drywall',
        title: 'Drywall Estimating and Takeoff',
        description: 'You need the correct values to bid right and manage supplies. Our drywall quantities are also precise with complete division. We serve drywall workers and general contractors with our construction cost estimating services New York. In projects, we serve all scopes of commercial as well as residential places.',
        features: ['Drywall Installation', 'Taping & Finishing', 'Insulation', 'Framing', 'Acoustical Systems'],
        image: '/images/service-drywall.png',
        category: 'trade-specific',
    },
    {
        icon: HiCog,
        slug: 'lumber',
        title: 'Lumber Takeoff Services',
        description: 'Our lumber calculations help builders deal with all woodwork. We give you exact quantities for framing and finishes. With this, you can avoid large fees of full time cost analysis experts. Also, our numbers will increase your bid winning rate.',
        features: ['Framing Lumber', 'Finish Carpentry', 'Structural Timber', 'Millwork', 'Hardware'],
        image: '/images/service-lumber.png',
        category: 'trade-specific',
    },
    {
        icon: HiTruck,
        slug: 'earthwork',
        title: 'Earthwork Estimating Services',
        description: 'Earthwork cost assessment will help you understand site conditions. We will give you exact quantities of curbs and site concrete. This will help you handle site preparation without cost loss. Our takeoffs will also cover the grading and trenching of the process.',
        features: ['Excavation', 'Grading', 'Site Preparation', 'Curbs & Gutters', 'Trenching'],
        image: '/images/service-earthwork.png',
        category: 'trade-specific',
    },
    {
        icon: HiOfficeBuilding,
        slug: 'masonry',
        title: 'Masonry Estimating Services',
        description: 'These services handle all the quantities of brickwork and other material. We will give you clear values with which you can plan labor and equipment. With careful review of drawings, our numbers are very accurate. Hence, you will have a smooth construction with little chances of cost shortage. Contact us at info@constructionestimatingnewyork.com to avail our New York construction estimating services.',
        features: ['Brick Veneer', 'Block Work', 'Stone Installation', 'Mortar & Grout', 'Restoration'],
        image: '/images/service-masonry.png',
        category: 'trade-specific',
    },
    {
        icon: HiHome,
        slug: 'openings',
        title: 'Opening Estimating Services',
        description: 'Opening estimations mean doors, windows and other frames. We will measure quantities and costs after seeing the drawings. These numbers will help you order and setup these frames. The right calculations will also support good budgeting to save costs.',
        features: ['Doors & Frames', 'Windows', 'Hardware', 'Glazing', 'Specialty Openings'],
        image: '/images/service-openings.png',
        category: 'trade-specific',
    },
];

// Combined services for backward compatibility
export const services: Service[] = [...projectTypeServices, ...tradeServices];
