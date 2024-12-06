import React from "react";

export interface AppHeaderProps {
    title: string
}

export function AppHeader({ title }: AppHeaderProps) {
    return <header>
        {title}
    </header>
}