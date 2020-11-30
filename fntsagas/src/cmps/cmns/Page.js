import Footer from "./Footer";
import Header from "./Header";
import Footer2 from "../public/Footer2"

import "./Page.css";
const Page=({children, heading, footer,footer2})=>{
    // const hofset = (41*((heading && true)?1:0)) + (59*((footer&&true)?1:0));
    // let cssStyles = {
    //     "height": (hofset > 0 )? `calc(100vh - ${hofset}px)`:`100%`,
    //     "marginTop": (hofset > 0) ? `41px`: '0px'
    // }
    // let cssStylesContent = {
    //     "minHeight": (hofset > 0) ? `calc(100vh - ${hofset}px)` : `100%`,
    // }
    // console.log(cssStyles)

    
    return(
        <section className="page">
            {heading && true? <Header>{heading}</Header>:null}
            {/* <section className="content" style="{cssStylesContent}" >{children}</section> */}
            {children}
            {(footer && true ? (<Footer></Footer>) : null)}
            {(footer2 && true ? (<Footer2></Footer2>) : null)}
        </section>
    )
}
export default Page;