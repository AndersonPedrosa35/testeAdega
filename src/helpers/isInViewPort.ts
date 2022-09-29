export const isInViewport = (elem: HTMLElement | null) => {
    var distance = elem?.getBoundingClientRect();

    if(!distance) return false

    return (
        distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
}