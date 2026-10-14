import { ServiceCategory } from "@/types";

export const serviceList: ServiceCategory[] = [
  {
    slug: "electric-items",
    name: "Electric Items",
    description: "Expert repair and maintenance for home electrical appliances and fixtures.",
    image: "/repair/electric/thumb.jpg",
    services: [
      {
        slug: "inverter",
        name: "Inverter Repair",
        shortDesc: "Complete battery, PCB, and wiring diagnostic services.",
        description:
          "Professional inverter diagnostic, battery health assessment, and circuit repairs to keep your backup power running reliably. Our certified technicians troubleshoot power outages, charging failures, and erratic inverter behavior with advanced diagnostic tools to ensure seamless performance during emergencies.",
        features: ["Battery status checking", "PCB board repair", "Fuse & wiring replacement"],
        image: "/repair/electric/inverter.jpg",
        startingPrice: 800,
        rating: 4.8,
        reviewCount: 42,
        reviews: [
          {
            userName: "Ramesh Shrestha",
            rating: 5,
            comment: "Loadshedding ko bela inverter le kaam gareko thiyenap, daami banaidinubhayo. Fast service!",
            date: "2026-02-15"
          },
          {
            userName: "Sujata Adhikari",
            rating: 4.5,
            comment: "PCB board repair made easy and affordable. Technician was very polite.",
            date: "2026-03-01"
          }
        ]
      },
      {
        slug: "electric-fan",
        name: "Electric Fan Repair",
        shortDesc: "Ceiling, pedestal, and wall fan motor and capacitor service.",
        description:
          "Fast fix for noisy motors, speed regulator issues, and dead fan capacitors. Whether your ceiling fan wobbles or your pedestal fan fails to oscillate, our experts provide prompt servicing, winding restoration, and bearing lubrication to restore cool airflow.",
        features: ["Winding & motor repair", "Capacitor replacement", "Noise reduction"],
        image: "/repair/electric/fan.jpg",
        startingPrice: 350,
        rating: 4.6,
        reviewCount: 68,
        reviews: [
          {
            userName: "Bikash Gurung",
            rating: 5,
            comment: "Capacitor feridieko fanko speed ekdamai fast bhayo. Very satisfied.",
            date: "2026-01-20"
          }
        ]
      },
      {
        slug: "exhaust-fan",
        name: "Exhaust Fan Repair",
        shortDesc: "Kitchen and bathroom ventilation fan fixes.",
        description:
          "Resolve suction problems, motor burnouts, and excessive noise in residential exhaust systems. We thoroughly clean grease build-up, align blades, and replace faulty motors to ensure efficient smoke and odor extraction in kitchens and bathrooms.",
        features: ["Blade cleaning & alignment", "Motor re-winding", "Wall mount securing"],
        image: "/repair/electric/exhaust.jpg",
        startingPrice: 400,
        rating: 4.5,
        reviewCount: 29,
        reviews: [
          {
            userName: "Pratima Thapa",
            rating: 4,
            comment: "Kitchen ko exhaust noise reduce bhayo, smoke ramro sanga tanirachha.",
            date: "2026-02-28"
          }
        ]
      },
      {
        slug: "room-heater",
        name: "Room Heater Repair",
        shortDesc: "Oil-filled, quartz, and fan heater repairs.",
        description:
          "Comprehensive element replacement, thermostat calibration, and heating system fixes for all types of room heaters. We ensure your heating units operate safely and efficiently during freezing winters, minimizing risks of short circuits or thermal overloads.",
        features: ["Heating coil replacement", "Thermostat fix", "Auto-cut safety verification"],
        image: "/repair/electric/heater.jpg",
        startingPrice: 500,
        rating: 4.7,
        reviewCount: 51,
        reviews: [
          {
            userName: "Kiran Maharjan",
            rating: 5,
            comment: "Hiundama heater Bigriyera dukha payeko thiye, time ma aayer banaidinubhayo.",
            date: "2026-01-05"
          }
        ]
      },
      {
        slug: "cooler",
        name: "Air Cooler Repair",
        shortDesc: "Pump, motor, and cooling pad service.",
        description:
          "Get your air cooler performing at peak efficiency with fresh pads, pump fixes, and motor tuning. We resolve water leakage, low airflow, and pump failures to ensure a refreshing and cool breeze throughout the summer season.",
        features: ["Water pump replacement", "Cooling pad fitment", "Fan motor service"],
        image: "/repair/electric/cooler.jpg",
        startingPrice: 600,
        rating: 4.4,
        reviewCount: 33,
        reviews: [
          {
            userName: "Suresh Chaudhari",
            rating: 4.5,
            comment: "Water pump change garepachhi chill haawa aairachha. Good work.",
            date: "2026-03-10"
          }
        ]
      },
      {
        slug: "electric-socket",
        name: "Electric Socket Repair",
        shortDesc: "Short circuit fixes, socket installs, and board upgrades.",
        description:
          "Safe and swift electrical outlet replacements, board rewiring, and surge fixes. Our licensed electricians fix loose connections, replace burnt-out sockets, and check earthing to protect your home appliances from voltage fluctuations and electrical hazards.",
        features: ["Burnt socket replacement", "Earthing checks", "Heavy-load socket setup"],
        image: "/repair/electric/socket.jpg",
        startingPrice: 250,
        rating: 4.9,
        reviewCount: 88,
        reviews: [
          {
            userName: "Anil Giri",
            rating: 5,
            comment: "Short circuit bhaeko thiyo, safe sanga daami kaam garidienubhayo.",
            date: "2026-03-22"
          }
        ]
      }
    ]
  },
  {
    slug: "kitchen-items",
    name: "Kitchen Items",
    description: "Reliable fixes for cooking, refrigeration, and kitchen prep appliances.",
    image: "/repair/kitchen/thumb.jpg",
    services: [
      {
        slug: "refrigerator",
        name: "Refrigerator Repair",
        shortDesc: "Gas charging, compressor, and cooling troubleshooting.",
        description:
          "Complete repair for single-door, double-door, and side-by-side refrigerators. We handle complex issues including gas leaks, cooling failures, unusual compressor noises, and thermostat malfunctions to keep your food fresh and hygienic.",
        features: ["Gas leak fix & recharge", "Compressor troubleshooting", "Defrost timer repair"],
        image: "/repair/kitchen/refrigerator.jpg",
        startingPrice: 1500,
        rating: 4.8,
        reviewCount: 112,
        reviews: [
          {
            userName: "Sunita Sharma",
            rating: 5,
            comment: "Fridge cooling nai bhako thiyena, gas refill gare pachhi ekdum chilled bhako chha.",
            date: "2026-02-18"
          },
          {
            userName: "Dipendra Basnet",
            rating: 4.5,
            comment: "Compressor ko issue smoothly resolve bhayo. Reasonable pricing.",
            date: "2026-03-05"
          }
        ]
      },
      {
        slug: "microwave-oven",
        name: "Microwave Oven Repair",
        shortDesc: "Magnetron, door lock, and heating panel fixes.",
        description:
          "Fix non-heating microwaves, sparking issues, and broken keypads. Our technicians restore full functionality to your oven by replacing damaged magnetrons, high-voltage fuses, and faulty control interfaces safely.",
        features: ["Magnetron replacement", "High-voltage diode repair", "Touchpanel replacement"],
        image: "/repair/kitchen/microwave.jpg",
        startingPrice: 900,
        rating: 4.6,
        reviewCount: 45,
        reviews: [
          {
            userName: "Manish Joshi",
            rating: 5,
            comment: "Heat nai bhako thiyena, magnetron change gardepachhi perfect cha.",
            date: "2026-01-29"
          }
        ]
      },
      {
        slug: "water-purifier",
        name: "Water Purifier Repair",
        shortDesc: "RO, UV, and UF filter replacement & pump maintenance.",
        description:
          "Ensure clean water with complete filter changes, membrane cleaning, and leak fixes. We service all major water purification systems to eliminate impurities, bad tastes, and TDS imbalances, safeguarding your family's health.",
        features: ["Filter cartridge replacement", "Booster pump service", "TDS tuning"],
        image: "/repair/kitchen/purifier.jpg",
        startingPrice: 700,
        rating: 4.9,
        reviewCount: 95,
        reviews: [
          {
            userName: "Aarti Tamang",
            rating: 5,
            comment: "Filter change garepachhi pani ko taste ekdum saaf aako chha. Very punctual.",
            date: "2026-03-14"
          }
        ]
      },
      {
        slug: "dishwasher",
        name: "Dishwasher Repair",
        shortDesc: "Drainage, spraying, and door latch repair.",
        description:
          "Fix water drainage failures, uncleaned dish cycles, and control panel errors. We unclog spray arms, replace worn door gaskets, and restore optimal washing performance to make kitchen cleanup effortless.",
        features: ["Drain pump cleaning", "Spray arm replacement", "Seal & gasket fix"],
        image: "/repair/kitchen/dishwasher.jpg",
        startingPrice: 1200,
        rating: 4.3,
        reviewCount: 18,
        reviews: [
          {
            userName: "Saroj Karki",
            rating: 4,
            comment: "Drainage issue thiyo, clean garera milaidinubhayo. Good service.",
            date: "2026-02-02"
          }
        ]
      },
      {
        slug: "induction-cooktop",
        name: "Induction Cooktop Repair",
        shortDesc: "IGBT, display board, and glass top solutions.",
        description:
          "Overcome error codes, heating drops, and power panel issues with professional component-level repairs. We replace damaged IGBTs, fix cracked glass surfaces, and calibrate touch panels for safe and efficient cooking.",
        features: ["IGBT replacement", "Coil fix", "Touch panel repair"],
        image: "/repair/kitchen/induction.jpg",
        startingPrice: 500,
        rating: 4.7,
        reviewCount: 76,
        reviews: [
          {
            userName: "Binod Rai",
            rating: 5,
            comment: "Error E0 dekhaira thiyo, ekai ghanta ma aera banaidienu bhayo.",
            date: "2026-03-18"
          }
        ]
      },
      {
        slug: "mixer-grinder",
        name: "Mixer Grinder Repair",
        shortDesc: "Coupler, blade, and motor coupler fixes.",
        description:
          "Restore grinding power, replace worn jar couplers, and fix tripped motors. Our specialists service all major mixer-grinder brands to reduce noise, prevent burning smells, and ensure smooth food processing.",
        features: ["Motor carbon brush change", "Coupler replacement", "Jar blade alignment"],
        image: "/repair/kitchen/mixer.jpg",
        startingPrice: 300,
        rating: 4.5,
        reviewCount: 62,
        reviews: [
          {
            userName: "Gita Bhandari",
            rating: 4.5,
            comment: "Coupler ra blade change gardinubhayo, aawaj ni kam bhayo.",
            date: "2026-02-12"
          }
        ]
      },
      {
        slug: "electric-kettle",
        name: "Electric Kettle Repair",
        shortDesc: "Base terminal, element, and auto shut-off fixes.",
        description:
          "Solve power connection issues and faulty automatic shut-off switches. We repair base connectors, replace burnt heating elements, and ensure your kettle boils water quickly and safely every time.",
        features: ["Thermostat switch change", "Base connector repair", "Element testing"],
        image: "/repair/kitchen/kettle.jpg",
        startingPrice: 250,
        rating: 4.4,
        reviewCount: 38,
        reviews: [
          {
            userName: "Deepak Khadka",
            rating: 4,
            comment: "Auto shut-off bhaka thiyena, switch feridiye pachhi thik bhayo.",
            date: "2026-01-19"
          }
        ]
      },
      {
        slug: "rice-cooker",
        name: "Rice Cooker Repair",
        shortDesc: "Thermal fuse, switch, and plate repairs.",
        description:
          "Keep your rice cooker from burning food or failing to turn on. We replace blown thermal fuses, fix sticky keep-warm switches, and inspect bottom heating plates for reliable meal preparation.",
        features: ["Thermal fuse replacement", "Keep-warm switch repair", "Bottom plate check"],
        image: "/repair/kitchen/ricecooker.jpg",
        startingPrice: 300,
        rating: 4.6,
        reviewCount: 54,
        reviews: [
          {
            userName: "Nirmala Poudel",
            rating: 5,
            comment: "On nai bhako thiyena, thermal fuse change garesi sabaai milo.",
            date: "2026-02-25"
          }
        ]
      },
      {
        slug: "juicer-and-blender",
        name: "Juicer and Blender Repair",
        shortDesc: "Blade assembly, motor, and gear replacements.",
        description:
          "Fix slow blades, leaking jars, and noisy blender motors. We replace stripped gear teeth, seal leaks with fresh gaskets, and tune up motors for smooth smoothie making and juice extraction.",
        features: ["Gear teeth replacement", "Leak sealing", "Motor tune-up"],
        image: "/repair/kitchen/blender.jpg",
        startingPrice: 350,
        rating: 4.5,
        reviewCount: 31,
        reviews: [
          {
            userName: "Rabindra Shakya",
            rating: 4.5,
            comment: "Jar bata leak bhaerokothiyo, gaskeet badlepachhi thik chha.",
            date: "2026-03-08"
          }
        ]
      },
      {
        slug: "gas-stove",
        name: "Gas Stove Repair",
        shortDesc: "Burner, valve, and auto-ignition repairs.",
        description:
          "Safely fix low flame, gas leaks, and broken ignition knobs. Our certified technicians clean clogged burner nozzles, repair pipeline connections, and service auto-ignition systems for safe and hassle-free cooking.",
        features: ["Nozzle cleaning", "Auto-ignition spark plug change", "Pipeline leak test"],
        image: "/repair/kitchen/gasstove.jpg",
        startingPrice: 400,
        rating: 4.8,
        reviewCount: 80,
        reviews: [
          {
            userName: "Saraswati Bhattarai",
            rating: 5,
            comment: "Low flame problem thiyo, nozzle saaf garesi flame ramro aayo.",
            date: "2026-03-20"
          }
        ]
      },
      {
        slug: "water-filter",
        name: "Water Filter Repair",
        shortDesc: "Candle replacement and gravity filter servicing.",
        description:
          "Quick clean and media change for standard gravity water filters. We sanitize storage chambers, replace dirty filter candles, and fix leaking taps to ensure safe drinking water at all times.",
        features: ["Candle replacement", "Chamber sanitization", "Tap leak fix"],
        image: "/repair/kitchen/filter.jpg",
        startingPrice: 300,
        rating: 4.3,
        reviewCount: 22,
        reviews: [
          {
            userName: "Hari Prasad Shrestha",
            rating: 4,
            comment: "Filter candle change and tap replacement done quickly.",
            date: "2026-01-30"
          }
        ]
      },
      {
        slug: "chimney",
        name: "Kitchen Chimney Repair",
        shortDesc: "Blower, baffle filter, and auto-clean engine fixes.",
        description:
          "Restore suction power and eliminate heavy grease deposits inside kitchen chimneys through specialized deep cleaning and motor maintenance. We repair touch panels, motion sensors, and noisy blowers to keep your kitchen smoke-free.",
        features: ["Deep degreasing service", "Blower motor repair", "Touch/motion sensor replacement"],
        image: "/repair/kitchen/chimney.jpg",
        startingPrice: 1200,
        rating: 4.7,
        reviewCount: 64,
        reviews: [
          {
            userName: "Laxmi Regmi",
            rating: 5,
            comment: "Chimney deep clean garesi new jastai bhayo! Suction pani dherai badhyo.",
            date: "2026-02-14"
          }
        ]
      },
      {
        slug: "modular-kitchen",
        name: "Modular Kitchen Repair",
        shortDesc: "Hinge adjustments, drawer slides, and cabinet fixes.",
        description:
          "Smooth out sticking drawers, align soft-close hinges, and fix damaged boards. We reinforce structural frames, replace rusted hydraulic channels, and restore your modular kitchen cabinets to like-new condition.",
        features: ["Hydraulic hinge change", "Channel replacement", "Water damage repair"],
        image: "/repair/kitchen/modular.jpg",
        startingPrice: 800,
        rating: 4.6,
        reviewCount: 37,
        reviews: [
          {
            userName: "Aavash Pradhan",
            rating: 5,
            comment: "Hydraulic hinges lose bhako thiyo, bideshi branded hinges halera tight garidienu bhayo.",
            date: "2026-03-11"
          }
        ]
      },
      {
        slug: "coffee-machine",
        name: "Coffee Machine Repair",
        shortDesc: "Descaling, pump pressure, and steam wand fixes.",
        description:
          "Fix espresso extraction issues, leaks, and steam wand pressure drops. We perform professional descaling, replace worn vibration pumps, and renew internal gaskets to keep your morning coffee brewing to perfection.",
        features: ["Professional descaling", "Vibration pump replacement", "Gasket renewal"],
        image: "/repair/kitchen/coffee.jpg",
        startingPrice: 1000,
        rating: 4.5,
        reviewCount: 19,
        reviews: [
          {
            userName: "Nirjan Subedi",
            rating: 4.5,
            comment: "Steam wand ma pressure aako thiyena, descaling garera pressure fix bhayo.",
            date: "2026-02-19"
          }
        ]
      }
    ]
  },
  {
    slug: "computer-related",
    name: "Computer Related",
    description: "IT support, hardware repair, and networking for home and office.",
    image: "/repair/computer/thumb.jpg",
    services: [
      {
        slug: "laptop",
        name: "Laptop Repair",
        shortDesc: "Screen replacement, hinge fix, and motherboard repair.",
        description:
          "Complete hardware and software diagnostics for modern laptops. We resolve broken screens, replace damaged charging ports, fix stiff or broken hinges, remove malware, and upgrade operating systems for peak performance.",
        features: ["Screen/LCD replacement", "Battery & charging port fix", "OS & malware removal"],
        image: "/repair/computer/laptop.jpg",
        startingPrice: 1000,
        rating: 4.9,
        reviewCount: 145,
        reviews: [
          {
            userName: "Sujan Karki",
            rating: 5,
            comment: "Display change ra SSD upgrade ekai din ma bhaidiyo. Highly recommended!",
            date: "2026-03-01"
          },
          {
            userName: "Pooja Neupane",
            rating: 5,
            comment: "Hinge bhaachiyeko thiyo, khataam nadikhiye gari banaidinubhayo.",
            date: "2026-03-21"
          }
        ]
      },
      {
        slug: "desktop-computer",
        name: "Desktop Computer Repair",
        shortDesc: "Custom PC build repairs, PSU, and RAM upgrades.",
        description:
          "Troubleshoot blue screens, slow performance, power failures, and component upgrades for custom and branded desktop PCs. We replace faulty power supply units, reapply thermal paste to prevent overheating, and optimize hardware configurations.",
        features: ["PSU replacement", "Thermal paste re-application", "Hardware upgrades"],
        image: "/repair/computer/desktop.jpg",
        startingPrice: 800,
        rating: 4.7,
        reviewCount: 58,
        reviews: [
          {
            userName: "Ayush Pokharel",
            rating: 5,
            comment: "PC overheating ra blue screen aawne bhyeko thiyo. Thermal paste change and cleanup is awesome.",
            date: "2026-02-11"
          }
        ]
      },
      {
        slug: "printer",
        name: "Printer Repair",
        shortDesc: "Paper jam, roller, ink head, and toner fixes.",
        description:
          "Fix ink clogging, paper feed jams, and wireless connectivity errors across inkjet and laser printers. Our technicians declog printheads, clean paper rollers, and reset cartridges for clear, smudge-free printing.",
        features: ["Printhead declogging", "Roller cleaning/change", "Cartridge reset"],
        image: "/repair/computer/printer.jpg",
        startingPrice: 600,
        rating: 4.4,
        reviewCount: 41,
        reviews: [
          {
            userName: "Kamal Gautam",
            rating: 4,
            comment: "Epson printer print head clogged thiyo, saaf garera sharp print aako chha.",
            date: "2026-01-25"
          }
        ]
      },
      {
        slug: "wifi-secondary-router",
        name: "WiFi Secondary Router Repair",
        shortDesc: "Range extension, mesh config, and port setup.",
        description:
          "Extend your home WiFi range and fix dropping connections or slow speeds. We configure access points, set up range extenders and mesh networks, and update firmware for uninterrupted internet connectivity.",
        features: ["Access point configuration", "Range extender setup", "Firmware update"],
        image: "/repair/computer/router.jpg",
        startingPrice: 500,
        rating: 4.6,
        reviewCount: 35,
        reviews: [
          {
            userName: "Roshan Tamrakar",
            rating: 5,
            comment: "Maha tola varai WiFi coverage puryaedinubhayo secondary router setup garera.",
            date: "2026-03-04"
          }
        ]
      },
      {
        slug: "cctv-camera",
        name: "CCTV Camera Repair",
        shortDesc: "DVR configuration, night-vision, and wiring fixes.",
        description:
          "Restore video feeds, fix DVR hard drive errors, and re-wire camera units to ensure round-the-clock security surveillance. We replace damaged BNC connectors and fix night-vision infrared failures.",
        features: ["BNC connector replacement", "DVR/NVR HDD setup", "Camera position alignment"],
        image: "/repair/computer/cctv.jpg",
        startingPrice: 800,
        rating: 4.8,
        reviewCount: 52,
        reviews: [
          {
            userName: "Santosh आले",
            rating: 5,
            comment: "Shop ko CCTV camera no signal aairathiyo, wiring leak solve bhayo.",
            date: "2026-02-27"
          }
        ]
      },
      {
        slug: "ups",
        name: "UPS Repair",
        shortDesc: "Battery swaps and internal circuit repairs.",
        description:
          "Fix constant beeping, zero battery backup, and power trip issues in computer UPS units. We perform safe lead-acid battery replacements and repair internal inverter circuits for reliable emergency backup.",
        features: ["Lead-acid battery swap", "Inverter circuit fix", "Overload reset"],
        image: "/repair/computer/ups.jpg",
        startingPrice: 450,
        rating: 4.5,
        reviewCount: 27,
        reviews: [
          {
            userName: "Rabin Thapa",
            rating: 4.5,
            comment: "UPS battery change garnubhayo quickly. Backup ramro dirachha.",
            date: "2026-01-14"
          }
        ]
      },
      {
        slug: "intercom-system",
        name: "Intercom System Repair",
        shortDesc: "Audio crackle, line fault, and extension setup.",
        description:
          "Fix apartment and office intercom lines for crystal-clear communication. We test cable lines, replace faulty receivers, and configure PBX extensions to eliminate static interference and connection drops.",
        features: ["Cable line testing", "Receiver replacement", "PBX extension setup"],
        image: "/repair/computer/intercom.jpg",
        startingPrice: 700,
        rating: 4.3,
        reviewCount: 16,
        reviews: [
          {
            userName: "Bishal Thapa",
            rating: 4,
            comment: "Office intercom crackling sound repair worked well.",
            date: "2026-03-15"
          }
        ]
      }
    ]
  },
  {
    slug: "electronic-items",
    name: "Electronic Items",
    description: "Entertainment systems, major home appliances, and cooling units.",
    image: "/repair/electronic/thumb.jpg",
    services: [
      {
        slug: "television",
        name: "Television Repair",
        shortDesc: "LED backlighting, display panel, and sound fixes.",
        description:
          "Fix black screens, missing audio, line artifacts, and HDMI board failure on LED, LCD, and Smart TVs. We replace burnt LED strips, repair power supply boards, and flash software to restore cinematic home entertainment.",
        features: ["LED strip replacement", "Power board repair", "Software flashing"],
        image: "/repair/electronic/television.jpg",
        startingPrice: 1200,
        rating: 4.8,
        reviewCount: 104,
        reviews: [
          {
            userName: "Ganesh Gurung",
            rating: 5,
            comment: "TV ma sound aawne tara picture naaawne thiyo. Backlight strip change garera daami bhayo.",
            date: "2026-02-08"
          },
          {
            userName: "Srijana Khadka",
            rating: 4.5,
            comment: "Prompt response and great service at home.",
            date: "2026-03-12"
          }
        ]
      },
      {
        slug: "washing-machine",
        name: "Washing Machine Repair",
        shortDesc: "Drum spinning, drainage pump, and board solutions.",
        description:
          "Fix front-load and top-load washers for noise, leaks, or drum rotation failure. We replace worn-out tub bearings, clear blocked drain pumps, and repair control boards to ensure spotless laundry cycles.",
        features: ["Drain pump replacement", "Belt & bearing fix", "Control board repair"],
        image: "/repair/electronic/washing.jpg",
        startingPrice: 1000,
        rating: 4.7,
        reviewCount: 89,
        reviews: [
          {
            userName: "Anju Shrestha",
            rating: 5,
            comment: "Spin cycle ma noise thiyo, bearing change gardepachhi silent bhayo.",
            date: "2026-03-07"
          }
        ]
      },
      {
        slug: "air-conditioner",
        name: "Air Conditioner Repair",
        shortDesc: "Gas refill, compressor start, and deep wet service.",
        description:
          "Complete AC maintenance including foam jet cleaning, refrigerant top-ups, and fan repairs. We troubleshoot cooling inefficiencies, fix refrigerant leaks, and service PCB circuits to ensure chilly indoor comfort during hot days.",
        features: ["Refrigerant leak fix", "PCB circuit repair", "Wet pressure washing"],
        image: "/repair/electronic/ac.jpg",
        startingPrice: 1500,
        rating: 4.9,
        reviewCount: 130,
        reviews: [
          {
            userName: "Bibek Subedi",
            rating: 5,
            comment: "AC ko jet wash and gas refilling service super quick. Cooling ekdum chilled chha.",
            date: "2026-03-19"
          }
        ]
      },
      {
        slug: "vacuum-cleaner",
        name: "Vacuum Cleaner Repair",
        shortDesc: "Suction power loss, cord retract, and motor fix.",
        description:
          "Fix overheating vacuum motors, clogged hoses, and broken roller brushes. We replace HEPA filters, overhaul suction motors, and repair automatic cord reels to restore powerful dust-removal capabilities.",
        features: ["HEPA filter change", "Suction motor overhaul", "Cord reel fix"],
        image: "/repair/electronic/vacuum.jpg",
        startingPrice: 600,
        rating: 4.5,
        reviewCount: 36,
        reviews: [
          {
            userName: "Mamta Maharjan",
            rating: 4.5,
            comment: "Suction low bhaeyko thiyo, motor overhaul garera pressure aayo.",
            date: "2026-01-18"
          }
        ]
      },
      {
        slug: "gas-geyser",
        name: "Gas Geyser Repair",
        shortDesc: "Burner, solenoid valve, and thermostat fixes.",
        description:
          "Ensure safe water heating with thorough gas leak checks, diaphragm changes, and spark repairs. Our professionals tune gas pressures and replace faulty solenoid valves to provide safe and instant hot water supply.",
        features: ["Diaphragm replacement", "Solenoid valve change", "Gas pressure tuning"],
        image: "/repair/electronic/geyser.jpg",
        startingPrice: 700,
        rating: 4.8,
        reviewCount: 67,
        reviews: [
          {
            userName: "Shyam Sundar Sapkota",
            rating: 5,
            comment: "Gas geyser auto spark thiyo bhee leak test ni gardienu bhayo. Safety first!",
            date: "2026-02-04"
          }
        ]
      },
      {
        slug: "woofer",
        name: "Woofer and Subwoofer Repair",
        shortDesc: "Sound distortion, amplifier, and cone repair.",
        description:
          "Fix distorted bass response, dead subwoofers, and blown amplifier boards. We perform speaker cone re-foaming and repair audio input jacks to deliver deep, clean, and thunderous bass performance.",
        features: ["Speaker cone re-foaming", "Amp board component fix", "Input jack repair"],
        image: "/repair/electronic/woofer.jpg",
        startingPrice: 500,
        rating: 4.6,
        reviewCount: 40,
        reviews: [
          {
            userName: "Subash Thapa",
            rating: 4.5,
            comment: "Woofer cone cracked thiyo, re-foaming paxi heavy bass clean suniyeko chha.",
            date: "2026-03-02"
          }
        ]
      }
    ]
  },
  {
    slug: "other",
    name: "Other Services",
    description: "General home maintenance, carpentry, plumbing, and structural repairs.",
    image: "/repair/other/thumb.jpg",
    services: [
      {
        slug: "water-pump",
        name: "Water Pump Repair",
        shortDesc: "Submersible, jet pump, and pressure pump service.",
        description:
          "Resolve priming issues, motor winding failures, and water delivery drops across submersible and centrifugal pumps. We replace worn impellers, service bearings, and check capacitors for reliable overhead tank filling.",
        features: ["Impeller replacement", "Bearing grease & swap", "Capacitor check"],
        image: "/repair/other/pump.jpg",
        startingPrice: 800,
        rating: 4.8,
        reviewCount: 79,
        reviews: [
          {
            userName: "Nabin KC",
            rating: 5,
            comment: "Tanki ma pani tannai chhina, impeller swap garera pump firta chalidiyo.",
            date: "2026-03-16"
          }
        ]
      },
      {
        slug: "door",
        name: "Door & Lock Repair",
        shortDesc: "Hinge alignment, latch replacement, and wooden repair.",
        description:
          "Fix sagging doors, sticking deadbolts, and broken frame hinges. We plane and align swollen wooden doors, replace worn lock cylinders, and reinforce hinges for enhanced home security and smooth closure.",
        features: ["Lock cylinder swap", "Plane & align edges", "Hinge reinforcement"],
        image: "/repair/other/door.jpg",
        startingPrice: 500,
        rating: 4.6,
        reviewCount: 48,
        reviews: [
          {
            userName: "Bandana Dahal",
            rating: 4.5,
            comment: "Door lock cylinder change step by step perfectly Done.",
            date: "2026-02-22"
          }
        ]
      },
      {
        slug: "solar-panel",
        name: "Solar Panel Repair",
        shortDesc: "Cleaning, inverter link, and output diagnostics.",
        description:
          "Maximize your solar energy output with deep glass surface cleaning and comprehensive connection inspections. We check DC wiring integrity and verify inverter synchronization to ensure optimal power generation.",
        features: ["Glass surface cleaning", "DC wiring inspection", "Inverter sync check"],
        image: "/repair/other/solar.jpg",
        startingPrice: 1000,
        rating: 4.7,
        reviewCount: 34,
        reviews: [
          {
            userName: "Ashish Devkota",
            rating: 5,
            comment: "Solar output fast badyo, system inspect and panel clean pachhi.",
            date: "2026-01-28"
          }
        ]
      },
      {
        slug: "electric-vehicle-charger",
        name: "EV Charger Repair",
        shortDesc: "Wallbox mounting, cabling, and power fault fixes.",
        description:
          "Keep your electric vehicle charging safely with certified high-voltage cable testing, breaker upgrades, and professional wallbox mounting. We verify grounding integrity to prevent electrical trips during fast sessions.",
        features: ["Earthing verification", "Wallbox mounting", "Breaker upgrade"],
        image: "/repair/other/evcharger.jpg",
        startingPrice: 1200,
        rating: 4.9,
        reviewCount: 21,
        reviews: [
          {
            userName: "Prajwal Shrestha",
            rating: 5,
            comment: "Home wallbox charger issue trip bhaera basya thiyo, professional earthing fix.",
            date: "2026-03-22"
          }
        ]
      },
      {
        slug: "revolving-chair",
        name: "Revolving Chair Repair",
        shortDesc: "Hydraulic gas lift, wheel castor, and base swap.",
        description:
          "Fix sinking office chairs, broken tilt mechanisms, and squeaky bases. We replace faulty hydraulic gas lift cylinders and broken castor wheels to restore smooth height adjustment and mobility at your workspace.",
        features: ["Hydraulic cylinder swap", "Castor wheel replacement", "Base plate repair"],
        image: "/repair/other/chair.jpg",
        startingPrice: 450,
        rating: 4.6,
        reviewCount: 53,
        reviews: [
          {
            userName: "Sujan Maskey",
            rating: 5,
            comment: "Chair gas lift badliya paxi aaba talai jharnai chhodiyo. Great standard.",
            date: "2026-02-17"
          }
        ]
      },
      {
        slug: "sofa",
        name: "Sofa and Couch Repair",
        shortDesc: "Cushion sagging, spring fix, and fabric renewal.",
        description:
          "Restore original comfort to your living room seating with high-density foam filling, webbing and spring tightening, and structural frame joint repairs to eliminate sagging and wear.",
        features: ["Foam re-padding", "Webbing & spring tightening", "Frame joint repair"],
        image: "/repair/other/sofa.jpg",
        startingPrice: 1500,
        rating: 4.7,
        reviewCount: 42,
        reviews: [
          {
            userName: "Archana Pandey",
            rating: 4.5,
            comment: "Old sofa foam padding garepachhi comfortable new sofa jastai bhayo.",
            date: "2026-02-09"
          }
        ]
      },
      {
        slug: "water-tank",
        name: "Water Tank Repair",
        shortDesc: "Leak patching, sludge removal, and sanitization.",
        description:
          "Hygienic high-pressure cleaning and sludge removal combined with polyurethane leak sealing for plastic and concrete residential water tanks, ensuring clean and safe household water supply.",
        features: ["Vacuum sludge clearance", "UV disinfection", "Polyurethane leak seal"],
        image: "/repair/other/tank.jpg",
        startingPrice: 1000,
        rating: 4.8,
        reviewCount: 65,
        reviews: [
          {
            userName: "Madhav Nepal",
            rating: 5,
            comment: "Water tank cleaning and leak patch nicely done. Clear water now.",
            date: "2026-03-13"
          }
        ]
      },
      {
        slug: "commode",
        name: "Commode Repair",
        shortDesc: "Flush valve, wax ring, and seat cover replacement.",
        description:
          "Stop running toilet water, fix internal flush tank mechanisms, replace leaking wax rings, and secure loose seat hinges to ensure clean and trouble-free bathroom facilities.",
        features: ["Flush kit replacement", "Wax ring reseal", "Seat hinge fix"],
        image: "/repair/other/commode.jpg",
        startingPrice: 500,
        rating: 4.5,
        reviewCount: 50,
        reviews: [
          {
            userName: "Rita Silwal",
            rating: 4.5,
            comment: "Flush tank nonstop pani vagira thiyo, internal kit change garera stop bhayo.",
            date: "2026-01-21"
          }
        ]
      },
      {
        slug: "window",
        name: "Window Repair",
        shortDesc: "Sliding track, glass pane, and latch fixes.",
        description:
          "Repair aluminum, UPVC, and wooden windows for smooth sliding operation. We replace track rollers, seal cracked glass panes, and install fresh handles and latches to improve weatherproofing.",
        features: ["Track roller replacement", "Glass pane sealing", "Handle replacement"],
        image: "/repair/other/window.jpg",
        startingPrice: 400,
        rating: 4.4,
        reviewCount: 28,
        reviews: [
          {
            userName: "Tsering Sherpa",
            rating: 4,
            comment: "Sliding window track roller smooth banaidie, handle pani fresh halo.",
            date: "2026-02-16"
          }
        ]
      },
      {
        slug: "plumbing",
        name: "General Plumbing Repair",
        shortDesc: "Pipe leak fixes, tap changes, and blockage clearance.",
        description:
          "Comprehensive plumbing repairs for kitchens, bathrooms, and outdoor pipes. Our experienced plumbers fix concealed pipe leaks, install modern taps and mixer valves, clear stubborn drain blockages, and ensure proper water pressure throughout your property.",
        features: ["Pipe leak repair", "Tap & mixer fitting", "Drain unblocking"],
        image: "/repair/other/plumbing.jpg",
        startingPrice: 400,
        rating: 4.9,
        reviewCount: 160,
        reviews: [
          {
            userName: "Rabin Bista",
            rating: 5,
            comment: "Drainage block and bathroom pipe leak fixed in less than 30 mins. Excellent work!",
            date: "2026-03-17"
          }
        ]
      },
      {
        slug: "false-ceiling",
        name: "False Ceiling Repair",
        shortDesc: "Gypsum sheet fix, crack sealing, and sagging repair.",
        description:
          "Restore damaged false ceilings due to water leakage, physical damage, or structural sagging. We seamlessly patch cracked gypsum boards, re-anchor loose metal grid channels, and perform precise touch-up painting for an invisible finish.",
        features: ["Crack patching", "Channel re-anchoring", "Spot painting"],
        image: "/repair/other/ceiling.jpg",
        startingPrice: 1200,
        rating: 4.6,
        reviewCount: 25,
        reviews: [
          {
            userName: "Hemant Thapa",
            rating: 4.5,
            comment: "Pani le false ceiling bigriyeko thiyo, gypsum patch garera daami milaidiyo.",
            date: "2026-02-07"
          }
        ]
      },
      {
        slug: "generator",
        name: "Generator Repair",
        shortDesc: "Diesel & petrol generator servicing & alternator fixes.",
        description:
          "Engine oil changing, spark plug checks, and voltage regulator adjustments for residential and commercial backup generators. We service carburetors, overhaul faulty starter motors, and calibrate AVR units for stable voltage delivery.",
        features: ["Oil & filter change", "AVR replacement", "Starter motor overhaul"],
        image: "/repair/other/generator.jpg",
        startingPrice: 1500,
        rating: 4.7,
        reviewCount: 31,
        reviews: [
          {
            userName: "Damber Magar",
            rating: 5,
            comment: "Petrol generator start ne bhaeko thiyena, spark plug ra oil filter change garesi smooth chalyo.",
            date: "2026-01-11"
          }
        ]
      },
      {
        slug: "lift-escalator",
        name: "Lift & Escalator Repair",
        shortDesc: "Safety inspection, motor check, and track alignment.",
        description:
          "Commercial and residential elevator and escalator maintenance and repairs. Our certified technicians execute comprehensive safety brake testing, align guide rails, calibrate door sensors, and lubricate high-tension cables for smooth operation.",
        features: ["Safety brake test", "Door sensor calibration", "Cable lubrication"],
        image: "/repair/other/lift.jpg",
        startingPrice: 3500,
        rating: 4.8,
        reviewCount: 15,
        reviews: [
          {
            userName: "Rakesh Agrawal",
            rating: 5,
            comment: "Building lift door sensor and cable service was prompt and professional.",
            date: "2026-02-24"
          }
        ]
      },
      {
        slug: "treadmill",
        name: "Treadmill Repair",
        shortDesc: "Belt alignment, motor controller, and deck lubrication.",
        description:
          "Fix slipping belts, control panel error codes (E01, E02), and incline motor failures. We lubricate running decks, replace worn drive belts, and repair motor control boards to keep your home or commercial gym equipment running smoothly.",
        features: ["Belt lubrication & tensioning", "Control board fix", "Drive belt replacement"],
        image: "/repair/other/treadmill.jpg",
        startingPrice: 1000,
        rating: 4.5,
        reviewCount: 33,
        reviews: [
          {
            userName: "Pratibha Subedi",
            rating: 4.5,
            comment: "E01 error dekhai ra thiyo, control board replace garesi treadmill thik bhayo.",
            date: "2026-03-09"
          }
        ]
      },
      {
        slug: "lawn-mower",
        name: "Lawn Mower Repair",
        shortDesc: "Blade sharpening, starter pull cord, and engine tuning.",
        description:
          "Tune up electric and petrol lawn mowers for clean cutting and peak lawn maintenance. We sharpen and balance dull cutting blades, clean clogged carburetors, and replace snapped starter pull cords for fast engine starts.",
        features: ["Blade sharpening & balancing", "Carburetor cleaning", "Pull cord change"],
        image: "/repair/other/lawnmower.jpg",
        startingPrice: 700,
        rating: 4.4,
        reviewCount: 14,
        reviews: [
          {
            userName: "Bhola Nath Sharma",
            rating: 4,
            comment: "Lawn mower blade sharpening and carburetor clean done well.",
            date: "2026-02-01"
          }
        ]
      }
    ]
  }
];
