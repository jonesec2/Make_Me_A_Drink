var images = ["cocktailOne.png", "cocktailTwo.png", "cocktailsThree.png", "gin-tonic.png", "liquor.png", "mojito.png"]

$(document).ready(function () {
    var drink = /*html*/ `<img class="mx-auto my-auto d-block" data-number="0" id="drinkImage" src="assets/images/${images[0]}" alt="drink">`
    console.log(drink)
    $(".drink").append(drink)
})

var i = 1

$.backstretch("assets/images/ingoodspirits-8.jpg");

$(".drink").on("click", function () {
    $(".drink").empty();
    $("#drinkDetails").empty();
    $("#instructions").empty();
    $('#ingredients').empty();
    console.log(i)
    if (i <= 5) {
        var drink = /*html*/ `<img class="mx-auto my-auto d-block" data-number="${i}" id="drinkImage" src="assets/images/${images[i++]}" alt="drink">`
    }
    else {
        var drink = /*html*/ `<img class="mx-auto my-auto d-block" data-number="0" id="drinkImage" src="assets/images/${images[0]}" alt="drink">`
        i = 1
    }
    console.log(i)


    var query ="https://www.thecocktaildb.com/api/json/v1/1/random.php"

    $.ajax({ url: query, method: "GET" }).then(function (response) {
        console.log(response)
        var drinkName = response.drinks[0].strDrink
        // var drinkIngredients = [ {ingratiateOne: null}, {ingratiateTwo: null}, {ingratiateThree: null}, {ingratiateFour: null}, {ingratiateFive: null}, {ingratiateSix: null} ]
        for (d = 1; d <= 15; d ++) {
            // var allIngredients = strIngredient+i
            // console.log(allIngredients)
            var ingOne = response.drinks[0].strIngredient1
            var ingTwo = response.drinks[0].strIngredient2
            var measureOne = response.drinks[0].strMeasure1
            var measureTwo = response.drinks[0].strMeasure2
            var instructions = response.drinks[0].strInstructions
            // console.log(drinkIngredients)
        }
        var appendName = /*html*/ `
            <h2 id='drinkName' class="row text-center">${drinkName}<h2>
        `
        var appendIngredients = /*html*/`
            <h3 class="ingST">Ingredients
                <ol class="ingS">
                    <li class="ingS">${ingOne}  -  ${measureOne}</li>
                    <li class="ingS">${ingTwo}  -  ${measureTwo}</li> 
                </ol>
            </h3>
        `
        var appendInstructions = /*html*/`
            <h3 class="insS"> Instructions
                <ul class="insS">
                    <li class="insS">${instructions}</li>
                </ul>
            <h3>
        `
        console.log(drinkName)
        $('#drinkDetails').append(appendName)
        $('#instructions').append(appendInstructions)
        $('#ingredients').append(appendIngredients)
    })
    $(".drink").append(drink)

})

// write code to set active page (see class"nav-item active" in html)

