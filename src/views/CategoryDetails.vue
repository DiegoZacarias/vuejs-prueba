<template>
	<div>
		Categoryid = {{ id }}	
	</div>
</template>
<script>
export default {
	props: ['id'],
	setup(props) {
		const id = props.id;

		return {
			id
		}
	}
}
</script>
