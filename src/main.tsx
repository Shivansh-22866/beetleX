import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryProvider } from './providers/query-provider.tsx';

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");

    await worker.start({
      onUnhandledRequest: "warn",
    });
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!)
    .render(
      <StrictMode>
        <QueryProvider>
          <App/>
        </QueryProvider>
      </StrictMode>
    );
});