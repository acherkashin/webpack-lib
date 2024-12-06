import React from 'react';
import { type AppHeaderProps } from './components/AppHeader';
import { renderComponent } from './utils/RenderUtils';
export { useAppStore as AppStore } from './stores/AppStore';

export async function renderAppHeader(props: AppHeaderProps, container: HTMLElement) {
    const { AppHeader } = await import(/* webpackChunkName: "app-header" */'./components/AppHeader');

    return renderComponent({
        container,
        component: <AppHeader {...props} />,
        autoUnmount: true
    });
}