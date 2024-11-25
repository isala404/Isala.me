<script lang="ts">
	interface Props {
		title: string;
		description: string;
		image: string;
		link: string;
		align: string;
	}

	let { title, description, image, link, align }: Props = $props();
</script>

<div
	class="border text-card-foreground bg-white rounded-xl shadow-md overflow-hidden max-w-[26rem] text-left mix-h-40 flex flex-row m-4"
>
	<div class="max-w-40">
		<img class={'max-w-40 object-cover w-96 h-full ' + align} src={image} alt="Article thumbnail" />
	</div>
	<div class="p-2 flex flex-col max-w-[19rem]">
		<h2 class="block mt-1 text-lg leading-tight font-medium text-black">{title}</h2>
		<p class="text-gray-500 text-sm mt-1 text-justify mr-2">
			{description}
		</p>
		<div class="w-full text-right mt-auto">
			<a class="text-blue-500 text-sm font-medium hover:underline" href={link} target="_blank">
				Read more
			</a>
		</div>
	</div>
</div>
