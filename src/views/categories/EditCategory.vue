<template>
	<div class="mx-32">
		<h2>Editar categoria: {{ id }}</h2>
		<div class="flex flex-col items-start">
			<div class="w-full flex flex-col justify-center items-start"> 
				<label for="name" class="p-2">Nombre: </label>
				<input type="text" v-model="name" class="bg-blue-100 w-6/12 h-10 p-2">	
				<span v-if="error" class="text-red-500">{{error}}</span>
			</div>

			<button @click="updateCategoria(1)" class="bg-green-500 text-white h-10 mt-4 text-2xl hover:bg-green-600 p-2">
				Actualizar categoria
			</button>
		</div>
	</div>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
	props: ['id'],
	setup(props) {
		const id = props.id;
		const name = ref('');
		const error = ref('');
		const router = useRouter();

		const updateCategoria = (id) => {
			axios.patch(`${process.env.VUE_APP_API_URL}/api/v1/categories/${id}`, {
				name: name.value
			}).then(response => {
				error.value = "";
				console.log(response.data);
				alert('Categoria actualizada correctamente.');
			}).catch(e => {
				error.value = e.response.data.message;
				console.log(error.value);
			}).finally(() => {
				console.log('finally');
				router.go(-1);
			});
		}

		return {
			id,
			name,
			updateCategoria,
			error
		}
	},
}
</script>