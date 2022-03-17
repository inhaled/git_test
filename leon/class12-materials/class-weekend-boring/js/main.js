document.querySelector('#check').addEventListener('click', check)

function check() {

  const weekDay = document.querySelector('#day').value
  const day = weekDay.toLowerCase();
  //Conditionals go here

if (day === 'tuesday' || day === 'thursday'){
  alert('class day')
}
else if(day === 'saturday' || day === 'sunday')
  alert('weekend!')
else {
  alert('BORRRRRRINNNNNGGGGG')
}
}