// creating an array and passing the number, questions, options, and answers


    let questions = [
  {
    numb: 1,
    question: "What is the name of the part marked as X shown in the figure?",
    answer: "Clutch housing",
    options: [
      "Steering wheel",
      "Clutch housing",
      "Gear box",
      "Fuel tank"
    ]
  },
  {
    numb: 2,
    question: "What is the battery voltage used for heavy vehicles?",
    answer: "24 volts",
    options: [
      "6 volts",
      "36 volts",
      "24 volts",
      "28 volts"
    ]
  },
  {
    numb: 3,
    question: "What is the working principle of clutch?",
    answer: "Friction",
    options: [
      "Sliding",
      "Centripetal",
      "Friction",
      "Screw and Nut"
    ]
  },
  {
    numb: 4,
    question: "What is the name of the clutch shown in the figure?",
    answer: "Single plate clutch with coil spring",
    options: [
      "Cone clutch",
      "Single plate clutch with coil spring",
      "Diaphragm clutch",
      "Multi plate dry wet clutches"
    ]
  },
  {
    numb: 5,
    question: "What is the name of the clutch shown in the figure?",
    answer: "Cone clutch",
    options: [
      "Single plate clutch",
      "Dog clutch",
      "Multi plate clutch",
      "Cone clutch"
    ]
  },
  {
    numb: 6,
    question: "What is the name of the clutch shown in the figure?",
    answer: "Diaphragm spring type clutch",
    options: [
      "Cone clutch",
      "Diaphragm spring type clutch",
      "Dog clutch",
      "Multi plate clutch"
    ]
  },
  {
    numb: 7,
    question: "What is the name of part marked as X shown in the figure?",
    answer: "Sleeve",
    options: [
      "Splined shaft",
      "Driving shaft",
      "Sleeve",
      "Internal teeth"
    ]
  },
  {
    numb: 8,
    question: "What is the name of the clutch shown in the figure?",
    answer: "Fluid coupling clutch",
    options: [
      "Single plate clutch",
      "Multi plate clutch",
      "Fluid coupling clutch",
      "Dog clutch"
    ]
  },
  {
    numb: 9,
    question: "What is the name of the clutch shown in the figure?",
    answer: "Multi plate clutch",
    options: [
      "Cone clutch",
      "Dog clutch",
      "Multi plate clutch",
      "Single plate clutch"
    ]
  },
  {
    numb: 10,
    question: "What is the name of part marked as X shown in the figure?",
    answer: "Interior fins",
    options: [
      "Driving unit impeller",
      "Crank shaft",
      "Driven shaft",
      "Interior fins"
    ]
  },

{
    numb: 11,
    question: "Which instruments are used while inspecting pressure plate warpage?",
    answer: "Straight edge and feeler gauge",
    options: [
      "Straight edge and feeler gauge",
      "Steel rule and angle gauge",
      "Straight edge and slip gauge",
      "Parallel block and radius gauge"
    ]
  },
  {
    numb: 12,
    question: "What is the name of the tool marked as X shown in the figure?",
    answer: "Clutch aligner",
    options: [
      "Straight edge",
      "Parallel block",
      "Clutch aligner",
      "Cylindrical drift"
    ]
  },
  {
    numb: 13,
    question: "What is the name of the instrument marked as X shown in the figure?",
    answer: "Dial test indicator",
    options: [
      "Outside micrometer",
      "Dial test indicator",
      "Inside micrometer",
      "Bore dial gauge"
    ]
  },
  {
    numb: 14,
    question: "What is the name of the part marked as X shown in the figure?",
    answer: "Lip seal",
    options: [
      "Thrust washer",
      "Bush",
      "Lip seal",
      "Piston"
    ]
  },
  {
    numb: 15,
    question: "What is the type of the gearbox shown in the figure?",
    answer: "Constant mesh gear box",
    options: [
      "Constant mesh gear box",
      "Sliding mesh gear box",
      "Synchromesh gear box",
      "Automatic synchromesh gear box"
    ]
  },
  {
    numb: 16,
    question: "What is the type of the gearbox shown in the figure?",
    answer: "Sliding mesh gear box",
    options: [
      "Constant mesh gear box",
      "Sliding mesh gear box",
      "Synchromesh gear box",
      "Automatic sliding gear box"
    ]
  },
  {
    numb: 17,
    question: "Which instrument is used to check the face out of the fly wheel?",
    answer: "Dial test indicator",
    options: [
      "Dial test indicator",
      "Bore dial gauge",
      "Outside micrometer",
      "Inside micrometer"
    ]
  },
  {
    numb: 18,
    question: "What is the type of constant velocity joint shown in the figure?",
    answer: "Tripod joint",
    options: [
      "Pot joint",
      "Tripod joint",
      "Ball joint",
      "Double joint"
    ]
  },
  {
    numb: 19,
    question: "What is the type of drive line shown in the figure?",
    answer: "Rear wheel drive line",
    options: [
      "Front wheel drive line",
      "Four wheel drive line",
      "Rear wheel drive line",
      "Center wheel drive line"
    ]
  },
  {
    numb: 20,
    question: "What is the type of drive line shown in the figure?",
    answer: "Front wheel drive line",
    options: [
      "Front wheel drive line",
      "Rear wheel drive line",
      "Center wheel drive line",
      "Four wheel drive line"
    ]
  },
  {
    numb: 21,
    question: "What is the type of synchromesh gear box shown in the figure?",
    answer: "Baulk ring type",
    options: [
      "Baulk ring type",
      "Baulk type",
      "Multi and double cone type",
      "Porsche type"
    ]
  },
  {
    numb: 22,
    question: "What is the type of synchromesh gear box shown in the figure?",
    answer: "Baulk type",
    options: [
      "Baulk ring type",
      "Multi and double cone type",
      "Baulk type",
      "Porsche type"
    ]
  },
  {
    numb: 23,
    question: "What is the name of the part marked as X shown in the figure?",
    answer: "Synchronizer sleeve",
    options: [
      "Gear",
      "Conical cup",
      "Hub",
      "Synchronizer sleeve"
    ]
  },
  {
    numb: 24,
    question: "What is the name of the part marked as X shown in the figure?",
    answer: "Balls",
    options: [
      "Wheel end",
      "Balls",
      "Ball shell",
      "Ball star"
    ]
  },
  {
    numb: 25,
    question: "What is the name of the part marked as X shown in the figure?",
    answer: "Ball star",
    options: [
      "Wheel end",
      "Balls",
      "Ball star",
      "Ball shell"
    ]
  },
  {
    numb: 26,
    question: "What is the type of joint shown in the figure?",
    answer: "Cross type universal joint",
    options: [
      "Tripod joint",
      "Cross type universal joint",
      "Pot joint",
      "Double joint"
    ]
  },
  {
    numb: 27,
    question: "What is the type of drive shown in the figure?",
    answer: "Torque tube drive",
    options: [
      "Torque tube drive",
      "Hotchkiss drive",
      "Four wheel drive",
      "Front wheel drive"
    ]
  },
  {
    numb: 28,
    question: "Which type of joint permit diffraction angles up to 26° and axial displacement up to 55mm?",
    answer: "Tripod joint",
    options: [
      "Flexible discs",
      "Double joint",
      "Pot joint",
      "Tripod joint"
    ]
  },
  {
    numb: 29,
    question: "What is the maximum permitted diffraction angle of double joint?",
    answer: "50°",
    options: [
      "50°",
      "62°",
      "58°",
      "72°"
    ]
  },
  {
    numb: 30,
    question: "What is the name of part marked as X shown in the figure?",
    answer: "Shaft wheel end",
    options: [
      "Spider",
      "Shaft wheel end",
      "Double joint fork",
      "Sealing cap"
    ]
  },
  {
    numb: 31,
    question: "What is the maximum permitted diffraction angle of pot joint?",
    answer: "22°",
    options: [
      "18°",
      "20°",
      "22°",
      "26°"
    ]
  },
  {
    numb: 32,
    question: "Which type of gear converts rotary motion into linear motion and vice versa?",
    answer: "Rack and Pinion",
    options: [
      "Helical gears",
      "Rack and Pinion",
      "Spur gear",
      "Bevel gear"
    ]
  },
  {
    numb: 33,
    question: "Which type of gear avoids axial thrust while transmitting torque?",
    answer: "Spur gear",
    options: [
      "Helical gears",
      "Worm gears",
      "Spiral bevel gear",
      "Spur gear"
    ]
  },
  {
    numb: 34,
    question: "Which type of gear will have more than one teeth in contact at the same time?",
    answer: "Helical gear",
    options: [
      "Spur gear",
      "Rack and Pinion",
      "Helical gear",
      "Spur bevel gear"
    ]
  },
  {
    numb: 35,
    question: "Which type of gear teeth are straight and parallel to the gear axis?",
    answer: "Spur gear",
    options: [
      "Spur gear",
      "Helical gear",
      "Worm gear",
      "Bevel gear"
    ]
  },
  {
    numb: 36,
    question: "Which type of seal allows a controlled amount of fluid leakage to lubricate moving parts?",
    answer: "Non - positive seal",
    options: [
      "Static seal",
      "Positive seal",
      "Non - positive seal",
      "Dynamic seal"
    ]
  },
  {
    numb: 37,
    question: "What is the name of seal used between two parts that do not move in relation to each other?",
    answer: "Static seal",
    options: [
      "Dynamic seal",
      "Static seal",
      "Square cut seal",
      "Teflon seal"
    ]
  },
  {
    numb: 38,
    question: "What is the advantage of using constant mesh gear box?",
    answer: "Smooth power transmission",
    options: [
      "Quick change of gear",
      "Wrong adjustment of gear will not affect the function",
      "Smooth power transmission",
      "Efficient lubrication possible"
    ]
  },
  {
    numb: 39,
    question: "Which is wasteful friction?",
    answer: "Rear axle gear",
    options: [
      "Rear axle gear",
      "Tyres on the floor",
      "Brake shoe lining",
      "Clutch lining"
    ]
  },
  {
    numb: 40,
    question: "Which force is directly proportional to the normal reaction between contacting surfaces?",
    answer: "Frictional force",
    options: [
      "Pulling force",
      "Pushing force",
      "Frictional force",
      "Allied force"
    ]
  },
  {
    numb: 41,
    question: "Which one of the following acts in between the wheels and roads, if vehicles are able to run on roads?",
    answer: "Friction",
    options: [
      "Friction",
      "Corrosion",
      "Erosion",
      "Motion"
    ]
  },
  {
    numb: 42,
    question: "Which symbol is used to denote co-efficient of friction?",
    answer: "µ (Meu)",
    options: [
      "α (Alpha)",
      "µ (Meu)",
      "β (Beta)",
      "γ (Gamma)"
    ]
  },
  {
    numb: 43,
    question: "What is the name of the point at which all the weight of the body concentrated?",
    answer: "Centre of gravity",
    options: [
      "Initial point",
      "Centre of gravity",
      "Centroid",
      "Central point"
    ]
  },
  {
    numb: 44,
    question: "Where the centre of gravity of a circle lies?",
    answer: "At its centre",
    options: [
      "At its centre",
      "Anywhere on its radius",
      "Anywhere on its circumference",
      "Anywhere on its diameter"
    ]
  },
  {
    numb: 45,
    question: "Two general type of tyres are______.",
    answer: "tube type and tubeless",
    options: [
      "tube type and tubeless",
      "air and pneumatic",
      "solid and tubeless",
      "split rim and drop centre"
    ]
  },
  {
    numb: 46,
    question: "How many cells are used in a 12 volt car battery?",
    answer: "6",
    options: [
      "2",
      "4",
      "6",
      "8"
    ]
  },
  {
    numb: 47,
    question: "The power actually developed inside the engine cylinder is called as_______",
    answer: "indicated power",
    options: [
      "indicated power",
      "frictional power",
      "brake power",
      "none of these"
    ]
  },
  {
    numb: 48,
    question: "Choose the right option for given symbol.",
    answer: "Battery warning",
    options: [
      "Battery warning",
      "Oil pressure warning",
      "Rear window defrost",
      "All of these"
    ]
  },
  {
    numb: 49,
    question: "Choose the right option for given symbol.",
    answer: "Low fuel",
    options: [
      "Low fuel",
      "Oil pressure warning",
      "Emergency indicator",
      "Battery warning"
    ]
  },
  {
    numb: 50,
    question: "Choose the right option for given symbol.",
    answer: "Hazard lights",
    options: [
      "Battery warning",
      "Low fuel notification",
      "Hazard lights",
      "Front air bag"
    ]
  },
];

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
//];
