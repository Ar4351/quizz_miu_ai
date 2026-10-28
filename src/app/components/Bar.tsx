import { clsx } from "clsx";
import { useEffect, useState } from "react";

type BarProps = {
    percentage: number;
    color: string;
};

const Bar = (props: BarProps) => {
    const { percentage, color } = props;
    const [height, setHeight] = useState(0); 

    useEffect(() => {
        setTimeout(() => {
            setHeight(percentage);
        }, 100);
    }, [percentage]);

    const barBgClasses: Record<string, string> = {
        green: "bg-green-500",
        red: "bg-red-500",
        blue: "bg-blue-500",
    };

    return (
        <div className="h-40 flex items-end justify-center overflow-hidden">
            <div
                className={clsx(
                    barBgClasses[color],
                    "w-14 rounded-xl border-2 border-black transition-all duration-700 ease-out"
                )}
                style={{ height: `${height}%` }}
            />
        </div>
    );
};

export default Bar;
/*

import { clsx } from "clsx";
type BarProps = {
    percentage: number,
    color: string
}
const Bar = (props : BarProps) => {
    const { percentage, color } =  props;
    const barStyle = {
        height: `${percentage}%`,
    }
    const barBgClasses: Record<string,string> = {
        'green': 'bg-green-500',
        'red': 'bg-red-500',
        'blue': 'bg-blue-500'

    }
    return(
        <div className="h-40 flex items-end justify-end">
            <div className={clsx(barBgClasses[color], "w-14 rounded-xl border-2 border-black")} style={barStyle}></div>
        </div>
    )
}
export default Bar;*/
