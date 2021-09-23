// Today's date in the following format: Jan 1st, 1999, 12:00:00 am
var timer = setInterval(function(){
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));
    
},1000);


const now = moment().format('HH')+':00'
console.log(now)



var colLength = ['', '-9', '']
var colColors = ['', 'bg-success','bg-primary']
var dayHours = ['9','10','11','12','13','14','15','16','17','18']
var inputs = document.getElementById("my-form").elements;
var inputByIndex = inputs[0];
var inputEvent9 = inputs["Event9"];

// Loop for row creation
for (let j =0; j<dayHours.length; j++){
    var rowEl = $('<div>')
    rowEl.addClass('row')    
    $('#my-form').append(rowEl)

    // Loop for col creation 
    for(let i =0; i<3; i++){
        if (i===1){
            var colEl = $('<input>')
            // TODO Add atribute of id
            colEl.attr('id',dayHours[j])
            colEl.attr('type','text')
            colEl.attr('name','Event'+dayHours[j]);
            // TODO Add attr of placeholder
            colEl.attr('placeholder', 'New Event')
            colEl.attr('style', 'border: dashed 1px purple;border-radius: 5px;color: white;')
            colEl.addClass(('col')+colLength[i])
            
            
        } else if( i===2){
            var colEl = $('<button>')
            colEl.attr('class','save')
            colEl.attr('type','submit')
            colEl.attr('style', 'border: none;color: white;border-radius: 5px;')
            colEl.addClass(('col')+colLength[i])
            colEl.text("💾 Save Event")

        }
        else{

            var colEl = $('<div>')
            colEl.addClass(('col')+colLength[i])
            colEl.addClass('col')
        }
        
        
        // Validation for the column of the hour
        if(i===0){
            colEl.addClass(('col')+colLength[i])            
            var colEl2 = $('<div>')
            colEl2.attr('style','text-align: end;position: relative;top: 1.9rem;')            
            colEl2.text(dayHours[j]+':00')
            colEl.append(colEl2)        
            
        } 
        
        // Validation for changing the color in the current hour      
        if(i===1 && dayHours[j]+':00'===now){
            colEl.addClass('bg-warning')
            colEl.text("Current Hour")
            // colEl.addId('now')

        } 
        // Conditional for adding color to the rest of the columns
        else {

            colEl.addClass(colColors[i])
        }

    
        rowEl.append(colEl)        
    
    }
}
function saveLastEvent(event) {
    var eventDetails = [];
    // The loop is to iterate this function through out all the rows
    for(let i = 0;i<dayHours.length;i++){

        event.preventDefault();
        // console.log('It is saving data');
        eventDetails.push(inputs[i].value);
        
        // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    }
    localStorage.setItem("eventDetails", JSON.stringify(eventDetails));
    console.log(eventDetails);
}
function renderLastEvent() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastEvent = JSON.parse(localStorage.getItem("eventDetails"));
    console.log(lastEvent);
    // Check if data is returned, if not exit out of the function
    if (lastEvent !== null) {
        for (let i =0; i<dayHours.length;i++){
            inputs[i].value=lastEvent[i];
        }
    
    
    } else {
      return;
    }
  }

var saveButton = $('button')
saveButton.on('click', saveLastEvent);
renderLastEvent();
