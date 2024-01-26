import React, { useEffect } from 'react'

import Helmet from '../components/Helmet'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Cards from '../components/Cards'
import ProductView from '../components/Product/ProductView'


import productData from '../assets/fake-data/products'

const Product = props => {

  const product = productData.getProductBySlug(props.match.params.slug)


  const relatedProducts = productData.getProducts(8)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  return (
    <Helmet title={product.title}>
        <Section> 
            <SectionBody>
              <ProductView product={product}/>
            </SectionBody>
        </Section>
        <Cards
                title={"Похожие товары"}
                amount={8}
        />
    </Helmet>
  )
}

export default Product