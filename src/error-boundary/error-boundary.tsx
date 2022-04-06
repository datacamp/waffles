import React from 'react';

import ErrorNotification from './error-notification';

type ErrorBoundaryProps = {
  /* Handler called when there has been error. Useful for logging errors. */
  onError?: (error: Error, info: { componentStack: string }) => void;
  /* Handler called just before `ErrorBoundary` resets its internal state. Useful for more advanced error recovery strategies. */
  onReset?: () => void;
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
      return <ErrorNotification error={error} onReset={this.reset} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
