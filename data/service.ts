import type { ServiceCategory } from "@/types";

export const SERVICES_DATA: ServiceCategory[] = [
  {
    slug: "electric-items",
    name: "Electric Items",
    description: "Expert repair and maintenance for home electrical appliances and fixtures.",
    services: [
      {
        slug: "inverter",
        name: "Inverter Repair",
        shortDesc: "Complete battery, PCB, and wiring diagnostic services.",
        description:
          "Professional inverter diagnostic, battery health assessment, and circuit repairs to keep your backup power running reliably.",
        features: ["Battery status checking", "PCB board repair", "Fuse & wiring replacement"],
        startingPrice: "Rs. 1,500"
      },
      {
        slug: "electric-fan",
        name: "Electric Fan Repair",
        shortDesc: "Ceiling, pedestal, and wall fan motor and capacitor service.",
        description: "Fast fix for noisy motors, speed regulator issues, and dead fan capacitors.",
        features: ["Winding & motor repair", "Capacitor replacement", "Noise reduction"],
        startingPrice: "Rs. 500"
      },
      {
        slug: "exhaust-fan",
        name: "Exhaust Fan Repair",
        shortDesc: "Kitchen and bathroom ventilation fan fixes.",
        description: "Resolve suction problems, motor burnouts, and excessive noise in residential exhaust systems.",
        features: ["Blade cleaning & alignment", "Motor re-winding", "Wall mount securing"],
        startingPrice: "Rs. 600"
      },
      {
        slug: "room-heater",
        name: "Room Heater Repair",
        shortDesc: "Oil-filled, quartz, and fan heater repairs.",
        description: "Comprehensive element replacement, thermostat calibration, and heating system fixes.",
        features: ["Heating coil replacement", "Thermostat fix", "Auto-cut safety verification"],
        startingPrice: "Rs. 800"
      },
      {
        slug: "cooler",
        name: "Air Cooler Repair",
        shortDesc: "Pump, motor, and cooling pad service.",
        description: "Get your air cooler performing at peak efficiency with fresh pads, pump fixes, and motor tuning.",
        features: ["Water pump replacement", "Cooling pad fitment", "Fan motor service"],
        startingPrice: "Rs. 900"
      },
      {
        slug: "electric-socket",
        name: "Electric Socket Repair",
        shortDesc: "Short circuit fixes, socket installs, and board upgrades.",
        description: "Safe and swift electrical outlet replacements, board rewiring, and surge fixes.",
        features: ["Burnt socket replacement", "Earthing checks", "Heavy-load socket setup"],
        startingPrice: "Rs. 350"
      }
    ]
  },
  {
    slug: "kitchen-items",
    name: "Kitchen Items",
    description: "Reliable fixes for cooking, refrigeration, and kitchen prep appliances.",
    services: [
      {
        slug: "refrigerator",
        name: "Refrigerator Repair",
        shortDesc: "Gas charging, compressor, and cooling troubleshooting.",
        description: "Complete repair for single-door, double-door, and side-by-side refrigerators.",
        features: ["Gas leak fix & recharge", "Compressor troubleshooting", "Defrost timer repair"],
        startingPrice: "Rs. 2,000"
      },
      {
        slug: "microwave-oven",
        name: "Microwave Oven Repair",
        shortDesc: "Magnetron, door lock, and heating panel fixes.",
        description: "Fix non-heating microwaves, sparking issues, and broken keypads.",
        features: ["Magnetron replacement", "High-voltage diode repair", "Touchpanel replacement"],
        startingPrice: "Rs. 1,200"
      },
      {
        slug: "water-purifier-repair",
        name: "Water Purifier Repair",
        shortDesc: "RO, UV, and UF filter replacement & pump maintenance.",
        description: "Ensure clean water with complete filter changes, membrane cleaning, and leak fixes.",
        features: ["Filter cartridge replacement", "Booster pump service", "TDS tuning"],
        startingPrice: "Rs. 1,000"
      },
      {
        slug: "dishwasher",
        name: "Dishwasher Repair",
        shortDesc: "Drainage, spraying, and door latch repair.",
        description: "Fix water drainage failures, uncleaned dish cycles, and control panel errors.",
        features: ["Drain pump cleaning", "Spray arm replacement", "Seal & gasket fix"],
        startingPrice: "Rs. 1,800"
      },
      {
        slug: "induction-cooktop",
        name: "Induction Cooktop Repair",
        shortDesc: "IGBT, display board, and glass top solutions.",
        description: "Overcome error codes, heating drops, and power panel issues.",
        features: ["IGBT replacement", "Coil fix", "Touch panel repair"],
        startingPrice: "Rs. 750"
      },
      {
        slug: "mixer-grinder",
        name: "Mixer Grinder Repair",
        shortDesc: "Coupler, blade, and motor coupler fixes.",
        description: "Restore grinding power, replace worn jar couplers, and fix tripped motors.",
        features: ["Motor carbon brush change", "Coupler replacement", "Jar blade alignment"],
        startingPrice: "Rs. 400"
      },
      {
        slug: "electric-kettle",
        name: "Electric Kettle Repair",
        shortDesc: "Base terminal, element, and auto shut-off fixes.",
        description: "Solve power connection issues and faulty automatic shut-off switches.",
        features: ["Thermostat switch change", "Base connector repair", "Element testing"],
        startingPrice: "Rs. 350"
      },
      {
        slug: "rice-cooker",
        name: "Rice Cooker Repair",
        shortDesc: "Thermal fuse, switch, and plate repairs.",
        description: "Keep your rice cooker from burning food or failing to turn on.",
        features: ["Thermal fuse replacement", "Keep-warm switch repair", "Bottom plate check"],
        startingPrice: "Rs. 450"
      },
      {
        slug: "juicer-and-blender",
        name: "Juicer and Blender Repair",
        shortDesc: "Blade assembly, motor, and gear replacements.",
        description: "Fix slow blades, leaking jars, and noisy blender motors.",
        features: ["Gear teeth replacement", "Leak sealing", "Motor tune-up"],
        startingPrice: "Rs. 500"
      },
      {
        slug: "gas-stove",
        name: "Gas Stove Repair",
        shortDesc: "Burner, valve, and auto-ignition repairs.",
        description: "Safely fix low flame, gas leaks, and broken ignition knobs.",
        features: ["Nozzle cleaning", "Auto-ignition spark plug change", "Pipeline leak test"],
        startingPrice: "Rs. 600"
      },
      {
        slug: "water-filter",
        name: "Water Filter Repair",
        shortDesc: "Candle replacement and gravity filter servicing.",
        description: "Quick clean and media change for standard gravity water filters.",
        features: ["Candle replacement", "Chamber sanitization", "Tap leak fix"],
        startingPrice: "Rs. 400"
      },
      {
        slug: "chimney",
        name: "Kitchen Chimney Repair",
        shortDesc: "Blower, baffle filter, and auto-clean engine fixes.",
        description: "Restore suction power and eliminate heavy grease deposits inside kitchen chimneys.",
        features: ["Deep degreasing service", "Blower motor repair", "Touch/motion sensor replacement"],
        startingPrice: "Rs. 1,500"
      },
      {
        slug: "modular-kitchen",
        name: "Modular Kitchen Repair",
        shortDesc: "Hinge adjustments, drawer slides, and cabinet fixes.",
        description: "Smooth out sticking drawers, align soft-close hinges, and fix damaged boards.",
        features: ["Hydraulic hinge change", "Channel replacement", "Water damage repair"],
        startingPrice: "Rs. 2,000"
      },
      {
        slug: "coffee-machine",
        name: "Coffee Machine Repair",
        shortDesc: "Descaling, pump pressure, and steam wand fixes.",
        description: "Fix espresso extraction issues, leaks, and steam wand pressure drops.",
        features: ["Professional descaling", "Vibration pump replacement", "Gasket renewal"],
        startingPrice: "Rs. 1,200"
      }
    ]
  },
  {
    slug: "computer-related",
    name: "Computer Related",
    description: "IT support, hardware repair, and networking for home and office.",
    services: [
      {
        slug: "laptop",
        name: "Laptop Repair",
        shortDesc: "Screen replacement, hinge fix, and motherboard repair.",
        description: "Complete hardware and software diagnostics for modern laptops.",
        features: ["Screen/LCD replacement", "Battery & charging port fix", "OS & malware removal"],
        startingPrice: "Rs. 1,500"
      },
      {
        slug: "desktop-computer",
        name: "Desktop Computer Repair",
        shortDesc: "Custom PC build repairs, PSU, and RAM upgrades.",
        description: "Troubleshoot blue screens, slow performance, power failures, and component upgrades.",
        features: ["PSU replacement", "Thermal paste re-application", "Hardware upgrades"],
        startingPrice: "Rs. 1,000"
      },
      {
        slug: "printer",
        name: "Printer Repair",
        shortDesc: "Paper jam, roller, ink head, and toner fixes.",
        description: "Fix ink clogging, paper feed jams, and wireless connectivity errors.",
        features: ["Printhead declogging", "Roller cleaning/change", "Cartridge reset"],
        startingPrice: "Rs. 800"
      },
      {
        slug: "wifi-secondary-router",
        name: "WiFi Secondary Router Setup & Repair",
        shortDesc: "Range extension, mesh config, and port setup.",
        description: "Extend your home WiFi range and fix dropping connections or slow speeds.",
        features: ["Access point configuration", "Range extender setup", "Firmware update"],
        startingPrice: "Rs. 600"
      },
      {
        slug: "cctv-camera",
        name: "CCTV Camera Repair",
        shortDesc: "DVR configuration, night-vision, and wiring fixes.",
        description: "Restore video feeds, fix DVR hard drive errors, and re-wire camera units.",
        features: ["BNC connector replacement", "DVR/NVR HDD setup", "Camera position alignment"],
        startingPrice: "Rs. 1,200"
      },
      {
        slug: "ups",
        name: "UPS Repair",
        shortDesc: "Battery swaps and internal circuit repairs.",
        description: "Fix constant beeping, zero battery backup, and power trip issues.",
        features: ["Lead-acid battery swap", "Inverter circuit fix", "Overload reset"],
        startingPrice: "Rs. 700"
      },
      {
        slug: "intercom-system",
        name: "Intercom System Repair",
        shortDesc: "Audio crackle, line fault, and extension setup.",
        description: "Fix apartment and office intercom lines for crystal-clear communication.",
        features: ["Cable line testing", "Receiver replacement", "PBX extension setup"],
        startingPrice: "Rs. 1,000"
      }
    ]
  },
  {
    slug: "electronics-items",
    name: "Electronics Items",
    description: "Entertainment systems, major home appliances, and cooling units.",
    services: [
      {
        slug: "television",
        name: "Television Repair",
        shortDesc: "LED backlighting, display panel, and sound fixes.",
        description: "Fix black screens, missing audio, line artifacts, and HDMI board failure.",
        features: ["LED strip replacement", "Power board repair", "Software flashing"],
        startingPrice: "Rs. 1,800"
      },
      {
        slug: "washing-machine",
        name: "Washing Machine Repair",
        shortDesc: "Drum spinning, drainage pump, and board solutions.",
        description: "Fix front-load and top-load washers for noise, leaks, or drum rotation failure.",
        features: ["Drain pump replacement", "Belt & bearing fix", "Control board repair"],
        startingPrice: "Rs. 1,500"
      },
      {
        slug: "air-conditioner",
        name: "Air Conditioner Repair",
        shortDesc: "Gas refill, compressor start, and deep wet service.",
        description: "Complete AC maintenance including foam jet cleaning, refrigerant top-ups, and fan repairs.",
        features: ["Refrigerant leak fix", "PCB circuit repair", "Wet pressure washing"],
        startingPrice: "Rs. 2,500"
      },
      {
        slug: "vacuum-cleaner",
        name: "Vacuum Cleaner Repair",
        shortDesc: "Suction power loss, cord retract, and motor fix.",
        description: "Fix overheating vacuum motors, clogged hoses, and broken roller brushes.",
        features: ["HEPA filter change", "Suction motor overhaul", "Cord reel fix"],
        startingPrice: "Rs. 800"
      },
      {
        slug: "gas-geyser",
        name: "Gas Geyser Repair",
        shortDesc: "Burner, solenoid valve, and thermostat fixes.",
        description: "Ensure safe water heating with gas leak checks, diaphragm changes, and spark fixes.",
        features: ["Diaphragm replacement", "Solenoid valve change", "Gas pressure tuning"],
        startingPrice: "Rs. 1,200"
      },
      {
        slug: "woofer",
        name: "Subwoofer / Woofer Repair",
        shortDesc: "Sound distortion, amplifier, and cone repair.",
        description: "Fix distorted bass response, dead subwoofers, and blown amplifier boards.",
        features: ["Speaker cone re-foaming", "Amp board component fix", "Input jack repair"],
        startingPrice: "Rs. 900"
      }
    ]
  },
  {
    slug: "other",
    name: "Other Services",
    description: "General home maintenance, carpentry, plumbing, and structural repairs.",
    services: [
      {
        slug: "water-pump",
        name: "Water Pump Repair",
        shortDesc: "Submersible, jet pump, and pressure pump service.",
        description: "Resolve priming issues, motor winding failures, and water delivery drops.",
        features: ["Impeller replacement", "Bearing grease & swap", "Capacitor check"],
        startingPrice: "Rs. 1,200"
      },
      {
        slug: "door",
        name: "Door & Lock Repair",
        shortDesc: "Hinge alignment, latch replacement, and wooden repair.",
        description: "Fix sagging doors, sticking deadbolts, and broken frame hinges.",
        features: ["Lock cylinder swap", "Plane & align edges", "Hinge reinforcement"],
        startingPrice: "Rs. 800"
      },
      {
        slug: "solar-panel",
        name: "Solar Panel Maintenance",
        shortDesc: "Cleaning, inverter link, and output diagnostics.",
        description: "Maximize your solar output with deep cleaning and connection inspections.",
        features: ["Glass surface cleaning", "DC wiring inspection", "Inverter sync check"],
        startingPrice: "Rs. 2,500"
      },
      {
        slug: "electric-vehicle-charger",
        name: "EV Charger Installation & Repair",
        shortDesc: "Wallbox mounting, cabling, and power fault fixes.",
        description: "Keep your EV charging safely with certified high-voltage cable and terminal repairs.",
        features: ["Earthing verification", "Wallbox mounting", "Breaker upgrade"],
        startingPrice: "Rs. 3,000"
      },
      {
        slug: "revolving-chair",
        name: "Revolving Chair Repair",
        shortDesc: "Hydraulic gas lift, wheel castor, and base swap.",
        description: "Fix sinking office chairs, broken tilt mechanisms, and squeaky bases.",
        features: ["Hydraulic cylinder swap", "Castor wheel replacement", "Base plate repair"],
        startingPrice: "Rs. 700"
      },
      {
        slug: "sofa",
        name: "Sofa Repair & Upholstery",
        shortDesc: "Cushion sagging, spring fix, and fabric renewal.",
        description: "Restore original comfort with high-density foam filling and structural frame repair.",
        features: ["Foam re-padding", "Webbing & spring tightening", "Frame joint repair"],
        startingPrice: "Rs. 2,000"
      },
      {
        slug: "water-tank",
        name: "Water Tank Repair & Cleaning",
        shortDesc: "Leak patching, sludge removal, and sanitization.",
        description: "Hygienic high-pressure cleaning and plastic/concrete tank leak sealing.",
        features: ["Vacuum sludge clearance", "UV disinfection", "Polyurethane leak seal"],
        startingPrice: "Rs. 1,500"
      },
      {
        slug: "commode",
        name: "Commode & Toilet Repair",
        shortDesc: "Flush valve, wax ring, and seat cover replacement.",
        description: "Stop running toilet water, fix flush tank mechanisms, and reset floor seals.",
        features: ["Flush kit replacement", "Wax ring reseal", "Seat hinge fix"],
        startingPrice: "Rs. 800"
      },
      {
        slug: "window",
        name: "Window Repair",
        shortDesc: "Sliding track, glass pane, and latch fixes.",
        description: "Repair aluminum, UPVC, and wooden windows for smooth operation.",
        features: ["Track roller replacement", "Glass pane sealing", "Handle replacement"],
        startingPrice: "Rs. 900"
      },
      {
        slug: "plumbing",
        name: "General Plumbing Services",
        shortDesc: "Pipe leak fixes, tap changes, and blockage clearance.",
        description: "Comprehensive plumbing repairs for kitchens, bathrooms, and outdoor pipes.",
        features: ["Pipe leak repair", "Tap & mixer fitting", "Drain unblocking"],
        startingPrice: "Rs. 800"
      },
      {
        slug: "false-ceiling",
        name: "False Ceiling Repair",
        shortDesc: "Gypsum sheet fix, crack sealing, and sagging repair.",
        description: "Restore damaged false ceilings due to water leakage or structural sagging.",
        features: ["Crack patching", "Channel re-anchoring", "Spot painting"],
        startingPrice: "Rs. 1,800"
      },
      {
        slug: "generator",
        name: "Generator Repair",
        shortDesc: "Diesel & petrol generator servicing & alternator fixes.",
        description: "Engine oil changing, spark plug checks, and voltage regulator adjustments.",
        features: ["Oil & filter change", "AVR replacement", "Starter motor overhaul"],
        startingPrice: "Rs. 3,500"
      },
      {
        slug: "lift-escalator",
        name: "Lift & Escalator Maintenance",
        shortDesc: "Safety inspection, motor check, and track alignment.",
        description: "Commercial and residential elevator and escalator maintenance and repairs.",
        features: ["Safety brake test", "Door sensor calibration", "Cable lubrication"],
        startingPrice: "Rs. 5,000"
      },
      {
        slug: "treadmill",
        name: "Treadmill Repair",
        shortDesc: "Belt alignment, motor controller, and deck lubrication.",
        description: "Fix slipping belts, error codes (E01, E02), and incline motor failures.",
        features: ["Belt lubrication & tensioning", "Control board fix", "Drive belt replacement"],
        startingPrice: "Rs. 1,500"
      },
      {
        slug: "lawn-mower",
        name: "Lawn Mower Repair",
        shortDesc: "Blade sharpening, starter pull cord, and engine tuning.",
        description: "Tune up electric and petrol lawn mowers for clean cutting.",
        features: ["Blade sharpening & balancing", "Carburetor cleaning", "Pull cord change"],
        startingPrice: "Rs. 1,200"
      }
    ]
  }
];
