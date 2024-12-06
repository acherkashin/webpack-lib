import React from 'react';
import { type AccountDialogProps } from './components/AccountDialog';
import { renderComponent } from './utils/RenderUtils';
export { useAppStore as AppStore } from './stores/AppStore';

export function renderAlertDialog() {
    alert('Are you sure?');
}

export async function renderAccountDialog(props: AccountDialogProps, container: HTMLElement) {
    const { AccountDialog } = await import(/* webpackChunkName: "account-dialog" */'./components/AccountDialog');

    return renderComponent({
        container,
        component: <AccountDialog {...props} />,
        autoUnmount: true
    });
}