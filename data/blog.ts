import { Blog } from "@/types";

export const blogs: Blog[] = [
  {
    id: 1,
    title: "5 Signs Your Smartphone Battery Needs Replacement",
    slug: "5-signs-smartphone-battery-needs-replacement",
    image: "/blog/1.jpg",
    category: "Mobile Repair",
    author: "BIGRIYO Tech Team",
    published_date: "2026-01-15",
    summary:
      "Is your phone draining too fast or shutting down unexpectedly? Learn the key indicators that it's time for a battery swap before it swells or damages your device.",
    tags: ["Smartphone", "Battery Health", "Mobile Repair Kathmandu", "BIGRIYO"],
    content: [
      {
        heading: "Rapid Discharge & Unexpected Shutdowns",
        paragraphs: [
          "One of the earliest signs of lithium-ion degradation is a rapid charge drop. If your phone goes from 80% to 20% within a couple of hours of light usage, the battery chemical capacity has dropped significantly.",
          "Furthermore, sudden shutdowns at 20% or 30% battery level happen because the degradation prevents the battery from delivering stable voltage during peak processor loads.",
          "When you open power-intensive applications like camera software or 3D games, the processor requests a sudden surge of current. An aging battery cannot sustain this peak voltage output, forcing the power management integrated circuit (PMIC) to trigger a safety shutdown to protect internal electronics."
        ]
      },
      {
        heading: "Overheating While Charging & Daily Tasks",
        paragraphs: [
          "It is normal for phones to warm up slightly during heavy gaming or rapid charging. However, if your phone becomes excessively hot during regular charging or basic social media browsing, internal electrical resistance inside the battery has reached unsafe levels.",
          "Continued heat exposure degrades internal components faster and risks permanent damage to the motherboard.",
          "High thermal resistance within chemical cells dissipates excess power as thermal energy instead of storing it as potential electrical charge. This thermal loop degrades adjacent motherboard chips and causes screen discoloration."
        ]
      },
      {
        heading: "Physical Swelling & Display Separation",
        paragraphs: [
          "A swollen battery is a severe safety hazard caused by gas buildup inside failing cell compartments. If you notice your screen popping out, gap formation near the frame, or a slight wobble when placed flat on a table, switch off the phone immediately.",
          "Do not try to force the screen back into place. Bring it to BIGRIYO for safe, professional battery removal and replacement.",
          "Gases like hydrogen and oxygen accumulate inside airtight pouch cells when internal electrolyte breakdown occurs. Attempting to press down a swollen screen can puncture the pouch, leading to chemical fires."
        ]
      },
      {
        heading: "Drastic Drop in Health Metrics & Slow Performance",
        paragraphs: [
          "Modern operating systems like iOS and Android monitor battery health percentages and cycle counts. When your maximum capacity drops below 80%, modern operating systems begin throttling CPU clock speeds to prevent unexpected system resets.",
          "If your smartphone app launches take twice as long or device animations stutter frequently, an aging battery is often the underlying root cause."
        ]
      },
      {
        heading: "How to Extend Your New Battery's Lifespan",
        paragraphs: [
          "Once you replace your degraded unit at BIGRIYO, avoid overnight charging under unventilated pillows and try to keep your charge cycle between 20% and 80%. Using original or certified power adapters also ensures stable current input without damaging cell chemistry."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Monsoon Care Guide: How to Save Your Water-Damaged Phone",
    slug: "monsoon-care-guide-save-water-damaged-phone",
    image: "/blog/2.jpg",
    category: "Device Care & Maintenance",
    author: "BIGRIYO Tech Team",
    published_date: "2026-02-02",
    summary:
      "Dropped your phone in water during the Kathmandu rain? Skip the rice myth—follow these immediate emergency steps to prevent permanent circuit corrosion.",
    tags: ["Water Damage", "Phone Repair", "Monsoon Care", "Emergency Fix"],
    content: [
      {
        heading: "Why the Rice Myth Does More Harm Than Good",
        paragraphs: [
          "Submerging a wet phone in uncooked rice is a common myth. Rice does not draw moisture fast enough from sealed internal assemblies. Worse, fine starch dust and grains enter the charging port, speaker grills, and audio jacks, creating a sticky paste when combined with internal moisture.",
          "This starch buildup clogs ventilation paths and traps liquid inside critical logic board areas, accelerating corrosion instead of fixing it."
        ]
      },
      {
        heading: "Immediate Emergency Actions",
        paragraphs: [
          "1. Turn off the device immediately. Do not attempt to press buttons repeatedly or turn it on to check if it works.",
          "2. Remove external cases, SIM trays, and microSD cards to allow trapped moisture to vent.",
          "3. Wipe the exterior with an absorbent microfiber cloth. Never use a hairdryer—the heated air forces water droplets deeper into internal motherboard chips.",
          "4. Gently tap the phone against your palm with the charging port facing down to drain excess liquid lodged in connection sockets."
        ]
      },
      {
        heading: "Understanding Short Circuits vs. Corrosion",
        paragraphs: [
          "Liquid itself doesn't destroy silicon chips instantly—electricity flowing through water causes short circuits and rapid oxidation. Water acts as an electrolyte between active micro-traces on the circuit board.",
          "Even if a phone dries out naturally and turns on, residual minerals leave conductive crusts that slowly eat away at copper traces over several days or weeks."
        ]
      },
      {
        heading: "Professional Ultrasonic Deoxidation",
        paragraphs: [
          "Water damage causes galvanic corrosion across the motherboard logic boards when voltage runs through wet circuits. At BIGRIYO, our technicians open the chassis, remove residual liquid, and clean the board with isopropyl alcohol in an ultrasonic bath to restore rusted contact points.",
          "Our specialized diagnostic steps ensure that internal short circuits are detected before power is reapplied to the board."
        ]
      },
      {
        heading: "Monsoon Preventive Measures for Smart Devices",
        paragraphs: [
          "Invest in IP67 or IP68 rated waterproof pouches when traveling during wet weather in Kathmandu Valley. Avoid charging wet devices until ports have completely air-dried for at least 12 to 24 hours."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Why Your Laptop Is Overheating (and How to Fix It)",
    slug: "why-your-laptop-is-overheating-and-how-to-fix-it",
    image: "/blog/3.jpg",
    category: "Laptop Repair",
    author: "BIGRIYO Tech Team",
    published_date: "2026-02-18",
    summary:
      "Dust buildup and dry thermal paste are the primary culprits for laptop overheating. Discover simple cleaning habits and when to seek professional servicing.",
    tags: ["Laptop Repair", "Overheating", "Thermal Paste", "Hardware Maintenance"],
    content: [
      {
        heading: "Understanding Thermal Throttling",
        paragraphs: [
          "When CPU and GPU temperatures cross 90°C, system firmware automatically limits processor speeds to prevent thermal destruction. This manifests as sudden lag, fan noise resembling a jet engine, and random system lockups.",
          "In extreme conditions, hardware protective circuits initiate hard shutdowns without saving your active work, leading to data corruption and potential operating system failures."
        ]
      },
      {
        heading: "Dust Buildup and Clogged Exhaust Vents",
        paragraphs: [
          "Kathmandu's dusty environment speeds up lint accumulation inside cooling fans and heat sink fins. Over 6–12 months, dust forms a blanket that prevents heat from escaping outward.",
          "Avoid using laptops directly on soft beds, cushions, or blankets, as these cover the intake vents on the bottom panel.",
          "Soft surfaces also shed micro-fibers directly into fan intakes, causing the mechanical fan bearings to wear out prematurely and make loud grinding noises."
        ]
      },
      {
        heading: "Thermal Paste Replacement & Servicing",
        paragraphs: [
          "Factory thermal paste transfers heat from the processor dye to the copper heat pipes. Over 1 to 2 years, this compound dries out and loses conductivity.",
          "During a BIGRIYO laptop service, we clean out dust from fan blades, strip dry thermal paste using specialized solvents, and reapply high-performance thermal compound.",
          "Fresh thermal compound fills microscopic imperfections between the silicon die and copper heat sink plate, dropping system temperatures by 15°C to 25°C."
        ]
      },
      {
        heading: "Software Culprits and Resource Hogs",
        paragraphs: [
          "Unwanted background programs, malware, and rogue browser extensions keep your CPU running at high utilization even when idle. Regularly audit your Task Manager startup tab to disable non-essential applications."
        ]
      },
      {
        heading: "Simple Habits for Cooler Operation",
        paragraphs: [
          "Elevate the back of your laptop by an inch using a stand or small rubber feet to increase airflow under the chassis vents. Ensure room air circulation when working on compute-heavy tasks."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Original vs. First-Copy Screens: What You Need to Know",
    slug: "original-vs-first-copy-screens-what-you-need-to-know",
    image: "/blog/4.jpg",
    category: "Display & Hardware",
    author: "BIGRIYO Tech Team",
    published_date: "2026-03-05",
    summary:
      "Cracked screen? Understand the structural, color accuracy, and touch responsiveness differences between original displays and aftermarket copy screens.",
    tags: ["Screen Replacement", "Display Quality", "Tech Advice", "BIGRIYO Kathmandu"],
    content: [
      {
        heading: "Color Accuracy and Refresh Rate Differences",
        paragraphs: [
          "Original displays (OEM OLED/AMOLED) maintain strict color calibration, deep contrast ratios, and native refresh rates (90Hz/120Hz).",
          "Aftermarket or first-copy screens frequently swap OLED matrices for budget LCD panels. This results in washed-out colors, bluish tinting, poor outdoor sunlight readability, and battery consumption increases of up to 30%.",
          "Because LCD replacement units require thick LED backlights behind the glass layer, they also increase phone thickness, leaving unsightly frame gaps."
        ]
      },
      {
        heading: "Touch Sensitivity and Glass Durability",
        paragraphs: [
          "First-copy replacement screens often use lower-grade soda-lime tempered glass instead of Gorilla Glass. They chip and crack far more easily under minimal drops.",
          "Additionally, digitizer sampling rates on copy panels are noticeably lower, causing ghost touches, missed typing taps, and lag during mobile gaming.",
          "The oleophobic coating on cheap copy screens also wears off within weeks, making the surface susceptible to heavy fingerprint smudges and friction while swiping."
        ]
      },
      {
        heading: "Impact on Biometrics and Ambient Sensors",
        paragraphs: [
          "Original screens integrate precise cutouts and optical clarity for in-display fingerprint scanners and proximity sensors. Copy panels often obstruct optical sensors, causing fingerprint unlocking failures and improper screen sleep behavior during calls."
        ]
      },
      {
        heading: "Making an Informed Choice at BIGRIYO",
        paragraphs: [
          "We offer complete transparency. While budget-conscious users might opt for compatible Grade-A aftermarket options for secondary devices, we recommend genuine OEM replacements for main devices to retain screen durability and touch features.",
          "Our technicians test every replacement display for color uniformity, touch response, and dynamic brightness calibration before handing the device back to you."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Is Your PC Slow? SSD Upgrade vs. RAM Upgrade Explained",
    slug: "is-your-pc-slow-ssd-vs-ram-upgrade-explained",
    image: "/blog/5.jpg",
    category: "Laptop Repair",
    author: "BIGRIYO Tech Team",
    published_date: "2026-03-20",
    summary:
      "Don't rush to buy a new laptop! Find out whether an SSD upgrade or adding extra RAM will give your slow laptop the biggest performance boost.",
    tags: ["Laptop Upgrade", "SSD vs RAM", "Hardware Boost", "Kathmandu Tech"],
    content: [
      {
        heading: "The Solid State Drive (SSD) Speed Factor",
        paragraphs: [
          "If your laptop takes several minutes to boot into Windows or disk usage sits at 100% in Task Manager, your traditional Mechanical Hard Disk (HDD) is the bottleneck.",
          "Replacing a mechanical hard drive with an NVMe or SATA SSD increases boot speeds by 5x to 10x, making application loads virtually instantaneous.",
          "Mechanical drives rely on spinning magnetic platters and physical read/write heads with slow seek times. SSDs store data on flash memory chips with zero moving parts, providing near-instant access times."
        ]
      },
      {
        heading: "When Does Adding RAM Help?",
        paragraphs: [
          "Random Access Memory (RAM) acts as your system's short-term workspace. If your laptop stutters when opening multiple browser tabs, streaming videos, or running multitasking applications, upgrading from 4GB or 8GB to 16GB dual-channel RAM eliminates memory choking.",
          "RAM doesn't make raw processing speeds faster, but it stops your system from slowing down during heavy workflows.",
          "When available physical RAM runs out, Windows uses virtual memory page files on your hard drive, leading to massive system lag."
        ]
      },
      {
        heading: "Understanding Single-Channel vs. Dual-Channel RAM",
        paragraphs: [
          "Installing two identical RAM sticks (e.g., two 8GB sticks) enables dual-channel memory mode. This doubles the memory bus width and data transfer rate between the CPU and memory controller, offering up to a 15-20% boost in integrated graphics and gaming performance."
        ]
      },
      {
        heading: "Which Upgrade Should You Prioritize?",
        paragraphs: [
          "If you currently operate on an HDD, an SSD upgrade offers the single most impactful performance gain. For systems that already have an SSD but freeze under heavy multitasking, a RAM capacity expansion is the ideal next move.",
          "At BIGRIYO, we offer disk cloning services so you can upgrade to a high-speed SSD without losing your personal files, programs, or operating system settings."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Common Smart TV Display Issues and How BIGRIYO Fixes Them",
    slug: "common-smart-tv-display-issues-and-fixes",
    image: "/blog/6.jpg",
    category: "Home Electronics",
    author: "BIGRIYO Tech Team",
    published_date: "2026-04-10",
    summary:
      "From blue tint on the screen to audio-only playback, we cover common LED/LCD TV defects and how localized component repair saves you money.",
    tags: ["TV Repair", "Smart TV", "Home Appliance Repair", "BIGRIYO"],
    content: [
      {
        heading: "Audio Playing But Dark or Black Display",
        paragraphs: [
          "If your TV plays sound clearly but the screen stays dark or faintly shows images when illuminated by a flashlight, the backlight LED strip array has failed.",
          "Replacing the individual LED backlight array restores full display brightness at a fraction of the cost of buying a new panel.",
          "A single blown LED diode in a series connection can shut down the entire backlight driver circuit to prevent electrical thermal damage."
        ]
      },
      {
        heading: "Blue Tint across the Picture",
        paragraphs: [
          "Over time, white LED backlight diodes lose their phosphor coating, causing the light emission to turn harsh purple or blue. We resolve this by fitting fresh, calibrated LED arrays into the panel assembly.",
          "This degradation distorts skin tones and overall color balance, making long viewing sessions exhausting on the eyes."
        ]
      },
      {
        heading: "Component-Level T-Con & Motherboard Repairs",
        paragraphs: [
          "Vertical lines or double-image flickering often indicate signal synchronization issues on the T-Con board or COF ribbon ICs. Instead of writing off the TV, BIGRIYO technicians perform micro-soldering fixes on damaged board lines.",
          "By bypassing failed gate driver signals on display panels using micro-jumper connections, we restore functional picture clarity without replacing the expensive glass panel."
        ]
      },
      {
        heading: "Restart Loops and Firmware Failures",
        paragraphs: [
          "Smart TVs run on specialized Android or custom operating systems. Power loss during auto-updates or degraded EEPROM flash memory chips can cause continuous reboot loops on the brand logo screen.",
          "BIGRIYO offers chip-level flashing and EEPROM replacements to restore bricked TV logic boards."
        ]
      },
      {
        heading: "Best Practices to Keep Your Smart TV Healthy",
        paragraphs: [
          "Avoid running display backlight settings at 100% brightness continuously. Reducing backlight intensity to 70-80% drastically extends the operational lifespan of the internal LED arrays and lowers power draw."
        ]
      }
    ]
  },
  {
    id: 7,
    title: "How Power Cuts and Voltage Fluctuations Damage Your Electronics",
    slug: "power-cuts-voltage-fluctuations-damage-electronics",
    image: "/blog/7.jpg",
    category: "Device Care & Maintenance",
    author: "BIGRIYO Tech Team",
    published_date: "2026-05-01",
    summary:
      "Spikes in electrical current can destroy motherboards and power supply units. Learn how surge protectors and voltage regulators protect your gear.",
    tags: ["Voltage Surge", "Power Care", "Electronics Repair", "Kathmandu"],
    content: [
      {
        heading: "The Danger of Voltage Spikes and Inrush Current",
        paragraphs: [
          "When power returns following an outage, grid voltage frequently spikes beyond standard electrical ratings. This sudden current rush can bypass basic internal fuses, destroying capacitors, power supply units (PSU), and board power lines.",
          "Transient voltage spikes can push thousands of extra volts into delicate integrated circuits for fractions of a second, melting silicon micro-architecture inside modern electronics."
        ]
      },
      {
        heading: "Symptoms of Voltage Damage",
        paragraphs: [
          "Common signs of power surge failure include burning smells, devices failing to power on, intermittent power drops, or glowing power standby LEDs that fail to start up the main board.",
          "In many cases, the power management stage explodes, shorting ground planes directly to processing chips and causing total hardware failure."
        ]
      },
      {
        heading: "Unstable Neutral and Ground Voltage Floating",
        paragraphs: [
          "Improper local ground wiring or loose neutral lines cause voltage float where 220V power lines temporarily shift toward 300V+. This gradual overvoltage stresses power supply capacitors until they bulge or burst."
        ]
      },
      {
        heading: "Prevention and Surge Protection Setup",
        paragraphs: [
          "1. Use dedicated Surge Protector power strips with verified Joule ratings rather than basic multi-plugs.",
          "2. Connect sensitive, high-value electronics like PCs, Smart TVs, and audio setups to Voltage Stabilizers or Uninterruptible Power Supplies (UPS).",
          "3. Unplug sensitive equipment during heavy lightning storms or scheduled power grid maintenance.",
          "4. Ensure your home or workplace has verified earthing/grounding connections to dissipate rogue electrical energy safely."
        ]
      },
      {
        heading: "How BIGRIYO Repairs Surge-Damaged Boards",
        paragraphs: [
          "Our technicians isolate blown power MOSFETs, PWM controller ICs, and primary fuses on damaged boards. We replace scorched power components to bring dead electronics back to life without requiring full motherboard replacements."
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Doorstep Repair Services in Kathmandu: How BIGRIYO Works",
    slug: "doorstep-repair-services-kathmandu-how-bigriyo-works",
    image: "/blog/8.jpg",
    category: "Company News",
    author: "BIGRIYO Team",
    published_date: "2026-05-22",
    summary:
      "No time to visit a workshop? Discover how BIGRIYO provides doorstep inspection, transparent pricing, and pick-and-drop repair services across the valley.",
    tags: ["BIGRIYO Services", "Doorstep Repair", "Kathmandu Valley", "Convenience"],
    content: [
      {
        heading: "1. Easy Online Booking & Scheduling",
        paragraphs: [
          "Select your device model, describe the issue, and pick a convenient time slot through our web portal. Our team confirms your request and assigns a certified technician.",
          "Our automated notification system gives you real-time updates regarding technician assignment, estimated arrival time, and job status."
        ]
      },
      {
        heading: "2. Doorstep Inspection & On-site Fixes",
        paragraphs: [
          "For routine repairs like smartphone battery swaps, screen replacements, or software diagnostics, our mobile technician arrives at your home or workplace equipped with specialized tools and genuine replacement parts to complete repairs on the spot.",
          "You get to watch the entire repair process live, ensuring full transparency, privacy, and protection of your personal data."
        ]
      },
      {
        heading: "3. Secure Pick-and-Drop for Advanced Repairs",
        paragraphs: [
          "For complex issues requiring motherboard micro-soldering, clean-room glass refurbishment, or specialized diagnostic equipment, we safely transport your hardware to our main lab and return it fully tested.",
          "Devices are logged into insured protective transport cases with tamper-evident digital seals to guarantee safety while in transit across Kathmandu."
        ]
      },
      {
        heading: "4. Quality Testing and Warranty Backing",
        paragraphs: [
          "Every repaired device undergoes a 15-point diagnostic checklist covering touch response, battery charge rates, Wi-Fi connectivity, thermal output, and speaker output before delivery.",
          "All hardware replacements come with an official BIGRIYO repair warranty for total peace of mind."
        ]
      },
      {
        heading: "Serving Kathmandu, Lalitpur, and Bhaktapur",
        paragraphs: [
          "Our doorstep logistics network spans across Kathmandu Valley, providing fast, reliable electronic repair services right at your doorstep."
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Top 7 Myths About Charging Your Phone Overnight",
    slug: "top-7-myths-about-charging-your-phone-overnight",
    image: "/blog/9.jpg",
    category: "Mobile Repair",
    author: "BIGRIYO Tech Team",
    published_date: "2026-06-12",
    summary:
      "Does leaving your phone plugged in overnight destroy battery life? We debunk popular charging myths and share best practices for battery longevity.",
    tags: ["Mobile Tips", "Battery Health", "Tech Myths", "Phone Care"],
    content: [
      {
        heading: "Myth 1: Leaving Your Phone Plugged In Overcharges the Battery",
        paragraphs: [
          "Modern smartphones feature built-in Power Management Integrated Circuits (PMIC) that cut off power once the charge reaches 100%. Your phone does not continuously draw current after reaching capacity.",
          "Once fully charged, the device relies on external wall power for idling, stopping current flow into the battery cell completely."
        ]
      },
      {
        heading: "Myth 2: You Must Discharge the Battery to 0% Before Charging",
        paragraphs: [
          "This rule applied to older Nickel-Cadmium (NiCd) batteries with memory effect. Modern Lithium-Ion batteries perform best when kept between 20% and 80% charge level. Complete 0% discharges place high strain on lithium cells.",
          "Frequent full discharge cycles accelerate degradation of the cathode layer inside the battery cell."
        ]
      },
      {
        heading: "Myth 3: Using Fast Chargers Damages the Battery",
        paragraphs: [
          "Fast charging delivers high power during the early state of charge (0% to 50%) and tapers off as the battery fills. Intelligent charge controllers regulate voltage and amperage based on real-time cell temperature to prevent hardware damage."
        ]
      },
      {
        heading: "Myth 4: Using Third-Party Cables and Chargers Is Always Unsafe",
        paragraphs: [
          "Third-party accessories from reputable, certified brands (USB-IF or MFi certified) are completely safe. Danger arises only when using unbranded, dirt-cheap counterfeit chargers that lack internal voltage regulation circuits."
        ]
      },
      {
        heading: "The Real Hazard: Heat Retention Overnight",
        paragraphs: [
          "While PMICs stop overcharging, keeping a phone charging under thick pillows or blankets traps heat. Excessive heat accelerates internal chemical breakdown. Always place your charging device on a flat, open surface.",
          "Charging inside thick protective cases during summer months can also trap thermal energy, shortening battery lifespan over time."
        ]
      },
      {
        heading: "Optimized Charging Features in Modern Smartphones",
        paragraphs: [
          "Take advantage of built-in options like 'Optimized Battery Charging' on iOS or 'Protect Battery' on Android. These features learn your daily routine, pausing charge levels at 80% overnight and finishing the remaining 20% right before you wake up."
        ]
      }
    ]
  }
];
