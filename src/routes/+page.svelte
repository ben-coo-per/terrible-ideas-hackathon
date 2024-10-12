<script lang="ts">
	import PopupAd from '$lib/components/popupAd.svelte';
</script>

<h1 class="text-right font-mono text-4xl font-bold">Let's extinguish this fire!</h1>
<h3 class="font-mono">You first have to set up your account.</h3>

<form class="mt-4 flex flex-col gap-4" method="POST">
	<label for="email" class="-mb-4 font-mono text-lg">Email</label>
	<input
		type="email"
		name="email"
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="Email"
	/>

	<label for="password" class="-my-4 font-mono text-lg">Password</label>
	<input
		type="password"
		name="password"
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
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="Confirm Password"
	/>

	<a
		class="rounded-sm border-2 border-red-500 bg-red-500 p-2 text-center font-mono text-white"
		href="/loading?path=/">Cancel</a
	>
	<button class="rounded-sm border-2 border-red-500 p-2 font-mono text-white" type="submit"
		>Sign up</button
	>
</form>

<PopupAd></PopupAd>
