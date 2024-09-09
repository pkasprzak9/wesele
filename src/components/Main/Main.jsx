import React from "react";
import SectionCeremony from "./SectionCeremony/SectionCeremony";
import SectionReception from "./SectionReception/SectionReception";
import SectionPlan from "./SectionPlan/SectionPlan";
import SectionHotel from "./SectionHotel/SectionHotel";
import SectionPresence from "./SectionPresence/SectionPresence";
import SectionContact from "./SectionContact/SectionContact";

export default function Main(){
    return (
        <main>
            <SectionCeremony />
            <SectionReception />
            <SectionPlan />
            <SectionHotel />
            {/* <SectionPresence /> */}
            <SectionContact />
        </main>
    );
}
