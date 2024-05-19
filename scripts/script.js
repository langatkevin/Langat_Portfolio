document.addEventListener('DOMContentLoaded', function () {
    

    const barsIcon = document.getElementById('barsIcon');
    const closeIcon = document.querySelector('.close');
    const linksWrapper = document.querySelector('.links-wrapper');

    barsIcon.addEventListener('click', function () {
        
        linksWrapper.style.display = (linksWrapper.style.display === 'flex') ? 'none' : 'flex';
    });

    closeIcon.addEventListener('click', function () {
       
        linksWrapper.style.display = 'none';
        
    });
});
