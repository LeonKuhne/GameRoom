URL = "https://todo.org"

new Vue({
	el: '#app',
	data: () => ({
		user: "Leon",
		choices: ["first choice", "second choice"]
	}),
	methods: {
		submit: (game) => {
			// choose this game
			fetch(URL, {
				method: "post",
				body: {
					user: this.user,
					choices: this.choices,
					game: this.game
				}
			}, (res) => {
				console.log(res)	
			})
		}
	}
})


