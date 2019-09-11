export const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

export const lazyLoad = (images) => {
    images.forEach(function (path) {
        new Image().src = path
    });
};

// export const checkWebP = (callback) => {
//     const img = new Image();
//     img.onload = function () {
//         const result = (img.width > 0) && (img.height > 0);
//         callback(result);
//     };
//     img.onerror = function () {
//         callback(false);
//     };
//     img.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="
// }

export const hasWebP = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() { resolve(); };
    img.onerror = function() { reject(); };
    img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
});