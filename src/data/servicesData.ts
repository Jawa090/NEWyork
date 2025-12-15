import { IconType } from 'react-icons';
import {
    HiLightningBolt,
    HiBeaker,
    HiCube,
    HiCog,
    HiTemplate,
    HiOfficeBuilding
} from 'react-icons/hi';

export interface Service {
    icon: IconType;
    slug: string;
    title: string;
    description: string;
    features: string[];
    image: string;
}

export const services: Service[] = [
    {
        icon: HiLightningBolt,
        slug: 'electrical',
        title: 'Electrical Estimating Services',
        description: 'Our skilled experts estimate materials from divisions 26, 27, and 28 along with cost analysis against electrical drawings.',
        features: ['Power Distribution (Div 26)', 'Lighting Systems', 'Low Voltage & Data (Div 27)', 'Fire Alarms (Div 28)', 'Switchgear & Panels'],
        image: '/images/service-electrical.png',
    },
    {
        icon: HiBeaker,
        slug: 'plumbing',
        title: 'Plumbing Estimating Services',
        description: 'Covering Division 22, we estimate materials for various plumbing systems in all project types.',
        features: ['Domestic Water Piping', 'Sanitary & Storm Drainage', 'Fixtures a& Equipment', 'Gas Piping Systems', 'Insulation & Specialties'],
        image: '/images/service-plumbing.png',
    },
    {
        icon: HiTemplate,
        slug: 'hvac',
        title: 'HVAC Estimating Services',
        description: 'Specialized Division 23 estimations. We install clarity into your mechanical system bids.',
        features: ['Ductwork Takeoffs', 'Equipment Scheduling', 'Piping & Hydronics', 'Controls & Instrumentation', 'Testing & Balancing'],
        image: '/images/service-hvac.png',
    },
    {
        icon: HiCog,
        slug: 'mechanical',
        title: 'Mechanical Estimating Services',
        description: 'Comprehensive analysis for industrial and commercial mechanical systems.',
        features: ['Process Piping', 'Industrial Equipment', 'Ventilation Systems', 'Thermal Insulation', 'Mechanical Supports'],
        image: '/images/service-mechanical.png',
    },
    {
        icon: HiCube,
        slug: 'concrete',
        title: 'Concrete & Masonry Estimating',
        description: 'Precision takeoffs for Division 3 (Concrete) and Division 4 (Masonry).',
        features: ['Foundation Concrete', 'Slab on Grade/Deck', 'CMU Walls & Brick Veneer', 'Rebar & Mesh', 'Formwork & Finishing'],
        image: '/images/service-concrete.png',
    },
    {
        icon: HiOfficeBuilding,
        slug: 'general',
        title: 'Construction Cost Estimating',
        description: 'Detailed estimates for General Contractors and Developers across all trades.',
        features: ['Complete CSI Breakdowns', 'Material & Labor Costs', 'Profit & Overhead Analysis', 'Bid-Ready Excel Sheets', 'Value Engineering Support'],
        image: '/images/service-general.png',
    },
];
