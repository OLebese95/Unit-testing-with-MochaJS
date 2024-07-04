var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];

var salesData2 = [
    {department : 'electronics', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'electronics', sales : 12006, day : 'Friday'},
    {department : 'electronics', sales : 16109, day : 'Saturday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'steelwork', sales : 1500, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
];

function mostProfitableDepartment(salesData) {
    const departmentSales = {};
  	for (let i = 0; i < salesData.length; i++) {
    let sale = salesData[i];
        if (departmentSales[sale.department]) {
            departmentSales[sale.department] += sale.sales;
        } else {
            departmentSales[sale.department] = sale.sales;
        }
    };

    let maxSales = 0;
    let mostProfitableDept = '';
  	const departments = Object.keys(departmentSales);
  	for(let i = 0; i < departments.length; i++){
      	const department = departments[i];
        if (departmentSales[department] > maxSales) {
            maxSales = departmentSales[department];
            mostProfitableDept = department;
        }
    }
    return mostProfitableDept;
}


function mostProfitableDay(salesData) {
    const daySales = {};
   for (let i = 0; i < salesData.length; i++) {
    let sale = salesData[i];
        if (daySales[sale.day]) {
            daySales[sale.day] += sale.sales;
        } else {
            daySales[sale.day] = sale.sales;
        }
    }

    let maxSales = 0;
    let mostProfitableDay = '';
    for (const day in daySales) {
        if (daySales[day] > maxSales) {
            maxSales = daySales[day];
            mostProfitableDay = day;
        }
    }
    return mostProfitableDay;
}