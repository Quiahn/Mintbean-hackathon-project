import React from 'react'

export default function StatCards({ title, stat }) {
    return (
        <div className="max-w-sm flex flex-col bg-gray-100 m-1 py-2 mx-auto">
            <p className="text-base py-1 text-center text-gray-700 break-all">{title}:</p>
            <p className="text-2xl  text-center text-gray-900 break-all">{stat}</p>
        </div>
    )
}
