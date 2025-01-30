export const intents = [
	'primary',
	'secondary',
	'tertiary',
	'success',
	'warning',
	'error',
	'surface'
] as const;
export type Intent = (typeof intents)[number];

export const variants = ['filled', 'ghost', 'soft', 'ringed', 'glass'] as const;
export type Variant = (typeof variants)[number];

export const sizes = ['sm', 'md', 'lg', 'xl'] as const;
export type Size = (typeof sizes)[number];

export const compoundVariants = intents.flatMap((intent) =>
	variants.map((variant) => ({ intent, variant, class: `variant-${variant}-${intent}` }))
);
