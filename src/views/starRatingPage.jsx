import { useLocation } from 'react-router-dom';

export default function StarRating() {
  const location = useLocation();

  return (
    <div>
      <h1>Informações da Localização</h1>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
      <p>State: {JSON.stringify(location.state)}</p>
      <p>Key: {location.key}</p>
    </div>
  );
}
