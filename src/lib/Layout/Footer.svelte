<script lang="ts">
	import FollowUsBtn from "$lib/Layout/FollowUsBtn.svelte";		
</script>

<footer class="footer px-10 py-4 bg-base-300 text-base-content ">
	<div class="flex flex-row place-content-evenly place-items-center w-full">
		<div class="flex flex-col place-content-center place-items-center">
			<span class="footer-title">Address</span> 		
			<p>
				Yale NLP Lab at Yale University.
				<br/>
				address TODO
			</p>
		</div> 
		<div class="flex flex-col place-content-center place-items-center">
			<span class="footer-title">Social</span> 
			<div class="grid grid-flow-col gap-4 ">
				<FollowUsBtn outlined={false}/>		
			</div>
		</div>
	</div>		
</footer>
