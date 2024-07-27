import React from "react";
import SectionCeremony from "./SectionCeremony/SectionCeremony";
import SectionReception from "./SectionReception/SectionReception";

export default function Main(){
    return (
        <main>
            <SectionCeremony />
            <SectionReception />
        </main>
    );
}
