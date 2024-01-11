import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Helmet from "../components/Helmet";
import Slider from "../components/Slider";
import Section, {SectionTitle, SectionBody} from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import policy from "../assets/fake-data/policy";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import sliderData from "../assets/fake-data/slider";
import productData from "../assets/fake-data/products";

import banner from '../assets/images/banner.png'

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
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
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

            {/*best selling section*/}
            <Section>  
                <SectionTitle>
                    Самые продаваемые товары недели
                </SectionTitle>
                <SectionBody>
                    <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                        {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/*end best selling section*/}
            
            {/*NEW ZAVOZ section*/}
            <Section>  
                <SectionTitle>
                    Новые товары
                </SectionTitle>
                <SectionBody>
                    <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/*end NEW ZAVOZ section*/}



            {/*banner*/}

            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>        

            {/*end banner */}


            {/*popular products section*/}
            <Section>  
                <SectionTitle>
                    Популярное
                </SectionTitle>
                <SectionBody>
                    <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/*end popular products section*/}
        </Helmet>
    )
}

export default Home