import React from "react";

interface OpenModalButtonProps {
    buttonTitle: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function OpenModalButton({buttonTitle, onClick}: OpenModalButtonProps) {
    return (
        <button onClick={onClick} className="fixed right-2 bottom-2 px-4 py-3 border rounded bg-yellow-400 text-yellow-800">{ buttonTitle }</button>
    )
}