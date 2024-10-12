<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let popup: HTMLElement;
	let isOpen = false;

	onMount(() => {
		setTimeout(() => {
			openPopup();
		}, 2000);

		document.addEventListener('click', (e) => {
			if (popup && !popup.contains(e.target as Node)) {
				isOpen = false;
			}
		});
	});

	function openPopup() {
		isOpen = true;
	}

	function closePopup() {
		isOpen = false;
	}
</script>

{#if isOpen}
	<div
		class=" fixed inset-0 z-50 flex items-end justify-center px-4 py-6 sm:items-start sm:justify-end sm:p-6"
	>
		<div
			class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-headline"
		>
			<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
					<div
						class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
					>
						<!-- Heroicon name: outline/exclamation -->
						<svg
							class="h-6 w-6 text-red-600"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
					</div>
					<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
						<h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
							Deactivate account
						</h3>
						<div class="mt-2">
							<p class="text-sm text-gray-500">
								Are you sure you want to deactivate your account? All of your data will be
								permanently removed. This action cannot be undone.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button
					type="button"
					class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
					on:click={closePopup}
				>
					Cancel
				</button>
				<button
					type="button"
					class="mt-4 inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
					on:click={() => goto('/loading?path=/')}
				>
					Deactivate
				</button>
			</div>
		</div>
	</div>
{/if}
