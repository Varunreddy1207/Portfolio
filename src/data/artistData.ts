export interface SoftwareTool {
  name: string;
  category: '3D & Sculpting' | 'Real-time & Engine' | 'Texturing' | 'Post & Motion';
  level: string;
  icon: string;
}

export interface ProjectWIP {
  wireframe: string;
  clay: string;
  lighting: string;
}

export interface ProjectDetail {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: 'Character Design' | 'Environment Art' | 'Product Visualization' | 'Motion Graphics' | 'Personal Projects';
  year: string;
  client?: string;
  role: string[];
  software: string[];
  heroImage: string;
  previewGif: string;
  overview: string;
  conceptNotes: string;
  wipShots: ProjectWIP;
  finalRenders: { title: string; image: string }[];
  turntableUrl?: string;
  has3DViewer: boolean;
  meshType?: 'mech' | 'sculpture' | 'chronos' | 'cyber';
}

export interface HardwareSpec {
  component: string;
  spec: string;
  detail: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Free 3D Model' | 'Shader & Material' | 'Tutorial & Breakdown';
  format: string;
  size: string;
  description: string;
  downloadUrl: string;
}

export const ARTIST_DATA = {
  name: 'VARUN REDDY',
  title: '3D ARTIST & CGI ANIMATOR',
  tagline: 'Crafting Cinematic Characters, Immersive Environments & Hyper-Real Product Visuals',
  bio: 'Senior 3D Artist and digital sculptor with a deep focus on hard-surface modeling, photorealistic lookdev, and cinematic animation. Bridging the gap between classical art fundamentals and cutting-edge real-time render engines.',
  status: 'Available for Select Projects & Commissions (Q1 / Q2 2026)',
  email: 'mvarunreddymassireddy@gmail.com',
  location: 'Global / Remote',
  
  socials: {
    artstation: 'https://artstation.com/varunreddy',
    behance: 'https://behance.net/varunreddy',
    instagram: 'https://instagram.com/varunreddy.3d',
    linkedin: 'https://linkedin.com/in/varun-reddy',
    github: 'https://github.com/Varunreddy1207',
    discord: 'varunreddy#3d',
  },

  showreel: {
    duration: '02:14',
    resolution: '4K 60FPS UHD',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0', // Sample high-res reel embed
    projectsFeatured: [
      { time: '00:00', title: 'CYBER VALKYRIE: Autonomous Combat Frame', role: 'Sculpting & Hard-surface' },
      { time: '00:34', title: 'NEO-TOKYO 2099: High-Density District', role: 'Unreal Engine 5 Level Art' },
      { time: '01:08', title: 'APEX ZERO: Carbon Monocoque EV', role: 'C4D & Octane Lighting' },
      { time: '01:42', title: 'KINETIC TRANSCENDENCE: Particle Sim', role: 'X-Particles & Houdini' },
    ],
  },

  categories: [
    'All Work',
    'Character Design',
    'Environment Art',
    'Product Visualization',
    'Motion Graphics',
    'Personal Projects',
  ] as const,

  projects: [
    {
      id: 'valkyrie-mech',
      num: '01',
      title: 'CYBER VALKYRIE: TITAN MECH',
      subtitle: 'Next-Generation Autonomous Combat Frame',
      category: 'Character Design',
      year: '2026',
      client: 'Aegis Interactive / Cinematic IP',
      role: ['Concept Art', 'Hard-Surface Modeling', 'ZBrush Sculpting', 'Substance Texturing', 'Rigging'],
      software: ['Blender 4.2', 'ZBrush', 'Substance 3D Painter', 'Unreal Engine 5.4'],
      heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85',
      previewGif: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      overview:
        'A multi-disciplinary hard-surface character created for cinematic film and next-gen Unreal Engine rendering. Features over 1.2 million polygons of fully articulated hydraulic limbs, carbon-fiber composite armor, and emissive sensory optics.',
      conceptNotes:
        'Inspired by modern aerospace defense and experimental humanoid robotics. The silhouette emphasizes predatory agility balanced with heavy defensive plating.',
      wipShots: {
        wireframe: 'https://images.unsplash.com/photo-1633493106115-46083d5a4209?auto=format&fit=crop&w=1200&q=80',
        clay: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        lighting: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      },
      finalRenders: [
        { title: 'Front Three-Quarter Hero', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85' },
        { title: 'Chassis Torso Detail', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85' },
        { title: 'Optic Sensor Macro Pass', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85' },
      ],
      has3DViewer: true,
      meshType: 'mech',
    },
    {
      id: 'neo-tokyo-district',
      num: '02',
      title: 'SOLARIS METROPOLIS 2099',
      subtitle: 'Real-Time Cyberpunk Megacity Environment',
      category: 'Environment Art',
      year: '2025',
      client: 'Personal Passion Production',
      role: ['Environment Design', 'Procedural Scattering', 'Modular Architecture', 'Lumen & Nanite Lighting'],
      software: ['Unreal Engine 5.4', 'Maya', 'Houdini', 'Megascans', 'Photoshop'],
      heroImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=85',
      previewGif: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
      overview:
        'A sprawling real-time dystopian metropolis engineered in Unreal Engine 5.4 leveraging Nanite virtualized geometry and Lumen global illumination. Features dynamic rain puddles, volumetric holographic advertisements, and multilayered highway flyovers.',
      conceptNotes:
        'Heavy architectural contrast between decaying brutalist concrete lower levels and sleek, neon-drenched corporate spires piercing through the smog.',
      wipShots: {
        wireframe: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
        clay: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
        lighting: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
      },
      finalRenders: [
        { title: 'Main Highway Vista', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=85' },
        { title: 'Lower Alleyway Rain Pass', image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=85' },
      ],
      has3DViewer: true,
      meshType: 'cyber',
    },
    {
      id: 'apex-hypercar',
      num: '03',
      title: 'APEX ZERO ELECTRIC HYPERCAR',
      subtitle: 'Pure Aero Aerodynamic Automotive Visualization',
      category: 'Product Visualization',
      year: '2026',
      client: 'Apex Automotive Labs',
      role: ['Class-A Hard-Surface CAD', 'Shader Lookdev', 'Studio Lighting', 'Motion Turntable'],
      software: ['Cinema 4D', 'Octane Render', 'Blender', 'Substance 3D', 'After Effects'],
      heroImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85',
      previewGif: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      overview:
        'Commercial automotive lookdev visualizing a next-generation electric hypercar. Rendered with custom multi-layer clearcoat car paint, carbon-weave textures, and an active aero carbon spoiler mechanism.',
      conceptNotes:
        'Focus on sculptural light reflections tracing along the razor-sharp fender lines in a controlled dark studio environment.',
      wipShots: {
        wireframe: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
        clay: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
        lighting: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
      },
      finalRenders: [
        { title: 'Hero Studio Three-Quarter', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85' },
        { title: 'Rear Diffuser & Light Bar', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85' },
      ],
      has3DViewer: true,
      meshType: 'sculpture',
    },
    {
      id: 'kinetic-transcendence',
      num: '04',
      title: 'KINETIC TRANSCENDENCE',
      subtitle: 'Abstract Particle Simulation & Brand Film',
      category: 'Motion Graphics',
      year: '2025',
      client: 'Prism Creative Festival',
      role: ['Creative Direction', 'Particle Physics Simulation', 'X-Particles Lookdev', 'Color Grading'],
      software: ['Cinema 4D', 'Redshift', 'X-Particles', 'Houdini FX', 'DaVinci Resolve'],
      heroImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=85',
      previewGif: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      overview:
        'A hypnotic motion study exploring fluid dynamics and millions of dynamic magnetic particles converging into organic crystal structures.',
      conceptNotes:
        'Examining the transition from formless chaos into organized digital matter through high-frequency micro-reflections.',
      wipShots: {
        wireframe: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
        clay: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
        lighting: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
      },
      finalRenders: [
        { title: 'Vortex Inception Frame', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=85' },
      ],
      has3DViewer: false,
    },
    {
      id: 'chronos-tourbillon',
      num: '05',
      title: 'CHRONOS ROYAL TOURBILLON',
      subtitle: 'Haute Horlogerie Mechanical Watch Visualization',
      category: 'Product Visualization',
      year: '2026',
      client: 'Chronos Swiss Atelier',
      role: ['Micron Hard-Surface Modeling', 'Anisotropic Metal Shaders', 'Depth of Field Macro Optics'],
      software: ['Blender 4.2 Cycles', 'Substance 3D', 'Affinity Photo'],
      heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=85',
      previewGif: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
      overview:
        'Detailed mechanical visualization of a 3-axis tourbillon escapement. Every screw, ruby jewel bearing, balance wheel, and gear tooth modeled with precision tolerances.',
      conceptNotes:
        'Highlighting Geneva stripes (Côtes de Genève) and hand-beveled chamfers under soft studio bounce lighting.',
      wipShots: {
        wireframe: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80',
        clay: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
        lighting: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      },
      finalRenders: [
        { title: 'Tourbillon Escapement Macro', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=85' },
      ],
      has3DViewer: true,
      meshType: 'chronos',
    },
    {
      id: 'biosphere-sanctuary',
      num: '06',
      title: 'FORGOTTEN BIOSPHERE XII',
      subtitle: 'Post-Human Subterranean Ecosystem',
      category: 'Personal Projects',
      year: '2025',
      client: 'Personal Concept Art',
      role: ['World Building', 'Photogrammetry Cleanup', 'Procedural Foliage', 'Atmospheric Lighting'],
      software: ['Unreal Engine 5.4', 'Blender', 'Gaea', 'SpeedTree'],
      heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
      previewGif: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      overview:
        'A vast subterranean dome preserving extinct flora and atmospheric mist under artificial UV light emitters.',
      conceptNotes:
        'A somber yet awe-inspiring exploration of nature reclaiming forgotten megastructures.',
      wipShots: {
        wireframe: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        clay: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        lighting: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      },
      finalRenders: [
        { title: 'Central Dome Panorama', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85' },
      ],
      has3DViewer: false,
    },
  ] as ProjectDetail[],

  softwareTools: [
    { name: 'Blender 4.2', category: '3D & Sculpting', level: 'Advanced / Daily Driver', icon: 'Box' },
    { name: 'ZBrush', category: '3D & Sculpting', level: 'High-Res Digital Sculpting', icon: 'Layers' },
    { name: 'Maya', category: '3D & Sculpting', level: 'Production Topology & Rigging', icon: 'Triangle' },
    { name: 'Cinema 4D', category: '3D & Sculpting', level: 'MoGraph & Product CAD', icon: 'Box' },
    { name: 'Unreal Engine 5.4', category: 'Real-time & Engine', level: 'Lumen, Nanite & Virtual Production', icon: 'Cpu' },
    { name: 'Houdini FX', category: 'Real-time & Engine', level: 'Procedural Modeling & FX', icon: 'Flame' },
    { name: 'Substance 3D Painter', category: 'Texturing', level: 'PBR Multi-Channel Lookdev', icon: 'Palette' },
    { name: 'Substance 3D Designer', category: 'Texturing', level: 'Procedural Texture Nodes', icon: 'Grid' },
    { name: 'Octane / Redshift', category: 'Real-time & Engine', level: 'GPU Production Shading', icon: 'Sparkles' },
    { name: 'After Effects', category: 'Post & Motion', level: 'ACES Multipass Compositing', icon: 'Film' },
    { name: 'DaVinci Resolve', category: 'Post & Motion', level: 'Master Grade & Color Timing', icon: 'Sliders' },
  ] as SoftwareTool[],

  hardwareSpecs: [
    { component: 'Main Workstation', spec: 'AMD Ryzen 9 7950X', detail: '16 Cores / 32 Threads @ 5.7 GHz Boost' },
    { component: 'Render GPU', spec: 'NVIDIA RTX 4090 24GB', detail: 'Ada Lovelace, 16,384 CUDA Cores, 3rd Gen RT Cores' },
    { component: 'System Memory', spec: '64 GB G.Skill DDR5', detail: '6000 MHz CL30 Low Latency dual-channel' },
    { component: 'Storage Subsystem', spec: '4TB NVMe SSD + 16TB NAS', detail: 'Samsung 990 Pro PCIe 4.0 (7,450 MB/s Read)' },
    { component: 'Color Critical Display', spec: 'ASUS ProArt 32" 4K HDR', detail: '100% sRGB / 98% DCI-P3 Factory Calibrated (Delta E < 1)' },
    { component: 'Digital Input', spec: 'Wacom Intuos Pro L', detail: '8,192 Levels Pen Pressure + Tilt Sensitivity' },
  ] as HardwareSpec[],

  processPipeline: [
    { step: '01', title: 'Concept & Reference', desc: 'Curating mood boards, visual language, silhouette targets, and lighting intentions.' },
    { step: '02', title: 'Blockout & Proportion', desc: 'Establishing volume, primary gesture, camera framing, and scale in 3D viewport.' },
    { step: '03', title: 'Sculpting & Hard-Surface', desc: 'Detailed sub-d modeling or high-frequency organic sculpting in ZBrush/Blender.' },
    { step: '04', title: 'Retopology & UV Layout', desc: 'Building clean animation-ready quads and optimizing texture density across UDIMs.' },
    { step: '05', title: 'PBR Texturing & Shading', desc: 'Procedural curvature, edge wear, roughness variation, and micro-normals.' },
    { step: '06', title: 'Lighting & Lookdev', desc: 'Three-point cinematics, HDR environments, and volumetric atmospherics in ACES.' },
    { step: '07', title: 'Render & Multi-Pass Comp', desc: 'Beauty, Cryptomatte, AO, depth, and normal passes composited for maximum depth.' },
  ],

  resources: [
    {
      id: 'res-base-mesh',
      title: 'Production-Ready Human Base Mesh (Male & Female)',
      category: 'Free 3D Model',
      format: '.FBX / .OBJ / .BLEND',
      size: '28 MB',
      description: 'Clean quad edge loops around face, shoulders, and joints. Perfect base for character sculpting in ZBrush or Blender.',
      downloadUrl: '#',
    },
    {
      id: 'res-lighting-rig',
      title: 'Studio Lighting Stage & 4K HDRI Light Set',
      category: 'Shader & Material',
      format: '.EXR / .BLEND',
      size: '84 MB',
      description: 'Three professional automotive and product studio lighting setups with softbox gobos and customizable color temp.',
      downloadUrl: '#',
    },
    {
      id: 'res-aces-guide',
      title: 'The Definitive ACES Color Management Workflow for 3D Artists',
      category: 'Tutorial & Breakdown',
      format: 'PDF Guide + Project Files',
      size: '14 MB',
      description: 'Step-by-step tutorial on setting up OCIO ACEScg in Blender, Substance Painter, and Davinci Resolve without color clipping.',
      downloadUrl: '#',
    },
  ] as ResourceItem[],
};
