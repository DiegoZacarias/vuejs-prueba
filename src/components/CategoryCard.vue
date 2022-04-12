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
				<button>
					Eliminar
				</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['category'],
	setup(props) {
		const category = props.category;

		return {
			category
		}
	}
}
</script>
