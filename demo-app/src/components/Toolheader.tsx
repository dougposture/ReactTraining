import React from 'react';

interface ToolHeaderProps {
    headerText: string,
}

export const ToolHeader = React.memo(({ headerText }: ToolHeaderProps ) => {
    
    console.log('rendered tool header')

    return <header>
        <h1>{headerText}</h1>
    </header>;
});