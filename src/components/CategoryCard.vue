<template>
	<div class="w-full h-32 bg-blue-200 hover:bg-red-300">
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
