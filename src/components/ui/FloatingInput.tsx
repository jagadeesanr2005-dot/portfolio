import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

interface BaseProps {
  label: string;
  error?: string;
}

interface InputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
  as?: "input";
}

interface TextareaProps extends BaseProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea";
}

export function FloatingInput(props: InputProps | TextareaProps) {
  const id = useId();
  const { label, error, as } = props;

  const fieldClass = `peer w-full bg-transparent border rounded-xl px-4 pt-6 pb-2 text-ink placeholder-transparent outline-none transition-colors ${
    error ? "border-red-400/60 focus:border-red-400" : "border-white/10 focus:border-primary"
  }`;

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={id}
          placeholder={label}
          rows={5}
          className={`${fieldClass} resize-none`}
          {...(({ label: _l, error: _e, as: _a, ...rest }) => rest)(props as TextareaProps)}
        />
      ) : (
        <input
          id={id}
          placeholder={label}
          className={fieldClass}
          {...(({ label: _l, error: _e, as: _a, ...rest }) => rest)(props as InputProps)}
        />
      )}
      <label
        htmlFor={id}
        className="absolute left-4 top-4 text-muted text-sm transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted
          peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
      >
        {label}
      </label>
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}
