import React from 'react';
import UseCallbackHooks from './useCalback';
import UseRefHooks from './useRef';

const CommonHooks = () => {
    return (
        <div>
            <div>
                <h1>Use Calback</h1>
                <UseCallbackHooks />
            </div>
            <hr />
            <div>
                <h1>Use Ref</h1>
                <UseRefHooks />
            </div>
        </div>
    )
}

export default CommonHooks;
