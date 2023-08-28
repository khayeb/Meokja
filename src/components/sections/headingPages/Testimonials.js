import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
            <TestimonialCard name="Lovelle Tababan" description="This is the best Korean food that I've ever had!"/>
            <TestimonialCard name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard name="Ashley Grabato" description="I've had some great Korean food before, but none of them beats
             Meokja in flavor and texture."/>
            <TestimonialCard name="Rasheed Dela Cruz" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            <TestimonialCard name="Faye Alcazar" description="The food here really refreshed me after a late night shift."/>
            <TestimonialCard name="Brian Dean" description="I came to Meokja after a 5 hour flight from the South.
                 The food here tasted so delicious after the trip here."/>
            <TestimonialCard name="Michael Sunga" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Mandaluyong."/>
            <TestimonialCard name="Jack Hu" description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}