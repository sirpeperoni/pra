import React from "react";
import Section, { SectionBody} from "../components/Section";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Grid from "../components/Grid";
import policy from "../assets/fake-data/policy";
import PolicyCard from "./PolicyCard";

const Policy = () => {
    return (
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
    )
}

export default Policy;