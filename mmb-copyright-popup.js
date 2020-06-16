(function () {
    document.body.addEventListener('copy', (event) => {
        const selection = document.getSelection();
        const alertMessage = 'Копіювання матеріалів з сайту дозволено лише за умови вказаного гіперлінку на наш сайт. А копіювання матеріалів з метою розміщення на vseosvita.ua категорично заборонено і призведе до судового позову.'
        const addedText = '  Копіювання матеріалів з сайту <a>https://mamabook.com.ua</a> дозволено лише за умови вказаного гіперлінку на наш сайт. А копіювання матеріалів з метою розміщення на vseosvita.ua категорично заборонено і призведе до судового позову.'
        alert(alertMessage)
        event.clipboardData.setData('text/plain', selection.toString() + addedText);
        event.preventDefault();
    });
})();