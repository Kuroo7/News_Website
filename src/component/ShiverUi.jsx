import './shiver.css'

const ShiverUi = () => {
    const arr = new Array(12).fill(1)


    return (
        <div className="flex justify-center flex-wrap">
            {arr.map((item, index) => (
                <div key={index} className="card1"></div>
            ))}
            {/*  */}
        </div>
    )
}
export default ShiverUi