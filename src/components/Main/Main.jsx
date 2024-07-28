import React from "react";
import SectionCeremony from "./SectionCeremony/SectionCeremony";
import SectionReception from "./SectionReception/SectionReception";
import SectionPlan from "./SectionPlan/SectionPlan";

export default function Main(){
    return (
        <main>
            <SectionCeremony />
            <SectionReception />
            <SectionPlan />
        </main>
    );
}
