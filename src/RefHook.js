import React, { useEffect, useRef, useState } from 'react'

const RefHook = () => {
    const [name, setName] = useState('');
    const renderCount = useRef(1);
    //useRef returns a object and obj has singel property 
    // {current: 0}
    //useRef will never ever cause component to re-render,
    //coz its completly separate form our comonent render cycle,
    // imp thing about ref is, its very similar to state, it persist bw
    // diff render

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })
    return (
        <div>RefHook
            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <div>My name is {name}</div>
                <div>I rendered {renderCount.current} times</div>
            </div>
        </div>
    )
}

export default RefHook