import { ref } from 'vue';

const getCategories = () => {
	const endpoint = `${process.env.VUE_APP_API_URL}/api/v1/categories`;
	console.log(process.env.VUE_APP_API_URL);
	const categories = ref([]);
	const error = ref(null);

	const load = async () => {
		try {
			let data = await fetch(endpoint);
			if ( !data.ok ) {
				throw Error('no categories available');
			}
			categories.value = await data.json();
		} catch (err) {
			error.value = err;
			console.error(error.value);
		}
	}

	return { categories, error, load };
}

export default getCategories;