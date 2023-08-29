import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/burger.jpg';
import Bruschetta from '../../../assets/food/bulgogi-pizza.jpg';
import LemonDessert from '../../../assets/food/fried-chicken.jpg';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Korean BBQ Burger" price="₱159.50" description="Roasted burger, made with ground beef, kimchi slaw, sesame oil, chili garlic mayo, and BBQ sauce.
                 "/>
                <SpecialCard image={Bruschetta}name="Bulgogi Pizza" price="₱599.50" description="Fresh pizza, topped with cilantro, red pepper flakes, scallions, bulgogi, and melted cheese."/>
                <SpecialCard image={LemonDessert} name="Korean Style Fried Chicken" price="₱119.50" description="Iconic, tender and crispy Korean fried chicken dish made with our special original recipe."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}