import acaiBowl from "../assets/acai_bowl_the_blue_dolphin.jpg";

const Home = () => {
    return (
        // <div className="home"></div>
        <div>
            <div className="image-container">
                <img src={acaiBowl} alt="Acai Bowl" className="acaiBowl" />
            </div>
            <div className="home-intro">
                <strong>About The Blue Dolphin</strong>
                <span>At The Blue Dolphin,  we bring the heart of the Amazon to your bowl. Our authentic and 
                organic bases are directly imported from Brazil, delivering a rich, refreshing, and energizing 
                experience with every bite. Whether you're craving a classic açaí bowl, a tropical smoothie, 
                or a superfood-packed treat, we've got something delicious waiting for you.
                </span>
            </div>
        </div>
    
    );
}
export default Home;