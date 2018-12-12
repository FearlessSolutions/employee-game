const cards = document.querySelectorAll('.memory-card');
const num_matches = 8
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0
let matches = 0
var people = [
    {pic:"https://fearless.cdn.prismic.io/fearless/49abae3b9b5e40f870bdad81eda71d815413db91_baggage_stephanie2.jpg", name:"Stephanie Baggage"},
    {pic:"https://fearless.cdn.prismic.io/fearless/e12149e3fd7be5ab65f27ccecfeec3a4d44c1bb2_barrow_annie.jpg", name:"Annie Barrow"},
    {pic:"https://fearless.cdn.prismic.io/fearless/099891af3605702fed4b80b1ad4815658a2f56aa_barrow_arlene.jpg", name:"Arlene Barrow"},
    {pic:"https://fearless.cdn.prismic.io/fearless/94b8de0c291042451f73ed3b176a224baaedc930_bell_terrance.jpg", name:"Terrance Bell"},
    {pic:"https://fearless.cdn.prismic.io/fearless/8860263a083c52519427dd67b13eacd6c5656c3b_benson_maurice.jpg", name:"Maurice Benson"},
    {pic:"https://fearless.cdn.prismic.io/fearless/e78cba7396085ba0d2b7785707b242a64a6e8bbd_bolchoz-tyler.jpg", name:"Tyler Bolchoz"},
    {pic:"https://fearless.cdn.prismic.io/fearless/ce32d041f1703b378a4620db932e6a124b41f586_bradley_alex.jpg", name:"Alex Bradley"},
    {pic:"https://fearless.cdn.prismic.io/fearless/b624a60e3c64c579e2e2364c148f339816ce1b8d_branham_clare.jpg", name:"Clare Branham"},
    {pic:"https://fearless.cdn.prismic.io/fearless/e71ad8f523a6e12e839ede62143d76f6b3b54ebf_brooks_aaron.jpg", name:"Aaron Brooks"},
    {pic:"https://fearless.cdn.prismic.io/fearless/1ce18a9574abf7d5f1d14410efb1134258ccff03_bushong_charles.jpg", name:"Charles Bushong"},
    {pic:"https://fearless.cdn.prismic.io/fearless/8e5292721c92944ddafc06c538a2023c36d01795_butler-meghan-2.jpg", name:"Meghan Butler"},
    {pic:"https://fearless.cdn.prismic.io/fearless/595e02ae5ee0a30c64a9eca59fba2c2504f746e7_campbell_candace.jpg", name:"Candace Campbell"},
    {pic:"https://fearless.cdn.prismic.io/fearless/8f8a87cca44896b4332e90a4a9f5148a19d9b44a_davis_richard.jpg", name:"Richard Davis"},
    {pic:"https://fearless.cdn.prismic.io/fearless/18f27ccc7615a064f7214e1cbb1b2c425020f2ff_delosreyes_alex.jpg", name:"Alex de los Reyes"},
    {pic:"https://fearless.cdn.prismic.io/fearless/7e2d5b92fdf13faae5fd56ba2d9575433993a43c_dipasquale_amy.jpg", name:"Amy DiPasquale"},
    {pic:"https://fearless.cdn.prismic.io/fearless/d24726be681f01b365271df5717a64377c6d53a9_dress_laura.jpg", name:"Laura Dress"},
    {pic:"https://fearless.cdn.prismic.io/fearless/10b9cae33d9ba44129ff4428619b97fa0c40d694_dzirasa_delali2.jpg", name:"Delali Dzirasa"},
    {pic:"https://fearless.cdn.prismic.io/fearless/7758c07e29bc394a48c51bb04404ed42d753cad2_dzirasa_letita.jpg", name:"Letitia Dzirasa, MD"},
    {pic:"https://fearless.cdn.prismic.io/fearless/2b6db0b2032b9b6f6bd0a5726370f469b4f51f7c_eggleston_parissa.jpg", name:"Parissa Eggleston"},
    {pic:"https://fearless.cdn.prismic.io/fearless/8c7c2844ad2f42f13d1f08a738ddc17dd1d76694_fink-robert.jpg", name:"Robert Fink"},
    {pic:"https://fearless.cdn.prismic.io/fearless/ddd1fda22dbe2508525aa579e1ccaa5cd2d72381_forkner_tiffany.jpg", name:"Tiffany Forkner"},
    {pic:"https://fearless.cdn.prismic.io/fearless/bfb52c944135e52beb1fb10023b5c41f72b6d1f2_foster-john.jpg", name:"John Foster"},
    {pic:"https://fearless.cdn.prismic.io/fearless/a907ad30a1ed5e28b0d04bb61150da6a81f23204_gilbert-felix.jpg", name:"Felix Gilbert"},
    {pic:"https://fearless.cdn.prismic.io/fearless/94e5e3dd0e8a1135c7e34a6337b32720fe8f97ad_halteman_bethany.jpg", name:"Bethany Halteman"},
    {pic:"https://fearless.cdn.prismic.io/fearless/2da0d9423afe11a566ebc7bb3be7bb2b2fd0e170_hemminger_ryan.jpg", name:"Ryan Hemminger"},
    {pic:"https://fearless.cdn.prismic.io/fearless/df27f14c7ca7fe7e5bff27c6f998899a6edf751a_ho_uyen.jpg", name:"Uyen Ho"},
    {pic:"https://fearless.cdn.prismic.io/fearless/5bc0ef570aa6b9b46e65195f17aef302bd4dd062_jordan_cheryl.jpg", name:"Cheryl Jordan"},
    {pic:"https://fearless.cdn.prismic.io/fearless/61124fe8d2c5bc59e5fa783bb803b150f1ede943_jorgenson_matt.jpg", name:"Matt Jorgenson"},
    {pic:"https://fearless.cdn.prismic.io/fearless/949862c7a6bc9f2d39b5f17876ca56a99ab513fb_kantzer_mike.jpg", name:"Mike Kantzer"},
    {pic:"https://fearless.cdn.prismic.io/fearless/e1b4effbfe3b2449948e9d3412ed8e84113ca338_kelsh_pat.jpg", name:"Pat Kelsh"},
    {pic:"https://fearless.cdn.prismic.io/fearless/cc59cc0d19175190593f766c793a1e17fb7461e3_king-jon.jpg", name:"Jonathan King"},
    {pic:"https://fearless.cdn.prismic.io/fearless/c8d2554c08a207875979b2fb26a259116d5d7a5a_knoll_michael.jpg", name:"Michael Knoll"},
    {pic:"https://fearless.cdn.prismic.io/fearless/749438ee22ac9c6cd144b7f143e4ee6d90322e36_krach_kelsey.jpg", name:"Kelsey Krach"},
    {pic:"https://fearless.cdn.prismic.io/fearless/98bbce300611459975d9ba79412bd77f34d9d6cd_kyler_amber.jpg", name:"Amber Kyler"},
    {pic:"https://fearless.cdn.prismic.io/fearless/297a400a25123148b054245b3788ef4ddd802342_mancuso_amanda_ed.jpg", name:"Amanda Mancuso"},
    {pic:"https://fearless.cdn.prismic.io/fearless/7c523fa1d7c47427bccc202398ac8654a181a8fc_matthews_alex.jpg", name:"Alex Mathews"},
    {pic:"https://fearless.cdn.prismic.io/fearless/e271662c9cabb4d83b0ff4f8ff079fa72cd8be59_mccarthy_kendra.jpg", name:"Kendra McCarthy"},
    {pic:"https://fearless.cdn.prismic.io/fearless/515828be6b5ffc44dcd7b92374e977fb8f97fdb9_mian_azhar.jpg", name:"Azhar Mian"},
    {pic:"https://fearless.cdn.prismic.io/fearless/708e70737b1a12ab265ac4e5440c350bb2915939_patel-holly-2.jpg", name:"Holly Patel"},
    {pic:"https://fearless.cdn.prismic.io/fearless/5ce7cdf4a93e2e2df838e65f9c1a571bda9daf61_petrucci_rachel.jpg", name:"Rachel Petrucci"},
    {pic:"https://fearless.cdn.prismic.io/fearless/9b7fa29729259c2890d87d29a353151edd4430c3_place_lee.jpg", name:"Lee Place"},
    {pic:"https://fearless.cdn.prismic.io/fearless/577f3c88076bfb165d669bf4b724696fb7994d1f_price_doug.jpg", name:"Doug Price"},
    {pic:"https://fearless.cdn.prismic.io/fearless/3b6a6059e38e885a5fcd769b79a622975f1bb50d_priest_john.jpg", name:"John Priest"},
    {pic:"https://fearless.cdn.prismic.io/fearless/815bd7477fdee9b9f1126d053d2e255c1ee51e6e_sabelhaus_eric.jpg", name:"Eric Sabelhaus"},
    {pic:"https://fearless.cdn.prismic.io/fearless/973372ab8e468a0f0d5b564ab1f6d18b2986624f_samuels_luke.jpg", name:"Luke Samuels"},
    {pic:"https://fearless.cdn.prismic.io/fearless/1893f14befc0d49066f2c03565538c4cb851243f_semesky_laura.jpg", name:"Laura Semesky"},
    {pic:"https://fearless.cdn.prismic.io/fearless/fb8b7f503d27cc27c510a455da137e4a39d92061_shepherd_shannon.jpg", name:"Shannon Shepherd"},
    {pic:"https://fearless.cdn.prismic.io/fearless/12a1bffb488d051626a8193a9ca829fcc5422ffd_smigovsky-jason.jpg", name:"Jason Smigovsky"},
    {pic:"https://fearless.cdn.prismic.io/fearless/e79467fa39e3f5458e052f60b38b7ec9c1b51bdc_spacek_traci.jpg", name:"Traci Spacek"},
    {pic:"https://fearless.cdn.prismic.io/fearless/22b223c82088fc88c0d675fe5aff160cd69dcfe2_strama_christian.jpg", name:"Christian Strama"},
    {pic:"https://fearless.cdn.prismic.io/fearless/23f5962fd6d30a64433fc411ed63bc2af929ff6d_tisza_david.jpg", name:"David Tisza"},
    {pic:"https://fearless.cdn.prismic.io/fearless/d936748f4f3f96229c9de590f84ea515a3a705a6_wagner_jenny.jpg", name:"Jenny Wagner"},
    {pic:"https://fearless.cdn.prismic.io/fearless/84fdd9443925d3ddac70d7f24a845abad0405fb3_watts-jordan.jpg", name:"Jordan Watts"},
    {pic:"https://fearless.cdn.prismic.io/fearless/d48c1cb95a0a7d6bca1b1958baa2553217eb7c5a_wingerd_beth.jpg", name:"Beth Wingerd"}
]

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    matches = matches + 1;
    firstCard.removeEventListener('click', flipCard);
    firstCard.classList.add('matched');
    secondCard.removeEventListener('click', flipCard);
    secondCard.classList.add('matched');

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    moves = moves + 1;
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    if (matches == num_matches){
        alert ("You took " + moves + " moves")
    }
}
function createCards(person) {
    return `
         <div class="memory-card" data-framework="${person.name}">
            <img class="front-face" src="${person.pic}" alt="${person.name}">
            <img class="back-face" src="img/fearless.png" alt="Memory Card">
        </div>
        <div class="memory-card" data-framework="${person.name}">
            <span class="front-face">${person.name}</span>
            <img class="back-face" src="img/fearless.png" alt="Memory Card">
        </div>
    `
}
(function shuffle() {
    var i;
    for (i=0; i<num_matches; i++){
        let randomPos = Math.floor(Math.random() * people.length);
        let person = people[randomPos]
        let elem = document.querySelector ( '#game-board' )
        elem.innerHTML = elem.innerHTML + createCards(person)
        people.splice(randomPos,1)
    }
    const cards = document.querySelectorAll('.memory-card');

    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * num_matches * 2);
        card.style.order = randomPos;
    });
    cards.forEach(card => card.addEventListener('click', flipCard));
})();

