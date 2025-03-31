import { movies } from '../data';

interface MovieDetailProps {
  params: {
    id: string;
  };
}

export default function MovieDetail({ params }: MovieDetailProps) {
  const movie = movies.find((m) => m.id === params.id);

  if (!movie) return <div style={{ padding: '2rem' }}>영화를 찾을 수 없습니다.</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <img src={movie.thumbnail} alt={movie.title} style={{ width: '100%', borderRadius: '8px' }} />
      <h1 style={{ fontSize: '2rem', marginTop: '1rem' }}>{movie.title}</h1>
      <p style={{ marginTop: '1rem' }}>{movie.description}</p>
    </div>
  );
}
