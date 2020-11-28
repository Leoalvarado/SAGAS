import Footer from "./Footer";
import Header from "./Header";

import "./Page.css";
const Page=({children, heading, footer})=>{
    return(
        <section className="page">
            {heading && true? <Header>{heading}</Header>:null}
            {children}
            {(footer && true ? (<Footer></Footer>) : null)}
        </section>
    )
}
export default Page;