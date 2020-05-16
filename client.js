$(document).ready(function () {
    $('#submitButton').on('click', function () {
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let idNumber = $('#idNumber').val();
        let jobTitle = $('#jobTitle').val();
        let annualSalary = $('#annualSalary').val();

        $('#employeeTable').append('<tr>' +
            '<td>' + firstName + '</td>' +
            '<td>' + lastName + '</td>' +
            '<td>' + idNumber + '</td>' +
            '<td>' + jobTitle + '</td>' +
            '<td>' + annualSalary + '</td>' +
            '</tr>');

        let monthlySalaryExpenditures = annualSalary / 12;
        let previousSalaryTotal = $('#monthlyExpenses').text();
        let totalMonthlyExpenses = parseFloat(previousSalaryTotal) + monthlySalaryExpenditures;
        $('#monthlyExpenses').text(totalMonthlyExpenses);

        $('input').val('');
    });
});




