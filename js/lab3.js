// grab elements
const tabpanels = document.querySelectorAll(`div[role="tabpanel"]`)
const tabs = document.querySelectorAll(`.tabs ul li a`)

// define a click handler function
function handler() {

    // for each tab panel..
    tabpanels.forEach(panel => {
        // get href from click and remove hashtag
        let href = this.getAttribute("href").substring(1);
        
        // if the href matches the panel id..
        if (href != panel.getAttribute("id"))

            // hide panel
            panel.style.display = "none";
        
        // otherwise..
        else 
            // show panel
            panel.style.display = "block";
    })
}

// for each tab..
tabs.forEach(tab => {
    
    // Add the handler function on click
    tab.addEventListener('click', handler)
});