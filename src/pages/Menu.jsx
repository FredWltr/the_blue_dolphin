import "../styles/Main.css"
import { useState, useRef } from "react";

const menu_data = [
    { title: "Curated Smoothie Bowls", items: [
        { name: "Classic Bowl", description: "Your choice of bases (up to 3), granola, stawberries, banana, nutella, honey, and coconut"},
        { name: "The Blue Dolphin Bowl", description: "Your choice of bases (up to 3), ganola, blueberries, banana, raspberries, almond-butter, date syrup, cocomut flakes, and bee pollen"},
        { name: "Maliby Bowl", description: "Your choice of bases (up to 3), granola, kiwi, mango, pineapple, chia pudding, agave, coconut, hemp seeds"},
        { name: "Mother Nature Bowl", description: "Your choice of bases (up to 3), granola, banana, raspberries, mapple syrup, peanut butter, chocolate-chips, toasted coconut, pepitas"},
        { name: "Rainbow Bowl", description: "Your choice of bases (up to 3), granola, banana, mango, kiwi, blueberries, chia pudding, coconut, almonds"},
    ]},
    { title: "Build Your Own Smoothie Bowls", items: [
        { name: "STEP 1", description: "Choose your size"},
        { name: "STEP 2", description: "Choose your bases: acai, pitaya, matcha, spirulina"},
        { name: "STEP 3", description: "Choose your granola: maple, vanilla, cherry, almond"},
        { name: "STEP 4", description: "Choose your fruits: banana, strawberries, blueberries, raspberries, pineapple, mango, kiwi"},
        { name: "STEP 5", description: "Choose your drizzles: nutella, almond butter, peanut butter, chia pudding, local honey, agave, maple syrup, date syrup, sweetened condensed milk"},
        { name: "STEP 6", description: "Choose your dry toppings: pepitas, chia seeds, sunflower seeds, hempseeds, almonds, bee pollen, coconut, toasted coconut, chocolate chips"},
        { name: "STEP 7", description: "ENJOY!"},
    ]},
    { title: "Smoothies", items: [
        { name: "Blueberry Oatmeal", description: "Blueberries, almond milk, spinach, maple syrup, cinnamon, oats"},
        { name: "Mixed Berry", description: "Blackberries, raspberries, blueberries, almond milk"},
        { name: "Strawberry Banana", description: "Strawberries, banana, honey, almond milk"},
        { name: "Princess Peach", description: "Peach, banana, honey, coconut milk"},
        { name: "Peanut Butter Cup", description: "Banana, peanut butter, cocoa powder, almond milk"},
        { name: "Flamingo", description: "Pitaya, mango, banana, coconut milk"},
        { name: "Sunrise", description: "Mango, strawberry, banana, orange juice"},
        { name: "The Green One", description: "Banana, strawberry, peach, spinach, agave"},
    ]},
    { title: "Sandwiches", items: [
        { name: "Artisan", description: "Oven roasted turkey, sundried tomato pesto spread, spinach, and muenster cheese on ciabatta toasted" },
        { name: "Club", description: "Oven roaster turkey, blackforest ham, honey-mustard, bacon, tomato, lettuce and cheddar cheese, layered between white bread" },
        { name: "BLT", description: "Bacon, mayo, lettuce and tomato on white bread toast" },
        { name: "Turkey Bacon Ranch", description: "Oven roasted turkey, bacon, ranch, lettuce, tomato, and cheedar cheese on ciabatta toasted"},
        { name: "Turkey AVO Club", description: "Oven roasted turkey, honey mustard, avocado, lettuce, tomato, muenster cheese on sourdough toasted"},
        { name: "The 'Ultimate' Grilled Cheese", description: "Cheddar cheese, muenster cheese, basil-pesto spread, and tomato on sourdough toasted"},
    ]},
    { title: "Salads",  items: [
        { name: "Garden Salad", description: "Mixed greens, cheddar cheese, cherry tomatoes, carrots, cucumber, red onions, croutons" },
        { name: "Greek Salad", description: "Mixed greens, feta, cucumbers, red onions, kalamatta olives, cherry tomatoes, dill" },
        { name: "Heavenly Salad", description: "Spinach, feta, blueberries, avocado, candied pecans" },
    ]},
    { title: "Toasts & Such", items: [
        { name: "Buttery Toast", description: "Plain w/butter"},
        { name: "Cinnanom Toast", description: "Butter + cinnnamon sugar"},
        { name: "Loco Coco Toast", description: "Nutella, banana, vanilla, granola, coconut, chia seeds"},
        { name: "Greenhouse Toast", description: "Sourdough toast, hummus, cucumber, feta cheese, red pepper, flakes, lemon slice, dill"},
        { name: "Italian Cottage", description: "Sourdough toast, marinara, cottage cheese, sundried tomatoes, hot noney, oregano, basil, red pepper flakes"},
        { name: "Avo Toast", description: "Sourdough toast, avocada, sundried tomato, feta cheese, red pepper flakes, salt, pepper, lemon juice"},
        { name: "Yogurt Parfait", description: "Vanilla greek yogurt, vanilla granola, strawberries, blueberries"},
        { name: "Oatmeal", description: "Choose your sweetner: honey agave, maple syrup, choose up to four toppings/drizzles (see smoothies bowl menu for options"},
    ]},
    { title: "Kid", items: [
        { name: "Ham and Cheese" },
        { name: "Turkey and Cheese" },
        { name: "Grilled Cheese" },
        { name: "Kids Bowl", description: "Choice of base, maple granola, strawberries, banana" },
    ]},
    { title: "Sides", items: [
        { name: "Garden salad" },
        { name: "Cup of fruit" },
        { name: "Cup of soup" },
        { name: "Bowl of soup" },
    ]},
    { title: "Beverages", items: [
        { name: "Check juice fridge for cold presses juices"},
        { name: "Brazilian Lemonade"},
    ]}
];

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categoryRefs = useRef({});

    const handleSelectCategory = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
            return;
        }
        setSelectedCategory(category);

        const element = categoryRefs.current[category.title];
        if (element) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="menu-container">
        {menu_data.map((category) => (
            <div
                key={category.title}
                className="menu-category"
                ref={(el) => (categoryRefs.current[category.title] = el)}
                onClick={() => handleSelectCategory(category)}
            >
                <h2>{category.title}</h2>
                
                    <div className={`menu-items ${selectedCategory?.title === category.title ? 'show' : ''}`}>
                    {category.items.map((item, index) => (
                        <div className="menu-item">
                            <div key={index}>
                            <strong>{item.name}</strong>
                            {item.description && <p>{item.description}</p>}
                            </div>
                        </div>
                    ))}
                    </div>
                
            </div>
        ))}
    </div>
  );
};

export default Menu;