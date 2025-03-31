import Link from 'next/link';
import { movies } from './data';
import styles from './page.module.css';

export default function MovieListPage() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`} className={styles.card}>
            <img src={movie.thumbnail} alt={movie.title} className={styles.thumbnail} />
            <div className={styles.cardBody}>
              <h2 className={styles.title}>{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
