function fireworks() {
    let newYear = document.querySelector('.new-year');

    function createElem() {
        let red = Math.round(Math.random(1) * 255);
        let green = Math.round(Math.random(1) * 255);
        let blue = Math.round(Math.random(1) * 255);

        let posLeft = Math.round(Math.random(1) * 90);
        let posTop = Math.round(Math.random(1) * 90);



        let z = document.createElement('div');
        z.classList.add('async-elem');
        newYear.appendChild(z);
        z.style.left = `${posLeft}%`;
        z.style.top = `${posTop}%`;
        z.style.background = `rgb(${red}, ${green}, ${blue})`;
    }

    setInterval(createElem, 1000);


    setTimeout(function () {
        setInterval(function () {
            newYear.firstChild.remove();
        }, 1000);
    }, 4000)
}
fireworks();

function garlang() {
    let item = document.querySelectorAll('.garlang__item');

    item.forEach((elem, index) => {
        let randRot = Math.round(Math.random(1) * 40);
        let randOffset = Math.round(Math.random(1) * 15);

        if (body.clientWidth < 450) {
            randRot = Math.round(Math.random(1) * 20);
            randOffset = Math.round(Math.random(1) * 5);
        }

        if (index % 2 == 1) {
            elem.style.transform = `translateY(${randOffset}px) rotate(${randRot}deg)`;
        } else {
            elem.style.transform = `translateY(-${randOffset}px) rotate(-${randRot}deg)`;
        }
    })
}
garlang();

function firework() {
    let sound = document.querySelector('.firework');
    let soundOff = document.querySelector('.stop-audio');
    let count = 0;

    document.addEventListener('click', ready);

    function ready() {
        if (count == 0) {
            soundOff.classList.add('d-block');
            let soundPlay = setTimeout(() => {
                sound.play();
                sound.volume = 0.5;
            }, 1000)

            count = 1;
        }

        soundOff.addEventListener('click', () => {
            sound.pause();
            soundOff.classList.remove('d-block');
        })
    }

}
firework();