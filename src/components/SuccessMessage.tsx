import React from "react";

interface SuccessMessageProps {
    success: string;
}

export function SuccessMessage({success}: SuccessMessageProps) {
    return(
        <p className="text-center text-green-600">{ success }</p>
    )
}