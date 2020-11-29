import Footer from "./Footer";
import Header from "./Header";
import Footer2 from "../public/Footer2"

import "./Page.css";
const Page=({children, heading, footer,footer2})=>{
    return(
        <section className="page">
            {heading && true? <Header>{heading}</Header>:null}
            {children}
            {(footer && true ? (<Footer></Footer>) : null)}
            {(footer2 && true ? (<Footer2></Footer2>) : null)}
        </section>
    )
}
export default Page;