$(document).ready(() => {

	let database = firebase.database();

	function Employee(name, role, date, rate){
		this.name = name;
		this.role = role;
		this.date = date;
		this.rate = rate;
	}

	database.ref("employees/").on("value", function(snapshot){
		let data = snapshot.val();

		if(!data){
			data = [];
		}

		$("#content-table").empty();
		data.forEach((value, index) => {
			let employee = $("<tr>");
			let num = $("<th>").attr("scope", "row").text(value.num + 1);
			let name = $("<td>").text(value.name);
			let role = $("<td>").text(value.row);
			// let date = $("<td>").text(value.date);
			let rate = $("<td>").text(value.rate);
			let number = $("td")

			employee
				.append(num)
				.append(name)
				.append(role)
				// .append(date)
				// .append(monthsWorked)
				.append(rate);

			$("tbody").append(employee);
		})

		$("#input-form").off("submit").on("submit", function(e){
			e.preventDefault();
			console.log($("#role-input").val().trim());
			data.push(
				new Employee(
					$("#name-input").val().trim(),
					$("#role-input").val().trim(),
					$("#date-input").val().trim(),
					$("#rate-input").val().trim()
				));

			database.ref("employees/").set(data);
		})
	})
});