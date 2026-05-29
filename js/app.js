/* ═══════════════════════════════════════════════
   BURNFLOW — app.js
   ═══════════════════════════════════════════════ */

// ═══════════════════════════════════════════════
// DATA — all 6 goal plans
// ═══════════════════════════════════════════════
const GOALS = {
  lose: {
    label:'🔥 Fat Loss Plan', accent:'#FF4500',
    stats:[
      {num:'500+',lbl:'Calories Burned/Day'},
      {num:'12',lbl:'Week Program'},
      {num:'1 kg',lbl:'Weekly Loss Target'},
      {num:'100%',lbl:'Natural Methods'}
    ],
    stepsSub:'A proven 8-step protocol to burn fat safely and sustainably while preserving muscle.',
    mealsSub:'High-protein, satisfying meals designed for a calorie deficit without hunger.',
    workoutSub:'Mix of strength training and cardio to maximise fat burn and muscle retention.',
    tipsSub:'Science-backed tactics to keep your metabolism high and progress consistent.',
    steps:[
      {icon:'📏',title:'Calculate Your BMI & TDEE',body:'Know your starting point. Use our calculator to find your BMI and daily calorie baseline.',badge:'Day 1'},
      {icon:'🥗',title:'Eat in a Calorie Deficit',body:'Eat 300–500 fewer calories than your TDEE daily for safe, steady fat loss of 0.5–1 kg/week.',badge:'Daily'},
      {icon:'🍗',title:'Prioritise Protein',body:'Aim for 1.6–2.2g of protein per kg of bodyweight to stay full and preserve muscle.',badge:'Every Meal'},
      {icon:'🏋️',title:'Strength Train 3–4×/Week',body:'Lift weights to maintain lean mass. More muscle = higher resting metabolism.',badge:'3–4× Week'},
      {icon:'🚶',title:'Walk 8,000–10,000 Steps',body:'NEAT (non-exercise activity) can burn 300–500 extra calories a day effortlessly.',badge:'Daily'},
      {icon:'💧',title:'Drink 2.5–3L of Water',body:'Proper hydration boosts fat oxidation, reduces hunger, and improves performance.',badge:'Daily'},
      {icon:'😴',title:'Sleep 7–9 Hours',body:'Poor sleep raises cortisol and ghrelin, making fat loss nearly impossible.',badge:'Nightly'},
      {icon:'📊',title:'Track & Adjust Weekly',body:'Weigh yourself once a week. If stalled for 2+ weeks, cut 100 cal or add 20 min activity.',badge:'Weekly'}
    ],
    meals:[
      {time:'🌅 Breakfast',name:'Egg White Omelette + Oats',desc:'4 egg whites with spinach + 50g oats with berries. High protein, slow carbs.',cal:'380',p:'35g',c:'42g',f:'8g'},
      {time:'🍎 Snack',name:'Greek Yogurt + Almonds',desc:'150g low-fat Greek yogurt with 20g raw almonds. Gut health + healthy fats.',cal:'210',p:'18g',c:'12g',f:'10g'},
      {time:'☀️ Lunch',name:'Grilled Chicken Bowl',desc:'150g grilled chicken, 80g brown rice, roasted veggies, lemon-tahini drizzle.',cal:'490',p:'45g',c:'48g',f:'12g'},
      {time:'🌰 Snack',name:'Protein Shake + Apple',desc:'1 scoop whey protein in water + 1 apple. Pre-workout fuel.',cal:'200',p:'26g',c:'22g',f:'2g'},
      {time:'🌙 Dinner',name:'Salmon + Steamed Veggies',desc:'150g baked salmon, broccoli and zucchini. Omega-3s for fat metabolism.',cal:'430',p:'38g',c:'14g',f:'24g'},
      {time:'⭐ Daily Total',name:'Summary',desc:'Adjust portions to match your personal calorie target from the calculator.',cal:'1,710',p:'162g',c:'138g',f:'56g'}
    ],
    workouts:[
      {type:'💪 Strength',title:'Day 1 — Upper Body Push',time:'45 min',intensity:'High',exes:['Bench Press — 4×10','Overhead Press — 3×12','Incline DB Press — 3×12','Lateral Raises — 3×15','Tricep Pushdowns — 3×15']},
      {type:'🦵 Strength',title:'Day 2 — Lower Body',time:'50 min',intensity:'High',exes:['Squats — 4×8','Romanian Deadlifts — 3×10','Leg Press — 3×12','Walking Lunges — 3×20 steps','Calf Raises — 4×15']},
      {type:'❤️ Cardio',title:'Day 3 — HIIT',time:'30 min',intensity:'Max Burn',exes:['Warm-up jog — 5 min','Sprint 30s / Walk 90s × 8','Burpees — 3×10','Mountain Climbers — 3×30s','Cool-down stretch — 5 min']},
      {type:'💪 Strength',title:'Day 4 — Upper Body Pull',time:'45 min',intensity:'High',exes:['Pull-Ups / Lat Pulldown — 4×10','Barbell Rows — 3×10','Face Pulls — 3×15','Bicep Curls — 3×12','Hammer Curls — 3×12']},
      {type:'🔁 Full Body',title:'Day 5 — Circuit',time:'40 min',intensity:'Moderate',exes:['Kettlebell Swings — 3×20','Push-Ups — 3×15','Goblet Squats — 3×15','DB Row — 3×12 each','Plank — 3×45s']},
      {type:'🧘 Recovery',title:'Days 6–7 — Active Rest',time:'30–60 min',intensity:'Low',exes:['Brisk walk 30–60 min','Full-body stretching 10 min','Foam rolling tight areas','Yoga or mobility work','Light swimming (optional)']}
    ],
    tips:[
      {icon:'🕐',title:'Eat Earlier in the Day',body:'Front-load calories — bigger breakfast, smaller dinner. Your metabolism peaks in the morning.'},
      {icon:'🧊',title:'Start with Cold Water',body:'500ml of cold water first thing in the morning can boost metabolism by up to 30% for 90 minutes.'},
      {icon:'☕',title:'Black Coffee Pre-Workout',body:'Caffeine boosts adrenaline, mobilises fat stores, and improves exercise performance by 10–12%.'},
      {icon:'🥦',title:'Eat Vegetables First',body:'Starting meals with veg adds fibre, slows digestion, and naturally reduces total calorie intake.'},
      {icon:'📱',title:'Ditch Late-Night Screens',body:'Blue light suppresses melatonin, spikes cortisol, and increases fat storage — stop 1 hour before bed.'},
      {icon:'⚖️',title:'Weekly Weigh-Ins Only',body:'Daily weight fluctuates 1–3 kg. Same-day morning weekly weigh-ins give a true picture.'}
    ]
  },

  gain: {
    label:'💪 Muscle Gain Plan', accent:'#4F9FFF',
    stats:[
      {num:'+500',lbl:'Calorie Surplus/Day'},
      {num:'16',lbl:'Week Program'},
      {num:'0.5 kg',lbl:'Weekly Gain Target'},
      {num:'3–5×',lbl:'Strength Sessions/Week'}
    ],
    stepsSub:'An 8-step protocol to pack on lean muscle mass efficiently and with minimal fat gain.',
    mealsSub:'Calorie-dense, protein-rich meals timed to fuel muscle growth and recovery.',
    workoutSub:'Progressive overload strength training to maximise hypertrophy and strength.',
    tipsSub:'Proven strategies to gain quality weight — muscle, not just fat.',
    steps:[
      {icon:'📏',title:'Find Your TDEE',body:'Calculate your maintenance calories. You\'ll eat above this to fuel muscle growth.',badge:'Day 1'},
      {icon:'🍽️',title:'Eat in a Calorie Surplus',body:'Add 300–500 calories above TDEE daily. A "lean bulk" keeps fat gain minimal.',badge:'Daily'},
      {icon:'🍗',title:'Hit 2–2.2g Protein / kg',body:'Protein is the building block of muscle. Don\'t skip meals — your muscles grow between training sessions.',badge:'Every Meal'},
      {icon:'🏋️',title:'Progressive Overload',body:'Increase weights or reps each week. Your body only builds muscle when it\'s challenged beyond what it can handle.',badge:'3–5× Week'},
      {icon:'😴',title:'Sleep 8–9 Hours',body:'80% of muscle is built during sleep when growth hormone peaks. This is non-negotiable.',badge:'Nightly'},
      {icon:'💧',title:'Stay Hydrated',body:'Muscles are 75% water. Dehydration reduces strength, performance, and protein synthesis.',badge:'Daily'},
      {icon:'🍌',title:'Time Your Carbs',body:'Eat carbs around workouts (pre and post). They fuel performance and spike insulin for muscle recovery.',badge:'Around Workouts'},
      {icon:'📊',title:'Track Strength Progress',body:'Log your lifts every session. If strength isn\'t going up over weeks, increase calories or sleep more.',badge:'Every Session'}
    ],
    meals:[
      {time:'🌅 Breakfast',name:'Scrambled Eggs + Whole Toast',desc:'4 whole eggs, 2 slices whole grain toast, avocado, glass of milk. Calorie-dense morning fuel.',cal:'620',p:'40g',c:'52g',f:'28g'},
      {time:'🍎 Snack',name:'Banana + Peanut Butter',desc:'1 large banana + 2 tbsp peanut butter + 30g oats. Perfect pre-workout carb-fat combo.',cal:'400',p:'12g',c:'52g',f:'16g'},
      {time:'☀️ Lunch',name:'Rice + Chicken + Beans',desc:'200g chicken thigh, 120g white rice, 80g black beans, olive oil. High protein & carbs for mass.',cal:'720',p:'58g',c:'75g',f:'20g'},
      {time:'🌰 Post-Workout',name:'Mass Shake + Oats',desc:'2 scoops whey, 80g oats, 1 banana, 200ml whole milk, 1 tbsp honey blended.',cal:'560',p:'50g',c:'72g',f:'8g'},
      {time:'🌙 Dinner',name:'Steak + Sweet Potato + Broccoli',desc:'200g lean beef steak, 200g sweet potato, steamed broccoli. Iron, zinc, and all essential aminos.',cal:'680',p:'52g',c:'58g',f:'24g'},
      {time:'⭐ Daily Total',name:'Bulking Summary',desc:'~2,980 cal for gaining. Scale to your personal surplus target calculated above.',cal:'2,980',p:'212g',c:'309g',f:'96g'}
    ],
    workouts:[
      {type:'💪 Compound',title:'Day 1 — Chest & Triceps',time:'55 min',intensity:'Heavy',exes:['Flat Bench Press — 5×5','Incline DB Press — 4×8','Cable Flyes — 3×12','Skull Crushers — 3×10','Dips — 3×12']},
      {type:'💪 Compound',title:'Day 2 — Back & Biceps',time:'55 min',intensity:'Heavy',exes:['Deadlift — 4×5','Weighted Pull-Ups — 4×6','Barbell Row — 4×8','Preacher Curl — 3×12','Hammer Curls — 3×12']},
      {type:'🦵 Leg Day',title:'Day 3 — Legs & Glutes',time:'60 min',intensity:'Very Heavy',exes:['Barbell Squat — 5×5','Leg Press — 4×10','Romanian Deadlift — 4×8','Leg Curl — 3×12','Calf Raises — 5×15']},
      {type:'💪 Shoulders',title:'Day 4 — Shoulders & Arms',time:'50 min',intensity:'Moderate-Heavy',exes:['Seated OHP — 4×8','Arnold Press — 3×10','Lateral Raises — 4×15','Barbell Curl — 3×10','Tricep Overhead — 3×12']},
      {type:'🔁 Accessory',title:'Day 5 — Weak Points & Core',time:'45 min',intensity:'Moderate',exes:['Hyperextensions — 3×15','Face Pulls — 4×15','Cable Crunches — 4×15','Farmer\'s Walks — 4 rounds','Neck & grip work']},
      {type:'🔄 Rest',title:'Days 6–7 — Recovery',time:'As needed',intensity:'Light',exes:['Light walk','Stretching & foam rolling','Sauna if available','Meal prep for the week','Visualise next week\'s lifts']}
    ],
    tips:[
      {icon:'🍴',title:'Never Skip Breakfast',body:'Breakfast breaks the overnight fast and kicks off muscle protein synthesis. Aim for 40g+ protein at breakfast.'},
      {icon:'⏰',title:'Eat Every 3–4 Hours',body:'Frequent meals keep amino acids available for muscle repair and growth throughout the day.'},
      {icon:'🥛',title:'Drink Whole Milk',body:'Whole milk is one of the most cost-effective muscle-building foods — protein, carbs, fat, and calcium in one.'},
      {icon:'😴',title:'Prioritise Sleep Above All',body:'Growth hormone is released in pulses during deep sleep. Less sleep = less muscle, period.'},
      {icon:'📈',title:'Log Your Lifts',body:'If you\'re not tracking, you\'re guessing. Seeing your numbers go up week to week is the most motivating thing.'},
      {icon:'🧂',title:'Don\'t Fear Carbs',body:'Carbohydrates are the primary fuel for lifting. Eating enough carbs is as important as eating enough protein.'}
    ]
  },

  maintain: {
    label:'⚖️ Maintenance Plan', accent:'#22c55e',
    stats:[
      {num:'0',lbl:'Calorie Change Needed'},
      {num:'52',lbl:'Weeks a Year'},
      {num:'3–4×',lbl:'Workouts/Week'},
      {num:'∞',lbl:'Sustainable Lifestyle'}
    ],
    stepsSub:'8 habits to lock in your physique, energy, and health for the long haul — no extremes needed.',
    mealsSub:'Balanced, enjoyable meals that hit your macros without obsessive tracking.',
    workoutSub:'Sustainable training to keep strength, cardio, and mobility all in check.',
    tipsSub:'Long-term consistency beats short-term intensity. Here\'s how to stay the course.',
    steps:[
      {icon:'📏',title:'Know Your Maintenance Calories',body:'Use our calculator to find your TDEE. Eat at this level — not more, not less.',badge:'Ongoing'},
      {icon:'🍽️',title:'Eat a Balanced Diet',body:'Follow the 80/20 rule — 80% whole foods, 20% flexibility for enjoyment.',badge:'Daily'},
      {icon:'🏋️',title:'Train Consistently',body:'3–4 sessions per week: a mix of strength and cardio. Consistency over intensity.',badge:'3–4× Week'},
      {icon:'🚶',title:'Stay Active Daily',body:'Aim for 7,000–9,000 steps. It keeps your metabolism humming without stress.',badge:'Daily'},
      {icon:'💧',title:'Hydrate Well',body:'2–3L of water per day. Hydration keeps energy, mood, and metabolism stable.',badge:'Daily'},
      {icon:'😴',title:'Protect Your Sleep',body:'7–8 hours keeps hormones balanced. Sleep is how you maintain what you\'ve built.',badge:'Nightly'},
      {icon:'📊',title:'Check In Monthly',body:'Monthly weight and measurements are enough. You\'re maintaining, not dieting — avoid obsessive tracking.',badge:'Monthly'},
      {icon:'🧠',title:'Build a Sustainable Routine',body:'Maintenance is about lifestyle, not willpower. Make healthy habits the path of least resistance.',badge:'Lifestyle'}
    ],
    meals:[
      {time:'🌅 Breakfast',name:'Overnight Oats + Eggs',desc:'60g oats with berries + 3 whole eggs scrambled. Balanced start with fibre, protein, and healthy fat.',cal:'520',p:'32g',c:'55g',f:'18g'},
      {time:'🍎 Snack',name:'Fruit + Nut Mix',desc:'1 apple or pear + a small handful of mixed nuts. Natural energy, no spikes.',cal:'220',p:'5g',c:'28g',f:'10g'},
      {time:'☀️ Lunch',name:'Turkey Wrap + Salad',desc:'Whole grain wrap, lean turkey, avocado, greens, tomato, hummus.',cal:'520',p:'38g',c:'48g',f:'16g'},
      {time:'🌰 Snack',name:'Greek Yogurt + Honey',desc:'150g full-fat Greek yogurt + drizzle of honey + pumpkin seeds.',cal:'220',p:'14g',c:'22g',f:'8g'},
      {time:'🌙 Dinner',name:'Salmon + Quinoa + Veg',desc:'150g salmon, 80g quinoa, roasted vegetables. Complete protein, complex carbs, omega-3s.',cal:'520',p:'42g',c:'44g',f:'18g'},
      {time:'⭐ Daily Total',name:'Balanced Summary',desc:'~2,000 cal maintenance day. Adjust portions using your TDEE from the calculator.',cal:'2,000',p:'131g',c:'197g',f:'70g'}
    ],
    workouts:[
      {type:'💪 Strength',title:'Day 1 — Full Body',time:'45 min',intensity:'Moderate',exes:['Squat — 3×10','Bench Press — 3×10','Bent-over Row — 3×10','OHP — 3×10','Core circuit — 10 min']},
      {type:'❤️ Cardio',title:'Day 2 — Moderate Cardio',time:'35 min',intensity:'Moderate',exes:['5 min warm-up walk','25 min zone 2 jog or bike','5 min cool-down','Optional: 10 min stretching']},
      {type:'💪 Strength',title:'Day 3 — Full Body',time:'45 min',intensity:'Moderate',exes:['Deadlift — 3×8','Pull-Ups — 3×8','Dips — 3×10','Lunges — 3×12 each','Plank — 3×45s']},
      {type:'🧘 Mobility',title:'Day 4 — Active Recovery',time:'30 min',intensity:'Light',exes:['10 min yoga flow','Hip flexor stretches','Thoracic mobility','Foam rolling','Breathing exercises']},
      {type:'🏃 Cardio',title:'Day 5 — Long Walk or Sport',time:'45–60 min',intensity:'Low-Moderate',exes:['Brisk walk in nature','Or recreational sport','Swimming, cycling, hiking','Any enjoyable movement','Zero pressure, max enjoyment']},
      {type:'🔄 Rest',title:'Days 6–7 — True Rest',time:'—',intensity:'Rest',exes:['No structured exercise','Active daily life is fine','Focus on social & hobbies','Good food, good sleep','Mental recovery matters too']}
    ],
    tips:[
      {icon:'📅',title:'Build a Weekly Rhythm',body:'Same workout days, same meal patterns each week. Routine reduces decision fatigue and keeps you consistent.'},
      {icon:'🎉',title:'Allow Flexible Meals',body:'One or two "free" meals per week actually help long-term maintenance by reducing restriction.'},
      {icon:'📏',title:'Use a Mirror, Not Just a Scale',body:'Weight fluctuates daily. How clothes fit and how you feel are better indicators of maintaining your physique.'},
      {icon:'🧠',title:'Automate Healthy Choices',body:'Keep healthy food visible, prepare meals in advance, and make the default choice the healthy one.'},
      {icon:'🤝',title:'Find an Activity You Love',body:'Maintenance is forever. You\'re far more likely to sustain it if at least one activity brings genuine joy.'},
      {icon:'🌙',title:'Protect Your Weekends',body:'Most maintenance failures happen Friday–Sunday. Keep one healthy anchor during the weekend.'}
    ]
  },

  balance: {
    label:'🥗 Diet Balance Plan', accent:'#A855F7',
    stats:[
      {num:'3',lbl:'Meals + 2 Snacks/Day'},
      {num:'80/20',lbl:'Whole Foods Rule'},
      {num:'7',lbl:'Food Groups Covered'},
      {num:'0',lbl:'Foods Banned'}
    ],
    stepsSub:'8 practical steps to build genuinely healthy eating habits — without extreme diets or bans.',
    mealsSub:'Colourful, varied meals covering all major food groups in the right proportions.',
    workoutSub:'Light movement to complement a balanced diet and improve digestion and wellbeing.',
    tipsSub:'Simple everyday habits that transform your relationship with food permanently.',
    steps:[
      {icon:'🌈',title:'Eat the Rainbow',body:'Aim for 5+ colours of fruits and vegetables daily. Different colours = different phytonutrients.',badge:'Every Day'},
      {icon:'🍽️',title:'Use the Plate Method',body:'Half = vegetables, quarter = lean protein, quarter = whole grains. Simple, no calorie counting.',badge:'Every Meal'},
      {icon:'🍗',title:'Include Protein at Every Meal',body:'Protein keeps you full, stabilises blood sugar, and supports muscle. Eggs, legumes, fish, or chicken.',badge:'Every Meal'},
      {icon:'🚫',title:'Minimise Ultra-Processed Food',body:'If there are more than 5 unrecognisable ingredients, put it back. Cook from scratch when possible.',badge:'Daily'},
      {icon:'💧',title:'Drink Before You Eat',body:'Drink 1 glass of water before each meal. Often, hunger is actually thirst.',badge:'Before Meals'},
      {icon:'🧘',title:'Eat Mindfully',body:'Put your phone down. Eat slowly, chew thoroughly. Your brain takes 20 minutes to register fullness.',badge:'Every Meal'},
      {icon:'🌿',title:'Reduce Sugar Gradually',body:'Swap 1 sugary item per week with a whole-food alternative. No need to go cold turkey.',badge:'Weekly'},
      {icon:'📅',title:'Meal Prep Sundays',body:'Preparing meals ahead removes the "nothing healthy to eat" excuse. Even 1 hour saves the week.',badge:'Weekly'}
    ],
    meals:[
      {time:'🌅 Breakfast',name:'Veggie Omelette + Sourdough',desc:'3 eggs with peppers, onions, spinach + 1 slice sourdough + orange juice.',cal:'420',p:'28g',c:'38g',f:'16g'},
      {time:'🍎 Snack',name:'Apple + Almond Butter',desc:'1 apple + 1.5 tbsp natural almond butter. Fibre + healthy fat — stable blood sugar.',cal:'200',p:'5g',c:'28g',f:'9g'},
      {time:'☀️ Lunch',name:'Lentil Soup + Whole Bread',desc:'Hearty red lentil soup with cumin, tomato, carrots + 2 slices wholegrain bread.',cal:'480',p:'22g',c:'72g',f:'9g'},
      {time:'🌰 Snack',name:'Hummus + Veg Sticks',desc:'80g hummus with cucumber, carrot, and celery sticks. Protein + prebiotics.',cal:'180',p:'8g',c:'18g',f:'9g'},
      {time:'🌙 Dinner',name:'Grilled Fish + Brown Rice + Salad',desc:'150g white fish, 80g brown rice, big mixed salad with olive oil dressing.',cal:'480',p:'38g',c:'52g',f:'12g'},
      {time:'⭐ Daily Total',name:'Balanced Day Summary',desc:'All major food groups covered. Varied, colourful, satisfying — and completely sustainable.',cal:'1,760',p:'101g',c:'208g',f:'55g'}
    ],
    workouts:[
      {type:'🚶 Movement',title:'Day 1 — Morning Walk',time:'30–45 min',intensity:'Easy',exes:['Brisk outdoor walk','No phone — just breathe','Note 3 things you see','Hydrate well after','Great way to start the week']},
      {type:'🧘 Mindful',title:'Day 2 — Yoga / Stretching',time:'30 min',intensity:'Gentle',exes:['Sun salutation flow — 5 rounds','Hip opener sequence','Shoulder & neck release','5 min breathing meditation','Great for digestion and stress']},
      {type:'💪 Light Strength',title:'Day 3 — Bodyweight Circuit',time:'30 min',intensity:'Moderate',exes:['Squats — 3×15','Push-Ups — 3×10','Glute Bridges — 3×15','Superman hold — 3×10','Dead bug — 3×10 each']},
      {type:'🚴 Cardio',title:'Day 4 — Low-Impact Cardio',time:'30 min',intensity:'Light-Moderate',exes:['Cycling (outdoor or stationary)','Or swimming laps','Or dancing for fun','Or a nature hike','Whatever makes you smile']},
      {type:'🌿 Active Rest',title:'Day 5 — Rest + Cook',time:'Flexible',intensity:'Rest',exes:['Gentle walk after meals','Cook a new healthy recipe','Grocery shop mindfully','Prep snacks for the week','Enjoy the process']},
      {type:'🔄 Weekend',title:'Days 6–7 — Free Movement',time:'As desired',intensity:'Enjoyment',exes:['Play a sport you enjoy','Walk with friends or family','Dance, swim, garden — anything','No pressure, just move','This is your life, not a program']}
    ],
    tips:[
      {icon:'🌿',title:'Add, Don\'t Subtract',body:'Instead of "I can\'t eat X," try "I\'ll add more veg to this." Adding positivity works better than restriction.'},
      {icon:'🏷️',title:'Read Every Label Once',body:'Spend one shopping trip reading labels. You\'ll quickly identify which products to swap permanently.'},
      {icon:'👁️',title:'Make Healthy Food Visible',body:'Place fruit on the counter, water on your desk, and prep veg at eye level in the fridge.'},
      {icon:'🍽️',title:'Use Smaller Plates',body:'A simple visual trick — a slightly smaller plate reduces portion size by up to 22% with no willpower.'},
      {icon:'🧑‍🍳',title:'Learn 5 Core Recipes',body:'Master 5 go-to healthy meals you love. Rotating them gives you a reliable healthy default.'},
      {icon:'📵',title:'Eat Without Screens',body:'Distracted eating leads to 20–25% more calories consumed. One screen-free meal a day is a powerful start.'}
    ]
  },

  endurance: {
    label:'🏃 Endurance Plan', accent:'#FFB300',
    stats:[
      {num:'5K',lbl:'Starting Target'},
      {num:'12',lbl:'Week Run Program'},
      {num:'Zone 2',lbl:'Training Focus'},
      {num:'3–5×',lbl:'Cardio Sessions/Week'}
    ],
    stepsSub:'8 steps to build your cardiovascular engine, run faster, and last longer — from beginner to beast.',
    mealsSub:'Carb-forward meals that fuel endurance sessions and aid recovery.',
    workoutSub:'A structured weekly plan to progressively build stamina and aerobic capacity.',
    tipsSub:'How endurance athletes eat, train, and recover to keep improving week after week.',
    steps:[
      {icon:'🏃',title:'Start with a Fitness Baseline',body:'Run, walk, or jog 20 minutes. Note how you feel. This is your benchmark — everything improves from here.',badge:'Week 1'},
      {icon:'❤️',title:'Train Mostly in Zone 2',body:'80% of your training should be at a pace where you can hold a conversation. This builds your aerobic base.',badge:'Always'},
      {icon:'📅',title:'Follow a Progressive Plan',body:'Add no more than 10% to your weekly distance each week. Jumping too far too fast = injury.',badge:'Weekly'},
      {icon:'🍌',title:'Carb-Load Before Long Sessions',body:'Eat a carb-rich meal 2–3 hours before long runs. Carbs are your primary endurance fuel.',badge:'Before Long Runs'},
      {icon:'💧',title:'Hydrate + Electrolytes',body:'Long sessions deplete sodium, potassium, and magnesium. Add electrolytes for sessions over 60 min.',badge:'During Long Runs'},
      {icon:'😴',title:'Recovery Runs & Rest',body:'Easy days are as important as hard ones. Your aerobic system adapts during rest, not during effort.',badge:'Weekly'},
      {icon:'🦵',title:'Strength Train 2×/Week',body:'Stronger legs and core = better running economy and injury prevention.',badge:'2× Week'},
      {icon:'📊',title:'Track Your Heart Rate',body:'Use a monitor or smartwatch. Heart rate data tells you if you\'re recovering well or overtraining.',badge:'Every Session'}
    ],
    meals:[
      {time:'🌅 Breakfast',name:'Banana Oat Pancakes',desc:'60g oats, 2 eggs, 1 banana blended into pancakes. Carb-rich, easy to digest pre-session fuel.',cal:'480',p:'20g',c:'72g',f:'12g'},
      {time:'🍎 Pre-Run Snack',name:'Dates + Rice Cakes',desc:'4 Medjool dates + 2 plain rice cakes. Fast-digesting carbs for an energy spike before your session.',cal:'240',p:'3g',c:'56g',f:'1g'},
      {time:'☀️ Lunch',name:'Pasta + Tuna + Veg',desc:'150g cooked pasta, 120g tuna, cherry tomatoes, olive oil, capers. Endurance classic.',cal:'580',p:'42g',c:'72g',f:'12g'},
      {time:'🌰 Recovery Snack',name:'Chocolate Milk + Banana',desc:'Low-fat chocolate milk is one of the most studied post-run recovery drinks.',cal:'310',p:'12g',c:'52g',f:'5g'},
      {time:'🌙 Dinner',name:'Chicken + Sweet Potato + Veg',desc:'180g grilled chicken, 200g sweet potato, steamed greens. Glycogen replenishment and overnight recovery.',cal:'580',p:'48g',c:'64g',f:'10g'},
      {time:'⭐ Daily Total',name:'Endurance Day Summary',desc:'Higher carb intake to support training volume. Adjust based on session intensity.',cal:'2,190',p:'125g',c:'316g',f:'40g'}
    ],
    workouts:[
      {type:'🏃 Run',title:'Day 1 — Easy Run',time:'30–40 min',intensity:'Zone 2',exes:['5 min walk warm-up','25–30 min easy conversational jog','5 min walk cool-down','Post-run calf & hip stretch','Log distance and avg heart rate']},
      {type:'💪 Strength',title:'Day 2 — Runner\'s Strength',time:'40 min',intensity:'Moderate',exes:['Single-leg squats — 3×10 each','Deadlifts — 3×8','Hip thrusts — 3×15','Copenhagen plank — 3×20s each','Calf raises — 4×20']},
      {type:'🏃 Run',title:'Day 3 — Interval Training',time:'40 min',intensity:'Zone 4–5',exes:['10 min easy warm-up jog','6 × 3 min hard effort / 2 min easy','Cool-down 10 min easy jog','Stretch hamstrings & quads','Note: fastest sustainable pace']},
      {type:'🧘 Recovery',title:'Day 4 — Active Recovery',time:'20–30 min',intensity:'Zone 1',exes:['Light walk or easy cycle','Full-body mobility flow','Foam rolling — calves, IT band, quads','Ice bath or cold shower (optional)','Prioritise sleep tonight']},
      {type:'🏃 Run',title:'Day 5 — Long Run',time:'60–90 min',intensity:'Zone 2',exes:['Start easy — first 10 min very slow','Maintain conversational pace throughout','Bring water + electrolytes','Eat something after within 30 min','Log your longest distance milestone']},
      {type:'🔄 Rest',title:'Days 6–7 — Full Rest',time:'—',intensity:'Rest',exes:['No running','Gentle walk is fine','Foam roll and stretch','Hydrate and eat well','Mental reset for next week']}
    ],
    tips:[
      {icon:'🐢',title:'Slow Down to Get Faster',body:'Most runners train too fast. 80% of your runs should feel embarrassingly easy. This builds the aerobic base.'},
      {icon:'🍌',title:'Carbs Are Your Friend',body:'Endurance athletes who restrict carbs perform significantly worse. Fuel the work.'},
      {icon:'👟',title:'Invest in Good Shoes',body:'Running shoes degrade after 500–800km. The right shoe for your gait prevents the most common running injuries.'},
      {icon:'📉',title:'Taper Before Race Day',body:'Reduce training volume by 40% in the final 1–2 weeks before a race. You can\'t gain fitness that close to race day.'},
      {icon:'🧊',title:'Cold Recovery Works',body:'Cold water immersion after hard sessions reduces muscle soreness and speeds recovery.'},
      {icon:'🫁',title:'Learn to Breathe Properly',body:'Practice rhythmic breathing (inhale 3 steps, exhale 2). It increases oxygen efficiency and reduces breathlessness.'}
    ]
  },

  flex: {
    label:'🧘 Wellness & Flexibility', accent:'#3DDC84',
    stats:[
      {num:'10 min',lbl:'Daily Practice'},
      {num:'4 wks',lbl:'To Feel Results'},
      {num:'↓60%',lbl:'Stress Reduction'},
      {num:'∞',lbl:'Benefits Over Time'}
    ],
    stepsSub:'8 gentle, powerful steps to reduce stress, improve flexibility, and build long-term wellbeing.',
    mealsSub:'Anti-inflammatory, gut-friendly foods that support calm energy and a healthy mind.',
    workoutSub:'A balanced weekly blend of yoga, mobility, and gentle movement for total wellbeing.',
    tipsSub:'Daily practices that reduce stress, improve sleep, and make you feel better in your own skin.',
    steps:[
      {icon:'🧘',title:'Start with 10 Min Daily',body:'Even 10 minutes of stretching or breathing daily outperforms one intense hour a week.',badge:'Daily'},
      {icon:'🌬️',title:'Learn Diaphragmatic Breathing',body:'Deep belly breathing activates the parasympathetic nervous system, reducing cortisol within 5 minutes.',badge:'Morning & Evening'},
      {icon:'🧴',title:'Build a Morning Mobility Routine',body:'5–10 min of joint circles, hip openers, and spinal twists each morning protects your body for life.',badge:'Every Morning'},
      {icon:'🥗',title:'Eat Anti-Inflammatory Foods',body:'Turmeric, berries, leafy greens, olive oil, and fatty fish reduce inflammation and improve mood.',badge:'Daily'},
      {icon:'😴',title:'Prioritise Sleep Quality',body:'A consistent sleep schedule, dark room, and no caffeine after 2pm dramatically improves sleep quality.',badge:'Nightly'},
      {icon:'📵',title:'Digital Detox Daily',body:'1 hour without screens before bed reduces mental overstimulation and anxiety.',badge:'Evening'},
      {icon:'🌿',title:'Spend Time in Nature',body:'20 minutes outdoors daily reduces cortisol by 21%, lowers blood pressure, and improves mood.',badge:'Daily'},
      {icon:'📓',title:'Journal 3 Gratitudes Daily',body:'Consistent gratitude journaling rewires the brain toward positivity, reducing anxiety significantly.',badge:'Before Bed'}
    ],
    meals:[
      {time:'🌅 Breakfast',name:'Golden Milk Oats + Berries',desc:'60g oats in plant milk + turmeric + cinnamon + blueberries. Anti-inflammatory and calming.',cal:'380',p:'12g',c:'62g',f:'10g'},
      {time:'🍵 Mid-Morning',name:'Green Tea + Handful of Nuts',desc:'Matcha or green tea (L-theanine for calm focus) + 20g walnuts (omega-3 for brain health).',cal:'180',p:'4g',c:'8g',f:'14g'},
      {time:'☀️ Lunch',name:'Avocado Salad + Lentils',desc:'Big leafy salad, 1 avocado, 100g lentils, cherry tomatoes, extra virgin olive oil, lemon.',cal:'480',p:'20g',c:'48g',f:'22g'},
      {time:'🌿 Afternoon',name:'Herbal Tea + Dark Chocolate',desc:'Chamomile or peppermint tea + 2 squares of 85%+ dark chocolate. Magnesium and natural relaxants.',cal:'120',p:'2g',c:'14g',f:'6g'},
      {time:'🌙 Dinner',name:'Salmon + Miso Soup + Greens',desc:'130g salmon with miso-glazed bok choy and edamame. Omega-3, probiotics, and magnesium for sleep.',cal:'490',p:'40g',c:'28g',f:'24g'},
      {time:'⭐ Daily Total',name:'Wellness Day Summary',desc:'Calming, anti-inflammatory, and gut-supportive. You\'ll notice improved mood and sleep within days.',cal:'1,650',p:'78g',c:'160g',f:'76g'}
    ],
    workouts:[
      {type:'🌅 Morning',title:'Day 1 — Morning Yoga Flow',time:'30 min',intensity:'Gentle',exes:['Cat-cow stretches × 10','Sun salutation × 5 rounds','Warrior I, II, III','Pigeon pose (hold 60s each)','Savasana — 5 min']},
      {type:'🧘 Mindful',title:'Day 2 — Meditation + Walk',time:'30 min',intensity:'Rest',exes:['10 min guided body scan','20 min mindful outdoor walk','Notice sights, sounds, smells','No earphones — just presence','Journal one observation after']},
      {type:'💪 Gentle',title:'Day 3 — Pilates Core',time:'30 min',intensity:'Light-Moderate',exes:['Dead bug — 3×10 each','Bird dog — 3×10 each','Glute bridge — 3×15','Side plank — 3×20s each','Supine twist — 60s each side']},
      {type:'🌊 Flow',title:'Day 4 — Yin Yoga',time:'45 min',intensity:'Very Gentle',exes:['Hold each pose 3–5 minutes','Butterfly pose','Dragon (hip flexor)','Sleeping swan','Supported fish','Final relaxation 10 min']},
      {type:'🏊 Low Impact',title:'Day 5 — Swimming or Walking',time:'30–45 min',intensity:'Easy',exes:['Swimming laps — easy pace','Or long nature walk','Focus on slow, deep breathing','No targets, no timing','Just move and enjoy']},
      {type:'🌙 Restore',title:'Days 6–7 — Restorative Rest',time:'As needed',intensity:'Rest',exes:['Epsom salt bath','5 min legs-up-the-wall pose','Read something uplifting','Spend time with loved ones','Full permission to do nothing']}
    ],
    tips:[
      {icon:'🌬️',title:'The 4-7-8 Breath',body:'Inhale for 4 counts, hold for 7, exhale for 8. This activates the vagus nerve and reduces anxiety within 3 cycles.'},
      {icon:'📵',title:'Morning Without Your Phone',body:'Keep your phone out of the bedroom. Your first 30 minutes without screens sets the emotional tone for the day.'},
      {icon:'🌿',title:'Cold Shower Mornings',body:'30 seconds of cold water at the end of your shower releases endorphins and reduces inflammation.'},
      {icon:'🧂',title:'Magnesium Before Bed',body:'Magnesium glycinate (200–400mg) before bed dramatically improves sleep quality and reduces anxiety.'},
      {icon:'🌳',title:'Forest Bathing Weekly',body:'Spending 2 hours in a park setting measurably reduces cortisol and blood pressure.'},
      {icon:'📓',title:'Write Down Worries',body:'Writing worries down before bed reduces their cognitive load by up to 50% and improves sleep quality.'}
    ]
  }
};

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
let currentGoal = 'lose';

