const base = import.meta.env.BASE_URL

export const projects = [
  {
    id: 'raven',
    title: 'Raven — Distributed Event Streaming System',
    category: 'backend',
    categoryLabel: 'Distributed Systems',
    description:
      'A distributed pub/sub event-streaming system in Go with multi-broker replication, partition-based message ordering, consumer-group offset tracking and at-least-once delivery. Deployed as a Kubernetes StatefulSet with Prometheus metrics for throughput, consume rate and replication errors, visualized in Grafana.',
    tech: ['Go', 'gRPC', 'Docker', 'Kubernetes', 'Prometheus'],
    repoUrl: 'https://github.com/Xenios7/Raven',
    image: `${base}logos/raven.png`,
    featured: true,
  },
  {
    id: 'healthcare-platform',
    title: 'Healthcare Management Platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    description:
      'A full EHR system built with a team for a health company (3AE Health): patient appointments, medications, nutrition tracking and staff shifts. RESTful .NET Core backend with authentication (incl. fingerprint), barcode-based medication tracking and real-time inpatient monitoring, over a normalized PostgreSQL schema. Cross-platform web and mobile clients in React and React Native (Expo), deployed via Docker.',
    tech: ['C# .NET', 'PostgreSQL', 'React', 'React Native', 'Docker'],
    repoUrl: 'https://github.com/Xenios7/Healthcare-management-system',
    image: `${base}logos/healthcare.png`,
    featured: true,
  },
  {
    id: 'cyprusride',
    title: 'CyprusRide — Ride-Hailing Database System',
    category: 'backend',
    categoryLabel: 'Databases',
    description:
      'A normalized relational database (3NF) over a 30+ table SQL schema with stored procedures, triggers and constraints for ride requests, authentication and availability checks, plus 10k+ generated synthetic records. ASP.NET Core web UI with Leaflet.js for interactive map-based booking and dynamic reporting with filtering and grouping.',
    tech: ['SQL Server', 'ASP.NET Core', 'Leaflet.js'],
    repoUrl: 'https://github.com/Xenios7/CyprusRide-DB',
    image: `${base}logos/ride-hail.png`,
    featured: false,
  },
]
