// grab elements
const tabpanels = document.querySelectorAll(`div[role="tabpanel"]`)
const tabs = document.querySelectorAll(`.tabs ul li a`)



function handler() {
    tabpanels.forEach(panel => {
        let href = this.getAttribute("href").substring(1);
        
        if (href != panel.getAttribute("id"))
            panel.style.display = "none";
        else 
            panel.style.display = "block";
    })
}

tabs.forEach(tab => {
    tab.addEventListener('click', handler)
});