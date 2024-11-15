let pokemonList = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

// Answers

// Question 1
document.querySelector("#host-name").innerHTML = "Muyu Lin";



// Question 2
// You can also create their own CSS classes in style.css file and use that. 
document.querySelector("#instruction_button").addEventListener("click", function () {
    if (document.querySelector(".question").style.display === "none") {
        document.querySelector(".question").style.display = "block";
    } else {
        document.querySelector(".question").style.display = "none";
    }
})



// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.querySelector("#first_name").addEventListener("input", function () {
    if (document.querySelector("#first_name").value === "John") {
        document.querySelector("#last_name").value = "Doe";
    } else {
        document.querySelector("#last_name").value = "";
    }
})


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.querySelector("#user_name").addEventListener("change", function () {
    const username = document.querySelector("#user_name").value;
    if (pokemonList.includes(username)) {
        alert("Username already exists");
    } else {
        alert("Unique username created");
    }
})


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.querySelector("#confirm_password").addEventListener("change", function () {
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm_password").value;
    if (password === confirmPassword) {
        alert("Password Matches");
    } else {
        alert("Password does not match");
    }
})



//Question 6
document.querySelector("#radio-reset-button").addEventListener("click", function () {
    document.querySelector("#week_tue").checked = false;
    document.querySelector("#week_wed").checked = false;
    document.querySelector("#week_thu").checked = false;
})



//Question 7 
document.querySelector("profile_pic").addEventListener("change", function() {
    if (this.files[0].size / 1024 > 100) {
        alert("File size exceeds 100KB");
        this.value = "";
    }
})




//Question 8
document.querySelector("#color-picker").addEventListener("change", function () {
    document.querySelector("body").style.backgroundColor = this.value;
})




//Question 9 
document.querySelector(".reset-form-button").addEventListener("click", function () {
    document.querySelector("form").reset();
})