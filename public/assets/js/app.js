$(document).ready(() => {

	let database = firebase.Database();

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



		$("#employee-table").empty();
		let employee = $("<tr>")
			.append()

		$("form").off("submit").on("submit", function(e){
			e.preventDefault();


		})
	})
});