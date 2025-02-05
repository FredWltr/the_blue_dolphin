import "../styles/Main.css"

const Menu = () => {
    const sandwiches = [
        { name: "Artisan", description: "Oven roasted turkey, sundried tomato pesto spread, spinach, and muenster cheese on ciabatta toasted" },
        { name: "Club", description: "Oven roaster turkey, blackforest ham, honey-mustard, bacon, tomato, lettuce and cheddar cheese, layered between white bread" },
        { name: "BLT", description: "Bacon, mayo, lettuce and tomato on white bread toast" },
        { name: "Turkey Bacon Ranch", description: "Oven roasted turkey, bacon, ranch, lettuce, tomato, and cheedar cheese on ciabatta toasted"},
        { name: "Turkey AVO Club", description: "Oven roasted turkey, honey mustard, avocado, lettuce, tomato, muenster cheese on sourdough toasted"},
        { name: "The 'Ultimate' Grilled Cheese", description: "Cheddar cheese, muenster cheese, basil-pesto spread, and tomato on sourdough toasted"},
    ];
    const salads = [
        { name: "Garden Salad", description: "Mixed greens, cheddar cheese, cherry tomatoes, carrots, cucumber, red onions, croutons" },
        { name: "Greek Salad", description: "Mixed greens, feta, cucumbers, red onions, kalamatta olives, cherry tomatoes, dill" },
        { name: "Heavenly Salad", description: "Spinach, feta, blueberries, avocado, candied pecans" },
    ];
    const dressing = "Ranch, sugar-free ranch, balsamic vin, honey mustard, greek, raspberry vin, champagne vin";
    const kid = [
        { name: "Ham and Cheese" },
        { name: "Turkey and Cheese" },
        { name: "Grilled Cheese" },
        { name: "Kids Bowl", description: "choice of base, maple granola, strawberries, banana" },
    ];
    const sides = [
        { name: "garden salad" },
        { name: "cup of fruit" },
        { name: "cup of soup" },
        { name: "bowl of soup" },
    ];
    return (
        <div>
            <div className="menu">
                <div className="menu-category">
                    <p className="category-title">Sandwiches</p>
                    <div className="list">
                        {sandwiches.map(({ name, description }) => (
                        <div className="container" key={name}>
                            <span className="name">{name}</span>
                            <span className="description">{description}</span>
                        </div>
                        ))}
                    </div>
                </div>
                <hr />
                <div className="menu-category">
                    <p className="category-title">Salads</p>
                    <div className="list">
                        {salads.map(({name, description}) => (
                            <div className="container">
                                <span className="name">{name}</span>
                                <span className="description">{description}</span>
                            </div>
                        ))}
                        <div className="container">
                            <span className="name">Dressing</span>
                            <span className="description">{dressing}</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="menu-category">
                    <p className="category-title">Kid</p>
                    <div className="list">
                        {kid.map(({name, description}) => (
                            <div className="container">
                                <span className="name">{name}</span>
                                <span className="description">{description}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <div className="menu-category">
                    <p className="category-title">Sides</p>
                    <div className="list">
                        {sides.map(({name}) => (
                            <div className="container">
                                <span className="name">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;