<script lang="ts">
	import PopupAd from '$lib/components/popupAd.svelte';

	export let data;
	let codeCharacters: string[] = data?.codeString?.split('') ?? [];
</script>

<div class="container mx-auto max-w-xl pt-10 text-red-500">
	<h1 class="text-center font-mono text-4xl font-bold">Congratulations!</h1>
	<h3 class="text-center text-2xl">You're all set up!</h3>
	<h3 class="text-center text-xl">You can now start using the fire extinguisher.</h3>

	<div class="mt-10 flex w-full flex-col gap-4 text-center">
		<p>Type in the code below to get started.</p>
		<div class="flex w-full flex-row justify-center gap-2">
			{#each codeCharacters as codeCharacter}
				<span class="rounded-lg bg-slate-800 p-4 px-8 text-center font-mono text-4xl"
					>{codeCharacter}</span
				>
			{/each}
		</div>
	</div>
</div>

<PopupAd />
