export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Meokja</h1>
                <h2>먹자</h2>
                <p className="about-subtext">Meokja 먹자 opened in 2023 by two Filipina software engineers, Moira and Khaye. 
                Despite the city's diversity, the two entrepreneurs recognized the lack of fast food for Korean cuisine in Mandaluyong, 
                and were inspired to bring the flavors of their dream place, Korea, to the people of Mandaluyong City. </p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/kfries.jpg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/bingsu-sundae.jpg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}