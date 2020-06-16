(function () {
    document.body.addEventListener('copy', (event) => {
        const selection = document.getSelection();
        const alertMessage = 'Копіювання матеріалів з сайту дозволено лише за умови вказаного гіперлінку на mamabook.com.ua . А копіювання матеріалів з метою розміщення на VSEOSVITA.UA категорично заборонено і призведе до судового позову.';
        const addedText = 'Матеріал взято з сайту <a href="https://mamabook.com.ua">mamabook.com.ua</a>';
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        if (!localStorage.getItem('mamabook_alert_message_date') || localStorage.getItem('mamabook_alert_message_date') > `${year}/${month}/${date}` ) {
            alert(alertMessage);
            localStorage.setItem('mamabook_alert_message_date', `${year}/${month}/${date}`)
        }
        event.clipboardData.setData('text/plain', selection.toString() + addedText);
        event.preventDefault();
    });
})();