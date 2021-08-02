import React from 'react'

export default function Error() {
    return (
        <div>
            <div className="h-full w-full bg-yellow-700 absolute overflow-hidden">
                <p className="absolute  text-5xl text-white transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center" style={{ top: `30%`, left: `50%` }}>ERROR: 404</p>
                <p className="absolute  text-4xl text-white transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center" style={{ top: `40%`, left: `50%` }}>Try again, you went the wrong way!</p>
            </div>
        </div>
    )
}
