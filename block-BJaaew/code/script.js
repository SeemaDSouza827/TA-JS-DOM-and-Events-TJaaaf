function main() {

    let display = []
    search = document.querySelector(`input[name="search"]`);
    cards = document.querySelector(".cards")
    //event listener for key pressed
    search.addEventListener("keyup", searchPerson);
    displayCardFamily = document.querySelector(".displayCardFamily")
    familyname = []

    
    //called 2 times, once while typing name and the other while clicking card
    function searchPerson(e) {
        display = []
        e.target.value.toLowerCase() ? bigCard(e.target.value.toLowerCase()) : smallTag(e);
        createUI(display)//call createUI function
    }

    //calls when the small tag is clicked on
    function smallTag(e) {
        a = e.target.innerText.toLowerCase();
        a = a.substring(0, a.length - 1)
        bigCard(a)
    }

    //displays list of people having the string sequence in their name
    function bigCard(str) {
        got.houses.forEach(house => {
            house.people.forEach(ppl => {
                ppl.name.toLowerCase().includes(str) ?
                    addValue(ppl.image, ppl.name, ppl.description, ppl.wikiLink)
                    : "";
            });
        })
    }

    //saves img_url, name, desc, and wikilink of the selected people 
    //and store them in an object in an array
    function addValue(img, name, desc, wiki) {
        let val = {};
        val.img = img;
        val.name = name;
        val.desc = desc;
        val.wiki = wiki
        display.push(val)
    }

    //after the display array is populated with objects of people we create cards wrt the array of objects
    function createUI(displayVal) {
        cards.innerHTML = ""
        displayVal.forEach(i => {
            div = document.createElement("div")
            div.classList.add("card-info", "border")
            img = document.createElement("img")
            img.setAttribute("src", i.img)
            img.setAttribute("alt", i.name.split(" ")[0]);
            h2 = document.createElement("h2")
            h2.innerText = i.name;
            p = document.createElement("p")
            p.innerText = i.desc;
            button = document.createElement("button");
            button.addEventListener("click", function () { location = i.wiki })
            button.innerText = "Know More!"
            div.append(img, h2, p, button)
            cards.append(div)
        })
    }

    //create small tagss
    function createTags() {
        got.houses.forEach(i => {
            familyname.push(i.name)
        })

        familyname.forEach(
            i => {
                divCard = document.createElement("div")
                divCard.classList.add("card-search")
                divCard.innerText = i;
                displayCardFamily.append(divCard)
            }
        )

        cardSearch = document.querySelectorAll(".card-search")
        cardSearch.forEach(e => {
            e.addEventListener("click", searchPerson)
        })

    }
    createTags()
}
main()