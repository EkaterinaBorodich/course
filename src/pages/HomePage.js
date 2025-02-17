import Header from "../components/Header.js"
import Specials from "./headingPages/Specials.js";
export default function HomePage(){
    return(
        <>
            <Header />
            <main>
                <Specials/>
            </main>
        </>
    );
}