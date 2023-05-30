import { useState } from "react";
const Section = ({ title, desc, isVisible, setIsVisible }) => {
    // const [isVisible, setIsVisible] = useState(false);
    // console.log(isVisible);
    const handleClick = () => {
        if (isVisible) {
            setIsVisible(false);
            // isVisible = false;
        }
        else {
            setIsVisible(true);
            // isVisible = false;
        }
    }
    return (
        <>

            <div className="border border-red-200 p-2 m-2">
                <h1 className="font-bold text-xl">{title}</h1>
                <button className="cursor-pointer underline" onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>
                {isVisible && <p>{desc}</p>}
            </div>
        </>
    )

}


const InstaMart = () => {
    const [visibleSection, setVisibleSection] = useState("team")
    return (
        <>
            <h1 className="text-3xl p-2 m-2 font-bold" >Insta Mart</h1>
            <Section
                desc={"This is about of insta Mart"}
                title={"About Mart"}
                isVisible={visibleSection === 'about'}
                setIsVisible={() => setVisibleSection("team")}
            />
            <Section
                desc={"This is Team of insta Mart"}
                title={"Team Bitches"}
                isVisible={visibleSection === 'team'}
                setIsVisible={() => setVisibleSection("about")}

            />
        </>
    )
}
export default InstaMart