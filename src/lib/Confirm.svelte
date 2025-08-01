<script>
	export let formData;
	export let back;

	let submitted = false;
	let errorMessage = '';

	const handleSubmit = async () => {
		try {
			const response = await fetch('https://3c0b9776f1e513a2.mokky.dev/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				const error = await response.text();
				throw new Error(`Error ${response.status}: ${error}`);
			}
			submitted = true;
		} catch (err) {
			errorMessage = err.message || 'Error sending data';
		}
	};
</script>

{#if submitted}
	<p class="success">Thank you! Registration complete.</p>
{:else}
	<fieldset>
		<legend>Confirm</legend>

		<ul>
			{#each Object.entries(formData) as [key, value] (key)}
				<li><strong>{key}</strong>: {value}</li>
			{/each}
		</ul>

		{#if errorMessage}
			<p class="error">{errorMessage}</p>
		{/if}

		<div class="buttons">
			<button class="btn btn-secondary" on:click={back}>Back</button>
			<button class="btn btn-primary" on:click={handleSubmit}>Submit</button>
		</div>
	</fieldset>
{/if}
