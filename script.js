URL = "https://me2h5lz01i.execute-api.us-east-1.amazonaws.com/dev",
api = (endpoint, body, callback, method) => {
	req = new XMLHttpRequest()
	req.open(method, self.URL+"/"+endpoint)
	req.responseType = 'json';
	req.onload = callback
	req.send(body)
}

window.onload = () => {
	// CHOICES
	Vue.component({
		props: {
			choices: []
		},
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
				api("room", { user, room }, (res) => {
					this.room = room
					this.choices = nextChoice()
				}, "post")
				
			},
			makeChoice: (game) => {
				// submit your choice
				api("choose", {user: this.user, game: game}, (res) => {
					// get next choices
					this.choices = res.choices
				}, "post")
			}
		}
	})

}
