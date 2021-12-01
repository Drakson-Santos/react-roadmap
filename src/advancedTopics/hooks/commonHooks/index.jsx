import React from 'react';
import UseCallbackHooks from './useCalback';
import UseMemoHooks from './useMemo';
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
            <hr />
            <div>
                <h1>Use Memo</h1>
                <UseMemoHooks />
            </div>
        </div>
    )
}

export default CommonHooks;
