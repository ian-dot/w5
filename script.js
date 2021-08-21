// Today's date in the following format: Jan 1st, 1999
var timer = setInterval(function(){
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));
    
},1000);
// const today = moment();

const now = moment().format('HH')+':00'
console.log(now)



var colLength = ['', '-9', '']
var colColors = ['', 'bg-success','bg-primary']
var dayHours = ['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00']


// Loop for row creation
for (let j =0; j<dayHours.length; j++){
    var rowEl = $('<div>')
    rowEl.addClass('row')    
    $('.container').append(rowEl)

    // Loop for col creation 
    for(let i =0; i<3; i++){
        if (i===1){
            var colEl = $('<input>')
            // TODO Add atribute of id
            colEl.attr('id',dayHours[j])
            // TODO Add attr of placeholder
            colEl.attr('placeholder', 'New Event')
            colEl.attr('style', 'border: dashed 1px purple;border-radius: 5px;color: white;')
            colEl.addClass(('col')+colLength[i])
            
            
        } else if( i===2){
            var colEl = $('<button>')
            colEl.attr('class','save')
            colEl.attr('style', 'border: none;color: white;border-radius: 5px;')
            colEl.addClass(('col')+colLength[i])
            colEl.text("💾 Save Event")

        }
        else{

            var colEl = $('<div>')
            colEl.addClass(('col')+colLength[i])
            colEl.addClass('col')
        }
        
        
        // Validation for column of the hour
        if(i===0){
            colEl.addClass(('col')+colLength[i])            
            var colEl2 = $('<div>')
            colEl2.attr('style','text-align: end;position: relative;top: 1.9rem;')            
            colEl2.text(dayHours[j])
            colEl.append(colEl2)        
            
        } 
        
        // Validation for changing the color in the current hour      
        if(i===1 && dayHours[j]===now){
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
function saveLastEvent() {
    for(let i = 0;i<dayHours.length;i++){

        var newEvent = $('#'+dayHours[i])
        console.log('It is saving data')
        // Save related form data as an object
        var (eventDetails+dayHours[i]) = {
          event: newEvent.value     
        };
        // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
        localStorage.setItem("eventDetails"+dayHours[i], JSON.stringify(eventDetails+dayHours[i]));
    }
}
function renderLastEvent() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastEvent = JSON.parse(localStorage.getItem("eventDetails"));
    // Check if data is returned, if not exit out of the function
    if (lastGrade !== null) {
    newEvent.text(lastEvent.event)
    
    } else {
      return;
    }
  }

var saveButton = $('button')
saveButton.on('click', saveLastEvent);

