import React from "react";

export interface AccountDialogProps {
    firstName: string;
    lastName: string;
}

export function AccountDialog({ firstName, lastName }: AccountDialogProps) {
    return <dialog ref={(item) => item.showModal()}>
        <p>
            Hello {firstName}: {lastName}
        </p>
    </dialog>
}