export default function FormField({ id, label, hint, otp, ...inputProps }) {
  return (
    <div className="sa-field">
      <label className="sa-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        className={`sa-input${otp ? " sa-input--otp" : ""}`}
        {...inputProps}
      />
      {hint && <p className="sa-hint">{hint}</p>}
    </div>
  );
}
