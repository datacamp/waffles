import React from 'react';

import ErrorNotification from './error-notification';
import { ErrorBoundaryProvider } from './error-boundary-context';

type ErrorBoundaryProps = {
  /* Handler called when there has been error. Useful for logging errors. */
  onError?: (error: Error, info: { componentStack: string }) => void;
  /* Handler called just before `ErrorBoundary` resets its internal state. Useful for more advanced error recovery strategies. */
  onReset?: () => void;
  /* Custom error notification component. If feasible use `useError` hook to access `error` and `onReset` props. */
  fallback?: JSX.Element;
  /* The content to render when there are no errors. If there is an error it will be caught and handled gracefully. */
  children: React.ReactNode;
};

type ErrorBoundaryState = { error: Error | null };

const initialState = { error: null };

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  state = initialState;

  reset = () => {
    this.props.onReset?.();
    this.setState(initialState);
  };

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.props.onError?.(error, info);
  }

  render() {
    const { error } = this.state;

    if (error !== null) {
      if (this.props.fallback) {
        return (
          <ErrorBoundaryProvider error={error} onReset={this.reset}>
            {this.props.fallback}
          </ErrorBoundaryProvider>
        );
      }
      return <ErrorNotification error={error} onReset={this.reset} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
