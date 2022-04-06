import React from 'react';

import ErrorNotification from './error-notification';

type ErrorBoundaryProps = {
  onError?: (error: Error, info: { componentStack: string }) => void;
  onReset?: () => void;
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
