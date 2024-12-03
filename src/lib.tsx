import React from 'react';
import { type AccountDialogProps } from './components/AccountDialog';

export function renderAlertDialog() {
    alert('Are you sure?');
}

export async function renderAccountDialog(props: AccountDialogProps, container: HTMLElement) {
    const { createRoot } = await import('react-dom/client');
    const { AccountDialog } = await import(/* webpackChunkName: "human-dialog" */'./components/AccountDialog');

    const root = createRoot(container);
    return root.render(<AccountDialog {...props} />);
}