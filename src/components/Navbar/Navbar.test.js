import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('demo test', () => {
    render(<Navbar />);
    const demoText = screen.getByText('pricing', { exact: false });
    expect(demoText).toBeInTheDocument();
});
