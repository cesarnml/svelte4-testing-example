import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import HomePage from './+page.svelte';

describe('HomePage', () => {
	it('renders', async () => {
		render(HomePage);
		const header = screen.getByRole('heading', { name: /sveltekit/i });
		expect(header).toBeInTheDocument();
	});
});
