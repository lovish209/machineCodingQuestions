import EmptyBox from "../borderLessBox";
import Box from "../box";
import './sevenBoxes.css'
const config=[
    [true,true,true],
    [true,false,false],
    [true,true,true]
]
const SevenBoxes = () =>{
    return (
        <div className="box-container">
            <>{config.map((val)=>{
                return val.map((val)=>{
                    if(val){
                        return <Box/>
                    }
                    return <EmptyBox/>
                })
            })}</>                    
        </div>
    )
}

export default SevenBoxes;