// ═══════════════════════════════════════════════
// GOAL SWITCHER
// ═══════════════════════════════════════════════
function setGoal(goal, el) {
  currentGoal = goal;
  document.querySelectorAll('.goal-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderAll();
  setTimeout(() => document.getElementById('steps').scrollIntoView({behavior:'smooth'}), 200);
}

function renderAll() {
  const d = GOALS[currentGoal];
  document.documentElement.style.setProperty('--accent', d.accent);

  document.getElementById('stepsBanner').textContent = d.label;
  document.getElementById('mealsBanner').textContent = d.label;
  document.getElementById('workoutBanner').textContent = d.label;
  document.getElementById('tipsBanner').textContent = d.label;
  document.getElementById('stepsSub').textContent = d.stepsSub;
  document.getElementById('mealsSub').textContent = d.mealsSub;
  document.getElementById('workoutSub').textContent = d.workoutSub;
  document.getElementById('tipsSub').textContent = d.tipsSub;

  document.getElementById('statsBar').innerHTML = d.stats.map(s =>
    `<div class="stat-item"><div class="stat-num">${s.num}</div><div class="stat-label">${s.lbl}</div></div>`
  ).join('');

  animateSwitch('stepsGrid', () => {
    document.getElementById('stepsGrid').innerHTML = d.steps.map((s, i) => `
      <div class="step-card fade-in">
        <div class="step-num">${i+1}</div>
        <div class="step-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
        <span class="step-badge">${s.badge}</span>
      </div>`).join('');
    reObserve();
  });

  animateSwitch('mealsGrid', () => {
    document.getElementById('mealsGrid').innerHTML = d.meals.map(m => `
      <div class="meal-card fade-in">
        <div class="meal-time">${m.time}</div>
        <div class="meal-name">${m.name}</div>
        <div class="meal-desc">${m.desc}</div>
        <div class="macros">
          <div class="macro"><div class="macro-val">${m.cal}</div><div class="macro-lbl">Calories</div></div>
          <div class="macro"><div class="macro-val">${m.p}</div><div class="macro-lbl">Protein</div></div>
          <div class="macro"><div class="macro-val">${m.c}</div><div class="macro-lbl">Carbs</div></div>
          <div class="macro"><div class="macro-val">${m.f}</div><div class="macro-lbl">Fat</div></div>
        </div>
      </div>`).join('');
    reObserve();
  });

  animateSwitch('workoutGrid', () => {
    document.getElementById('workoutGrid').innerHTML = d.workouts.map(w => `
      <div class="workout-card fade-in">
        <div class="workout-type">${w.type}</div>
        <div class="workout-title">${w.title}</div>
        <div class="workout-meta">
          <span class="meta-pill">⏱ ${w.time}</span>
          <span class="meta-pill">⚡ ${w.intensity}</span>
        </div>
        <ul class="ex-list">${w.exes.map(e=>`<li>${e}</li>`).join('')}</ul>
      </div>`).join('');
    reObserve();
  });

  animateSwitch('tipsGrid', () => {
    document.getElementById('tipsGrid').innerHTML = d.tips.map(t => `
      <div class="tip-card fade-in">
        <div class="tip-icon">${t.icon}</div>
        <h3>${t.title}</h3>
        <p>${t.body}</p>
      </div>`).join('');
    reObserve();
  });

  renderHabits();
}

function animateSwitch(id, fn) {
  const el = document.getElementById(id);
  el.classList.add('switching');
  setTimeout(() => { fn(); el.classList.remove('switching'); }, 350);
}

// ═══════════════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════════════
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

function reObserve() {
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ═══════════════════════════════════════════════
// BMI CALCULATOR
// ═══════════════════════════════════════════════
function calculate() {
  const age = parseFloat(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const activity = parseFloat(document.getElementById('activity').value);
  if (!age || !height || !weight) { alert('Please fill in all fields.'); return; }

  const bmi = (weight / ((height/100)**2)).toFixed(1);
  let cat='', catCol='', msg='';
  if(bmi<18.5){cat='Underweight';catCol='#4F9FFF';msg='You are underweight. A calorie surplus with strength training will help you reach a healthy range.';}
  else if(bmi<25){cat='Normal Weight';catCol='#22c55e';msg='You are in a healthy weight range. Maintain through balanced nutrition and regular activity.';}
  else if(bmi<30){cat='Overweight';catCol='#eab308';msg='A 300–400 calorie daily deficit with exercise will bring you to a healthy range steadily.';}
  else{cat='Obese';catCol='#ef4444';msg='A moderate calorie deficit and low-impact activity is the starting point. Consult a doctor for personalised guidance.';}

  const bmr = gender==='male' ? 10*weight+6.25*height-5*age+5 : 10*weight+6.25*height-5*age-161;
  const tdee = Math.round(bmr * activity);
  const goalCalories = {
    lose:{val:tdee-400,lbl:'Fat Loss Target'},
    gain:{val:tdee+400,lbl:'Muscle Gain Target'},
    maintain:{val:tdee,lbl:'Maintenance Target'},
    balance:{val:tdee-100,lbl:'Balanced Target'},
    endurance:{val:tdee+200,lbl:'Endurance Fuelling'},
    flex:{val:tdee-150,lbl:'Wellness Target'}
  };
  const gc = goalCalories[currentGoal];
  const protein = Math.round(weight * (currentGoal==='gain' ? 2.2 : currentGoal==='lose' ? 2.0 : 1.7));
  const markerPct = Math.min(Math.max(((bmi-10)/30)*100, 0), 100);

  document.getElementById('resultBox').innerHTML = `
    <div style="font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Your BMI</div>
    <div class="result-bmi" style="color:${catCol}">${bmi}</div>
    <div class="result-cat" style="color:${catCol}">${cat}</div>
    <div class="result-msg">${msg}</div>
    <div class="cal-pills">
      <div class="cal-pill"><div class="cal-pill-val">${tdee.toLocaleString()}</div><div class="cal-pill-lbl">Maintenance Calories</div></div>
      <div class="cal-pill"><div class="cal-pill-val" style="color:var(--accent)">${gc.val.toLocaleString()}</div><div class="cal-pill-lbl">${gc.lbl}</div></div>
      <div class="cal-pill"><div class="cal-pill-val" style="color:var(--green)">${protein}g</div><div class="cal-pill-lbl">Daily Protein</div></div>
    </div>
    <div style="font-size:11px;color:var(--muted);margin-top:14px;margin-bottom:6px;display:flex;justify-content:space-between">
      <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
    </div>
    <div class="bmi-bar"><div class="bmi-marker" id="bmiM" style="left:0%"></div></div>
    <div class="result-tip">💡 Your calorie target is personalised for your <strong>${GOALS[currentGoal].label.replace(/^.\s/,'')}</strong>. Change goal above to update.</div>
  `;
  setTimeout(() => { const m=document.getElementById('bmiM'); if(m) m.style.left=markerPct+'%'; }, 100);
}

// ═══════════════════════════════════════════════
// HABIT TRACKER
// ═══════════════════════════════════════════════
const habitsByGoal = {
  lose:      [{l:'💧 Water (glasses)',max:8,u:'/8',step:1},{l:'🚶 Steps',max:10000,u:'/10k',step:1000},{l:'🥗 Protein Goal',max:100,u:'%',step:10},{l:'😴 Sleep (hrs)',max:9,u:'h',step:1},{l:'🏋️ Workout',max:1,u:'',step:1}],
  gain:      [{l:'💧 Water (glasses)',max:8,u:'/8',step:1},{l:'🍽️ Meals Eaten',max:6,u:'/6',step:1},{l:'🥩 Protein Goal',max:100,u:'%',step:10},{l:'😴 Sleep (hrs)',max:9,u:'h',step:1},{l:'💪 Workout',max:1,u:'',step:1}],
  maintain:  [{l:'💧 Water (glasses)',max:8,u:'/8',step:1},{l:'🚶 Steps',max:9000,u:'/9k',step:1000},{l:'🥗 Balanced Meals',max:3,u:'/3',step:1},{l:'😴 Sleep (hrs)',max:8,u:'h',step:1},{l:'🏃 Activity Done',max:1,u:'',step:1}],
  balance:   [{l:'💧 Water (glasses)',max:8,u:'/8',step:1},{l:'🌈 Veg Servings',max:5,u:'/5',step:1},{l:'🍎 Fruit Servings',max:3,u:'/3',step:1},{l:'🚫 Junk-Free Meals',max:3,u:'/3',step:1},{l:'🧘 Mindful Eating',max:1,u:'',step:1}],
  endurance: [{l:'💧 Water (litres)',max:4,u:'/4L',step:0.5},{l:'🏃 KM Run',max:10,u:'km',step:1},{l:'🍌 Carb Goal',max:100,u:'%',step:10},{l:'😴 Sleep (hrs)',max:9,u:'h',step:1},{l:'❤️ Cardio Done',max:1,u:'',step:1}],
  flex:      [{l:'🌬️ Breathing (min)',max:10,u:'/10m',step:2},{l:'🧘 Stretching (min)',max:30,u:'/30m',step:5},{l:'🌿 Time Outside (min)',max:30,u:'/30m',step:5},{l:'😴 Sleep (hrs)',max:9,u:'h',step:1},{l:'📓 Journaled',max:1,u:'',step:1}]
};

let habitState = [];
function renderHabits() {
  habitState = habitsByGoal[currentGoal].map(h => ({...h, val:0}));
  drawHabits();
}
function drawHabits() {
  document.getElementById('habitRows').innerHTML = habitState.map((h,i) => {
    const pct = Math.min((h.val/h.max)*100, 100);
    return `
      <div class="habit-row">
        <div class="habit-top">
          <span class="habit-lbl">${h.l}</span>
          <button class="hab-btn hab-dec" onclick="adjHabit(${i},-1)">−</button>
          <span class="hab-val">${h.val}${h.u}</span>
          <button class="hab-btn hab-inc" onclick="adjHabit(${i},1)">+</button>
        </div>
        <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
      </div>`;
  }).join('');
}
function adjHabit(i, dir) {
  const h = habitState[i];
  h.val = Math.max(0, Math.min(h.max, h.val + dir * h.step));
  drawHabits();
}

// ═══════════════════════════════════════════════
// WEIGHT LOG
// ═══════════════════════════════════════════════
let logs = [];
function addLog() {
  const date = document.getElementById('logDate').value;
  const w = document.getElementById('logWeight').value;
  const note = document.getElementById('logNote').value;
  if(!date||!w){alert('Enter a date and weight.');return;}
  logs.unshift({date, weight:parseFloat(w), note});
  document.getElementById('logDate').value = '';
  document.getElementById('logWeight').value = '';
  document.getElementById('logNote').value = '';
  renderLogs();
}
function renderLogs() {
  const el = document.getElementById('logEntries');
  if(!logs.length){
    el.innerHTML='<p style="color:var(--muted);font-size:13px;padding:12px 0">No entries yet — start logging!</p>';
    return;
  }
  el.innerHTML = logs.map((l,i) => `
    <div class="log-entry">
      <div>
        <span style="font-weight:700">${l.weight} kg</span>
        ${l.note?`<span style="color:var(--muted);margin-left:10px">— ${l.note}</span>`:''}
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <span style="color:var(--muted);font-size:12px">${new Date(l.date).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</span>
        <button class="log-del" onclick="deleteLog(${i})">✕</button>
      </div>
    </div>`).join('');
}
function deleteLog(i){logs.splice(i,1);renderLogs();}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
document.getElementById('logDate').valueAsDate = new Date();
renderAll();
