const btnEl = document.querySelector('.btn');

const toggleOptions = () => {
    const wrapperEl = document.querySelector('.wrapper');
    const iconEl = btnEl.querySelector('i');

    wrapperEl.classList.toggle('active');

    if(iconEl.classList.contains('fa-solid fa-share-nodes')){
        iconEl.classList.replace('fa-solid fa-share-nodes', 'fa-solid fa-circle-xmark');
    }else {
        iconEl.classList.replace('fa-solid fa-circle-xmark', 'fa-solid fa-share-nodes');
    }
};

btnEl.addEventListener('click', toggleOptions);
