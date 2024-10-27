export const DIET_FILTERS = [
  'balanced',
  'high-fiber',
  'high-protein',
  'low-carb',
  'low-fat',
  'low-sodium',
];
export const HEALTH_FILTERS = [
  'alcohol-coctail',
  'alcohol-free',
  'celery-free',
  'crustacean-free',
  'dairy-free',
  'DASH',
  'egg-free',
  'fish-free',
  'fodmap-free',
  'gluten-free',
  'immuno-supportive',
  'keto-friendly',
  'kidney-friendly',
  'koshar',
  'low-pottassiam',
  'low-sugar',
  'lupine-free',
  'mollusk-free',
  'mustard-free',
  'no-oil-added',
  'paleo',
  'peanut-free',
];
export const MEAL_FILTERS = [
  {title: 'breakfast', icon: require('./images/MEAL/breakfast.png')},
  {title: 'brunch', icon: require('./images/MEAL/brunch.png')},
  {title: 'lunch', icon: require('./images/MEAL/lunch.png')},
  {title: 'dinner', icon: require('./images/MEAL/dinner.png')},
  {title: 'snack', icon: require('./images/MEAL/snack.png')},
  {title: 'tea-time', icon: require('./images/MEAL/teatime.png')},
];
export const DISH_FILTERS = [
  'alcohol cocktail',
  'biscuits and cookies',
  'bread',
  'cereals',
  'condiments and souces',
  'desserts',
  'drinks',
  'egg',
  'icecream and custard',
  'main course',
  'pan cake',
  'pasta',
  'pastry',
  'pies and tarts',
  'pizza',
  'peps',
  'preserve',
  'salad',
  'sea food',
  'side dish',
  'soup',
  'special-occasions',
  'starter',
  'sweets',
];
export const CUISINE_FILTERS = [
  'american',
  'american',
  'british',
  'caribbean',
  'central europe',
  'chinese',
  'eastern europe',
  'french',
  'greek',
  'indian',
  'italian',
  'japanese',
  'korean',
  'kosher',
  'mediterranean',
  'mexican',
  'middle eastern',
  'nordic',
  'south american',
  'south east asian',
  'world',
];

