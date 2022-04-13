import { ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'

const updateCategory = () => {
	const endpoint = `${process.env.VUE_APP_API_URL}/api/v1/categories/`;
	const error = ref(null);
	const router = useRouter();

	const update = (id, name) => {
		axios.patch(endpoint + id, {
			name: name
		}).then(response => {
			error.value = "";
			alert('Categoria actualizada correctamente.');
			router.go(-1);
		}).catch(e => {
			error.value = e.response.data.message;
		}).finally(() => {
			// router.go(-1);
		});
	}

	return { error, update };
}

export default updateCategory;