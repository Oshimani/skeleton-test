<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cva, type VariantProps } from 'class-variance-authority';
	import { twMerge } from 'tailwind-merge';
	import { compoundVariants } from './design-system.js';

	const buttonVariants = cva(['btn'], {
		variants: {
			intent: {
				primary: null,
				secondary: null,
				tertiary: null,
				success: null,
				warning: null,
				error: null,
				surface: null
			},
			variant: {
				filled: null,
				ghost: null,
				soft: null,
				ringed: null,
				glass: null
			},
			size: {
				sm: 'btn-sm',
				md: 'btn-md',
				lg: 'btn-lg',
				xl: 'btn-xl'
			}
		},
		compoundVariants
	});

	interface Props {
		intent?: VariantProps<typeof buttonVariants>['intent'];
		variant?: VariantProps<typeof buttonVariants>['variant'];
		size?: VariantProps<typeof buttonVariants>['size'];
		children: Snippet;
	}

	let { intent = 'primary', variant = 'filled', size = 'md', children }: Props = $props();
</script>

<button class={twMerge(buttonVariants({ intent, variant, size }))}>
	{@render children()}
</button>
