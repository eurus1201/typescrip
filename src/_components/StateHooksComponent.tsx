import React from "react";
interface State {
    foo:string;
}

const StateHooksComponent: React.FC<State> = ({foo:string}) => {

    return (
        <div>
            <div>
                Hello world
            </div>
            {/* State Hooks component */}
        </div>
    )
}

export default StateHooksComponent;