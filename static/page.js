
function initPage() {

    // Highlight current in schedule
    let currweek;
    if (document.getElementById('scheduletable') != null) {
        const oneweek = 1000*60*60*24*7;
        const now = Date.now();
        // const now = Date.now()+oneweek*2; // For testing
        for (let i=1; i<scheduletable.rows.length; i++) {
            let date = scheduletable.rows[i].cells[1].innerHTML;
            if (now>Date.parse(date)+oneweek) {
                scheduletable.rows[i].classList.add('pastweek');
            } else if (now>Date.parse(date) && now<Date.parse(date)+oneweek) {
                scheduletable.rows[i].classList.add('thisweek');
                currweek = scheduletable.rows[i].cells[0].innerHTML;
            }
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

    const workouts = document.getElementsByClassName('outline-3');
    for (let i=0; i<workouts.length; i++) {
        // Make all inactive at startup
        workouts[i].getElementsByTagName('h3')[0]
            .parentElement
            .classList
            .toggle('inactive');

        // Add toggle on click
        let h3 = workouts[i].getElementsByTagName('h3')[0];
        h3.addEventListener('click', function() {
            this.parentElement
                .classList.toggle('active');
            this.parentElement
                .classList.toggle('inactive');
        });
        if (h3.style.height) {
            h3.style.height = '';
        } else {
            h3.style.height = 'calc(1.5em+2em)';
        }
    }

}
