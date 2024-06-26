import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import AllItems from "../components/Featured/AllItems/AllItems";
import Highlight from "../components/Featured/Highlight/Highlight";
import Support from "../components/Footer/Support";

const Home = () => {
    const [ featuredItems, setFeaturedItems ] = useState()
    TabTitle("Home - Shema");

    useEffect(() => {
        axios.get("http://localhost:5000/api/items")
            .then(res => {
                console.log(res.data);
                setFeaturedItems(res.data); // Assuming the response data is the array of featured items
            })
            .catch(err => console.error("Error fetching data:", err));

        window.scrollTo(0, 0);
    }, []);

    return ( 
        <Fragment>
            <Landing items={featuredItems}/>
            <FeaturedItems items={featuredItems}/>
            <Highlight items={featuredItems}/>
            <AllItems items={featuredItems}/>
            <Support/>
        </Fragment>
    );
}
 
export default Home;