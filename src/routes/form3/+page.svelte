<script lang="ts">
	import { goto } from '$app/navigation';
	import PopupDeactivate from '$lib/components/popupDeactivate.svelte';

	let contacts: {
		email: string;
		name: string;
		phone: string;
		ssn: string;
		dob: string;
	}[] = [];
	let isAddingContact = false;

	let email = '';
	let name = '';
	let phone = '';
	let ssn = '';
	let dob = '';

	function addContact() {
		contacts = [...contacts, { email, name, phone, ssn, dob }];
		isAddingContact = false;
	}
</script>

<div class="mt-20 flex flex-col gap-4">
	<h1 class="text-center text-4xl">Emergency Contacts</h1>

	{#each contacts as contact}
		<div class="flex flex-col gap-2 rounded-sm border-2 border-red-500 bg-slate-500 p-2 text-white">
			<span class="text-center text-xl">{contact.name}</span>
			<span class="text-md text-center">{contact.email}</span>
			<span class="text-center text-sm">{contact.phone}</span>
			<span class="text-center text-sm">{contact.ssn}</span>
		</div>
	{/each}
	<button
		class="rounded-sm border-2 border-red-500 p-2 font-mono text-white"
		onclick={() => {
			isAddingContact = true;
		}}
	>
		+ Add Contact
	</button>
	{#if isAddingContact}
		<div class="mt-4 flex flex-col gap-4">
			<label for="name" class="-my-4 font-mono text-lg">Name</label>
			<input
				type="text"
				name="name"
				class="mb-4 rounded-sm border-2 border-red-500 p-2"
				placeholder="Name"
				bind:value={name}
			/>
			<label for="email" class="-mb-4 font-mono text-lg">Email</label>
			<input
				type="email"
				name="email"
				class="rounded-sm border-2 border-red-500 p-2"
				placeholder="Email"
				bind:value={email}
			/>

			<label for="phone" class="-my-4 font-mono text-lg">Phone</label>
			<input
				type="text"
				name="phone"
				class="mb-4 rounded-sm border-2 border-red-500 p-2"
				placeholder="Phone"
				bind:value={phone}
			/>

			<label for="ssn" class="-my-4 font-mono text-lg">SSN</label>
			<input
				type="text"
				name="ssn"
				class="mb-4 rounded-sm border-2 border-red-500 p-2"
				placeholder="SSN"
				bind:value={ssn}
			/>

			<label for="dob" class="-my-4 font-mono text-lg">DOB</label>
			<input
				type="date"
				name="dob"
				class="mb-4 rounded-sm border-2 border-red-500 p-2"
				placeholder="DOB"
				bind:value={dob}
			/>
			<button
				class="rounded-sm border-2 border-red-500 p-2 font-mono text-white"
				onclick={addContact}>Save</button
			>
		</div>
	{/if}

	<div class="mt-10 flex w-full flex-row gap-4">
		<a
			class="rounded-sm border-2 border-red-500 bg-red-500 p-2 text-center font-mono text-white"
			href="/loading?path=/">Cancel</a
		>
		<button
			class="rounded-sm border-2 border-red-500 p-2 text-center font-mono text-white disabled:opacity-50"
			onclick={() => goto('/loading?path=/form3')}
			disabled={contacts.length === 0}>Next</button
		>
	</div>
</div>

<PopupDeactivate />
