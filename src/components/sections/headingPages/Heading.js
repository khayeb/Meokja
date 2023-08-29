import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Meokja</h1>
                    <h2>먹자</h2>
                    <p className="subsection">Annyeong! We are the Korean-inspired restaurant located on Shaw Boulevard, Mandaluyong City. Welcome to Meokja's Online 
                    Menu for drive through~ To order, just chat with Chef-nim.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/menu-banner.png')} alt="Meokja's cuisine"></img>
                </section>
            </article>
      </header>
    );
}