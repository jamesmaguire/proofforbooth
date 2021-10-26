
// var collapsibles = document.getElementsByTagName('h3');
// for (let i=0; i<collapsibles.length; i++) {
//     collapsibles[i].addEventListner('click', function() {
//         this.classList.toggle('active');
//         let content = this;
//         if (content.style.height) {
//             content.style.height = 'none';
//         } else {
//             content.style.height = content.scrollHeight + 'px';
//         }
//     });
// }

function initPage() {

    // Highlight current in schedule
    const oneweek = 1000*60*60*24*7;
    let currweek;
    // const now = Date.now();
    const now = Date.now()+oneweek*2; // For testing
    for (let i=1; i<scheduletable.rows.length; i++) {
        let date = scheduletable.rows[i].cells[1].innerHTML;
        if (now>Date.parse(date)+oneweek) {
            scheduletable.rows[i].classList.add('pastweek');
        } else if (now>Date.parse(date) && now<Date.parse(date)+oneweek) {
            scheduletable.rows[i].classList.add('thisweek');
            currweek = scheduletable.rows[i].cells[0].innerHTML;
        }
    }

    // Highlight current week in rep tables
    const reptables = document.getElementsByClassName('reptable');
    for (let i=0; i<reptables.length; i++) {
        let table = reptables[i];
        for (let j=1; j<table.rows.length; j++) {
            let week = table.rows[j].cells[0].innerHTML;
            if (Number(currweek) > Number(week)) {
                table.rows[j].classList.add('pastweek');
            } else if (Number(currweek) === Number(week)) {
                table.rows[j].classList.add('thisweek');
            }
        }
    }

}
