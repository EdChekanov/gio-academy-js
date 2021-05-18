document.addEventListener("DOMContentLoaded", () => {
    const featureLinks = document.querySelectorAll('.feature__link');
    const featureSub = document.querySelectorAll('.feature-sub');

    featureLinks.forEach(function(btn, i, featureLinks) {
        btn.addEventListener('click', function() {
            if (featureLinks[i].classList.contains('feature__link_active') && 
            !featureSub[i].classList.contains('hidden')) {
                featureLinks[i].classList.remove('feature__link_active');
                featureSub[i].classList.add('hidden');
            } else {
            featureLinks.forEach(function(btn, i, featureLinks) {
                featureLinks[i].classList.remove('feature__link_active'); 
            })
            featureSub.forEach(function(btn, i , featureLinks) {
                featureSub[i].classList.add('hidden'); 
            })
            featureLinks[i].classList.add('feature__link_active');
            featureSub[i].classList.remove('hidden');
        }
        })
    })
    });