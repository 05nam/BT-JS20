function EmployeeList() {
	this.employeeList = [];
//! thêm
	this.addNewEmployee = function (newEmployee) {
		this.employeeList.push(newEmployee);
		return this.employeeList;
	};
//! tìm id
	this.findIndex = function (accountToRemove) {
		var position = -1;
		position = this.employeeList.findIndex(function (employee) {
			return accountToRemove == employee.account;
		});

		return position;
	};
//! Xóa
	this.removeEmployee = function (accountToRemove) {
		var position = this.findIndex(accountToRemove);
		if (position != -1) {
			this.employeeList.splice(position, 1);
		}
	};
//! sửa
	this.updateEmployee = function (accountToUpdate) {
		var position = this.findIndex(accountToUpdate.account);
		if (position > -1) {
			listOfEmployee.employeeList[position] = accountToUpdate;
		}
	};
//! tìm
	this.searchEmployee = function (typeToSearch) {
		var result = [];
		var typeSearch = typeToSearch.toLowerCase().replace(/\s/g, '');

		this.employeeList.map(function (employee) {
			var employeeType = employee.type.toLowerCase().replace(/\s/g, '');
			var position = employeeType.indexOf(typeSearch);
			if (position > -1) {
				result.push(employee);
			}
		});
		return result;
	};
}
