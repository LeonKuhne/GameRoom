URL = "https://me2h5lz01i.execute-api.us-east-1.amazonaws.com/dev"
endpoint = {
	joinRoom: URL + "/room",
	choice: URL + "/choice"
}

window.onload = () => {
	// CHOICES
	Vue.component({
		props: {
			choices: []
		},
		methods: {
			submit: (game) => {
				fetch(endpoint.choice, {
					method: "post",
					body: {
						user: this.user,
						game: this.game
					}
				}, (res) => {
					this.choices = res.choices
				})
			}
		}
	})

	// APP
	new Vue({
		el: '#app',
		data: () => ({
			state: "setup",
			enteredName: "",
			enteredRoom: "",
			user: "",
			room: "",
			choices: []
		}),
		methods: {
			joinRoom: (user, room) => {
				fetch(endpoint.joinRoom, {
					method: "post",
					body: { user, room }
				}, (res) => {
					this.room = room
					this.choices = res.choices
				})
			}
		}
	})

}
