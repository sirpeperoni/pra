import React from "react";

import Helmet from "../components/Helmet";
import Slider from "../components/Slider";


import sliderData from "../assets/fake-data/slider";

import Banner from "../components/Banner";
import Policy from "../components/Policy";
import Cards from "../components/Cards";

const Home = () => {
    return(
        <Helmet title="Домашняя страница">
            {/*slider*/}
            <Slider
                data={sliderData}
                control={true}
                auto={false}
                timeOut={5000}
            />
            {/*end slider*/}
            {/*policy section*/}
            <Policy/>
            {/*end policy section*/}

            {/*best selling section*/}
            <Cards
                title={"Самые продаваемые товары недели"}
                amount={4}
            />
            {/*end best selling section*/}
            
            {/*NEW ZAVOZ section*/}
            <Cards
                title={"Новые товары"}
                amount={8}
            />
            {/*end NEW ZAVOZ section*/}

            {/*banner*/}
            <Banner/>
            {/*end banner */}

            {/*popular products section*/}
            <Cards
                title={"Популярное"}
                amount={12}
            />
            {/*end popular products section*/}
        </Helmet>
    )
}

export default Home