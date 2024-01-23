import React from "react";
import Section, { SectionBody} from "../Section";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <Section>
            <SectionBody>
                <Link to="/catalog">
                    <img src={banner} alt="" />
                </Link>
            </SectionBody>
        </Section>  
    )
}

export default Banner;