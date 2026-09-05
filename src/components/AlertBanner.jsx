export default function AlertBanner({ type = "error", children }) {
  if (!children) return null;
  return (
    <div className={type === "error" ? "sa-error" : "sa-success"} role="status">
      {children}
    </div>
  );
}
