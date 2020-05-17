$(document).ready(function () {
    
    $("#button").on("click", function () {
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let idNumber = $("#idNumber").val();
        let jobTitle = $("#jobTitle").val();
        let annualSalary = $("#annualSalary").val();
       

        $("#resultTable").append(
            "<tr>" +
            "<td>" + firstName + "</td>" +
            "<td>" + lastName + "</td>" +
            "<td>" + idNumber + "</td>" +
            "<td>" + jobTitle + "</td>" +
            "<td>" + annualSalary + "</td>" +
            "</tr>"
        );
       
        let newEmpMonthExp = annualSalary / 12;
        let previousMonthExp = $("#monthExp").text();
        let totalMonthExp = parseFloat(previousMonthExp) + newEmpMonthExp;
        $("#monthExp").text(totalMonthExp);
    });




});





