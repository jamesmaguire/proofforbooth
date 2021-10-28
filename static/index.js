

function initPage() {

    // Highlight current block
    const oneweek = 1000*60*60*24*7;
    let currweek;
    const now = Date.now();
    const blocks = document.getElementsByClassName('outline-3');
    for (let i=0; i<blocks.length; i++) {
        let range = parseDateRange(blocks[i]);
        if (range[0] < now && now < range[1]) {
            blocks[i].classList.add('currentblock');
        } else if (now < range[0]) {
            blocks[i].classList.add('pastblock');
        }
    }

    // Make block clickable
    console.log(
        blocks[1].getElementsByClassName('a')
    );

}

function parseDateRange(block) {
    const range = block.getElementsByClassName('outline-text-3')[0]
          .textContent
          .replace(/[\n\r]/g, '')
          .split(' – ')
          .map(d => Date.parse(d));
    return range;
}
