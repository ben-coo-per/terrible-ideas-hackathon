<script lang="ts">
	import PopupAd from '$lib/components/popupAd.svelte';
	import { getPBClient } from '$lib/utils/pb.js';
	import { onMount } from 'svelte';

	let codeString: string;

	function createCode() {
		// randomly generate a 4 digit code that only uses the number 0, 1, 2, and 3
		const [dig1, dig2, dig3, dig4] = [0, 1, 2, 3].map((x) => Math.floor(Math.random() * 4));
		return `${dig1}${dig2}${dig3}${dig4}`;
	}

	onMount(async () => {
		const pb = await getPBClient();
		// randomly generate a 4 digit code
		const codeStringToSend = createCode();

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
			<div class="flex w-full flex-row justify-center gap-2 text-black">
				{#each codeString?.split('') as codeCharacter}
					{#if codeCharacter === '0'}
						<div
							class="h-16 rounded-lg bg-yellow-400 p-4 px-8 text-center font-mono text-4xl"
						></div>
					{:else if codeCharacter === '1'}
						<div class="rounded-lg bg-green-400 p-4 px-8 text-center font-mono text-4xl"></div>
					{:else if codeCharacter === '2'}
						<div class="rounded-lg bg-blue-400 p-4 px-8 text-center font-mono text-4xl"></div>
					{:else if codeCharacter === '3'}
						<div class="rounded-lg bg-red-400 p-4 px-8 text-center font-mono text-4xl"></div>
					{/if}
				{/each}
			</div>
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>

<PopupAd />
