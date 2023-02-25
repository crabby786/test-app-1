import React from 'react'

export function Heading(props: any) {
    let { title, subTitle } = props
    return (<header className='px-3 py-2'>
        <p className="h4">{title}</p>
        {subTitle &&
            <p className="text-muted">
                {subTitle}
            </p>
        }

        <hr />
    </header>);
}
