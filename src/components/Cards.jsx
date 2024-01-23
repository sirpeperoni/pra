import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from "./ProductCard";
import Section, {SectionTitle, SectionBody} from "./Section";
import Grid from "./Grid";
import productData from "../assets/fake-data/products";

const Cards = props => {
  return (
    <Section>  
        <SectionTitle>
            {props.title}
        </SectionTitle>
        <SectionBody>
            <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                {
                    productData.getProducts(props.amount).map((item, index) => (
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
  )
}

Cards.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
}

export default Cards
