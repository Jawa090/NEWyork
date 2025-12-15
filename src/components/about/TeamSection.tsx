import { motion } from 'framer-motion';
import { HiAcademicCap, HiStar, HiLocationMarker } from 'react-icons/hi';

const teamMembers = [
  {
    name: 'Michael Chen',
    role: 'Lead Estimator & Founder',
    experience: '15+ Years',
    specialties: ['Electrical Systems', 'Commercial Projects', 'MEP Coordination'],
    credentials: 'PE, LEED AP',
    location: 'Manhattan, NY',
    bio: 'Former project manager at major NYC electrical contractor. Specialized in high-rise commercial and institutional projects.',
  },
  {
    name: 'Sarah Rodriguez',
    role: 'Senior Plumbing Estimator',
    experience: '12+ Years',
    specialties: ['Plumbing Systems', 'Fire Protection', 'Healthcare Projects'],
    credentials: 'CPE, NICET Level III',
    location: 'Brooklyn, NY',
    bio: 'Expert in complex plumbing systems for hospitals, labs, and commercial buildings throughout NYC.',
  },
  {
    name: 'David Thompson',
    role: 'HVAC & Mechanical Estimator',
    experience: '10+ Years',
    specialties: ['HVAC Systems', 'Energy Analysis', 'Green Building'],
    credentials: 'PE, CEM, LEED AP',
    location: 'Queens, NY',
    bio: 'Mechanical engineer with extensive experience in energy-efficient HVAC design and cost analysis.',
  },
  {
    name: 'Jennifer Park',
    role: 'General Construction Estimator',
    experience: '8+ Years',
    specialties: ['Residential', 'Mixed-Use', 'Renovation Projects'],
    credentials: 'CCE, AACE Member',
    location: 'Bronx, NY',
    bio: 'Specializes in residential and mixed-use developments, with deep knowledge of NYC building codes.',
  },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-grey-cool">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Meet Our Expert Estimators
          </h2>
          <p className="text-muted-foreground">
            Our team of certified professionals brings decades of combined experience in construction estimating across all major trades.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Basic Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <HiStar className="w-3 h-3" />
                    {member.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <HiLocationMarker className="w-3 h-3" />
                    {member.location}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Credentials */}
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  <HiAcademicCap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Credentials</span>
                </div>
                <p className="text-xs text-muted-foreground">{member.credentials}</p>
              </div>

              {/* Specialties */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-1">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-card rounded-2xl border border-border/50"
        >
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">45+</p>
            <p className="text-muted-foreground text-sm">Years Combined Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">12</p>
            <p className="text-muted-foreground text-sm">Professional Certifications</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">100%</p>
            <p className="text-muted-foreground text-sm">US-Based Team</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary mb-2">24/7</p>
            <p className="text-muted-foreground text-sm">Support Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;