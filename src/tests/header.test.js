import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

test('renders component and checks for specific content', () => {
  render(<Header />);

  // Verifica se o componente está sendo renderizado corretamente
  const component = screen.getByTestId('carroussel');
  expect(component).toBeInTheDocument();

  // Verifica se determinado conteúdo está presente no componente
  const specificContent = screen.getByText('Solving Problems with Clean Code');
  expect(specificContent).toBeInTheDocument();
});
