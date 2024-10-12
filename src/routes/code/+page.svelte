<script lang="ts">
	import PopupAd from '$lib/components/popupAd.svelte';
	import { getPBClient } from '$lib/utils/pb.js';
	import { onMount } from 'svelte';

	let codeString: string;

	onMount(async () => {
		const pb = await getPBClient();
		// randomly generate a 4 digit code
		const codeStringToSend = Math.floor(Math.random() * 10000).toString();

		try {
			// save the code to the database
			await pb.collection('codes').create({
				code: codeStringToSend
			});
			console.log('saved code:  ', codeString);
			codeString = codeStringToSend;
		} catch (e) {
			console.log('error', e);
		}
	});
</script>

<div class="container mx-auto max-w-xl pt-10 text-red-500">
	<h1 class="text-center font-mono text-4xl font-bold">Congratulations!</h1>
	<h3 class="text-center text-2xl">You're all set up!</h3>
	<h3 class="text-center text-xl">You can now start using the fire extinguisher.</h3>

	<div class="mt-10 flex w-full flex-col gap-4 text-center">
		{#if codeString}
			<p>Type in the code below to get started.</p>
			<div class="flex w-full flex-row justify-center gap-2">
				{#each codeString?.split('') as codeCharacter}
					<span class="rounded-lg bg-slate-800 p-4 px-8 text-center font-mono text-4xl"
						>{codeCharacter}</span
					>
				{/each}
			</div>
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>

<PopupAd />
