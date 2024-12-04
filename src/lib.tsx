import React from 'react';
import { type AccountDialogProps } from './components/AccountDialog';
export { useAppStore as AppStore } from './stores/AppStore';

export function renderAlertDialog() {
    alert('Are you sure?');
}

export async function renderAccountDialog(props: AccountDialogProps, container: HTMLElement) {
    const { createRoot } = await import(/* webpackChunkName: "react-dom"*/ 'react-dom/client');
    const { AccountDialog } = await import(/* webpackChunkName: "account-dialog" */'./components/AccountDialog');

    const root = createRoot(container);
    return root.render(<AccountDialog {...props} />);
}