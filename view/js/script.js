const headers = ['SL', 'Date', 'Diagnosis', 'Weight', 'Doctor']

function displayPatient(response){
    console.log(response)
}


$(document).ready(() => {
  $('#fetch-records').submit(e => {
    e.preventDefault()
    let patient = $('#patient-select')
    let loader = $('#loader-view')
    if(patient.val() !== null){
        loader.show()
        $.ajax({
            type:'GET',
            url: 'https://jsonmock.hackerrank.com/api/medical_records',
            data: {
                userId: patient.val()
            },
            success : (response) =>{
                displayPatient(response)
                loader.hide()
            },
            error : (err) => {
                loader.hide()
            }
        })
    }

  })
})
