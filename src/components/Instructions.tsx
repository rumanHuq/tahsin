import { useAppState } from '../state/state';

export default function Instructions() {
  const setActivePage = useAppState((s) => s.setActivePage);
  const instructionPageNumber = useAppState((s) => s.instructionPageNumber);

  return (
    <div>
      <h1>Instructions {instructionPageNumber}</h1>
      <button type="submit" onClick={() => setActivePage('recommendations')}>
        Go to Recommendations
      </button>
    </div>
  );
}
