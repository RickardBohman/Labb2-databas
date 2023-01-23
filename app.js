
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))


const promt = require('prompt-sync')();

const golfcourses = {allgolfcourses: [
    {id: 1 ,coursename: "Royal Country Down G.C" , country: "Ireland", city: "Newcastle", distance: 6570, par: 71 },
    {id: 2 ,coursename: "Tara ITI G.C" , country: "New Zealand", city: "Mangawhai", distance: 6254, par: 71 },
    {id: 3 ,coursename: "Royal Dornoch G.C" , country: "Scotland", city: "Dornoch", distance: 6130, par: 70 },
    {id: 4 ,coursename: "Royal Melbourne G.C (WEST)" , country: "Australia", city: "Black Rock", distance: 6076, par: 72 },
    {id: 5 ,coursename: "Morfontaine G.C" , country: "France", city: "Morfontaine", distance: 6020 , par: 70 },
    {id: 6 ,coursename: "Hirono G.C" , country: "Japan", city: "Hyogo", distance: 6555, par: 72 },
    {id: 7 ,coursename: "Murifield" , country: "Scotland", city: "Gullane", distance: 6624, par: 71 },
    {id: 8 ,coursename: "Royal Portrush G.C" , country: "Ireland", city: "Portrush", distance: 6690, par: 72 },
    {id: 9 ,coursename: "The Old Course at st.Andrews" , country: "Scotland", city: "Fife", distance: 6655, par: 72 },
    {id: 10 ,coursename: "Cabot Cliffs" , country: "Canada", city: "Inverness", distance: 6185, par: 72 },
    {id: 11 ,coursename: "Kingston Heath G.C" , country: "Australia", city: "Heatherton", distance: 6494, par: 72 },
    {id: 12 ,coursename: "Cape Wickham Links" , country: "Australia", city: "King Island", distance: 6149, par: 72 },
    {id: 13 ,coursename: "Trump Turnberry" , country: "Scotland", city: "Turnberry", distance: 6847, par: 71 },
    {id: 14 ,coursename: "New South Wales G.C" , country: "Australia", city: "Le Perouse", distance: 6244, par: 72 },
    {id: 15 ,coursename: "Sunningdale G.C (OLD)" , country: "England", city: "Sunnigdale", distance: 6059, par: 70 },
    {id: 16 ,coursename: "Barnbougle Dunes" , country: "Australia", city: "Bridport", distance: 6148, par: 71 },
    {id: 17 ,coursename: "Royal Birkdale G.C" , country: "England", city: "Southport", distance: 6543, par: 70 },
    {id: 18 ,coursename: "Ballybunion G.C (OLD)" , country: "Ireland", city: "Ballybunion", distance: 6219, par: 71 },
    {id: 19 ,coursename: "Royal Melbourne G.C (EAST)" , country: "Australia", city: "Black Rock", distance: 6015, par: 71 },
    {id: 20 ,coursename: "Casa De Campo (Teeth of the dog)" , country: "Dominican Republic", city: "La Romana", distance: 6831, par: 72 },
    {id: 21 ,coursename: "Cape kidnappers G.C" , country: "New Zealand", city: "Hawkes Bay", distance: 6531, par: 71 },
    {id: 22 ,coursename: "National G.C. Of Canada" , country: "Canada", city: "Toronto", distance: 6615, par: 72 },
    {id: 23 ,coursename: "North Berwick G.C" , country: "Scotland", city: "East Lothian", distance: 5905, par: 71 },
    {id: 24 ,coursename: "Carnoustie G. Links" , country: "Scotland", city: "Carnoustie", distance: 6785, par: 71 },
    {id: 25 ,coursename: "Swinley Forest G.C" , country: "England", city: "Ascot", distance: 5527, par: 69 },
    {id: 26 ,coursename: "Kauri Cliffs" , country: "New Zealand", city: "Matauri Bay", distance: 6538, par: 72 },
    {id: 27 ,coursename: "Monte Rei G & C.C" , country: "Portugal", city: "Cacela", distance: 6567, par: 72 },
    {id: 28 ,coursename: "Fancourt" , country: "South Africa", city: "George", distance: 6929, par: 73 },
    {id: 29 ,coursename: "Valderrama G.C" , country: "Spain", city: "Sotogrande", distance: 6391 , par: 71 },
    {id: 30 ,coursename: "Royal st.Georges G.C" , country: "England", city: "Sandwich", distance: 6587, par: 70 },
    {id: 31 ,coursename: "The Club At Nine Bridges" , country: "South Korea", city: "Jeju Island", distance: 6580 , par: 72 },
    {id: 32 ,coursename: "St.George's G. And C.C" , country: "Canada", city: "Toronto", distance: 6413, par: 71 },
    {id: 33 ,coursename: "Mid Ocean Club" , country: "Bermuda", city: "Tucker's Town", distance: 5987, par: 71 },
    {id: 34 ,coursename: "Yas Links" , country: "United Arab Emirates", city: "Abu Dhabi", distance: 6779, par: 72 },
    {id: 35 ,coursename: "Narugo G.C" , country: "Japan", city: "Inagawa", distance: 6002, par: 70 },
    {id: 36 ,coursename: "Bro Hof Slott G.C (Stadium)" , country: "Sweden", city: "Bro", distance: 7265, par: 72 },
    {id: 37 ,coursename: "Barnbougle Lost Farm" , country: "Australia", city: "Birdport", distance: 6262, par: 72 },
    {id: 38 ,coursename: "Shanqin Bay G.C" , country: "China", city: "Hainan Island", distance: 6303, par: 71 },
    {id: 39 ,coursename: "Cabot Links" , country: "Canada", city: "Inverness", distance: 6267, par: 70 },
    {id: 40 ,coursename: "Utrecht Golfclub de Pan" , country: "Netherlands", city: "Utrecht", distance: 6097, par: 72 },
    {id: 41 ,coursename: "Lahinch G.C (OLD)" , country: "Ireland", city: "Lahinch", distance: 6355, par: 72 },
    {id: 42 ,coursename: "Kawana Hotel G.C (FUJI)" , country: "Japan", city: "Shizuoka", distance: 6118, par: 72 },
    {id: 43 ,coursename: "Sunningdale G.C (NEw)" , country: "England", city: "Sunningdale", distance: 6152, par: 70 },
    {id: 44 ,coursename: "Lofoten Links" , country: "Norway", city: "Gimsoyand", distance: 6114, par: 71 },
    {id: 45 ,coursename: "Royal Porthcawl G.C" , country: "Wales", city: "Porthcawl", distance: 6460, par: 72 },
    {id: 46 ,coursename: "Kingsbarns G. Links" , country: "Scotland", city: "St.Andrews", distance: 6605, par: 72 },
    {id: 47 ,coursename: "Leopard Creek C.C" , country: "South Africa", city: "Malelane", distance: 6664, par: 72 },
    {id: 48 ,coursename: "Royal Lytham & St.Annes G.C" , country: "England", city: "Lytham St.Annes", distance: 6508, par: 70 },
    {id: 49 ,coursename: "Punta Espada G.C" , country: "Dominican Republic", city: "Cap Cana", distance: 6762, par: 72 },
    {id: 50 ,coursename: "Diamante D.C. (Dunes)" , country: "Mexico", city: "Cabo San Lucas", distance: 6547, par: 72 }
]}



