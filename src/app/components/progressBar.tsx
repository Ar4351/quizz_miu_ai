import React from 'react'
type Props = {
    value: number
}
const ProgressBar = (props: Props) =>{
    return (
        <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
            <div className="bg-primary h-2.5 rounded-md transition-all duration-700 ease-out" style={{
                width: `${props.value}%`
            }}></div>
            </div>
    )
}
export default ProgressBar