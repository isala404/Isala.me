$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar").toggleClass("sidebar-show");
});

new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backDelay: 1200,
    backSpeed: 40,
    loop: true,
    smartBackspace: true // Default value
});

let backdrops = [];
for (let i = 0; i < 25; i++) {
    backdrops.push('<img class="d-block w-100 img-fit" src="img/backgrounds/bg_'+i+'.webp" alt="Image #'+i+' for slide">')
}


backdrops = shuffle(backdrops);
for(let i=0; i<backdrops.length; i++){
    const carousel_item = document.createElement( 'div' );
    carousel_item.className = 'carousel-item';
    if (i===0){
        carousel_item.className = 'carousel-item active';
    }
    carousel_item.innerHTML = backdrops[i];
    document.getElementById('images').appendChild(carousel_item);
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}