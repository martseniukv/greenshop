let loginBtn = document.querySelector('.login__btn');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let preloader = document.getElementById('preloader');
    preloader.classList.remove('hidden');

    const url = this.href;
    setTimeout(() => {
        window.open(url, "_blank");
        document.getElementById('preloader').classList.add("hidden");
    }, 2000);
    this.blur();
});