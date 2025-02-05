import "../styles/Main.css"
import { useState, useRef } from "react";

const menu_data = [
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
    { title: "Kid", items: [
        { name: "Ham and Cheese" },
        { name: "Turkey and Cheese" },
        { name: "Grilled Cheese" },
        { name: "Kids Bowl", description: "choice of base, maple granola, strawberries, banana" },
    ]},
    { title: "Sides", items: [
        { name: "garden salad" },
        { category: "sides", name: "cup of fruit" },
        { category: "sides", name: "cup of soup" },
        { category: "sides", name: "bowl of soup" },
    ]}
];

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categoryRefs = useRef({});

    const handleSelectCategory = (category) => {
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
                {selectedCategory?.title === category.title && (
                    <div className="menu-items">
                    {category.items.map((item, index) => (
                        <div className="menu-item">
                            <div key={index}>
                            <strong>{item.name}</strong>
                            {item.description && <p>{item.description}</p>}
                            </div>
                        </div>
                    ))}
                    </div>
                )}
            </div>
        ))}
    </div>
  );
};

export default Menu;