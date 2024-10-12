<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import PopupAd from '$lib/components/popupAd.svelte';
	import { onMount } from 'svelte';

	let pageOption: number;
	onMount(() => {
		pageOption = Math.floor(Math.random() * 2);
		setTimeout(() => {
			const qp = $page?.url?.searchParams?.get('path');
			if (!qp) {
				goto('/');
			} else {
				goto(qp);
			}
		}, 6000);
	});
</script>

<div class="container mx-auto max-w-xl pt-10 text-red-500">
	{#if pageOption === 0}
		<div>
			<h1 class="mb-2 text-center text-4xl">🔥🥵🔥🥵🔥🥵🔥</h1>
			<a href="https://www.youtube.com/watch?v=YkyhvCdJ_vM">
				<img
					src="https://i.makeagif.com/media/9-20-2015/Y7xEE1.gif"
					alt="fire-burning"
					class="w-full"
				/>
				<h1 class="text-3xl italic">
					"Somebody call 9-1-1 Shawty fire burning on the dance floor, whoa"
				</h1>
				<h3>- Sean Kingston</h3>
			</a>
		</div>
	{:else if pageOption === 1}
		<div class="container mx-auto max-w-xl pt-10 text-red-500">
			<h1 class="mb-2 text-center text-4xl">♨️❤️‍🔥♨️❤️‍🔥♨️❤️‍🔥♨️</h1>
			<img
				src="https://i.makeagif.com/media/12-23-2017/cPIVpp.gif"
				alt="fire-burning"
				class="w-full"
			/>
			<h1 class="text-3xl italic">"I fell in to a burnin' ring of fire"</h1>
			<h3>- Johnny Cash</h3>
		</div>
	{/if}
	<div class="align-center mt-20 flex justify-center text-4xl">
		<h3 class="animate-spin text-center font-mono">Loading...</h3>
	</div>
</div>
<PopupAd />
