import React from 'react'


export default function Chat({ setMsg, obj, sendMsg, user }) {

    const onSubm = () => {
        sendMsg();
        setMsg('')
        document.getElementById("chatInput").value = ''
        let element = document.getElementById("scroll-chat-div");
        element.scrollTop = element.scrollHeight;
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubm()
            window.scrollTo(0, document.body.scrollHeight);
        }
    }
    const allMessages = obj.map((da, i) => {
        return (<div key={i} className="flex flex-col items-start my-4 px-1">
            <div className={`h-5/6 bg-white ${user === da.from ? 'bg-blue-300' : 'bg-yellow-300'} p-1 mt-2 rounded-tl-lg  rounded-tr-lg  rounded-br-lg break-words `}>
                <p>{da.message}</p>
            </div>

            <div className={`h-1/6 text-grey-800 px-1 text-end`}>
                <p>{da.from}</p>
            </div>
        </div>)
    })
    return (
        <div className="p-2 mb-10  mx-auto h-96">
            <div id="scroll-chat-div" className="h-full bg-gray-100 overflow-y-scroll overflow-x-hidden">
                {allMessages}
            </div>
            <div className="flex">
                <input id="chatInput" onKeyDown={handleKeyDown} onChange={(event) => setMsg(event.target.value)} type="text" className='w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' />
                <button onClick={() => onSubm()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
            </div>
        </div>


    )
}
