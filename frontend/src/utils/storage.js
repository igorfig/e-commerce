class Storage {
	get(key) {
		return JSON.parse(localStorage.getItem(key)) || [];
	}

	set(key, data) {
		data && localStorage.setItem(key, JSON.stringify(data));	
	}
}

const instance = new Storage();

export default instance;