app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/courses", (req,res) => {
    res.send(golfcourses.allgolfcourses)
    
})

app.get("/course/:id",(req,res)=> {
    if(req.params.id > 0 && req.params.id <= golfcourses.allgolfcourses.length){
        
        return res.send(golfcourses.allgolfcourses[req.params.id - 1])
    }else{
        return res.status(404).send("Id not found!")
    }
})

app.get("/addNewGolfCourse", (req,res)=> {
    res.sendFile(__dirname + "/addGolfCourse.html")
    
})

app.post("/addNewGolfCourse", (req,res) => {
    

    var newCoursename = req.body.CourseName;
    var newCountry = req.body.Country;
    var newCity = req.body.City;
    var newDistance = req.body.Distance;
    var newPar = req.body.Par;


    golfcourses.allgolfcourses.push(
        {id: 0,
        coursename: newCoursename,
        country: newCountry, 
        city: newCity, 
        distance: newDistance, 
        par: newPar})
    setNewId();


    res.send("A new Course has been added!")
})

app.delete("/deletecourse/:id", (req,res) => {

    if(req.params.id > 0 && req.params.id <= golfcourses.allgolfcourses.length){
        golfcourses.allgolfcourses.splice(req.params.id - 1, 1)
        setNewId()
        return res.send()
    }else{
        return res.status(404).send("Id not found!")
    }

})
    

function setNewId(){
    for(i = 0; i < golfcourses.allgolfcourses.length; i++){
        golfcourses.allgolfcourses[i].id = i + 1;
    }
}

app.listen(PORT, () => {
    console.log("Listening to " + PORT)
})