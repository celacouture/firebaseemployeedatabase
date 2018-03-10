$(document).ready(() => {

	let database = firebase.Database();

	database.ref("employees/").on("value", function(snapshot){
		let data = snapshot.val();

		if(!data){
			data = [];
		}

		$("#employee-table").empty();
		let employee = $("")

		$("form").off("submit").on("submit", function(e){
			e.preventDefault();

			
		})
	})
});