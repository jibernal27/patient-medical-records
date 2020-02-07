const headers = ['SL', 'Date', 'Diagnosis', 'Weight', 'Doctor']

function displayPatient(response){
    let data = response.data

    if (data.length>0){
        let record = data[0]
        $('#patient-name').html(record.userName)
        $('#patient-dob').html(`DOB:${record.userDob}`)
        $('#patient-height').html(`Height: ${record.meta.height}`)

        $("#table-body tr").remove();
        data.array.forEach(element => {
            $("#table-body").append(
                `
                <tr>
                    <td>${}</td>
                    <td>${}</td>
                    <td>${ecord.meta.weight}</td>
                    <td>${}</td>
                    
                </tr>
                `
            )
        });
    }
    
    let view = $('#profile-view')
    view.show()
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
