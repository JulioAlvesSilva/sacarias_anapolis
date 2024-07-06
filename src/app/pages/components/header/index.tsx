'use client'
import FirstPart from "./firstPart";
import SecondPart from "./secondPart";
import useScreenSize from "@/hooks/useScreenSize";
import SmallScreen from "./smallScreen";
export default function HeaderMain() {
    const telaP = useScreenSize()
    return (
        <section>
            {telaP ?
                <>
                    <SmallScreen />
                </> :
                <>
                    <FirstPart />
                    <SecondPart />
                </>
            }
        </section>
    )
}