export const TRENDY_RECIPES = [
  {
    label: 'Chicken Biryani',
    image: require('./images/trendyRecipes/chicken_biryani.jpg'),
    source: 'Food Network',
    totalweight: '550.0',
    mealtype: 'Dinner',
    calaries: '50.11002',
    healthLabels: [
      'High in protein',
      'Rich in spices with anti-inflammatory properties',
    ],
    cautions: [
      'High in calories',
      'Contains rice, may not be suitable for low-carb diets',
    ],
    ingredients: [
      '300g chicken',
      '2 cups basmati rice',
      '1 cup yogurt',
      'Spices (saffron, cardamom, cloves, cinnamon)',
      '1 onion',
      'Fresh herbs (mint, coriander)',
    ],
    dietLabels: ['Non-Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Chole Bhature',
    image: require('./images/trendyRecipes/chholeBhature.jpg'),
    source: 'Epicurious',
    totalweight: '450.0',
    mealtype: 'Lunch',
    calaries: '50.11002',
    healthLabels: [
      'High protein',
      'Rich in fiber',
      'Dairy-free',
      'Peanut-free',
      'Soy-free',
      'Vegetarian',
    ],
    cautions: [
      'High calories',
      'Contains gluten',
      'May increase cholesterol',
      'High sodium',
    ],
    ingredients: [
      'Chickpeas',
      'Onion',
      'Tomato',
      'Garlic',
      'Wheat flour',
      'Spices',
      'Oil',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Butter Chicken',
    image: require('./images/trendyRecipes/Butter-Chicken.jpg'),
    source: 'Food Network',
    totalweight: '500.0',
    mealtype: 'Dinner',
    calaries: '50.11002',
    healthLabels: ['High protein', 'Source of calcium', 'Gluten-free'],
    cautions: ['High fat', 'Lactose intolerance', 'High sodium'],
    ingredients: ['Chicken', 'Tomato', 'Yogurt', 'Butter', 'Cream', 'Spices'],
    dietLabels: ['Non-Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Idli Sambar',
    image: require('./images/trendyRecipes/idli_sambar.jpg'),
    source: 'BBC Good Food',
    totalweight: '300.0',
    mealtype: 'Breakfast',
    calaries: '50.11002',
    healthLabels: [
      'Low fat',
      'High protein',
      'Dairy-free',
      'Vegan',
      'Gluten-free',
    ],
    cautions: ['May cause gas due to lentils'],
    ingredients: [
      'Rice',
      'Urad dal',
      'Vegetables',
      'Mustard seeds',
      'Curry leaves',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Breakfast'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Palak Paneer',
    image: require('./images/trendyRecipes/palak_paneer.jpg'),
    source: 'Epicurious',
    totalweight: '400.0',
    mealtype: 'Lunch',
    calaries: '50.11002',
    healthLabels: ['High in iron and calcium', 'Rich in protein'],
    cautions: [
      'May cause digestive discomfort for lactose-intolerant individuals',
    ],
    ingredients: [
      '2 cups spinach',
      '200g paneer (Indian cottage cheese)',
      '1 tbsp oil',
      '1 onion',
      '2 tomatoes',
      'Spices (turmeric, cumin, coriander, garam masala)',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Rajma Chawal',
    image: require('./images/trendyRecipes/rajma-chawal.jpg'),
    source: 'Serious Eats',
    totalweight: '550.0',
    mealtype: 'Lunch',
    calaries: '50.11002',
    healthLabels: ['High fiber', 'Rich in iron', 'Dairy-free', 'Vegan'],
    cautions: ['High carbs', 'May cause gas'],
    ingredients: ['Kidney beans', 'Rice', 'Onion', 'Tomato', 'Spices'],
    dietLabels: ['Vegetarian', 'Vegan'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Paneer Tikka',
    image: require('./images/trendyRecipes/Paneer-Tikka.jpg'),
    source: 'Food & Wine',
    totalweight: '200.0',
    mealtype: 'Dinner',
    calaries: '50.11002',
    healthLabels: ['High protein', 'Low-carb', 'Vegetarian'],
    cautions: ['High fat', 'Contains lactose'],
    ingredients: ['Paneer', 'Yogurt', 'Bell peppers', 'Spices'],
    dietLabels: ['Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Appetizer'],
  },
  {
    label: 'Pav Bhaji',
    image: require('./images/trendyRecipes/Pav-Bhaji.jpg'),
    source: 'Taste of Home',
    totalweight: '400.0',
    mealtype: 'Snack',
    calaries: '50.11002',
    healthLabels: ['Rich in vitamins', 'High fiber', 'Vegetarian'],
    cautions: ['High fat', 'Contains gluten'],
    ingredients: [
      'Potato',
      'Mixed vegetables',
      'Onion',
      'Pav bread',
      'Butter',
      'Spices',
    ],
    diet: ['Vegetarian'],
    mealType: ['Snack'],
    cuisines: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Masala Dosa',
    image: require('./images/trendyRecipes/masala_dosa.jpg'),
    source: 'BBC Good Food',
    totalweight: '250.0',
    mealtype: 'Breakfast',
    calaries: '50.11002',
    healthLabels: ['Low in fat', 'Good source of carbohydrates'],
    cautions: ['May contain high sodium in some recipes'],
    ingredients: [
      '1 cup rice',
      '1/2 cup urad dal',
      'Potatoes',
      'Spices (mustard seeds, turmeric, curry leaves)',
      'Salt',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Breakfast'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
];

export const TYPES = [
  {
    type: 'Health',
  },
  {
    type: 'Cautions',
  },
  {
    type: 'Ingredients',
  },
  {
    type: 'Diet',
  },
  {
    type: 'Meal Type',
  },
  {
    type: 'Cuisines',
  },
  {
    type: 'Dish Type',
  },
];
export const BREAKFAST_RECIPES = [
  {
    label: 'Aloo Paratha',
    image: require('./images/breakfastRecipes/aloo_paratha.jpg'),
    source: 'Food & Wine',
    totalweight: '300.0',
    mealtype: 'Breakfast',
    calories: '270',
    healthLabels: ['High in carbohydrates', 'Vegetarian'],
    cautions: ['High in calories', 'Contains gluten'],
    ingredients: [
      'Wheat flour',
      'Potato',
      'Spices (cumin, coriander)',
      'Salt',
      'Oil',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Breakfast'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Poha',
    image: require('./images/breakfastRecipes/poha.jpg'),
    source: 'Serious Eats',
    totalweight: '250.0',
    mealtype: 'Breakfast',
    calories: '200',
    healthLabels: ['Low fat', 'Rich in iron', 'Vegetarian'],
    cautions: ['May be high in carbs'],
    ingredients: [
      'Flattened rice',
      'Onion',
      'Mustard seeds',
      'Turmeric',
      'Curry leaves',
      'Green chili',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Breakfast'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Upma',
    image: require('./images/breakfastRecipes/upma.jpg'),
    source: 'Epicurious',
    totalweight: '200.0',
    mealtype: 'Breakfast',
    calories: '180',
    healthLabels: ['High fiber', 'Low fat', 'Vegetarian'],
    cautions: ['Contains gluten'],
    ingredients: [
      'Semolina',
      'Vegetables (carrot, peas)',
      'Onion',
      'Mustard seeds',
      'Curry leaves',
      'Oil',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Breakfast'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Vegetable Sandwich',
    image: require('./images/breakfastRecipes/vegetable_sandwich.jpg'),
    source: 'BBC Good Food',
    totalweight: '150.0',
    mealtype: 'Breakfast',
    calories: '220',
    healthLabels: ['High fiber', 'Vegetarian'],
    cautions: ['Contains gluten'],
    ingredients: [
      'Whole wheat bread',
      'Tomato',
      'Cucumber',
      'Bell peppers',
      'Lettuce',
      'Salt and pepper',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Breakfast'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Besan Chilla',
    image: require('./images/breakfastRecipes/besan_chilla.jpg'),
    source: 'Food Network',
    totalweight: '200.0',
    mealtype: 'Breakfast',
    calories: '180',
    healthLabels: ['High protein', 'Gluten-free', 'Vegetarian'],
    cautions: ['May cause gas for some individuals'],
    ingredients: [
      'Chickpea flour',
      'Onion',
      'Tomato',
      'Green chili',
      'Coriander leaves',
      'Spices (turmeric, cumin)',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Breakfast'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Oats Idli',
    image: require('./images/breakfastRecipes/oats_idli.jpg'),
    source: 'Taste of Home',
    totalweight: '180.0',
    mealtype: 'Breakfast',
    calories: '150',
    healthLabels: ['High fiber', 'Low fat', 'Vegetarian'],
    cautions: ['Contains gluten'],
    ingredients: [
      'Oats',
      'Semolina',
      'Curd',
      'Vegetables (carrot, peas)',
      'Spices (mustard seeds, cumin)',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Breakfast'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Rava Dosa',
    image: require('./images/breakfastRecipes/rava_dosa.jpg'),
    source: 'Epicurious',
    totalweight: '150.0',
    mealtype: 'Breakfast',
    calories: '190',
    healthLabels: ['Low calorie', 'Vegetarian'],
    cautions: ['High sodium', 'Contains gluten'],
    ingredients: [
      'Semolina',
      'Rice flour',
      'Onion',
      'Green chili',
      'Cumin seeds',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Breakfast'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Pesarattu',
    image: require('./images/breakfastRecipes/pesarattu.jpg'),
    source: 'Serious Eats',
    totalweight: '200.0',
    mealtype: 'Breakfast',
    calories: '220',
    healthLabels: ['High protein', 'Gluten-free', 'Vegan'],
    cautions: ['May cause gas for some individuals'],
    ingredients: ['Green gram', 'Ginger', 'Green chili', 'Cumin seeds', 'Oil'],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Breakfast'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
];

export const BRUNCH_RECIPES = [
  {
    label: 'Stuffed Paratha',
    image: require('./images/brunchRecipes/stuffed_paratha.jpg'),
    source: 'Epicurious',
    totalweight: '350.0',
    mealtype: 'Brunch',
    calories: '280',
    healthLabels: ['High fiber', 'Vegetarian'],
    cautions: ['Contains gluten', 'High calories'],
    ingredients: [
      'Whole wheat flour',
      'Potatoes',
      'Spices (coriander, cumin)',
      'Salt',
      'Oil',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Brunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Vegetable Uttapam',
    image: require('./images/brunchRecipes/vegetable_uttapam.jpg'),
    source: 'Food Network',
    totalweight: '300.0',
    mealtype: 'Brunch',
    calories: '220',
    healthLabels: ['Low fat', 'High fiber', 'Vegetarian'],
    cautions: ['Contains gluten'],
    ingredients: [
      'Rice flour',
      'Urad dal',
      'Vegetables (tomato, onion, green chili)',
      'Spices (cumin)',
      'Salt',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Brunch'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Paneer Bhurji',
    image: require('./images/brunchRecipes/paneer_bhurji.jpg'),
    source: 'Serious Eats',
    totalweight: '250.0',
    mealtype: 'Brunch',
    calories: '260',
    healthLabels: ['High protein', 'Low-carb', 'Vegetarian'],
    cautions: ['Contains lactose'],
    ingredients: [
      'Paneer (Indian cottage cheese)',
      'Onion',
      'Tomato',
      'Green chili',
      'Spices (turmeric, cumin)',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Brunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Mixed Vegetable Poha',
    image: require('./images/brunchRecipes/mixed_vegetable_poha.jpg'),
    source: 'Taste of Home',
    totalweight: '250.0',
    mealtype: 'Brunch',
    calories: '210',
    healthLabels: ['Rich in iron', 'Vegetarian'],
    cautions: ['High in carbs'],
    ingredients: [
      'Flattened rice',
      'Vegetables (carrot, peas, potato)',
      'Mustard seeds',
      'Turmeric',
      'Curry leaves',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Brunch'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Masala Omelette',
    image: require('./images/brunchRecipes/masala_omelette.jpg'),
    source: 'BBC Good Food',
    totalweight: '200.0',
    mealtype: 'Brunch',
    calories: '180',
    healthLabels: ['High protein', 'Low-carb'],
    cautions: ['Contains eggs'],
    ingredients: [
      'Eggs',
      'Onion',
      'Tomato',
      'Green chili',
      'Coriander leaves',
      'Spices (turmeric, pepper)',
    ],
    dietLabels: ['Non-Vegetarian'],
    mealType: ['Brunch'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Chana Masala with Poori',
    image: require('./images/brunchRecipes/chana_masala_poori.jpg'),
    source: 'Food & Wine',
    totalweight: '400.0',
    mealtype: 'Brunch',
    calories: '450',
    healthLabels: ['High in protein', 'Rich in fiber', 'Vegetarian'],
    cautions: ['High calories', 'Contains gluten'],
    ingredients: [
      'Chickpeas',
      'Tomato',
      'Onion',
      'Spices (garam masala, cumin)',
      'Wheat flour',
      'Oil',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Brunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Aloo Tikki',
    image: require('./images/brunchRecipes/aloo_tikki.jpg'),
    source: 'Epicurious',
    totalweight: '150.0',
    mealtype: 'Brunch',
    calories: '250',
    healthLabels: ['Vegetarian', 'Rich in carbohydrates'],
    cautions: ['High in carbs', 'May contain gluten'],
    ingredients: [
      'Potatoes',
      'Breadcrumbs',
      'Spices (cumin, chili powder)',
      'Oil',
      'Salt',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Brunch'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Egg Bhurji',
    image: require('./images/brunchRecipes/egg_bhurji.jpg'),
    source: 'BBC Good Food',
    totalweight: '180.0',
    mealtype: 'Brunch',
    calories: '190',
    healthLabels: ['High protein', 'Low-carb'],
    cautions: ['Contains eggs'],
    ingredients: [
      'Eggs',
      'Onion',
      'Tomato',
      'Green chili',
      'Spices (cumin, turmeric)',
    ],
    dietLabels: ['Non-Vegetarian'],
    mealType: ['Brunch'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Sabudana Khichdi',
    image: require('./images/brunchRecipes/sabudana_khichdi.jpg'),
    source: 'Serious Eats',
    totalweight: '250.0',
    mealtype: 'Brunch',
    calories: '300',
    healthLabels: ['Gluten-free', 'Vegetarian'],
    cautions: ['High carbs'],
    ingredients: [
      'Sabudana (tapioca pearls)',
      'Potato',
      'Peanuts',
      'Spices (cumin, green chili)',
      'Salt',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Brunch'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
];

export const LUNCH_RECIPES = [
  {
    label: 'Chicken Curry',
    image: require('./images/lunchRecipes/chicken_curry.jpg'),
    source: 'Epicurious',
    totalweight: '450.0',
    mealtype: 'Lunch',
    calories: '320',
    healthLabels: ['High protein', 'Gluten-free'],
    cautions: ['High in fat'],
    ingredients: [
      '500g chicken',
      'Onions',
      'Tomatoes',
      'Garlic',
      'Ginger',
      'Spices (turmeric, cumin, coriander, garam masala)',
    ],
    dietLabels: ['Non-Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Dal Tadka',
    image: require('./images/lunchRecipes/dal_tadka.jpg'),
    source: 'BBC Good Food',
    totalweight: '350.0',
    mealtype: 'Lunch',
    calories: '240',
    healthLabels: ['High in fiber', 'Vegan', 'Gluten-free'],
    cautions: ['High sodium'],
    ingredients: [
      'Yellow lentils (Toor dal)',
      'Garlic',
      'Tomato',
      'Onion',
      'Ginger',
      'Spices (turmeric, cumin, mustard seeds)',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Vegetable Biryani',
    image: require('./images/lunchRecipes/vegetable_biryani.jpg'),
    source: 'Food Network',
    totalweight: '500.0',
    mealtype: 'Lunch',
    calories: '350',
    healthLabels: ['High fiber', 'Vegetarian'],
    cautions: ['High in carbs', 'Contains rice'],
    ingredients: [
      'Basmati rice',
      'Mixed vegetables (carrot, peas, beans)',
      'Onions',
      'Spices (saffron, cardamom, cloves, cinnamon)',
      'Yogurt',
      'Fresh herbs (mint, coriander)',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Paneer Butter Masala',
    image: require('./images/lunchRecipes/paneer_butter_masala.jpg'),
    source: 'Taste of Home',
    totalweight: '400.0',
    mealtype: 'Lunch',
    calories: '420',
    healthLabels: ['High protein', 'Vegetarian'],
    cautions: ['High fat', 'Contains lactose'],
    ingredients: [
      'Paneer',
      'Tomato',
      'Butter',
      'Cream',
      'Spices (turmeric, cumin, garam masala)',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Bhindi Masala',
    image: require('./images/lunchRecipes/bhindi_masala.jpg'),
    source: 'Serious Eats',
    totalweight: '300.0',
    mealtype: 'Lunch',
    calories: '190',
    healthLabels: ['Low fat', 'Vegan', 'Gluten-free'],
    cautions: [],
    ingredients: [
      'Okra (bhindi)',
      'Onion',
      'Tomato',
      'Spices (turmeric, cumin, coriander)',
      'Green chili',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Fish Curry',
    image: require('./images/lunchRecipes/fish_curry.jpg'),
    source: 'Food & Wine',
    totalweight: '400.0',
    mealtype: 'Lunch',
    calories: '310',
    healthLabels: ['High protein', 'Low-carb'],
    cautions: ['Contains fish', 'High sodium'],
    ingredients: [
      'Fish fillets',
      'Coconut milk',
      'Tomato',
      'Onion',
      'Garlic',
      'Spices (turmeric, cumin, mustard seeds)',
    ],
    dietLabels: ['Non-Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
 
  {
    label: 'Stuffed Bell Peppers',
    image: require('./images/lunchRecipes/stuffed_bell_peppers.jpg'),
    source: 'BBC Good Food',
    totalweight: '350.0',
    mealtype: 'Lunch',
    calories: '250',
    healthLabels: ['Low fat', 'High fiber', 'Vegetarian'],
    cautions: [],
    ingredients: [
      'Bell peppers',
      'Mixed vegetables (peas, carrots)',
      'Paneer',
      'Spices (cumin, turmeric)',
      'Rice',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Aloo Gobi',
    image: require('./images/lunchRecipes/aloo_gobi.jpg'),
    source: 'Taste of Home',
    totalweight: '350.0',
    mealtype: 'Lunch',
    calories: '200',
    healthLabels: ['Low fat', 'Vegan'],
    cautions: ['High in carbs'],
    ingredients: [
      'Potatoes',
      'Cauliflower',
      'Tomato',
      'Spices (cumin, turmeric, coriander)',
      'Ginger',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Kadhi Pakora',
    image: require('./images/lunchRecipes/kadhi_pakora.jpg'),
    source: 'Serious Eats',
    totalweight: '400.0',
    mealtype: 'Lunch',
    calories: '260',
    healthLabels: ['Vegetarian'],
    cautions: ['Contains gluten', 'Contains lactose'],
    ingredients: [
      'Gram flour (besan)',
      'Yogurt',
      'Onion',
      'Spices (turmeric, cumin, fenugreek)',
      'Curry leaves',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Lunch'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
];

export const DINNER_RECIPES = [
  {
    label: 'Lamb Rogan Josh',
    image: require('./images/dinnerRecipes/lamb_rogan_josh.jpg'),
    source: 'Food Network',
    totalweight: '500.0',
    mealtype: 'Dinner',
    calories: '450',
    healthLabels: ['High protein', 'Gluten-free'],
    cautions: ['High fat', 'High sodium'],
    ingredients: [
      '500g lamb',
      'Onions',
      'Tomatoes',
      'Garlic',
      'Ginger',
      'Spices (turmeric, cumin, coriander, garam masala)',
      'Yogurt',
    ],
    dietLabels: ['Non-Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Paneer Makhani',
    image: require('./images/dinnerRecipes/paneer_makhani.jpg'),
    source: 'Epicurious',
    totalweight: '400.0',
    mealtype: 'Dinner',
    calories: '400',
    healthLabels: ['High protein', 'Vegetarian'],
    cautions: ['High fat', 'Contains lactose'],
    ingredients: [
      'Paneer',
      'Tomato puree',
      'Butter',
      'Cream',
      'Spices (turmeric, cumin, garam masala)',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Fish Tikka Masala',
    image: require('./images/dinnerRecipes/fish_tikka_masala.jpg'),
    source: 'BBC Good Food',
    totalweight: '350.0',
    mealtype: 'Dinner',
    calories: '320',
    healthLabels: ['High protein', 'Low carb', 'Gluten-free'],
    cautions: ['Contains fish', 'High sodium'],
    ingredients: [
      'Fish fillets',
      'Yogurt',
      'Tomato puree',
      'Spices (turmeric, cumin, coriander, garam masala)',
      'Fresh cilantro',
    ],
    dietLabels: ['Non-Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Malai Kofta',
    image: require('./images/dinnerRecipes/malai_kofta.jpg'),
    source: 'Serious Eats',
    totalweight: '450.0',
    mealtype: 'Dinner',
    calories: '380',
    healthLabels: ['Vegetarian'],
    cautions: ['High in calories', 'Contains lactose'],
    ingredients: [
      'Paneer',
      'Potatoes',
      'Cream',
      'Tomato',
      'Spices (turmeric, garam masala, cardamom)',
      'Fresh herbs (cilantro)',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Mutton Korma',
    image: require('./images/dinnerRecipes/mutton_korma.jpg'),
    source: 'Taste of Home',
    totalweight: '600.0',
    mealtype: 'Dinner',
    calories: '520',
    healthLabels: ['High protein', 'Gluten-free'],
    cautions: ['High fat', 'High sodium'],
    ingredients: [
      '500g mutton',
      'Onion',
      'Yogurt',
      'Spices (turmeric, cumin, coriander, garam masala)',
      'Garlic',
      'Ginger',
    ],
    dietLabels: ['Non-Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Vegetable Jalfrezi',
    image: require('./images/dinnerRecipes/vegetable_jalfrezi.jpg'),
    source: 'Food & Wine',
    totalweight: '400.0',
    mealtype: 'Dinner',
    calories: '240',
    healthLabels: ['Vegan', 'High fiber', 'Low fat'],
    cautions: [],
    ingredients: [
      'Mixed vegetables (bell peppers, carrots, peas)',
      'Tomato',
      'Onion',
      'Spices (turmeric, cumin, coriander)',
      'Ginger',
      'Garlic',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Eggplant Bharta',
    image: require('./images/dinnerRecipes/eggplant_bharta.jpg'),
    source: 'Epicurious',
    totalweight: '350.0',
    mealtype: 'Dinner',
    calories: '190',
    healthLabels: ['Vegan', 'Low fat', 'Gluten-free'],
    cautions: [],
    ingredients: [
      'Eggplant',
      'Onion',
      'Tomato',
      'Garlic',
      'Spices (turmeric, cumin, coriander)',
      'Fresh cilantro',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Methi Malai Murg',
    image: require('./images/dinnerRecipes/methi_malai_murg.jpg'),
    source: 'BBC Good Food',
    totalweight: '400.0',
    mealtype: 'Dinner',
    calories: '410',
    healthLabels: ['High protein', 'Gluten-free'],
    cautions: ['Contains lactose', 'High fat'],
    ingredients: [
      'Chicken',
      'Fenugreek leaves (methi)',
      'Cream',
      'Onion',
      'Spices (garam masala, turmeric)',
      'Fresh herbs (cilantro)',
    ],
    dietLabels: ['Non-Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Spinach and Chickpea Curry',
    image: require('./images/dinnerRecipes/spinach_chickpea_curry.jpg'),
    source: 'Serious Eats',
    totalweight: '300.0',
    mealtype: 'Dinner',
    calories: '260',
    healthLabels: ['High fiber', 'Vegan', 'Gluten-free'],
    cautions: ['May cause gas due to chickpeas'],
    ingredients: [
      'Spinach',
      'Chickpeas',
      'Tomato',
      'Onion',
      'Garlic',
      'Spices (turmeric, cumin, garam masala)',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
  {
    label: 'Kashmiri Dum Aloo',
    image: require('./images/dinnerRecipes/kashmiri_dum_aloo.jpg'),
    source: 'BBC Good Food',
    totalweight: '300.0',
    mealtype: 'Dinner',
    calories: '270',
    healthLabels: ['Vegetarian'],
    cautions: ['High in carbs', 'Contains dairy'],
    ingredients: [
      'Baby potatoes',
      'Yogurt',
      'Spices (fennel, cardamom, Kashmiri red chili powder)',
      'Onion',
      'Garlic',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Dinner'],
    cuisine: ['Indian'],
    dishType: ['Main course'],
  },
];

export const SNACK_RECIPES = [
  {
    label: 'Samosa',
    image: require('./images/snackRecipes/samosa.jpg'),
    source: 'BBC Good Food',
    totalweight: '150.0',
    mealtype: 'Snack',
    calories: '260',
    healthLabels: ['Vegetarian', 'Contains fiber'],
    cautions: ['High in carbs', 'High in fat due to frying'],
    ingredients: [
      'Potatoes',
      'Green peas',
      'Spices (cumin, coriander, garam masala)',
      'Wheat flour',
      'Oil for frying',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['Indian'],
    dishType: ['Appetizer'],
  },
  {
    label: 'Pakora',
    image: require('./images/snackRecipes/pakora.jpg'),
    source: 'Epicurious',
    totalweight: '100.0',
    mealtype: 'Snack',
    calories: '180',
    healthLabels: ['Vegan', 'Gluten-free'],
    cautions: ['High fat', 'Deep-fried'],
    ingredients: [
      'Chickpea flour',
      'Onion',
      'Spinach',
      'Green chilies',
      'Spices (cumin, turmeric)',
      'Oil for frying',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['Indian'],
    dishType: ['Appetizer'],
  },
  {
    label: 'Dhokla',
    image: require('./images/snackRecipes/dhokla.jpg'),
    source: 'Serious Eats',
    totalweight: '200.0',
    mealtype: 'Snack',
    calories: '100',
    healthLabels: ['Low fat', 'Vegetarian'],
    cautions: ['Contains gluten'],
    ingredients: [
      'Gram flour',
      'Yogurt',
      'Green chilies',
      'Mustard seeds',
      'Curry leaves',
      'Lemon juice',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Bhel Puri',
    image: require('./images/snackRecipes/bhel_puri.jpg'),
    source: 'Taste of Home',
    totalweight: '150.0',
    mealtype: 'Snack',
    calories: '120',
    healthLabels: ['Low fat', 'Vegan'],
    cautions: ['High in carbs'],
    ingredients: [
      'Puffed rice',
      'Onion',
      'Tomato',
      'Green chutney',
      'Tamarind chutney',
      'Sev (crispy noodles)',
      'Fresh coriander',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['Indian'],
    dishType: ['Street food'],
  },
 
  {
    label: 'Murmura Chivda',
    image: require('./images/snackRecipes/murmura_chivda.jpg'),
    source: 'Epicurious',
    totalweight: '100.0',
    mealtype: 'Snack',
    calories: '90',
    healthLabels: ['Low fat', 'Vegan', 'Gluten-free'],
    cautions: [],
    ingredients: [
      'Puffed rice',
      'Peanuts',
      'Curry leaves',
      'Mustard seeds',
      'Green chilies',
      'Turmeric',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['Indian'],
    dishType: ['Snack'],
  },
  {
    label: 'Sev Puri',
    image: require('./images/snackRecipes/sev_puri.jpg'),
    source: 'Serious Eats',
    totalweight: '150.0',
    mealtype: 'Snack',
    calories: '150',
    healthLabels: ['Vegetarian', 'Contains fiber'],
    cautions: ['High in carbs'],
    ingredients: [
      'Puri (crispy flatbread)',
      'Potato',
      'Onion',
      'Green chutney',
      'Tamarind chutney',
      'Sev (crispy noodles)',
      'Fresh coriander',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['Indian'],
    dishType: ['Street food'],
  },
  {
    label: 'Pani Puri',
    image: require('./images/snackRecipes/pani_puri.jpg'),
    source: 'Food & Wine',
    totalweight: '200.0',
    mealtype: 'Snack',
    calories: '120',
    healthLabels: ['Low fat', 'Vegan'],
    cautions: ['High sodium'],
    ingredients: [
      'Puri (crispy shells)',
      'Potato',
      'Tamarind water',
      'Mint leaves',
      'Green chilies',
      'Chickpeas',
    ],
    dietLabels: ['Vegan', 'Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['Indian'],
    dishType: ['Street food'],
  },
  {
    label: 'Vada Pav',
    image: require('./images/snackRecipes/vada_pav.jpg'),
    source: 'Taste of Home',
    totalweight: '180.0',
    mealtype: 'Snack',
    calories: '300',
    healthLabels: ['Vegetarian', 'High in carbs'],
    cautions: ['High fat', 'Fried'],
    ingredients: [
      'Potato',
      'Bread roll',
      'Garlic',
      'Green chilies',
      'Spices (turmeric, mustard seeds)',
      'Oil for frying',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['Indian'],
    dishType: ['Street food'],
  },
  {
    label: 'Papdi Chaat',
    image: require('./images/snackRecipes/papdi_chaat.jpg'),
    source: 'Epicurious',
    totalweight: '180.0',
    mealtype: 'Snack',
    calories: '250',
    healthLabels: ['Vegetarian'],
    cautions: ['High in carbs', 'Contains gluten'],
    ingredients: [
      'Papdi (crispy crackers)',
      'Potato',
      'Chickpeas',
      'Yogurt',
      'Tamarind chutney',
      'Green chutney',
      'Spices (cumin, chaat masala)',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['Indian'],
    dishType: ['Street food'],
  },
];

export const TEA_TIME_SNACKS = [
  {
    label: 'Butter Cookies',
    image: require('./images/teaTimeSnacks/butter_cookies.jpg'),
    source: 'Food Network',
    totalweight: '200.0',
    mealtype: 'Snack',
    calories: '150',
    healthLabels: ['Vegetarian'],
    cautions: ['High in sugar', 'High in fat'],
    ingredients: [
      '1 cup butter',
      '2 cups all-purpose flour',
      '3/4 cup sugar',
      '1 tsp vanilla extract',
      '1/2 tsp baking powder',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['International'],
    dishType: ['Tea-time snack'],
  },
  {
    label: 'Digestive Biscuits',
    image: require('./images/teaTimeSnacks/digestive_biscuits.jpg'),
    source: 'BBC Good Food',
    totalweight: '100.0',
    mealtype: 'Snack',
    calories: '70',
    healthLabels: ['Vegetarian', 'High fiber'],
    cautions: ['Contains gluten'],
    ingredients: [
      'Whole wheat flour',
      'Oats',
      'Sugar',
      'Butter',
      'Baking powder',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['International'],
    dishType: ['Tea-time snack'],
  },
  {
    label: 'Chocolate Chip Cookies',
    image: require('./images/teaTimeSnacks/chocolate_chip_cookies.jpg'),
    source: 'Epicurious',
    totalweight: '250.0',
    mealtype: 'Snack',
    calories: '200',
    healthLabels: ['Vegetarian'],
    cautions: ['High in sugar', 'High in fat'],
    ingredients: [
      '1 cup butter',
      '1 cup brown sugar',
      '2 cups all-purpose flour',
      '1 tsp vanilla extract',
      '2 cups chocolate chips',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['International'],
    dishType: ['Tea-time snack'],
  },
  {
    label: 'Oatmeal Raisin Cookies',
    image: require('./images/teaTimeSnacks/oatmeal_raisin_cookies.jpg'),
    source: 'Taste of Home',
    totalweight: '250.0',
    mealtype: 'Snack',
    calories: '180',
    healthLabels: ['Vegetarian', 'High in fiber'],
    cautions: ['Contains gluten', 'High in sugar'],
    ingredients: [
      '1 cup butter',
      '1 cup brown sugar',
      '2 cups rolled oats',
      '1 cup raisins',
      '1 tsp cinnamon',
      '1 1/2 cups all-purpose flour',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['International'],
    dishType: ['Tea-time snack'],
  },
  {
    label: 'Shortbread Cookies',
    image: require('./images/teaTimeSnacks/shortbread_cookies.jpg'),
    source: 'Serious Eats',
    totalweight: '150.0',
    mealtype: 'Snack',
    calories: '120',
    healthLabels: ['Vegetarian'],
    cautions: ['High in sugar', 'High in fat'],
    ingredients: [
      '1 cup butter',
      '1/2 cup sugar',
      '2 cups all-purpose flour',
      '1 tsp vanilla extract',
      'Pinch of salt',
    ],
    dietLabels: ['Vegetarian'],
    mealType: ['Snack'],
    cuisine: ['International'],
    dishType: ['Tea-time snack'],
  },
];
export const CATEGORY_ITEMS = [
  ...BREAKFAST_RECIPES,
  ...BRUNCH_RECIPES,
  ...LUNCH_RECIPES,
  ...DINNER_RECIPES,
  ...SNACK_RECIPES,
  ...TEA_TIME_SNACKS,
];