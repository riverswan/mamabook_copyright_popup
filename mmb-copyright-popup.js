(function () {
    document.body.addEventListener('copy', (event) => {
        const selection = document.getSelection();
        const alertMessage = 'Копіювання матеріалів з сайту дозволено лише за умови вказаного гіперлінку на наш сайт. А копіювання матеріалів з метою розміщення на vseosvita.ua категорично заборонено і призведе до судового позову.'
        const addedText = '  Копіювання матеріалів з сайту <a>https://mamabook.com.ua</a> дозволено лише за умови вказаного гіперлінку на наш сайт. А копіювання матеріалів з метою розміщення на vseosvita.ua категорично заборонено і призведе до судового позову.'
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        if (!localStorage.getItem('mamabook_alert_message_date')) {
            alert(alertMessage);
            localStorage.setItem('mamabook_alert_message_date', `${year}/${month}/${date}`)
        } else {
            if (localStorage.getItem('mamabook_alert_message_date') < `${year}/${month}/${date}` ){
                alert(alertMessage);
                localStorage.setItem('mamabook_alert_message_date', `${year}/${month}/${date}`)
            }
        }
        event.clipboardData.setData('text/plain', selection.toString() + addedText);
        event.preventDefault();
    });


})();