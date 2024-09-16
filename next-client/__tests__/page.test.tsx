import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react'; // Import the 'screen' object
import Page from '../src/app/page';

test('Page', () => {
    render (<Page />);
    expect(
        screen.getByRole('heading', { level:2, name: 'Docs'})
    ).toBeDefined();
})