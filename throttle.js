function throttle(func, interval) {
    let isThrottled = false;

    return function (...args) {
        if (!isThrottled) {
            func.apply(this, args);
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;
            }, interval);
        }
    };
}

const throttledFunction = throttle(() => {
    console.log("Throttled function executed");
}, 1000);

throttledFunction(); // Output: Throttled function executed

setTimeout(() => {
    throttledFunction();
}, 500);

setTimeout(() => {
    throttledFunction();
}, 1100);
