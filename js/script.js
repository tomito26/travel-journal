//business logic
function Place(location,landMarks,timeOfTheYear,notes){
    this.location = location;
    this.landMarks = landMarks;
    this.timeOfTheYear = timeOfTheYear;
    this.notes = notes;

}

let maasaiMara = new Place("Rift valley in SouthWestern Kenya","Along mara river","26 Jan 2014","Maasai Mara is famous for the wild beast migration.")
let dianiBeach = new Place(
  "South of Mombasa,Kwale county",
  "Stretching along Kenya's Indian ocean",
  "18th jan 2019",
  "Lovely beach,white sands with clear warm water and lots of palms along the beach ,plenty of bars, restaurant, stayed in the maji hotel, very friendly staffs,highly recommend copacabana beach bar opposite the maji hotel.nice view with friendly staffs too.thanks manuu and Star for the transfers with some tours, I also recommend all visitors to diani to whatsaap this amazing local guides for better deals"
);
let dubai = new Place(
  "United Arab Emirates",
  "Burja khalifa building the tallest manmade structure",
  "7 June 2015",
  "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks"
);
let switzerLand = new Place("")

console.log(maasaiMara)
console.log(dianiBeach)
console.log()
