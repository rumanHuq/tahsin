import { useAppState } from './state/state';

export default function App() {
  const ActivePage = useAppState((s) => s.activePage);
  return <ActivePage></ActivePage>;
}
