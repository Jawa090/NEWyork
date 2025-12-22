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
        description: 'You need accuracy for commercial constructions to complete tasks on time. Our services include complete breakdowns for material cost and bid projections. We handle all trades with complex scopes and deliver the right pricing for warehouses, hospitality places, and other commercial developments.',
        features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Hospitality Projects', 'Mixed-Use Developments'],
        image: '/images/service-commercial.png',
        category: 'project-type',
    },
    {
        icon: HiHome,
        slug: 'residential',
        title: 'Residential Estimating Services',
        description: 'Household constructions need a balance between cost control and expected quality. We have years of experience to understand these challenges and deal with housings of every size. Our team pays attention to detail while providing realistic labor hours and material quantities for renovations, additions, and new construction.',
        features: ['Single Family Homes', 'Multi-Family Units', 'Renovations', 'Additions', 'Custom Homes'],
        image: '/images/service-residential.png',
        category: 'project-type',
    },
    {
        icon: HiCog,
        slug: 'industrial',
        title: 'Industrial Estimating Services',
        description: 'Industrial developments need technical knowledge for right analysis. We meet all the needs of this complex environment with production units, process piping, gas setups, and other industrial systems. Our expert construction estimators have all the knowledge and tools for best results.',
        features: ['Manufacturing Facilities', 'Process Piping', 'Gas Systems', 'Production Units', 'Industrial Equipment'],
        image: '/images/service-industrial.png',
        category: 'project-type',
    },
    {
        icon: HiTruck,
        slug: 'civil',
        title: 'Civil Estimating Services',
        description: 'You need an understanding of earthwork quantities and conditions for civil works. We have experience in cost calculation for civil sites like roads and highways. We help you with bid preparation for better performance and financial planning.',
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
        description: 'MEP services for cost analysis of technical building systems including mechanical, electrical, and plumbing systems. We prepare takeoffs and cost projections for HVAC systems, ductwork, piping, wiring, and fitting equipment.',
        features: ['Mechanical Systems', 'Electrical Systems', 'Plumbing Systems', 'HVAC Ductwork', 'Wiring & Piping'],
        image: '/images/service-mep.png',
        category: 'trade-specific',
    },
    {
        icon: HiCube,
        slug: 'concrete',
        title: 'Concrete Estimating Services',
        description: 'Our concrete cost projections include all quantities and costs of concrete work including foundations, slabs, and parking areas. We help you bid right with accurate material quantities and labor calculations.',
        features: ['Foundations', 'Slabs', 'Parking Areas', 'Structural Concrete', 'Reinforcement'],
        image: '/images/service-concrete.png',
        category: 'trade-specific',
    },
    {
        icon: HiTemplate,
        slug: 'steel',
        title: 'Steel Estimating Services',
        description: 'Steel cost calculations include exact quantities for all parts including beams, columns, and connections. We cover contractors and other materials to ensure exact values for timely completion.',
        features: ['Structural Steel', 'Beams & Columns', 'Connections', 'Metal Decking', 'Miscellaneous Metals'],
        image: '/images/service-steel.png',
        category: 'trade-specific',
    },
    {
        icon: HiBeaker,
        slug: 'drywall',
        title: 'Drywall Estimating and Takeoff',
        description: 'Correct values to bid right and manage supplies. Our drywall quantities are precise with complete division serving both commercial and residential projects.',
        features: ['Drywall Installation', 'Taping & Finishing', 'Insulation', 'Framing', 'Acoustical Systems'],
        image: '/images/service-drywall.png',
        category: 'trade-specific',
    },
    {
        icon: HiCog,
        slug: 'lumber',
        title: 'Lumber Takeoff Services',
        description: 'Our lumber calculations help builders deal with all woodwork. We give you exact quantities for framing and finishes. With this, you can avoid large fees of full time cost analysis experts.',
        features: ['Framing Lumber', 'Finish Carpentry', 'Structural Timber', 'Millwork', 'Hardware'],
        image: '/images/service-lumber.png',
        category: 'trade-specific',
    },
    {
        icon: HiTruck,
        slug: 'earthwork',
        title: 'Earthwork Estimating Services',
        description: 'Earthwork cost assessment will help you understand site conditions. We will give you exact quantities of curbs and site concrete. This will help you handle site preparation without cost loss.',
        features: ['Excavation', 'Grading', 'Site Preparation', 'Curbs & Gutters', 'Trenching'],
        image: '/images/service-earthwork.png',
        category: 'trade-specific',
    },
    {
        icon: HiOfficeBuilding,
        slug: 'masonry',
        title: 'Masonry Estimating Services',
        description: 'These services handle all the quantities of brickwork and other material. We will give you clear values with which you can plan labor and equipment. With careful review of drawings, our numbers are very accurate.',
        features: ['Brick Veneer', 'Block Work', 'Stone Installation', 'Mortar & Grout', 'Restoration'],
        image: '/images/service-masonry.png',
        category: 'trade-specific',
    },
    {
        icon: HiHome,
        slug: 'openings',
        title: 'Opening Estimating Services',
        description: 'Opening estimations mean doors, windows and other frames. We will measure quantities and costs after seeing the drawings. These numbers will help you order and setup these frames.',
        features: ['Doors & Frames', 'Windows', 'Hardware', 'Glazing', 'Specialty Openings'],
        image: '/images/service-openings.png',
        category: 'trade-specific',
    },
];

// Combined services for backward compatibility
export const services: Service[] = [...projectTypeServices, ...tradeServices];
