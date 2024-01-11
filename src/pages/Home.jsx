import React from "react";

import Helmet from "../components/Helmet";
import Slider from "../components/Slider";
import Section, {SectionTitle, SectionBody} from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import policy from "../assets/fake-data/policy";
import Grid from "../components/Grid";

import sliderData from "../assets/fake-data/slider";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link to="/policy">
                                <PolicyCard
                                key={index}
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>

                </SectionBody>
            </Section>
            {/*end policy section*/}

        </Helmet>
    )
}

export default Home