<script lang="ts">
	import { onMount } from 'svelte';

	let showPopup = false;
	let adCopyVersion: number; // 0 = insurance ad, 1 = new video streaming service ad, 2 = mobile video game ad

	onMount(() => {
		showAd();
	});

	const showAd = () => {
		adCopyVersion = Math.floor(Math.random() * 5);
		setTimeout(() => {
			showPopup = true;
		}, 2000);
	};

	const closePopup = () => {
		const showAnother = Math.floor(Math.random() * 5);
		if (showAnother === 0) {
			showAd();
		}

		showPopup = false;
	};
</script>

{#if showPopup}
	{#if adCopyVersion === 0}
		<div class="popup-overlay">
			<div class="popup">
				<button class="close-btn" on:click={closePopup}>×</button>
				<h2>Protect Your Home Today!</h2>
				<img src="/Home.webp" alt="home insurance" />
				<p>
					Get the best home insurance coverage starting at just $20/month. Don't wait, secure your
					future now!
				</p>
				<button on:click={closePopup}>Get a Free Quote</button>
			</div>
		</div>
	{:else if adCopyVersion === 1}
		<div class="popup-overlay">
			<div class="popup">
				<button class="close-btn" on:click={closePopup}>×</button>
				<h2>Hubi Video Streaming</h2>
				<img src="/Hubi_Video.webp" alt="video streaming service" />
				<p>
					Stream your favorite shows and movies with our new video streaming service. No more
					buffering, no more ads, and no more waiting for your favorite shows to start. Stream your
					favorite shows and movies with our new video streaming service. No more buffering, no more
					ads, and no more waiting for your favorite shows to start.
				</p>
				<button on:click={closePopup}>Learn More</button>
			</div>
		</div>
	{:else if adCopyVersion === 2}
		<div
			class="fixed inset-0 z-50 overflow-hidden border-4 border-red-600 bg-yellow-400 p-8 text-center font-sans"
		>
			<button class="close-btn" on:click={closePopup}>×</button>
			<h1 class="text-4xl font-bold text-red-600">YOU’RE FALLING BEHIND!</h1>
			<p class="mt-4 text-lg text-gray-800">
				Upgrade NOW to get legendary gear and crush your enemies! 💥💰
			</p>
			<img src="/Game.webp" alt="mobile game" />

			<div class="mx-auto mt-8 max-w-lg rounded-lg border-2 border-red-600 bg-white p-6 shadow-lg">
				<h2 class="mb-4 text-3xl font-bold text-red-600">Exclusive Limited-Time Offer:</h2>
				<p class="text-xl font-bold text-black">Buy 1,000 Gems – Only $4.99!</p>
				<p class="mt-2 text-gray-800">
					Unlock epic rewards, golden weapons, and RARE items – but only if you act FAST! ⏳
				</p>
			</div>

			<div
				class="mx-auto mt-6 max-w-lg rounded-lg border-2 border-yellow-500 bg-white p-4 shadow-lg"
			>
				<h2 class="mb-2 text-2xl font-bold text-red-600">
					Don’t miss out on these POWERFUL upgrades:
				</h2>
				<ul class="list-inside list-disc space-y-2 text-lg text-gray-800">
					<li>🔥 Boost your levels instantly!</li>
					<li>💎 Open exclusive treasure chests!</li>
					<li>⚡ Get faster energy regen!</li>
				</ul>
			</div>

			<button
				class="mt-8 rounded-full bg-red-600 px-6 py-3 text-xl font-bold text-white shadow-lg hover:bg-red-700"
			>
				BUY NOW! 💳
			</button>
		</div>
	{:else if adCopyVersion === 3}
		<div
			class="fixed inset-0 z-50 overflow-hidden border-4 border-red-600 bg-green-400 p-8 text-center font-sans"
		>
			<button class="close-btn" on:click={closePopup}>×</button>
			<h1 class="text-4xl font-bold text-red-600">ONLY ONE MORE WORKOUT TO GO!</h1>
			<img src="/fitness.webp" alt="ad" />
			<p class="mt-4 text-lg text-gray-800">
				Unlock your final fitness plan by subscribing NOW! 💪🔥
			</p>

			<div class="mx-auto mt-8 max-w-lg rounded-lg border-2 border-red-600 bg-white p-6 shadow-lg">
				<h2 class="mb-4 text-3xl font-bold text-red-600">Exclusive Deal:</h2>
				<p class="text-xl font-bold text-black">Subscribe for just $29.99/month!</p>
				<p class="mt-2 text-gray-800">
					Get access to premium plans, coaching, and personal tracking. Don’t miss out! ⏳
				</p>
			</div>

			<div
				class="mx-auto mt-6 max-w-lg rounded-lg border-2 border-green-500 bg-white p-4 shadow-lg"
			>
				<h2 class="mb-2 text-2xl font-bold text-red-600">What You’ll Unlock:</h2>
				<ul class="list-inside list-disc space-y-2 text-lg text-gray-800">
					<li>🔥 Personalized workout plans!</li>
					<li>🏋️ Premium exercise routines!</li>
					<li>⚡ Real-time fitness tracking!</li>
				</ul>
			</div>

			<button
				class="mt-8 rounded-full bg-red-600 px-6 py-3 text-xl font-bold text-white shadow-lg hover:bg-red-700"
			>
				SUBSCRIBE NOW! 💳
			</button>
		</div>
	{:else if adCopyVersion === 4}
		<div
			class="fixed inset-0 z-50 overflow-hidden border-4 border-red-600 bg-blue-400 p-8 text-center font-sans"
		>
			<button class="close-btn" on:click={closePopup}>×</button>
			<h1 class="text-4xl font-bold text-red-600">DON’T FALL BEHIND IN YOUR STUDIES!</h1>
			<img src="/education.webp" alt="ad" />
			<p class="mt-4 text-lg text-gray-800">Unlock unlimited courses by upgrading today! 📚💡</p>

			<div class="mx-auto mt-8 max-w-lg rounded-lg border-2 border-red-600 bg-white p-6 shadow-lg">
				<h2 class="mb-4 text-3xl font-bold text-red-600">Limited-Time Offer:</h2>
				<p class="text-xl font-bold text-black">Upgrade for just $49.99/year!</p>
				<p class="mt-2 text-gray-800">
					Gain access to premium lessons, quizzes, and expert tutoring. Offer ends soon! ⏳
				</p>
			</div>

			<div class="mx-auto mt-6 max-w-lg rounded-lg border-2 border-blue-500 bg-white p-4 shadow-lg">
				<h2 class="mb-2 text-2xl font-bold text-red-600">Unlock Your Future:</h2>
				<ul class="list-inside list-disc space-y-2 text-lg text-gray-800">
					<li>🔥 Exclusive study materials!</li>
					<li>💡 Advanced tutoring options!</li>
					<li>⚡ Priority access to new courses!</li>
				</ul>
			</div>

			<button
				class="mt-8 rounded-full bg-red-600 px-6 py-3 text-xl font-bold text-white shadow-lg hover:bg-red-700"
			>
				UPGRADE NOW! 💳
			</button>
		</div>
	{:else if adCopyVersion === 5}
		<div
			class="fixed inset-0 z-50 overflow-hidden border-4 border-red-600 bg-purple-400 p-8 text-center font-sans"
		>
			<button class="close-btn" on:click={closePopup}>×</button>
			<h1 class="text-4xl font-bold text-red-600">YOUR NEXT BIG INVESTMENT AWAITS!</h1>
			<img src="/crypto.webp" alt="ad" />
			<p class="mt-4 text-lg text-gray-800">
				Start investing in crypto now! Get rich with minimal effort! 💸🚀
			</p>

			<div class="mx-auto mt-8 max-w-lg rounded-lg border-2 border-red-600 bg-white p-6 shadow-lg">
				<h2 class="mb-4 text-3xl font-bold text-red-600">Exclusive Crypto Deal:</h2>
				<p class="text-xl font-bold text-black">Invest now for only $500 to start!</p>
				<p class="mt-2 text-gray-800">
					Unlock huge returns, exclusive coins, and early access to hot new investments! ⏳
				</p>
			</div>

			<div
				class="mx-auto mt-6 max-w-lg rounded-lg border-2 border-purple-500 bg-white p-4 shadow-lg"
			>
				<h2 class="mb-2 text-2xl font-bold text-red-600">What You’ll Get:</h2>
				<ul class="list-inside list-disc space-y-2 text-lg text-gray-800">
					<li>🔥 Early access to new cryptocurrencies!</li>
					<li>💰 Double your investment in weeks!</li>
					<li>⚡ VIP investor status and perks!</li>
				</ul>
			</div>

			<button
				class="mt-8 rounded-full bg-red-600 px-6 py-3 text-xl font-bold text-white shadow-lg hover:bg-red-700"
			>
				INVEST NOW! 💳
			</button>
		</div>
	{/if}
{/if}

<style>
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
	}

	.popup {
		background-color: white;
		padding: 2rem;
		border-radius: 10px;
		max-width: 400px;
		text-align: center;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		animation: popIn 0.3s ease-in-out;
	}

	@keyframes popIn {
		0% {
			transform: scale(0.8);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	h2 {
		margin: 0;
		font-size: 1.5rem;
	}

	p {
		margin: 1rem 0;
	}

	button {
		background-color: #0077cc;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1rem;
	}

	button:hover {
		background-color: #005fa3;
	}

	.close-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background-color: transparent;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.close-btn:hover {
		color: #ff0000;
	}
</style>
