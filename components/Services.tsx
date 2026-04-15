'use client'

import { Droplets, Zap, Clock, Shield } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Professional Washing',
    description: 'High-quality washing with eco-friendly detergents that are gentle on fabrics and the environment.',
  },
  {
    icon: Zap,
    title: 'Fast Drying',
    description: 'State-of-the-art drying equipment ensures your clothes are ready quickly without damage.',
  },
  {
    icon: Clock,
    title: 'Express Service',
    description: 'Need it fast? Our express service delivers clean clothes in as little as 24 hours.',
  },
  {
    icon: Shield,
    title: 'Fabric Care',
    description: 'Specialized care for delicate fabrics, including dry cleaning and hand-wash services.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            From everyday laundry to specialized care, we have the perfect solution for all your laundry needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-background rounded-lg p-6 border border-border hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">10+</div>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">5000+</div>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
            <p className="text-muted-foreground">Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
