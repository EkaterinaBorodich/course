import SpecialCard from "./Card/SpecialsCard";
import { specialsData } from "./Card/constants";
export default function Specials(){
    return (
        <section className="specials">
            <div className="specials-topbar">
                <h1>This week specials!</h1>
                <button className="specials-btn">Online Menu</button>
            </div>
            <div className="specialsCardsContainer">
        {specialsData.map((special) => (
          <SpecialCard key={special.id} {...special} />
        ))}
      </div>
        </section>
    );
}