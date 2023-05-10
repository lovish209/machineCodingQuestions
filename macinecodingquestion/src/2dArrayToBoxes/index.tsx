import { useEffect, useState } from 'react'
import './box.css';
let order=0;
let isAllClicked=false;
const arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
export const ArrayToBox = () =>{
    const getInitialBoxProperties = (arr:number[][]) =>{
        let boxesData=[];
        for(let i=0 ; i<arr.length; i++){
            for(let j=0; j<arr[i].length; j++){
                boxesData.push({i,j,isClicked:false,order:0})
            }
        }
        return boxesData;
    }
    const getboxes = (type?:string) => arr.map((val,i)=>{
        return <div className='box-container'>{val.map((x,j)=>{
            return <div className='box' style={{backgroundColor:boxProperties.find((item)=> item.i===i && item.j===j)?.isClicked ? 'green' : '' }} onClick={() => changeColor(i,j)}>{x}</div>
        })}</div>
    });

    
    const changeColor = (row:number,column:number) =>{
        const pro=boxProperties.find((val)=> val.i===row && val.j===column)!;
        pro.isClicked=true;
        pro.order=++order;
        boxProperties.sort((a,b)=> a.order > b.order ? 1 : -1);
        setBoxProperties([...boxProperties]);
    }
 
    const [boxProperties,setBoxProperties] = useState(getInitialBoxProperties(arr));

    useEffect(()=>{
        if(boxProperties.find((val)=> !val.isClicked)){
            isAllClicked=false;
        }
        else{
            isAllClicked=true;
        }

        if(isAllClicked){
            boxProperties.forEach((val,index)=>{
                setTimeout(()=>{
                    let temBoxProperties=[...boxProperties];
                    temBoxProperties[index].isClicked=false;
                    setBoxProperties(temBoxProperties);
                },1000*(index+1));
            })
        }
    },[boxProperties])
    
    return <div id='head'>
        {getboxes()}
    </div>
}