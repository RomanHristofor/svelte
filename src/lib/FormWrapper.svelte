<script>
	import Login from './Login.svelte';
	import Profile from './Profile.svelte';
	import Confirm from './Confirm.svelte';
	import ProgressBar from './ProgressBar.svelte';
	import { slide } from 'svelte/transition';

	let step = 0;

	let formData = {
		email: '',
		password: '',
		name: '',
		age: ''
	};

	function next() {
		if (step < 2) step++;
	}

	function back() {
		if (step > 0) step--;
	}

	const steps = [
		{ component: Login, key: 'login' },
		{ component: Profile, key: 'profile' },
		{ component: Confirm, key: 'confirm' }
	];
	$: currentStep = steps[step];
</script>

<ProgressBar {step} />

{#key step}
	<div transition:slide>
		<svelte:component this={currentStep.component} {formData} {next} {back} />
	</div>
{/key}
