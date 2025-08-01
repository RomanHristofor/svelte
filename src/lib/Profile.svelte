<script>
	export let formData;
	export let next;
	export let back;

	let showErrors = false;
	let errors = {};

	function validate() {
		const e = {};
		if (!formData.name.trim()) {
			e.name = 'Name is required';
		}
		if (!formData.age || !String(formData.age).trim()) {
			e.age = 'Age is required';
		} else if (formData.age > 100) {
			e.age = 'Please enter a valid age (0-99)'
		}

		return e;
	}

	const handleNext = () => {
		showErrors = true;
		errors = validate();
		if (!errors.name && !errors.age) {
			next();
		}
	};
</script>

<fieldset>
	<legend>Profile</legend>

	<label
		>Name:
		<input type="text" bind:value={formData.name} />
		{#if showErrors && errors.name}
			<p class="error">{errors.name}</p>
		{/if}
	</label>

	<label
		>Age:
		<input type="number" bind:value={formData.age} />
		{#if showErrors && errors.age}
			<p class="error">{errors.age}</p>
		{/if}
	</label>

	<div class="buttons">
		<button class="btn btn-secondary" on:click={back}>Back</button>
		<button class="btn btn-primary" on:click={handleNext}>Next</button>
	</div>
</fieldset>
