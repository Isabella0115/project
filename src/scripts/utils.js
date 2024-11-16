function isDOMElement(element) {
    return element instanceof Element;
}

function createElement(element, attributes = {}, children = []) {
    if (!element) {
        throw new Error('Element type is not provided');
    }

    const elem = document.createElement(element);

    if (!isDOMElement(elem)) {
        return undefined;
    }

    for (const [key, value] of Object.entries(attributes)) {
        elem.setAttribute(key, value);
    }

    if (typeof children === 'string') {
        elem.innerText = children;
    } else if (Array.isArray(children)) {
        children.forEach((child) => {
            if (child instanceof Element) {
                elem.appendChild(child);
            }
        });
    } else if (children instanceof Element) {
        elem.appendChild(children);
    }

    return elem;
}

function render(element, target) {
    if (!(element instanceof Element)) {
        throw new Error('Invalid element');
    }

    if (!(target instanceof Element)) {
        throw new Error('Invalid target element');
    }

    target.appendChild(element);
    return target;
}

window.UI = {
    createElement,
    render
};
