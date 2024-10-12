<script lang="ts">
	import PopupAd from '$lib/components/popupAd.svelte';
</script>

<form class="mt-4 flex flex-col gap-4">
	<label for="birthday" class="-mb-4 font-mono text-lg">Birthday</label>
	<input
		type="date"
		id="birthday"
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="Birthday"
		required
	/>
	<label for="address" class="-mt-4 font-mono text-lg">Address</label>
	<input
		type="text"
		id="address"
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="Address"
		required
		maxlength="100"
		minlength="5"
		title="Please enter a valid address"
		autocomplete="off"
		autocorrect="off"
		autocapitalize="off"
		spellcheck="false"
	/>
	<label for="city" class="-mt-4 font-mono text-lg">City</label>
	<input
		type="text"
		id="city"
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="City"
		required
		maxlength="100"
		minlength="5"
		title="Please enter a valid city"
	/>
	<label for="state" class="-mt-4 font-mono text-lg">State</label>
	<input
		type="text"
		id="state"
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="State"
		required
		maxlength="100"
		minlength="5"
		title="Please enter a valid state"
	/>
	<label for="zip" class="-mt-4 font-mono text-lg">Postal Code</label>
	<input
		type="text"
		id="zip"
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="Postal Code"
		required
		maxlength="100"
		minlength="5"
		title="Please enter a valid zip"
	/>
	<label for="phone" class="-mt-4 font-mono text-lg">Phone</label>
	<input
		type="text"
		id="phone"
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="Phone"
		required
		maxlength="100"
		minlength="5"
		title="Please enter a valid phone number"
	/>
	<label for="dob" class="-mt-4 font-mono text-lg">Birthday Confirmation</label>
	<input
		type="date"
		id="dob"
		class="rounded-sm border-2 border-red-500 p-2"
		placeholder="DOB"
		required
	/>

	<a
		class="rounded-sm border-2 border-red-500 bg-red-500 p-2 text-center font-mono text-white"
		href="/loading?path=/">Cancel</a
	>
	<a
		class="rounded-sm border-2 border-red-500 p-2 text-center font-mono text-white"
		href="/loading?path=/form3">Next</a
	>
</form>

<PopupAd />
