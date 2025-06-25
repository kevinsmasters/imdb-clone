import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieSearch from './MovieSearch';

describe('MovieSearch', () => {
  it('renders a search input', () => {
    render(<MovieSearch onSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/search movies/i)).toBeInTheDocument();
  });

  it('calls onSearch with input value when form is submitted', async () => {
    const onSearch = vi.fn();
    render(<MovieSearch onSearch={onSearch} />);

    await userEvent.type(screen.getByRole('textbox'), 'Inception');
    await userEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(onSearch).toHaveBeenCalledWith('Inception');
  });
});
