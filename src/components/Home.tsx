import { useAppState } from '../state/state';

export default function Home() {
  const setActivePage = useAppState((s) => s.setActivePage);
  return (
    <div>
      <h1>Home page</h1>
      <button type="submit" onClick={() => setActivePage('instructions')}>
        Go to instructions
      </button>
    </div>
  );
}
