const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const papanSkor = document.querySelector('.papan-skor')

let tanahSebelumnya;

function randomTanah(tanah) {
    const T = Math.floor(Math.random() * tanah.length);

    const Trandom = tanah[T];
    if (Trandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = Trandom;
    return Trandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus() {
    const Trandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 1000);
    Trandom.classList.add('muncul')

    setTimeout(() => {
        Trandom.classList.remove('muncul')
        if (!selesai) {
            munculkanTikus();
        }
    }, wRandom);
}

function Mulai(){
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanTikus();
    setTimeout(() => {
        selesai = true;
    }, 600000); //10 menit
}

function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul')
    papanSkor.textContent = skor;
}

tikus.forEach(T => {
    T.addEventListener('click', pukul)
});