// JavaScript object to store item data
// Only includes the necessary fields: name, price, and total weight
const ITEMS_DATA = {
  "items": {
    "Plasma Converter": {
      "Price": 1000,
      "Total Weight": 14.14
    },
    "Weapon Grease": {
      "Price": 1000,
      "Total Weight": 21.91
    },
    "Ammo Reserves": {
      "Price": 1500,
      "Total Weight": 20.74
    },
    "Frenzy Amp": {
      "Price": 1500,
      "Total Weight": 0.0
    },
    "AM Firing Pin": {
      "Price": 3750,
      "Total Weight": 65.27
    },
    "Adv Nanobiotics": {
      "Price": 4000,
      "Total Weight": 37.5
    },
    "Shieldbuster": {
      "Price": 4000,
      "Total Weight": 55.3
    },
    "Stockpile": {
      "Price": 4000,
      "Total Weight": 47.84
    },
    "Technoleech": {
      "Price": 4500,
      "Total Weight": 51.64
    },
    "Icy Coolant": {
      "Price": 5000,
      "Total Weight": 88.72
    },
    "Talon Modification Module": {
      "Price": 5500,
      "Total Weight": 112.5
    },
    "Asa's Armaments": {
      "Price": 4000,
      "Total Weight": 49.76
    },
    "Farsight Focus Sash": {
      "Price": 5000,
      "Total Weight": 192.17
    },
    "Teamwork toolkit": {
      "Price": 5000,
      "Total Weight": 92.8
    },
    "Codebreaker": {
      "Price": 9000,
      "Total Weight": 112.5
    },
    "Salvaged Slugs": {
      "Price": 9500,
      "Total Weight": 43.82
    },
    "Volskaya Ordnance": {
      "Price": 9500,
      "Total Weight": 55.69
    },
    "Commander's Clip": {
      "Price": 10000,
      "Total Weight": 157.43
    },
    "Omnic Infiltrator": {
      "Price": 10000,
      "Total Weight": 178.57
    },
    "Revitalizer Clip": {
      "Price": 10000,
      "Total Weight": 149.32
    },
    "Supercharger": {
      "Price": 12000,
      "Total Weight": 184.62
    },
    "Bioelectric Accelerator": {
      "Price": 13000,
      "Total Weight": 308.82
    },
    "Infinity Drive": {
      "Price": 15000,
      "Total Weight": 296.30
    },
    "Shield Battery": {
      "Price": 1000,
      "Total Weight": 12.2
    },
    "Armor Plating": {
      "Price": 1000,
      "Total Weight": 13.33
    },
    "Defense Matrix": {
      "Price": 1000,
      "Total Weight": 11.36
    },
    "Energy Barrier": {
      "Price": 1000,
      "Total Weight": 14.28
    },
    "Barrier Capacitors": {
      "Price": 1000,
      "Total Weight": 14.7
    },
    "Hardlight Compressor": {
      "Price": 1000,
      "Total Weight": 13.04
    },
    "Deflection Module": {
      "Price": 1000,
      "Total Weight": 14.49
    },
    "Regen Module": {
      "Price": 4000,
      "Total Weight": 61.54
    },
    "Kinetic Absorber": {
      "Price": 5000,
      "Total Weight": 92.59
    },
    "Matrix Expansion Module": {
      "Price": 5000,
      "Total Weight": 87.71
    },
    "Omni-Barrier": {
      "Price": 5000,
      "Total Weight": 92.59
    },
    "Regen Injector": {
      "Price": 5000,
      "Total Weight": 73.53
    },
    "Reinforced Carapace": {
      "Price": 9000,
      "Total Weight": 200.0
    },
    "Cryo Boost": {
      "Price": 9000,
      "Total Weight": 230.76
    },
    "Hardlight Plating": {
      "Price": 9500,
      "Total Weight": 226.19
    },
    "Quantum Shield": {
      "Price": 10000,
      "Total Weight": 212.76
    },
    "Seraph": {
      "Price": 12000,
      "Total Weight": 274.19
    },
    "Adaptive Armor": {
      "Price": 12500,
      "Total Weight": 290.7
    },
    "Beam Splitter": {
      "Price": 15000,
      "Total Weight": 566.03
    },
    "Healthy Snack": {
      "Price": 1000,
      "Total Weight": 13.64
    },
    "Healing Aura": {
      "Price": 1000,
      "Total Weight": 14.93
    },
    "First Aid": {
      "Price": 1000,
      "Total Weight": 13.64
    },
    "Healing Grenade": {
      "Price": 1000,
      "Total Weight": 12.82
    },
    "Medi-pack": {
      "Price": 1000,
      "Total Weight": 15.15
    },
    "Life Drain": {
      "Price": 4000,
      "Total Weight": 51.95
    },
    "Amplification Matrix": {
      "Price": 4000,
      "Total Weight": 54.05
    },
    "Healing Orb": {
      "Price": 4000,
      "Total Weight": 51.95
    },
    "Vial Splitter": {
      "Price": 5000,
      "Total Weight": 71.43
    },
    "Energy Transfer": {
      "Price": 5000,
      "Total Weight": 75.76
    },
    "Biotic Recycler": {
      "Price": 5000,
      "Total Weight": 78.12
    },
    "Regenerative Boost": {
      "Price": 5000,
      "Total Weight": 83.33
    },
    "Impact Absorption Shield": {
      "Price": 9000,
      "Total Weight": 138.46
    },
    "Anti-Material Shell": {
      "Price": 9000,
      "Total Weight": 150.0
    },
    "Biotic Optimizer": {
      "Price": 9000,
      "Total Weight": 144.0
    },
    "Critical Response": {
      "Price": 9000,
      "Total Weight": 157.89
    },
    "Accelerated Metabolism": {
      "Price": 9500,
      "Total Weight": 145.45
    },
    "Cellular Regeneration": {
      "Price": 10000,
      "Total Weight": 159.09
    },
    "Mending Boost": {
      "Price": 10000,
      "Total Weight": 174.42
    },
    "Bio-Integrator": {
      "Price": 10000,
      "Total Weight": 169.23
    },
    "Nanotech Converter": {
      "Price": 12000,
      "Total Weight": 225.0
    },
    "Revitalization": {
      "Price": 13000,
      "Total Weight": 240.74
    },
    "Phase Amplifier": {
      "Price": 13000,
      "Total Weight": 307.69
    },
    "Rejuvenation Matrix": {
      "Price": 15000,
      "Total Weight": 333.33
    },
    "Nano Boost": {
      "Price": 15000,
      "Total Weight": 324.32
    },
    "Chrono Accelerator": {
      "Price": 4000,
      "Total Weight": 54.05
    },
    "Teleportation Beacon": {
      "Price": 5000,
      "Total Weight": 75.76
    },
    "Agility Boost": {
      "Price": 9000,
      "Total Weight": 148.15
    },
    "Stealth Field": {
      "Price": 9500,
      "Total Weight": 171.43
    },
    "Energy Core": {
      "Price": 10000,
      "Total Weight": 189.19
    },
    "Gravity Disruptor": {
      "Price": 13000,
      "Total Weight": 289.47
    },
    "Fusion Cell": {
      "Price": 15000,
      "Total Weight": 345.95
    }
  }
}; 