<template>
	<div class="w-full h-32 bg-blue-200 hover:bg-red-300">
		<div class="w-full h-full flex justify-between">
			<div class="h-full flex flex-col items-start px-10 justify-around">
				<p class="text-3xl">
					Name: {{ category.name }}
				</p>	
				<p class="text-2xl">
					Image: 
					<a :href="category.image" target="_blan">
					{{ category.image }}</a>
				</p>

				<router-link :to="{ name: 'CategoryDetails', params: { id: category.id } }">
					see the products
				</router-link>
			</div>
			<div class="h-full flex flex-col items-start px-10 justify-around">
				<router-link :to="{ name: 'EditCategory', params: { id: category.id } }">
					Editar
				</router-link>
				<button @click="deleteCategory()">
					Eliminar
				</button>
			</div>
		</div>
	</div>
</template>
<script>
// import axios 
import axios from 'axios'
import { useRouter } from 'vue-router';
export default {
	props: ['category'],
	setup(props) {
		const category = props.category;
		const router = useRouter()

		const deleteCategory = () => {
			if(confirm(`Desea eliminar la categoria ${category.name}?`)) {

				axios.delete(`${process.env.VUE_APP_API_URL}/api/v1/categories/${category.id}`)
					.then(res => {
						alert('Categoria eliminada');
						router.go();
					})
					.catch(err => {
						console.log(err);
						alert('No se pudo eliminar la categoria')
					})

			}
		}

		return {
			category,
			deleteCategory
		}
	}
}
</script>
