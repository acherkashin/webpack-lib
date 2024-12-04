import { Root } from 'react-dom/client';

export interface IRenderComponentProps {
    container: HTMLElement;
    component: JSX.Element;
    /**
     * Автоматически удаляем react компонент, если родительский элемент был удалён из DOM дерева
     */
    autoUnmount: boolean;
}


const roots = new Map<HTMLElement, Root>();

export async function renderComponent({ container, component, autoUnmount }: IRenderComponentProps) {
    const { createRoot } = await import('react-dom/client');
    const isUpdate = roots.has(container);
    const root = isUpdate ? roots.get(container)! : createRoot(container);

    if (!isUpdate) {
        roots.set(container, root);
        if (autoUnmount) {
            onDetach(container, () => unMount(container));
        }
    }

    try {
        root.render(component);
    } catch (e) { }
}

export function unMount(container: HTMLElement, unmountContainer = false) {
    if (roots.has(container)) {
        try {
            const root = roots.get(container)!;
            root.unmount();
            unmountContainer && container.remove();
        } catch (_e) {
        } finally {
            roots.delete(container);
        }
    }
}

export function onDetach(
    el: HTMLElement,
    onDetachCallback: () => any,
    observer = new MutationObserver(() => {
        if (isDetached(el)) {
            observer.disconnect();
            onDetachCallback();
        }
    })
) {
    if (isDetached(el)) {
        observer.disconnect();
        onDetachCallback();
        return observer;
    }

    observer.observe(document, {
        childList: true,
        subtree: true,
    });

    return observer;
}

export function isDetached(el: HTMLElement) {
    return !el.closest('html');
}