function clickButtonDraw(){
    const answersDraw = [
        "Create a pokemon based off of your favorite food or dessert.",
        "Try making this star pattern in a notebook <br> <a href='https://youtube.com/shorts/dqN7qyWFEc0?si=LMj-yPAZLypCC8hL' target='_blank'> Watch Video Tutorial </a>",
        "Make a drawing using only 4 colors. <br> <a href='https://coolors.co/' target='_blank'>Find or make color palettes HERE.</a>",
        "Design an outfit based off of a planet of your choice.",
        "Design a character based off of an instrument of your choice.",
        "Draw your favorite character wearing whatever you have on right now.",
        "Draw something inspired by an emotion (Fear, Hunger, Boredom, etc.)",
        "Make a drawing using only letters/words (calligram)",
        "Draw a character you like if they were from a different movie or book.",
        "Make a painting only using different shades of the same color."

    ];

    const randomNumber = Math.floor(Math.random()*answersDraw.length);
    document.getElementById("drawings").innerHTML=answersDraw[randomNumber];
}
function clickButtonProj(){
    const answersProj = [
        "Make a clay sculpture of a character you like.",
        "Make a spinning paper wand. <br> <a href='https://pin.it/dqmCSfZVa' target='_blank'> Watch Video Tutorial </a>",
        "Make a decoration using hanging origami cranes. <br> <a href='https://youtu.be/GC_Szxdqh2Y?si=DJ3mgE4fbVldmVBb' target='_blank'>Origami crane tutorial</a>",
        "Make a tiny room using cardboard.",
        "Make flowers out of recycled plastic bottles. <br> <a href='https://youtu.be/zAbWhnvI6qs?si=xZsIS1qON_HH0qjm' target='_blank'> Watch Video Tutorial </a>",
        "Make a paper sword and paint/decorate it to match your room. <br> <a href='https://youtu.be/CU8ohrFIn5o?si=g2esQlKK4Rc_rxNw' target='_blank'> You can use this as a base/reference.</a>",
        "Learn how to make paper stars and use them to make decorations (note: this takes a LOT of practice to get it perfect, have patience!) <br> <a href='https://youtu.be/AtlO5RawSz0?si=ernmtA1Sg077TrCT' target='_blank'> Watch Video Tutorial </a>",
        "Make a piñata with a balloon. <br> <a href='https://youtu.be/20JjvvDoEyk?si=W-rTi3fHWvdmUfF5' target='_blank'> Watch Video Tutorial </a>",
        "Make a sock puppet.",
        "Make a DIY lava lamp. <br> <a href='https://youtu.be/qCuFjXGSVB4?si=k2DLoPJM74QFWvD1' target='_blank'> Watch Video Tutorial </a>"

    ];

    const randomNumber = Math.floor(Math.random()*answersProj.length);
    document.getElementById("projects").innerHTML=answersProj[randomNumber];
}
function clickButtonFood(){
    const answersFood = [
        "Spinach Omolette <br> <a href='https://www.thekitchn.com/spinach-omelet-recipe-23431858' target='_blank'> Get recipe HERE </a>",
        "Egg Frittata <br> <a href='https://www.thekitchn.com/how-to-make-a-frittata-cooking-lessons-from-the-kitchn-170717' target='_blank'> Get recipe HERE </a>",
        "Fruit Oatmeal <br> <a href='https://www.naturalcomfortkitchen.com/my-everyday-fruit-oatmeal/' target='_blank'> Get recipe HERE </a>",
        "Chicken Alfredo <br> <a href='https://www.thecookierookie.com/one-pot-chicken-alfredo-skillet/' target='_blank'> Get recipe HERE </a>",
        "Chicken Panini <br> <a href='https://dudethatcookz.com/italian-grilled-chicken-panini-sandwich/' target='_blank'> Get recipe HERE </a>",
        "Veggie Burger <br> <a href='https://www.loveandlemons.com/best-veggie-burger-recipe/' target='_blank'> Get recipe HERE </a>",
        "Spaghetti and meatballs <br> <a href='https://natashaskitchen.com/spaghetti-and-meatballs-recipe/' target='_blank'> Get recipe HERE </a>",
        "Fruit Salad <br> <a href='https://www.loveandlemons.com/fruit-salad-recipe/' target='_blank'> Get recipe HERE </a>",
        "Avocado toast with egg <br> <a href='https://www.allrecipes.com/recipe/265304/avocado-toast-with-egg/' target='_blank'> Get recipe HERE </a>",
        "Bacon Cream Cheese Filled Bagels <br> <a href='https://www.dontgobaconmyheart.co.uk/bacon-cream-cheese-filled-bagels/' target='_blank'> Get recipe HERE </a>"

    ];

    const randomNumber = Math.floor(Math.random()*answersFood.length);
    document.getElementById("food").innerHTML=answersFood[randomNumber];
}
function clickButtonDess(){
    const answersDess = [
        "Strawberry Shortcake in a Jar <br> <a href='https://www.thecountrycook.net/strawberry-shortcake-in-a-jar/' target='_blank'> Get recipe HERE </a>",
        "Blueberry muffins <br> <a href='https://www.inspiredtaste.net/18982/our-favorite-easy-blueberry-muffin-recipe/' target='_blank'> Get recipe HERE </a>",
        "Root Beer Float <br> <a href='https://www.simplyrecipes.com/recipes/root_beer_float/' target='_blank'> Get recipe HERE </a>",
        "Frappe (Drink) <br> <a href='https://www.thekitchn.com/coffee-frappe-recipe-23392115' target='_blank'> Get recipe HERE </a>",
        "Tiramisu <br> <a href='https://tastesbetterfromscratch.com/easy-tiramisu/' target='_blank'> Get recipe HERE </a>",
        "Chocolate Chip Cookies <br> <a href='https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/' target='_blank'> Get recipe HERE </a>",
        "Cake Pops <br> <a href='https://sallysbakingaddiction.com/homemade-cake-pops/' target='_blank'> Get recipe HERE </a>",
        "Homemade Hot Chocolate <br> <a href='https://celebratingsweets.com/homemade-hot-chocolate/' target='_blank'> Get recipe HERE </a>",
        "Chocolate Mousse <br> <a href='https://www.recipetineats.com/chocolate-mousse/' target='_blank'> Get recipe HERE </a>",
        "Cosmic Brownies <br> <a href='https://www.simplyrecipes.com/homemade-cosmic-brownies-recipe-7963866' target='_blank'> Get recipe HERE </a>"

    ];

    const randomNumber = Math.floor(Math.random()*answersDess.length);
    document.getElementById("dess").innerHTML=answersDess[randomNumber];
}