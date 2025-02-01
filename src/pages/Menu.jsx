import "./Menu.css"

const Menu = () => {
    const sandwiches = [
        { name: "Artisan", description: "oven roasted turkey, sundried tomato pesto spread, spinach, and muenster cheese on ciabatta toasted" },
        { name: "Club", description: "oven roaster turkey, blackforest ham, honey-mustard, bacon, tomato, lettuce and cheddar cheese, layered between white bread" },
        { name: "BLI", description: "bacon, mayo, lettuce and tomato on white bread toast" },
        { name: "Turkey Bacon Ranch", description: "oven roasted turkey, bacon, ranch, lettuce, tomato, and cheedar cheese on ciabatta toasted"},
        { name: "Turkey AVO Club", description: "oven roasted turkey, honey mustard, avocado, lettuce, tomato, muenster cheese on sourdough toasted"},
        { name: "The 'Ultimate' Grilled Cheese", description: "cheddar cheese, muenster cheese, basil-pesto spread, and tomato on sourdough toasted"},
    ];
    const salads = [
        { name: "Garden Salad", description: "mixed greens, cheddar cheese, cherry tomatoes, carrots, cucumber, red onions, croutons" },
        { name: "Greek Salad", description: "mixed greens, feta, cucumbers, red onions, kalamatta olives, cherry tomatoes, dill" },
        { name: "Heavenly Salad", description: "spinach, feta, blueberries, avocado, candied pecans" },
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
            <p>
                Welcome to the Menu
            </p>
            <div>
                <div>
                    <p>Sandwiches</p>
                    <div className="list">
                        {sandwiches.map(({ name, description }) => (
                        <div className="container" key={name}>
                            <span className="name">{name}</span>
                            <span className="description">{description}</span>
                        </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p>Salads</p>
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
                <div>
                    <p>Kid</p>
                    <div className="list">
                        {kid.map(({name, description}) => (
                            <div className="container">
                                <span className="name">{name}</span>
                                <span className="description">{description}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p>Sides</p>
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