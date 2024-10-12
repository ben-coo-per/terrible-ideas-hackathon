<script lang="ts">
	import { goto } from '$app/navigation';
	import PopupAd from '$lib/components/popupAd.svelte';

	let email: string;
	let password: string;
	let passwordConfirm: string;
</script>

<h1 class="text-right font-mono text-4xl font-bold">Let's extinguish this fire!</h1>
<h3 class="font-mono">You first have to set up your account.</h3>

<div class="mt-4 flex flex-col gap-4">
	<label for="email" class="-mb-4 font-mono text-lg">Email</label>
	<input
		type="email"
		name="email"
		bind:value={email}
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="Email"
	/>

	<label for="password" class="-my-4 font-mono text-lg">Password</label>
	<input
		type="password"
		name="password"
		bind:value={password}
		class="mb-4 rounded-sm border-2 border-red-500 p-2"
		placeholder="Password"
	/>
	<div class="h-screen text-center">
		<h1>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓</h1>
		<h1>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓</h1>
		<h1>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓</h1>
		<h1>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓</h1>
		<h1>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓</h1>
		<h1>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓</h1>
		<h1>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓</h1>
		<h1>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓</h1>
	</div>
	<label for="password" class="-my-4 font-mono text-lg">Confirm Password</label>
	<input
		type="password"
		name="passwordConfirm"
		bind:value={passwordConfirm}
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="Confirm Password"
	/>

	<a
		class="rounded-sm border-2 border-red-500 bg-red-500 p-2 text-center font-mono text-white"
		href="/loading?path=/">Cancel</a
	>
	<button
		class="rounded-sm border-2 border-red-500 p-2 font-mono text-white disabled:opacity-50"
		disabled={!email || !password || !passwordConfirm}
		onclick={() => goto('/loading?path=/form2')}>Sign up</button
	>
</div>

<PopupAd></PopupAd>
