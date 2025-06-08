export const ErrorAlert = ({ error }) => (
  <div className="error-alert">
    ⚠️ {error.message || "API request failed"}
  </div>
);