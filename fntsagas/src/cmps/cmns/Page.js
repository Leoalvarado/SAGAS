import Header from "./Header";
import Footer from "./Footer";

import "./Page.css";
const Page=({children, heading})=>{
    return(
        <section className="page">
            {heading && true? <Header>{heading}</Header>:null}
            {children}
        </section>
    )
}
export default Page;